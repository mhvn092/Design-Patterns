import { Builder } from "./builder";
import { DuperAnimal } from "./Decorator";
import { PlaneFactory } from "./factory";
import { BlackFriday } from "./observer";
import { proxy } from "./proxy";
import { Singletonexample } from "./singleton";
import { Strategy } from "./strategy";

console.log('factory Example');
PlaneFactory();
console.log('singleton Example');
Singletonexample();
console.log('Observer Example');
BlackFriday();
console.log('proxy Example');
proxy();
console.log('builder Example');
Builder();
console.log('Decorator Example');
DuperAnimal();
console.log('strategy Example');
Strategy();
