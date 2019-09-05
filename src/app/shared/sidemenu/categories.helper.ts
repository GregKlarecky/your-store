export interface ICategory {
  name: string;
  id: number;
  children?: number[];
  parent?: number;
}

export const categories: ICategory[] = [
  { name: "root", id: 0, children: [1, 6, 11, 16, 21] },
  { name: "women", id: 1, children: [2, 3, 4], parent: 0 },
  { name: "men", id: 6, children: [7, 8, 9, 10], parent: 0 },
  { name: "bags", id: 11, parent: 0 },
  { name: "jewellery", id: 16, children: [12, 13], parent: 0 },
  { name: "outlet", id: 21, parent: 0 },
  { name: "shoes", id: 2, children: [22, 23, 24, 25], parent: 1 },
  { name: "boots", id: 22, parent: 2 },
  { name: "loafers", id: 23, parent: 2 },
  { name: "ballet flats", id: 24, parent: 2 },
  { name: "high heels", id: 25, parent: 2 },
  { name: "accessories", id: 3, children: [27, 28, 29, 30], parent: 1 },
  { name: "wash bags", id: 27, parent: 3 },
  { name: "scarfs", id: 28, parent: 3 },
  { name: "wallets", id: 29, parent: 3 },
  { name: "belts", id: 30, parent: 3 },
  // { name: "brands", id: 4, children: [40, 41, 42, 43], parent: 1 },
  { name: "gino rossi", id: 40, parent: 4 },
  { name: "panama jack", id: 41, parent: 4 },
  { name: "geox", id: 41, parent: 4 },
  { name: "gues", id: 41, parent: 4 },
  { name: "shoes", id: 7, children: [51, 52, 53, 54], parent: 6 },
  { name: "brogue", id: 51, parent: 7 },
  { name: "booties", id: 52, parent: 7 },
  { name: "loafers", id: 53, parent: 7 },
  { name: "sandals", id: 54, parent: 7 },
  { name: "accessories", id: 8, children: [27, 28, 29, 30], parent: 6 },
  { name: "bags", id: 27, parent: 8 },
  { name: "wallets", id: 28, parent: 8 },
  { name: "suitcases", id: 29, parent: 8 },
  { name: "belts", id: 30, parent: 8 },
  // { name: "brands", id: 9, children: [32, 33, 34], parent: 6 },
  { name: "clarks", id: 32, parent: 9 },
  { name: "gino rossi", id: 33, parent: 9 },
  { name: "wojas", id: 34, parent: 9 },
  { name: "men", id: 12, parent: 16 },
  { name: "women", id: 13, parent: 16 }
];
