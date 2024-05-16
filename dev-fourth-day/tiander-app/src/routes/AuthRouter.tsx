import * as React from "react";
import { useCallback } from "react";
import AuthUIProvider, {
  AuthUIContextContract,
} from "../providers/auth/AuthUIContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { FirebaseAuthContextType } from "../providers/firebase/FirebaseContext";
import GuestLayout from "../app/layout/GuestLayout";
import Login from "../components/auth/Login";
import withFirebase from "../providers/firebase/withFirebase";
import Register from "../components/auth/Register";

type AuthPageProps = FirebaseAuthContextType;

const AuthRouter = (props: AuthPageProps) => {
  const location = useLocation();

  const authUIEvents: AuthUIContextContract = {
    loginUserEmail: useCallback(
      async (values: { email: string; password: string }) =>
        props.auth &&
        signInWithEmailAndPassword(props.auth, values.email, values.password),
      [props],
    ),

    registerUserEmail: useCallback(
      async (values: { email: string; password: string }) =>
        props.auth &&
        createUserWithEmailAndPassword(
          props.auth,
          String(values.email).trim().toLowerCase(),
          values.password,
        ),
      [props],
    ),

    logoutUser: useCallback(
      async () => props.auth && signOut(props.auth),
      [props],
    ),
  };

  return (
    <AuthUIProvider authUIEvents={authUIEvents}>
      <Routes>
        <Route element={<GuestLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route
            path="*"
            element={<Navigate to="login" state={{ from: location }} replace />}
          />
        </Route>
      </Routes>
    </AuthUIProvider>
  );
};

export default withFirebase(AuthRouter);
