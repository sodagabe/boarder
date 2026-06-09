import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  orderBy,
  where,
  setDoc,
} from "firebase/firestore";
import db from "../config/firebase/db";

class FirestoreAPI {
  static #getCollectionRef(collectionName) {
    return collection(db, collectionName);
  }

  static async #getDocRef(collectionName, docID) {
    const docRef = doc(db, collectionName, docID);
    return docRef;
  }

  /**
   * Get a specific document from a collection.
   *
   * @param {string} collection - Name of the collection to retrieve
   * @returns {import("firebase/firestore").DocumentData}
   */
  static async getDoc(collectionName, docID) {
    const docRef = this.#getDocRef(collectionName, docID);
    const docSnap = await getDoc(docRef);
    return docSnap;
  }

  /**
   * Get all documents from a collection.
   *
   * @param {Object} [parameters] -  Object containing query parameters
   * @param {string} parameters.collectionName - Name of the collection to retrieve
   * @param {string[]} [parameters.conditions=[]] - Array of query conditions to apply
   * @param {string} [parameters.orderingfieldName=null] - Name of the field to order by
   * @param {("asc"|"desc")} [parameters.orderingType="asc"] - Type of ordering to perform
   * @returns {[import("firebase/firestore").DocumentData]}
   */
  static async getDocs({
    collectionName,
    conditions = [],
    orderingFieldName = null,
    orderingType = "asc",
  } = {}) {
    const collectionRef = this.#getCollectionRef(collectionName);
    let q;
    if (orderingFieldName) {
      q = query(
        collectionRef,
        ...conditions,
        orderBy(orderingFieldName, orderingType),
      );
    } else {
      q = query(collectionRef, ...conditions);
    }
    const querySnap = await getDocs(q);
    return querySnap;
  }

  /**
   * Get a ready-to-use query condition.
   * *Wrapper for where().*
   *
   * @param {string} fieldName - Name of the field to place the condition on
   * @param {("<"|"<="|"=="|">"|">="|"!=")} operator - Name of the field to place the condition on
   * @param {string|number} value - Value that will be compared against
   * @returns {import("firebase/firestore").DocumentData}
   */
  static getCondition(fieldName, operator, value) {
    return where(fieldName, operator, value);
  }

  /**
   * Add a document to a collection.
   *
   * @param {string} collectionName - Name of the collection to add the document to
   * @param {Object} doc - Document to add. The object's properties and theirvalues will convert into corresponding fields.
   * @returns {import("firebase/firestore").DocumentReference}
   */
  static async addDoc(collectionName, data, converter = null) {
    const collectionRef = this.#getCollectionRef(collectionName);
    let docRef = doc(collectionRef);
    if (converter) {
      docRef = docRef.withConverter(converter);
    }
    await setDoc(docRef, data);
    return docRef;
  }
}

export default FirestoreAPI;
