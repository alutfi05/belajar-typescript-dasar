describe('Union Type', () => {
    it('should support in typescript', () => {
        let sample: string | number | boolean = 'Lutfi';
        console.info(sample);

        sample = 100;
        console.info(sample);

        sample = true;
        console.info(sample);

        // sample = []; // error
    });
});
