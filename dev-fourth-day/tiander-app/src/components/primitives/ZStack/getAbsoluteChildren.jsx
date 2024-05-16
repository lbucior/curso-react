import * as React from "react";
var getAbsoluteChildren = function (children) {
    var childrenArray = React.Children.toArray(children);
    var trailingChildrenWithSpacing = childrenArray.map(function (child, index) {
        return React.cloneElement(child, {
            style: {
                position: "absolute",
                marginTop: index < 3 ? index * 5 : 15,
            },
        }, child.props.children);
    });
    return [trailingChildrenWithSpacing];
};
export default getAbsoluteChildren;
