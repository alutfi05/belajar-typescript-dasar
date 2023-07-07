describe('Function', () => {
    it('should support in typescript', () => {
        const sayHello = (name: string): string => {
            return `Hello ${name}`;
        };

        expect(sayHello('Lutfi')).toBe('Hello Lutfi');

        const printHello = (name: string): void => {
            console.info(`Hello ${name}`);
        };

        printHello('Lutfi');
    });
});
