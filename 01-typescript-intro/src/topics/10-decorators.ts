function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = 'New Prop';
    hello = 'Hello';
  };
}

@classDecorator
class SuperClass {
  public myProperty: string = 'My Property';

  print() {
    console.log('Hola Mundo!');
  }
}

console.log(SuperClass);

const prop = new SuperClass();
console.log(prop);
