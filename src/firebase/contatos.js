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
export const contatosCol = collection(db, "contatos");

//Função assíncrona = o resultado não é obtido de imediato
// Haverá uma "espera"
export async function addContato(data) {
    //Essa função se comunica com o firestore, envia os dados(data) e salva na coleção indicada
    await addDoc(contatosCol, data);
    //await é uma instrução para esperar o resultado de addDoc
}

export async function getContatos() {
    const snapshot = await getDocs(contatosCol);
    const contatos = [];

    //Percorremos cada documento da coleção e inserimos no array de tarefas
    snapshot.forEach(doc => {
        contatos.push({...doc.data(), id: doc.id})
    })

    return contatos;
}

export async function getContatosUsuario(idUsuario) {
    //filtrar as tarefas da coleção de acordo com o ID do usuário
    const filtro = query(contatosCol, where("idUsuario", '==', idUsuario));
    const snapshot = await getDocs(filtro);
    const contatos = [];

    snapshot .forEach((doc) => {
        contatos.push({...doc.data(), id: doc.id});
    });

    return contatos;
}

export async function deleteContato(id) {
    //Cria uma referência para um documento da coleção
    const contatosDoc = doc(contatosCol, id);
    //Deletar o documento da coleção de acordo com o id
    await deleteDoc(contatosDoc);
}

export async function getContato(id){
    //Criar uma referência para um documento específico da coleção
    const contatosDoc = doc(contatosCol, id);
    // Trazer as informações do documento
    const Contato = await getDoc(contatosDoc);

    //Retorna os dados dentro do documento
    return Contato.data();
}

export async function updateContato(id, data) {
    const contatosDoc = doc(contatosCol, id);
    await updateDoc(contatosDoc, data);
}