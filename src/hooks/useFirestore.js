import { useReducer, useEffect, useState } from 'react';
import { projectFirestore } from '../firebase/config';

let initialState = {
    document: null,
    inPending: false,
    error: null,
    success: null,
};

const firestoreReducer = (state, action) => {
    switch (action.type) {
        case 'IS_PENDING':
            return { 
                inPending: true ,
                document: null,
                success: false,
                error: null,
            }        
        case 'ADDED_DOCUMENT':
            return { 
                isPending: false, 
                document: action.payload, 
                success: true, 
                error: null 
            }
        case 'ERROR':
            return { 
                isPending: false, 
                document: null, 
                error: action.payload, 
                success: false
            }
        default:
            return state;
    }
}

export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState)   
    const [, setIsCanceled] = useState(false);

    // collection ref
    const ref = projectFirestore.collection(collection);

    // only dispatch if not canceled
    const dispatchIfNotCancel = (action) => {
        if (!isCanceled) {
            dispatch(action)
        }
    }

    const addDocument = async (doc) => {
        dispatch({ type: 'IS_PENDING'})

        try {
            const addedDocument = await ref.add(doc);            
            dispatchIfNotCancel({ type: 'ADDED_DOCUMENT', payload: addDocument })
        } catch (err) {
            dispatchIfNotCancel({ type: 'ERROR', payload: err.message})
        }
    }

    const deleteDocument = async (id) => {

    }

    useEffect(() => {    
      return () => setIsCanceled(true);
    }, [])
    

    return { addDocument, deleteDocument, response }
}