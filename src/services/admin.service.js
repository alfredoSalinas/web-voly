import { db } from "./firebase";
import { getDocs, collection } from "firebase/firestore"

function getAdmin(user, callback){
    db
    .collection('administradores')
    .doc(user.uid)
    .get()
    .then(admin => {
    if(admin.exists) {
        callback(true)
    }else{
        console.log('Erroor')
    }
    }).catch(error => {
        console.log(error)
    callback(false)
    })  
  }
  
  export default{
      getAdmin
  }