import { Seller } from '../src/seller';

describe('Interface', () => {
    it('should support in typescript', () => {
        const seller: Seller = {
            id: 1,
            name: 'Toko XYZ',
            nib: '123123123',
            npwp: '456456456',
        };

        seller.name = 'Toko Lutfi';
        // seller.nib = '789789789'; // error

        console.info(seller);
    });

    it('should support function interface', () => {
        interface AddFunction {
            (value1: number, value2: number): number;
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        };

        expect(add(2, 2)).toBe(4);
    });

    it('should be support indexable interface', () => {
        interface StringArray {
            [index: number]: string;
        }

        const names: StringArray = ['Ahmad', 'Lutfi', 'Rizki', 'Patria'];
        console.info(names);
    });

    it('should support indexable interface for non number index', () => {
        interface StringDictionary {
            [key: string]: string;
        }

        const dictionary: StringDictionary = {
            name: 'Lutfi',
            address: 'Depok',
        };

        expect(dictionary['name']).toBe('Lutfi');
        expect(dictionary['address']).toBe('Depok');
    });
});
