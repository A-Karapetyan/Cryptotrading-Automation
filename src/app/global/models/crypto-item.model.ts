export class CryptoItemModel {
    name: string;
    image: string;
    price: number = 0;
    isActive: boolean = false;
    id: number;
    histories: Array<{date: string; price: number}> = [];
}