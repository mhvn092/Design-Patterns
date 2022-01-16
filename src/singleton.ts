class Singleton {
    private static instance: Singleton;
    private constructor() { }
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    public addition(first: number, second: number) {
        return first + second;
    }

    public substraction(first: number, second: number) {
        return first - second;
    }

    public multiplication(first: number, second: number) {
        return first * second;
    }
}


export function Singletonexample() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }

    console.log(s1.addition(10,20));
    console.log(s2.substraction(20,10));
    console.log(s1.multiplication(10, 20));
}