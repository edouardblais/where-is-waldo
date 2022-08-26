import { initializeApp } from 'firebase/app';
import {
  getFirestore, collection, getDocs,
} from 'firebase/firestore/lite';

const firebaseLeaderboard = async () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyAJi8yQ5LOymO6_qGx80ztG294zXujmGgg',
    authDomain: 'waldo-3e003.firebaseapp.com',
    projectId: 'waldo-3e003',
    storageBucket: 'waldo-3e003.appspot.com',
    messagingSenderId: '480350558276',
    appId: '1:480350558276:web:d7b280f31e65d124838411',
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  const getLeaderboard = await getDocs(collection(db, 'leaderboard'));
  const currentLeaderboard = getLeaderboard.docs.map((doc) => doc.data());
  return currentLeaderboard;
};

export default firebaseLeaderboard;
