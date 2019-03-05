# js-platform

## [!!!] The source code of this package is on [https://github.com/docomodigital/js-utils](https://github.com/docomodigital/js-utils), this repository will be removed asap

[![Build Status](https://travis-ci.com/docomodigital/js-platform.svg?branch=master)](https://travis-ci.com/docomodigital/js-platform)
[![Coverage Status](https://coveralls.io/repos/github/docomodigital/js-platform/badge.svg?branch=master)](https://coveralls.io/github/docomodigital/js-platform?branch=master)
[![npm version](https://badge.fury.io/js/%40docomodigital%2Fjs-platform.svg)](https://badge.fury.io/js/%40docomodigital%2Fjs-platform)
[![Greenkeeper badge](https://badges.greenkeeper.io/docomodigital/js-platform.svg)](https://greenkeeper.io/)

Allow to get the current user agent on your device.

## Usage
```javascript
import { JsPlatform } from 'js-platform';

// create a JsPlatform new instance
const Platform = new JsPlatform();

// Get the current user agent

// Print: "Hello, I'm a ios/android/desktop device!"
console.log("Hello, I'm a " + Platform.OS + " device!");  
```

## Installation

### NPM
```bash
npm install --save @docomodigital/js-platform
```

## Documentation

To read documentation, go to:

[http://docomodigital.github.io/js-platform/latest](http://docomodigital.github.io/js-platform/latest)

or run the following command insite the js-platform folder: 
```bash
npm run doc:open
```


