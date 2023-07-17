import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const addMessage = async ({ unixTs, date, message }: { unixTs: number, date: string, message: string }) => {
    try {
        const docRef = await addDoc(collection(db, "messages"), {
            unix_ts: unixTs,
            date: date,
            message: message
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

