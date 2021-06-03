//defini o esquema = como é cada documento na minha coleção(colections) de tarefas
import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  //definindo propriedades da colections
  //id é gerado automaticamente pelo o mongoDB
  description: String,
  completed: Boolean,
});
