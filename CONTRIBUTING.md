# Contribution Guide

This project is open to public contributions. Here's what you need to get started:

* [NodeJS](https://nodejs.org/) v10.15 or later
* [Yarn](https://yarnpkg.com/) v1.17 or later
* [Google Chrome](https://www.google.com/chrome/) or [Chromium](https://www.chromium.org/)

If you've not developed a Chrome extension before, you can read [Google's official documentation](https://developer.chrome.com/extensions/overview)
on extension development

## Getting started

* Fork this repository and clone it locally
* Run `yarn install` to install all development dependencies.
* Make your changes
* Use `yarn lint` to ensure your code matches the formatting rules
* Use `yarn dev` or `yarn prod` to build the extension
* Push your changes and raise a pull request

Once you've pushed a change, it will be merged into the `master` branch if approved and all CI jobs have passed

## Testing changes locally

In order to use the development version of the extension, you'll need to install it in Chrome as an unpacked extension. You can
read how to do this in [Google's getting started guide](https://developer.chrome.com/extensions/getstarted) for developing extensions.

You should use `yarn dev` to build the extension in development mode, this will allow you to add breakpoints via Chrome's dev console and step
through the extension code.
