import React from "react";
import { useReducer, useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

export const firestoreReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  // collection ref
  const ref = projectFirestore.collection(collection);

  // add a document
  const addDocument = (doc) => {};

  // delete a document
  const deleteDocument = (id) => {};

  useEffect(() => {
    return () => {
      console.log("cleanup useFirestore");
      setIsCancelled(true);
    };
  }, []);

  return { addDocument, deleteDocument, response };
};
