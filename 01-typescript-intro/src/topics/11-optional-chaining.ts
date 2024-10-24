const passenger1: Passenger = {
  name: 'Fernando',
};

const passenger2: Passenger = {
  name: 'Melissa',
  children: ['Pepe', 'Pepon'],
};

const childrenLength = (passenger: Passenger): number => {
  const howManyChildren = passenger.children?.length || 0;

  console.log(passenger.name, howManyChildren);
  return howManyChildren;
};

childrenLength(passenger1);
childrenLength(passenger2);

interface Passenger {
  name: string;
  children?: string[];
}
