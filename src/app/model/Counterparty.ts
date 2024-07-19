export class Counterparty {
    id: string;
    name: string;
    address: string;
    inn: string;
    kpp: string;

    constructor(id: string, name: string, inn: string, address: string, kpp: string) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.inn = inn;
        this.kpp = kpp;
    }
}