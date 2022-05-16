import { db } from "./firebase";
import { getDocs, collection, deleteDoc, doc, query, where } from "firebase/firestore"

const championships = db.collection('admin').doc('principal').collection('campeonatos')

function getAllChampionships(callback){
    championships
    .onSnapshot((snapshot)=>{
        callback(snapshot.docs)
    })
}

const deleteChampionship = async (id)=>{
    await deleteDoc(doc(db, championships, id))
}

const createChampionship = (data) => {
    return championships
    .doc()
    .set(data);
};

const updateChampionship=(id, data)=>{
    return championships
        .doc(id)
        .update(data)
}

export default{
    getAllChampionships,
    createChampionship,
    deleteChampionship,
    updateChampionship,
}