function addNumbers(a: number, b: number) {
  return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`;
};

function multiply(first: number, second?: number, base: number = 2) {
  return first * base;
}

const result: number = addNumbers(2, 2);
const result2: string = addNumbersArrow(2, 2);
const multiplyResult: number = multiply(5);

console.log({ result, result2, multiplyResult });

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};

const strider: Character = {
  name: 'Strider',
  hp: 50,
  showHp() {
    console.log(`Mi hp es: ${this.hp}`)
  }
}

healCharacter(strider, 100)
strider.showHp()

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}
