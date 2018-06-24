import { observable, action, computed } from "mobx";
import TodolistItem from "./TodolistItem.json";
import * as faker from "faker";

class TodolistStore {
  @observable listItem = TodolistItem;

  @action
  // removeitemFromList = () => {
  //   this.listItem.splice(0, 1);
  // };
  addTodo = () => {
    this.listItem.push({
      id: +new Date(),
      description: faker.lorem.sentence(),
      deadline: "2017-09-10",
      done: false
    });
  };
}

const todoListInstance = new TodolistStore();

export default todoListInstance;
