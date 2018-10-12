
# js-platform
[![Greenkeeper badge](https://badges.greenkeeper.io/docomodigital/js-platform.svg)](https://greenkeeper.io/)

The JsPlatform library allows you to get the current user agent on your device.

## Usage
```javascript
// create a JsPlatform new instance
const Platform = new JsPlatform();

// Get the current user agent

// Print: "Hello, I'm a ios/android/desktop device!"
console.log("Hello, I'm a " + Platform.OS + " device!");  
```

## Installation

### NPM
```bash
npm install --save js-platform
```

## Documentation

To read documentation, go to:

[http://docomodigital.github.io/js-platform/latest](http://docomodigital.github.io/js-platform/latest)

or run the following command insite the js-platform folder: 
```bash
npm run doc:open
```


