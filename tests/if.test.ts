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
});
