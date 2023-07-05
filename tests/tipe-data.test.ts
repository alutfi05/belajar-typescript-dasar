describe('Data type', () => {
    it('should must declare', () => {
        let name: string = 'Ahmad Lutfi Rizki Patria';
        let balance: number = 1000000;
        let isVip: boolean = true;

        console.info(name);
        console.info(balance);
        console.info(isVip);

        // name = 100; // error
        // balance = 'lutfi'; // error
        // isVip = 100; // error
    });
});
