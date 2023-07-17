import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export interface ChatMessage {
    date: string;
    message: string;
}

export const getMessages = async (prevUnixTs: number = 0) => {
    console.log("fetching");

    const messagesRef = collection(db, "messages");
    // const q = query(messagesRef);
    const q = query(messagesRef, where("unix_ts", '>', prevUnixTs));
    const querySnapshot = await getDocs(q);

    const messages: ChatMessage[] = [];
    querySnapshot.forEach((doc) => {
        messages.push({ date: doc.data().date, message: doc.data().message })
    });

    console.log(messages)

    return messages
}
