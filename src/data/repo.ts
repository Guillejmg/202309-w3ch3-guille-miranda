import { Pet } from "../model/pets";

export const repo = () => {
  const data: Pet[] = [
    {
      id: crypto.randomUUID(),
      name: 'django',
      breed: 'chucho',
      isAdopted: true,
      owner: 'Guille',
    },
    {
      id: crypto.randomUUID(),
      name: 'loba',
      breed: 'pastor aleman',
      isAdopted: true,
      owner: 'Vega',
    },
    {
      id: crypto.randomUUID(),
      name: 'iñigo',
      breed: 'tekkel',
      isAdopted: false,
      owner: 'Silia',
    },
  ];
  return data;
};
