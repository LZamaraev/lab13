import { Component } from '@angular/core';
import {
  MyWorker,
  MyWorkersDatabase,
  MyWorkerType,
} from './shared/worker.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Список сотрудников';
  workers: MyWorker[] = MyWorkersDatabase;
  myWorkerType = MyWorkerType;

  getByType(type: number) {
    return this.workers.filter((worker) => worker.type === type);
  }

  onDeleteById(id: number) {
    let index = this.workers.findIndex((worker) => worker.id === id);
    if (index !== -1) {
      this.workers.splice(index, 1);
    }
  }

  onAddWorker(worker) {
    let id =
      this.workers.length > 0
        ? this.workers[this.workers.length - 1].id + 1
        : 0;
    worker.id = id;
    this.workers.push(worker);
  }
  onEditWorker = (worker) => {
    const index = this.workers.map((w, index)=>{
      return w.id === +worker.id ? index : -1;
    })[0]
    this.workers[index].name = worker.name;
    this.workers[index].surname = worker.surname;
    this.workers[index].type = worker.type;
    this.workers[index].phone = worker.phone;
  }
}
