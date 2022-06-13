import { db } from "./firebase";
import { getDocs, collection, deleteDoc, doc, query, where } from "firebase/firestore"

const teams = db.collection('admin').doc('principal').collection('equipos')

function getAllTeams(callback){
    teams
    .onSnapshot((snapshot)=>{
        callback(snapshot.docs)
    })
}

const deleteTeam = async (id)=>{
    await deleteDoc(doc(db, teams, id))
}

const createTeam = (data) => {
    return teams
    .doc()
    .set(data);
};

const updateTeam=(id, data)=>{
    return teams
        .doc(id)
        .update(data)
}

export default{
    getAllTeams,
    createTeam,
    deleteTeam,
    updateTeam,
}