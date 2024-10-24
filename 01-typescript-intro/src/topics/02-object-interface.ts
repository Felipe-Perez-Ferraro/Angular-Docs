const skills: string[] = ['Bash', 'Counter', 'Healing'];

const strider: Character = {
  name: 'Strider',
  hp: 100,
  skills: ['Bash', 'Counter'],
};

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;
}

strider.hometown = 'Riverdale'

console.table(strider)