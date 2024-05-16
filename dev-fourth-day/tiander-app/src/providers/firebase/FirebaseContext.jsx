import React, { createContext, useContext } from "react";
import { getAuth } from "@firebase/auth";
export var FirebaseContext = createContext({});
export function useFirebaseContext() {
    return useContext(FirebaseContext);
}
export var FirebaseConsumer = FirebaseContext.Consumer;
var FirebaseProvider = function (props) {
    return (<FirebaseContext.Provider value={{
            auth: getAuth(),
        }}>
      {props.children}
    </FirebaseContext.Provider>);
};
export default FirebaseProvider;
