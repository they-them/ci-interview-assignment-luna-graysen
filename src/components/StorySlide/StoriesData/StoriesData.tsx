import React from "react";
import { Animated, Dimensions, Platform, StyleSheet, View } from "react-native";
import SlideItem from "~/components/StorySlide/SlideItem/SlideItem";
import stories from "~/utils/datas/stories";

const { width } = Dimensions.get("window");
const perspective = width;
const angle = Math.atan(perspective / (width / 2));
const ratio = Platform.OS === "ios" ? 2 : 1.2;

export default class StoriesData extends React.Component {
  stories: any = [];

  state = {
    x: new Animated.Value(0),
    ready: true,
  };

  constructor(props: any) {
    super(props);
    const _stories = stories;
    this.stories = _stories.map(() => React.createRef());
  }

  async componentDidMount() {
    const { x } = this.state;
    await x.addListener(() =>
      this.stories.forEach((story: any, index: any) => {
        const offset = index * width;
        const inputRange = [offset - width, offset + width];
        const translateX = x
          .interpolate({
            inputRange,
            outputRange: [width / ratio, -width / ratio],
            extrapolate: "clamp",
          })
          .__getValue();

        const rotateY = x
          .interpolate({
            inputRange,
            outputRange: [`${angle}rad`, `-${angle}rad`],
            extrapolate: "clamp",
          })
          .__getValue();

        const parsed = parseFloat(
          rotateY.substr(0, rotateY.indexOf("rad")),
          10
        );
        const alpha = Math.abs(parsed);
        const gamma = angle - alpha;
        const beta = Math.PI - alpha - gamma;
        const w = width / 2 - ((width / 2) * Math.sin(gamma)) / Math.sin(beta);
        const translateX2 = parsed > 0 ? w : -w;

        const style = {
          transform: [
            { perspective },
            { translateX },
            { rotateY },
            { translateX: translateX2 },
          ],
        };
        story.current.setNativeProps({ style });
      })
    );
  }

  render() {
    const { x } = this.state;
    // @ts-ignore
    const { footerComponent, closeStory } = this.props;

    return (
      <View style={styles.container}>
        <Animated.ScrollView
          ref={this.scroll}
          style={StyleSheet.absoluteFillObject}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          snapToInterval={width}
          contentContainerStyle={{ width: width * stories.length }}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { x },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          decelerationRate={0.99}
          horizontal={true}
        >
          {stories.map((story: any, i: any) => (
            <Animated.View ref={this.stories[i]} key={story.id}>
              <SlideItem
                closeStory={closeStory}
                footerComponent={footerComponent}
                {...{ story }}
              />
            </Animated.View>
          ))}
        </Animated.ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
