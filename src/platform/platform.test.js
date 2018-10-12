import Platform from './index';

test('Platform should get Platform', () => {
    const platform = Platform.OS;

    expect(platform).toBe('desktop');
});

test('Platform should get Platform', () => {
    navigator.__defineGetter__('userAgent', function(){
        return 'Android' // customized user agent
    });

    const platform = Platform.OS;

    expect(platform).toBe('desktop');
});
