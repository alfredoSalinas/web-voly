import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth'

const provider = new GoogleAuthProvider()

const auth = getAuth()

function autenticar(callback){
    signInWithPopup(auth, provider)
    .then((result)=>{
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const user = result.user
        callback(user)
    }).catch((error)=>{
        const errorCode = error.errorCode
        const errorMessage = error.errorMessage
        const email = error.email
        const credential = GoogleAuthProvider.credentialFromError(error)
        callback(null)
    })
}

function salir(callback){
    signOut(auth).then(()=>{
        callback(null)
    })
    .catch((error)=>{
        callback(error)
    })
}

function onChangeStatus(callback){
    onAuthStateChanged(auth, (user)=>{
        if(user){
            callback(user)
        }else{
            callback(null)
        }
    })
}

export default{
    autenticar,
    onChangeStatus,
    salir
}