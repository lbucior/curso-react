import React, { createContext, useContext } from "react";
import { shallowEqual, useSelector } from "react-redux";
export var UserUIContext = createContext({});
export function useUserContext() {
    return useContext(UserUIContext);
}
export var UserUIConsumer = UserUIContext.Consumer;
var UserUIProvider = function (props) {
    var me = useSelector(function (_a) {
        var auth = _a.auth;
        return ({
            me: auth.user && auth.user,
        });
    }, shallowEqual).me;
    return (<UserUIContext.Provider value={{
            me: me,
        }}>
      {props.children}
    </UserUIContext.Provider>);
};
export default UserUIProvider;
