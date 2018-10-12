import { JsPlatform as Platform } from './';

describe('Platform', () => {
    const iPhone6 = 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1';
    const GalaxyS5 = 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Mobile Safari/537.36';
    let platformInstance = null;

    it('Platform.OS android', () => {
        platformInstance = new Platform(GalaxyS5);
        expect(platformInstance.OS).toEqual('android');
    });

    it('Platform.OS ios', () => {
        platformInstance = new Platform(iPhone6);
        expect(platformInstance.OS).toEqual('ios');
    });

    it('Platform.OS UserAgent', () => {
        platformInstance = new Platform();
        expect(platformInstance.OS).toEqual('desktop');
    });
});