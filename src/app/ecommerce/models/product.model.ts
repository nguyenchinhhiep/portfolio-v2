export class Product {
    id: number;
    name: string;
    price: string;
    photos: Array<any>;
    description: string;

    constructor(id: number, name: string, price: string, photos: Array<any>, description: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.photos = photos;
        this.description = description;
    }
}