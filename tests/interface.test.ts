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
});
