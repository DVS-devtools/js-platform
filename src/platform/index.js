/**
 * @memberof JsPlatform
 * @function log
 * @description Log the given message on the console
 * @param {Object} options (see attributes below)
 * @param {String} [options.message=''] message to show
 * @returns void

 *
 * @example
 * // Log JsPlatform
 *  JsPlatform.log({
 *      message: 'hello'
 *  });
 */

/**
 * Platform.OS === 'android'
 * @class Platform
 */

export class Platform {
    constructor(uaString = window.navigator.userAgent) {
        this.uaString = uaString;
    }

    get OS() {
        const IS_IPAD = (/iPad/i).test(this.uaString);
        const IS_ANDROID = (/Android/i).test(this.uaString);

        // The Facebook app's UIWebView identifies as both an iPhone and iPad, so
        // to identify iPhones, we need to exclude iPads.
        // http://artsy.github.io/blog/2012/10/18/the-perils-of-ios-user-agent-sniffing/

        const IS_IPHONE = (/iPhone/i).test(this.uaString) && !IS_IPAD;
        const IS_IPOD = (/iPod/i).test(this.uaString);
        const IS_IOS = IS_IPHONE || IS_IPAD || IS_IPOD;

        let platform = '';

        switch (true) {
        case (IS_ANDROID):
            platform = 'android';
            return platform;
        case (IS_IOS):
            platform = 'ios';
            return platform;
        default:
            platform = 'desktop';
            return platform;
        }
    }
}

export default new Platform();
