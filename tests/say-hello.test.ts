import { sayHello } from '../src/say-hello';

describe('sayHello', () => {
    it('should return hello lutfi', () => {
        expect(sayHello('lutfi')).toBe('Hello lutfi');
    });
});
