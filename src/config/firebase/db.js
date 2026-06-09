import { getFirestore } from "firebase/firestore";
import app from "./base";

const db = getFirestore(app);

export default db;
