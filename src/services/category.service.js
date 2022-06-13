import { db } from "./firebase";
import { getDocs, collection, deleteDoc, doc, query, where } from "firebase/firestore"

const categories = db.collection('admin').doc('principal').collection('categorias')

function getAllCategories(callback){
    categories
    .onSnapshot((snapshot)=>{
        callback(snapshot.docs)
    })
}

const deleteCategory = async (id)=>{
    await deleteDoc(doc(db, categories, id))
}

const createCategory = (data) => {
    return categories
    .doc()
    .set(data);
};

const updateCategory=(id, data)=>{
    return categories
        .doc(id)
        .update(data)
}

export default{
    getAllCategories,
    createCategory,
    deleteCategory,
    updateCategory,
}