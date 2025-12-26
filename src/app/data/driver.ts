export type Driver = {
  id: number;
  name: string;
  price: string;
  oldPrice?: string;
  note?: string;
  image: string;
  images: string[];
};

const driversData: Driver[] = [];
