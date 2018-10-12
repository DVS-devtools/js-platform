/**
 * @class JsPlatform
 * @description JsPlatform is a library that allow you to get platform wherever you are
 * (iphone, ipad, android or desktop);
 * @param {String} uaString user agent string
 *
 * @example
 * const Platform = new JsPlatform();
 *
 * switch(Platform.OS){
 *  case 'android':
 *      console.log("I'm an android! ");
 *      break;
 *  case 'ios':
 *      console.log("I'm an ios! ");
 *      break;
 *  case 'desktop':
 *      console.log("I'm a desktop! ");
 *      break;
 * }
 */

export class JsPlatform {
    constructor(uaString = window.navigator.userAgent) {
        this.uaString = uaString;
    }

    /**
     * Get the user agent string
     * @return {String} user agent string.
     * @example
     * const myUserAgent = JsPlatform.OS;
     */
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

export default new JsPlatform();
