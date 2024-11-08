class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarAge(): number {
        const ThisYear = new Date().getFullYear();
        const carOld = ThisYear - this.year
        return carOld;
    }
}



