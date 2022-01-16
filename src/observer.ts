interface IObserver {
    sendEmail(): void
}

class Sale {
    private observers: IObserver[]

    constructor() {
        this.observers = []
    }

    addObserver(ob: IObserver) {
        this.observers.push(ob)
    }

    notifyObservers() {
        console.log('Notifying clients:')
        this.observers.map((observer) => observer.sendEmail())
    }
}

class Client implements IObserver {
    name: string
    email: string

    constructor(name: string, email: string) {
        this.name = name
        this.email = email
    }

    sendEmail(): void {
        console.log(`Sending a mail to ${this.name}`)
    }

}

export function BlackFriday(){
const blackFriday = new Sale()
const clientA = new Client('John', 'john@email.com')
const clientB = new Client('Jessica', 'jessica@email.com')
const clientC = new Client('George', 'george@email.com')
blackFriday.addObserver(clientA)
blackFriday.addObserver(clientB)
blackFriday.addObserver(clientC)
blackFriday.notifyObservers()
};