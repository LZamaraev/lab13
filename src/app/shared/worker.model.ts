export interface MyWorker {
  id?: number;
  name: string;
  surname: string;
  type: number;
  phone:string;
}

export enum MyWorkerType {
  programmer,
  designer,
  copywriter,
  manager,
}

export let MyWorkersDatabase: MyWorker[] = [
  { id: 1, name: 'Иван', surname: 'Иванов', type: 0, phone: '+7 (925) 432-34-56' },
  { id: 2, name: 'Петр', surname: 'Петров', type: 1, phone: '+7 (926) 342-65-90' },
  { id: 3, name: 'Сидор', surname: 'Сидоров', type: 2, phone: '+7 (927) 234-54-78' },
  { id: 4, name: 'Василий', surname: 'Васильев', type: 3, phone: '+7 (928) 324-43-65' },
];
