import { initializeApp } from 'firebase/app';
import {
  getFirestore, addDoc, collection, getDocs,
} from 'firebase/firestore/lite';

const firebasePositions = (async () => {
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

  /*
        The following commented code was ran one time to add the character's positions,
        as seen in Position.js, to the Firestore.
        The code was then commented as to not add a new collection every time it is run.

        try {
          const docRef = await addDoc(collection(db, 'positions'), {
            Position,
          });
          console.log(docRef.id);
        } catch (e) {
          console.log('Error adding to collection:', e);
        } */

  const getPositions = await getDocs(collection(db, 'positions'));
  const hiddenPositions = getPositions.docs.map((doc) => doc.data());

  return { hiddenPositions };
})();

export default firebasePositions;
