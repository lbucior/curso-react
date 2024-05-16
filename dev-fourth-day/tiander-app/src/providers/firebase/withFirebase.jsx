import React from "react";
import { FirebaseConsumer } from "./FirebaseContext";
import hoistNonReactStatic from "hoist-non-react-statics";
var withFirebase = function (WrappedComponent) {
    var WithFirebase = function (props) {
        return (<FirebaseConsumer>
        {function (value) { return (<WrappedComponent {...value} {...props}/>); }}
      </FirebaseConsumer>);
    };
    hoistNonReactStatic(WithFirebase, WrappedComponent);
    return WithFirebase;
};
export default withFirebase;
