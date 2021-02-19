import React, { Fragment } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import SlideHeader from "~/components/StorySlide/SlideHearder/SlideHeader";

export default class SlideItem extends React.Component {
  render() {
    // @ts-ignore
    const {
      story: { source, user, avatar, id },
      footerComponent,
      closeStory,
    } = this.props;

    return (
      <Fragment>
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: source }} />
          <SlideHeader {...{ user, source, closeStory }} />
        </View>
        {footerComponent && (
          <View style={styles.footer}>{footerComponent}</View>
        )}
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: null,
    height: Dimensions.get("window").height,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
});
