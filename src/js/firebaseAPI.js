import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  orderBy,
  where,
  setDoc,
  limit,
} from "firebase/firestore";
import db from "../config/firebase/firestore";

class FirestoreAPI {
  static #DEFAULT_LIMIT = 50;

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
   * @param {string} collection - Name of the collection to retrieve the document from.
   * @param {string} docID - ID of the document to retrieve.
   * @returns {DocumentData}
   */
  static async getDoc(collectionName, docID) {
    const docRef = this.#getDocRef(collectionName, docID);
    const docSnap = await getDoc(docRef);
    return docSnap;
  }

  /**
   * Get all documents from a collection.
   *
   * @param {Object} [parameters] -  Object containing query parameters.
   * @param {string} parameters.collectionName - Name of the collection to retrieve.
   * @param {QueryFieldFilterConstraint[]} [parameters.constraints=[]] - Array of query constraints to apply. Get constraints from FirestoreAPI.getConstraint().
   * @param {string} [parameters.orderingfieldName=null] - Name of the field to order by.
   * @param {("asc"|"desc")} [parameters.orderingType="asc"] - Type of ordering to perform.
   * @returns {DocumentData[]}
   */
  static async getDocs({
    collectionName,
    constraints = [],
    orderingFieldName = null,
    orderingType = "asc",
    limitParam = this.#DEFAULT_LIMIT,
  } = {}) {
    const collectionRef = this.#getCollectionRef(collectionName);
    let q;
    if (orderingFieldName) {
      q = query(
        collectionRef,
        ...constraints,
        orderBy(orderingFieldName, orderingType),
        limit(limitParam),
      );
    } else {
      q = query(collectionRef, ...constraints, limit(limitParam));
    }
    const querySnap = await getDocs(q);
    return querySnap;
  }

  /**
   * Get a ready-to-use query constraint.
   * *Wrapper for where().*
   *
   * @param {string} fieldName - Name of the field to place the constraint on.
   * @param {("<"|"<="|"=="|">"|">="|"!=")} operator - Name of the field to place the constraint on.
   * @param {*} value - Value that will be compared against.
   * @returns {QueryFieldFilterConstraint}
   */
  static getConstraint(fieldName, operator, value) {
    return where(fieldName, operator, value);
  }

  /**
   * Add a document to a collection.
   *
   * @param {string} collectionName - Name of the collection to add the document to.
   * @param {Object} doc - Data of the document to add. The object's properties and their values will be converted to corresponding document fields.
   * @param {string} [id=null] - Data of the document to add. The object's properties and their values will be converted to corresponding document fields.
   * @param {Object} [converter=null] - Object containing toFirestore and fromFirestore methods.
   * @returns {DocumentReference}
   */
  static async addDoc({ collectionName, data, id = null, converter = null }) {
    const collectionRef = this.#getCollectionRef(collectionName);
    const docRefParams = id ? [collectionRef, id] : [collectionRef];
    let docRef = doc(...docRefParams);
    if (converter) {
      docRef = docRef.withConverter(converter);
    }
    await setDoc(docRef, data);
    return docRef;
  }
}

export default FirestoreAPI;
