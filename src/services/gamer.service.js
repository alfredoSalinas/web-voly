import { db } from "./firebase";
import { getDocs, collection, deleteDoc, doc, query, where } from "firebase/firestore"

const gamers = db.collection('admin').doc('principal').collection('jugadores')

function getAllGamers(callback){
    gamers
    .onSnapshot((snapshot)=>{
        callback(snapshot.docs)
    })
}

const deleteGamer = async (id)=>{
    await deleteDoc(doc(db, gamers, id))
}

const createGamer = (data) => {
    return gamers
    .doc()
    .set(data);
};

const updateGamer=(id, data)=>{
    return gamers
        .doc(id)
        .update(data)
}

export default{
    getAllGamers,
    createGamer,
    deleteGamer,
    updateGamer,
}