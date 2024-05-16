import React from "react";
import { UserUIConsumer } from "./UserUIContext";
import hoistNonReactStatic from "hoist-non-react-statics";
var withUser = function (WrappedComponent) {
    var WithUser = function (props) {
        return (<UserUIConsumer>
        {function (value) { return (<WrappedComponent {...value} {...props}/>); }}
      </UserUIConsumer>);
    };
    hoistNonReactStatic(WithUser, WrappedComponent);
    return WithUser;
};
export default withUser;
