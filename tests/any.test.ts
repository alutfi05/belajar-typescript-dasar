describe('Any', () => {
    it('should support in typescript', () => {
        const person: any = {
            id: 1,
            name: 'Ahmad Lutfi Rizki Patria',
            age: 22,
        };

        person.age = 31;
        person.address = 'Indonesia';

        console.info(person);
    });
});
