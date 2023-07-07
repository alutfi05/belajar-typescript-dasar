describe('If Statement', () => {
    it('should support in typescript', () => {
        const examValue: number = 90;

        if (examValue > 80) {
            console.info('Good');
        } else if (examValue > 60) {
            console.info('Not Bad');
        } else {
            console.info('Try Again');
        }
    });

    it('should support ternary operator', () => {
        const value: number = 80;
        const say: string = value > 75 ? 'Congratulations' : 'Try Again';

        console.info(say);
    });

    it('should support switch statement', () => {
        const sayHello = (name: string): string => {
            switch (name) {
                case 'Lutfi':
                    return 'Hi Lutfi';
                case 'Laila':
                    return 'Halo Laila Sayang';
                default:
                    return 'Hello';
            }
        };

        console.info(sayHello('Lutfi'));
        console.info(sayHello('Laila'));
        console.info(sayHello('Someone'));
    });
});
