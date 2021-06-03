import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Task } from './shared/task';
import { TaskService } from './shared/task.service';
// endpoint
@Controller('tasks')
export class TasksController {
  // serviço de tarefas
  constructor(private taskService: TaskService) {}
  // endpoint
  @Get()
  async getAll(): Promise<Task[]> {
    return this.taskService.getAll();
  }

  @Get(':id')
  // vem no parametro um id e coloque o id do paramentro dentro do id: number
  // promisse é o tipo de retorno que o param manda
  async getById(@Param('id') id: string): Promise<Task> {
    return this.taskService.getById(id);
  }

  @Post()
  //vai vir do body um task do tipo Tak (classe criada)
  // promisse é o tipo de retorno que o body manda
  async create(@Body() task: Task): Promise<Task> {
    return this.taskService.create(task);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() task: Task): Promise<Task> {
    const taksUpdate = this.taskService.update(id, task);
    return taksUpdate;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.taskService.delete(id);
    return 'tarefa exluida com sucesso';
  }
}
