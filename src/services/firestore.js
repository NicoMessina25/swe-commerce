
import { initializeApp } from "firebase/app";
import { collection, doc, getDocs, getDoc, getFirestore, query, where} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAOBem4hf5Kwn-232ETbvoDDxv0_Z8xkUw",
  authDomain: "swe-commerce.firebaseapp.com",
  projectId: "swe-commerce",
  storageBucket: "swe-commerce.appspot.com",
  messagingSenderId: "373386889570",
  appId: "1:373386889570:web:cff6b07ba17bcb68bc843b"
};


const app = initializeApp(firebaseConfig);

const dataBase = getFirestore(app);

export default async function getProducts(){
    const myCollection = collection(dataBase, "productos");
    let snapShot = await getDocs(myCollection);

    return snapShot.docs.map((d)=>{ return {...d.data(), id: d.id}});
}

export async function getEspecifiedProduct(itemId){
    const docRef = doc(dataBase, "productos", itemId);
    let docSnapShot = await getDoc(docRef);

    return {...docSnapShot.data(), id: docSnapShot.id};
}

export async function getProductsByCat(cat){
    const myCollection = collection(dataBase, "productos");
    let q = query(myCollection, where("category", "==", cat));

    let snapShot = await getDocs(q);

    return snapShot.docs.map((d)=>{ return {...d.data(), id: d.id}});
}

