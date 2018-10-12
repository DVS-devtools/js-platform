import Platform from './index';

test('Platform should get Platform', () => {
    var platform = Platform.OS;

    expect(platform).toBe('desktop');
});
