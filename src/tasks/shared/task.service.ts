import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './task';
import { Model } from 'mongoose';
//pode se criar dois controler dentro de tasks e um serivço pode compartilhar coisas para os dois controllers
@Injectable()
export class TaskService {
  //integração com o mondoDB
  //injetando shchema de tarefas que eu criei
  //taskmodel = integra como banco de dados e faz a busca dos dados
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  // crud tem 4 operações
  async getAll() {
    //pegar tudo que esta no banco de dados
    return await this.taskModel.find().exec();
  }
  //filtrar tarefa pelo o id e retorna id
  //se o id do array for o mesmo id do incluido na barra de endereço retorne o objeto
  getById(id: string) {
    const task = this.taskModel.findById(id).exec();
    return task;
  }

  async create(task: Task) {
    //crio a tarefa
    const createdTask = new this.taskModel(task);
    //sava no banco de dados / ja devolve o cara que foi salvo
    return await createdTask.save();
  }
  async update(id: string, task: Task) {
    // atuaizando passando o id e os novos dados da tarefae executa
    await this.taskModel.updateOne({ _id: id }, task).exec();
    // retorno para a tela // devolver o cara que foi salvo completo
    return this.getById(id);
  }

  async delete(id: string) {
    // deleta um que tem esse id la no banco de dados
    return await this.taskModel.deleteOne({ _id: id }).exec();
  }
}
