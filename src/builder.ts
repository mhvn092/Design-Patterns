class UserBuilder {
    name: string;
    age: number;
    phone: string;
    address: string;

    constructor(name: string) {
        this.name = name;
    }
    setAge(value: number): UserBuilder {
        this.age = value;
        return this;
    }

    setPhone(value: string): UserBuilder {
        this.phone = value;
        return this;
    }

    setAddress(value: string): UserBuilder {
        this.address = value;
        return this;
    }
    build(): User {
        return new User(this);
    }
}

export class User {
    name: string;
    age: number;
    phone: string;
    address: string;

    constructor(builder: UserBuilder) {
        this.name = builder.name;
        this.age = builder.age;
        this.phone = builder.phone;
        this.address = builder.address
    }

}

export function Builder() {
    var u: User = new UserBuilder("Admin")
        .setAge(26)
        .setPhone("0123456789")
        .setAddress("india")
        .build();
    console.log(u.name + " " + u.age + " " + u.phone + " " + u.address);
}
