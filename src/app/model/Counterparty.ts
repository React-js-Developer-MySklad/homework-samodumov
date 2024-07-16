export class Counterparty {
    id: number;
    name: string;
    address: string;
    inn: number;
    kpp: number;

    constructor(id: number, name: string, inn: number, address: string, kpp: number) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.inn = inn;
        this.kpp = kpp;
    }
}