import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkOoZLga4CY67UjWp8hwmGj9yjJoop88I",
  authDomain: "studyhaus-crm.firebaseapp.com",
  projectId: "studyhaus-crm",
  storageBucket: "studyhaus-crm.firebasestorage.app",
  messagingSenderId: "1008571854677",
  appId: "1:1008571854677:web:8f8e42ce3b0ffddddfc9dc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function checkAdmissions() {
  const querySnapshot = await getDocs(collection(db, "admissions"));
  console.log(`Found ${querySnapshot.size} admissions.`);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
  process.exit(0);
}

checkAdmissions().catch(console.error);
