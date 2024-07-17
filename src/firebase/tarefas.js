//O propósito deste arquivo é ter todas as funções necessárias para gerenciar tarefas (CRUD - create, read, update, delete)
/*
    - adicionar uma nova tarefa
    - listar as tarefas
    - atualizar uma tarefa
    - deletar uma tarefa
*/
import { addDoc, collection, deleteDoc, getDocs, doc, getDoc, updateDoc, query, where } from "firebase/firestore";
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

export async function getTarefas() {
    const snapshot = await getDocs(tarefasCol);
    const tarefas = [];

    //Percorremos cada documento da coleção e inserimos no array de tarefas
    snapshot.forEach(doc => {
        tarefas.push({...doc.data(), id: doc.id})
    })

    return tarefas;
}

export async function getTarefasUsuario(idUsuario) {
    //filtrar as tarefas da coleção de acordo com o ID do usuário
    const filtro = query(tarefasCol, where("idUsuario", '==', idUsuario));
    const snapshot = await getDocs(filtro);
    const tarefas = [];

    snapshot .forEach((doc) => {
        tarefas.push({...doc.data(), id: doc.id});
    });

    return tarefas;
}

export async function deleteTarefa(id) {
    //Cria uma referência para um documento da coleção
    const tarefaDoc = doc(tarefasCol, id);
    //Deletar o documento da coleção de acordo com o id
    await deleteDoc(tarefaDoc);
}

export async function getTarefa(id){
    //Criar uma referência para um documento específico da coleção
    const tarefaDoc = doc(tarefasCol, id);
    // Trazer as informações do documento
    const tarefa = await getDoc(tarefaDoc);

    //Retorna os dados dentro do documento
    return tarefa.data();
}

export async function updateTarefa(id, data) {
    const tarefaDoc = doc(tarefasCol, id);
    await updateDoc(tarefaDoc, data);
}