interface Plane {
    fly(): void;
    land(): void;
}
class AirbusPlane implements Plane {
    name: string;
    constructor() {
        this.name = 'AirBus';
    }
    land(): void {
        console.log( `${this.name} is Landing`);
    }

    fly(): void {
        console.log(`${this.name} is Flying ***`);
    }
}
class BoeingPlane implements Plane {

    constructor() {
        this.name = 'Boeing';
    }
    name: string;


    land(): void {
        console.log(`${this.name} is Landing`);
    }

    fly(): void {
       console.log(`${this.name} is Flying ***`);
    }
}
export function PlaneFactory(){
    let r = new AirbusPlane;
    r.fly();
    r.land();

    let s = new BoeingPlane;
    s.fly();
    s.land();
}
