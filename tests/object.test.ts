describe('Object', () => {
    it('should support in typescript', () => {
        const person: { id: string; name: string } = {
            id: '1',
            name: 'Ahmad Lutfi Rizki Patria',
        };

        console.info(person);

        person.id = '2';
        person.name = 'Laila Indah Agustin';

        // person.age = 19; // error

        console.info(person);
    });
});
