# CI setup of an Instagram Clone

Continuous Integration is an important part of the mobile development process at cLabs and we believe the best way to know if you'll be a good fit is to see some of your work first hand. As part of the Automation Engineer interview process, candidates are asked to showcase their ability in setting up and managing CI pipelines.

This repo is home to an Instagram clone, which is largely based off the work done by [Pavel Foujeu](https://twitter.com/Pavel_FFP) in [this public repo](https://github.com/Doha26/Instagram-clone). We ask that candidates follow the steps to launch the app in an iOS simulator locally then setup Continuous Integration using the service of their choice.

This takehome exercise is meant to take no more than 3 hours and is the most important part of the Mobile Automation Engineer interview process. Upon successful completion of this takehome, you will be invited to a set of final round interviews in which you will be asked to explain the thought process behind the work you submitted. If you have any issues following the below instructions for getting the app running, please do not hesitate to reach out to your Recruiting Partner. This exercise is meant to showcase your Mobile Continuous Integration skills and nothing more!

## Getting Setup

The below steps will walk you through getting the Instagram clone running on an iOS simulator on your computer. If you have any issues following these steps to getting a simulator running, please reach out to your Recruiting Partner.

### Packages and Programs to Install

#### Install Node

Install `nvm` (allows you to manage multiple versions of Node) by following the instructions here: [https://github.com/nvm-sh/nvm].

Once `nvm` is successfully installed, restart the terminal and run the following commands to install the `npm` versions that [celo-monorepo] will need:

```bash
# restart the terminal after installing nvm
nvm install 10
nvm alias default 10
```

#### Install Yarn

Install it using the below command:

```
npm install -g yarn
```

#### Install Xcode

[Install Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12). This is a large program and may take a bit of time if you don't already have it.

Xcode is needed to build and deploy the app. If you do not have an iOS device, Xcode can be used to emulate one.

#### Install Xcode CLI

Install the Xcode command line tools:

```bash
xcode-select --install
```

#### Install Cocopods

```bash
gem install cocoapods
```

If your machine does not recognize the `gem` command, you may need to [download Ruby](https://www.ruby-lang.org/en/documentation/installation/) first.

#### Install Apple Sim Utils

```
brew tap wix/brew
brew install wix/brew/applesimutils
```

### Running the App

Open your terminal and navigate to where you'd like this repo to be downloaded. You can clone the repo by typing the following into the command line:

```
git clone _url_of_this_project_
```

Navigate into the directory and install the necessary dependencies by entering the following into the command line:

```
yarn run setup
```

Run the simulator using the below command. This should open a new terminal window with the app bundler as well as a new window with an iOS simulator. The app should take about 2 mins to boot up.

```
yarn run ios
```

You should be all set with an Instagram clone running on an iOS simulator. If you've had any issues completing the setup process, please get in touch with your Recruiting Partner before continuing.

## Tasks

### Continuous Integration

- Setup Continuous Integration for this project using the service of your choice (GitHub Actions, CircleCI, Bitrise, App Center, etc)
  - it should run the End-to-End test (`yarn run test`)
  - it should build a release IPA (developer signing or skipping code signing is fine) and store it as an artifact for later download
- Commit changes to the git repository that we provided to you
- Open a Pull Request (PR) against this project with your proposed changes

### Submission

Upon completion, please email your Recruiting Partner with an email titled _[Your last name] - cLabs Automation Engineer Takehome_ and the following attachments:

- The link to your Pull Request on GitHub with your proposed CI setup
- The link to a successful run of your CI setup on your chosen CI service (if it can't be made publicly accessibly please let us know and send us an invite)
