import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "../store/baseTypes";
import UserUIProvider from "../providers/user/UserUIContext";
import HomePageWrapper from "../pages/home/HomePageWrapper";
import PrivateLayout from "../app/layout/PrivateLayout";
import ChatPageWrapper from "../pages/chat/ChatPageWrapper";
import { isUndefined } from "lodash";

const PrivateRouter = () => {
  const { accountIdentifier } = useSelector(
    ({ auth }: RootState) => ({
      accountIdentifier:
        !isUndefined(auth.user) && auth.user !== null && auth.user.uid
          ? auth.user.uid
          : "-",
    }),
    shallowEqual,
  );

  return (
    <UserUIProvider>
      <Routes>
        <Route element={<PrivateLayout />}>
          <Route
            path="/"
            element={<HomePageWrapper accountId={accountIdentifier} />}
          />

          <Route
            path="/chat/:chatId"
            element={<ChatPageWrapper accountId={accountIdentifier} />}
          />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </UserUIProvider>
  );
};

export default PrivateRouter;
