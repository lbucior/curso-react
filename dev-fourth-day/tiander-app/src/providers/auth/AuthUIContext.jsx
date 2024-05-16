var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { createContext, useContext, useEffect } from "react";
import withFirebase from "../firebase/withFirebase";
import { authActions } from "../../store/auth";
import { connect } from "react-redux";
import { GetSessionDocument } from "@lbucior/tiander-sdk";
import { frontSdk as sdk } from "../../sdk/frontSdk";
var AuthUIContext = createContext({
    loginUserEmail: function (_values) {
        return Promise.resolve(undefined);
    },
    registerUserEmail: function (_values) {
        return Promise.resolve(undefined);
    },
    logoutUser: function () {
        return Promise.resolve(undefined);
    },
});
export var useAuthUIContext = function () {
    return useContext(AuthUIContext);
};
export var AuthUIConsumer = AuthUIContext.Consumer;
var AuthUIProvider = function (props) {
    useEffect(function () {
        var unsubscribe = props.auth &&
            props.auth.onAuthStateChanged(function (user) {
                if (user) {
                    user
                        .getIdToken(true)
                        .then(function (idToken) {
                        props.login(idToken);
                        sdk.setToken("Bearer ".concat(idToken));
                        sdk
                            .query({
                            query: GetSessionDocument,
                            fetchPolicy: "no-cache",
                        })
                            .then(function (_a) {
                            var data = _a.data;
                            if (data && data.me && data.session) {
                                props.fulfillUser(data.me);
                                props.loadedUserSession(data.session);
                            }
                        })
                            .catch(function () {
                        });
                    })
                        .catch(function (err) {
                        console.log(err);
                    });
                }
            });
        return function () {
            unsubscribe === null || unsubscribe === void 0 ? void 0 : unsubscribe();
        };
    }, [props]);
    return (<AuthUIContext.Provider value={{
            loginUserEmail: props.authUIEvents.loginUserEmail,
            registerUserEmail: props.authUIEvents.registerUserEmail,
            logoutUser: props.authUIEvents.logoutUser,
        }}>
      {props.children}
    </AuthUIContext.Provider>);
};
var mapStateToProps = function (_a) {
    var auth = _a.auth;
    return ({
        user: auth.user,
        session: auth.session,
        isSuperAdmin: auth.isSuperAdmin,
        userRole: auth.userRole,
    });
};
var mapDispatchToProps = __assign({}, authActions);
export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(AuthUIProvider));
