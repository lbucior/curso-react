import React, { ReactNode } from "react";
import { Auth } from "@firebase/auth";
export type FirebaseAuthContextType = {
    auth?: Auth;
};
export type FirebaseContextType = FirebaseAuthContextType;
export declare const FirebaseContext: React.Context<FirebaseAuthContextType>;
export declare function useFirebaseContext(): FirebaseContextType;
export declare const FirebaseConsumer: React.Consumer<FirebaseAuthContextType>;
interface FirebaseProviderProps {
    children?: ReactNode;
}
declare const FirebaseProvider: (props: FirebaseProviderProps) => React.JSX.Element;
export default FirebaseProvider;
