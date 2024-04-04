class Car {
    n: string;
    c: string;
    m: number;
    info: () => string;
    
    constructor(name: string, color: string, model: number) {
        this.n = name;
        this.c = color;
        this.m = model;
        this.info = () => {
            return 'car name is ' + this.n + ' ,model is ' + this.m + ' , and color is ' + this.c;
        }
    }
    taxi(){
        return 'car name is ' + this.n + ' ,model is ' + this.m + ' , and color is ' + this.c;
    }
}

let carOne = new Car('bmw', 'red', 2022)