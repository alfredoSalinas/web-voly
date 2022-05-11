import { db } from "./firebase";
import { getDocs, collection, deleteDoc, doc, query, where } from "firebase/firestore"

const students = db.collection('admin').doc('principal').collection('equipos')

function getAllTeams(callback){
    students
    .onSnapshot((snapshot)=>{
        callback(snapshot.docs)
    })
}

const deleteTeam = async (id)=>{
    await deleteDoc(doc(db, "admin/principal/estudiantes", id))
}

const createTeam = (data) => {
    return students
    .doc()
    .set(data);
};

const updateTeam=(id, data)=>{
    return students
        .doc(id)
        .update(data)
}

export default{
    getAllTeams,
    createTeam,
    deleteTeam,
    updateTeam,
}