function whatsMyType<T>(argument: T): T {
  return argument;
}

const imString = whatsMyType<string>('Hola Mundo');
const imNumber = whatsMyType<number>(123);
const imArray = whatsMyType<number[]>([1, 2, 3, 4]);

console.log(imString.split(' '));
console.log(imNumber.toFixed());
console.log(imArray.join('|'));
