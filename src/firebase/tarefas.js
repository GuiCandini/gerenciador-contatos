//O propósito deste arquivo é ter todas as funções necessárias para gerenciar tarefas (CRUD - create, read, update, delete)
/*
    - adicionar uma nova tarefa
    - listar as tarefas
    - atualizar uma tarefa
    - deletar uma tarefa
*/
import { addDoc, collection } from "firebase/firestore";
import { db } from "./config";

//Criar uma referência para coleção no Firestore
export const tarefasCol = collection(db, "tarefas");

//Função assíncrona = o resultado não é obtido de imediato
// Haverá uma "espera"
export async function addTarefa(data) {
    //Essa função se comunica com o firestore, envia os dados(data) e salva na coleção indicada
    await addDoc(tarefasCol, data);
    //await é uma instrução para esperar o resultado de addDoc
}