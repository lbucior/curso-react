import React, { Suspense } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { RootState } from "../store/baseTypes";
import { isUndefined } from "lodash";
import ErrorRouter from "./ErrorRouter";
import AuthRouter from "./AuthRouter";
import PrivateRouter from "./PrivateRouter";

const BaseRouter = () => {
  const { isAuthenticated } = useSelector(
    ({ auth }: RootState) => ({
      isAuthenticated:
        !isUndefined(auth.user) &&
        auth.user !== null &&
        !isUndefined(auth.session) &&
        auth.session !== null,
    }),
    shallowEqual,
  );

  return (
    <Suspense fallback={<div />}>
      <Routes>
        {/* Render page error. */}
        <Route path="error" element={<ErrorRouter />} />
        <Route path="error/*" element={<ErrorRouter />} />

        {isAuthenticated ? (
          <Route index path="*" element={<PrivateRouter />} />
        ) : (
          <>
            <Route path="auth/*" element={<AuthRouter />} />
            <Route
              index
              path="*"
              element={<Navigate to="/auth/login" replace />}
            />
          </>
        )}

        {/* Page Not Found */}
        <Route path="*" element={<Navigate to="/error" replace />} />
      </Routes>
    </Suspense>
  );
};

export default BaseRouter;
