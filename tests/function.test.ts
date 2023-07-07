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

    it('should support default value', () => {
        const sayHello = (name: string = 'Guest'): string => {
            return `Hello ${name}`;
        };

        expect(sayHello('Lutfi')).toBe('Hello Lutfi');
        expect(sayHello()).toBe('Hello Guest');
    });

    it('should support rest parameter', () => {
        const sum = (...values: number[]): number => {
            let total: number = 0;

            for (const value of values) {
                total += value;
            }

            return total;
        };

        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });

    it('should support optional parameter', () => {
        const sayHello = (firstName: string, lastName?: string): string => {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            }

            return `Hello ${firstName}`;
        };

        expect(sayHello('Lutfi')).toBe('Hello Lutfi');
        expect(sayHello('Ahmad', 'Lutfi')).toBe('Hello Ahmad Lutfi');
    });
});
