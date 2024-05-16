import React, { ReactElement } from "react";
import { Profile } from "@lbucior/tiander-sdk";
type TProps = {
    children: ReactElement;
    profile: Profile;
    onSwipe?: (direction: string, profile: Profile) => void;
    className?: string;
    detectingSize?: number;
    throwLimit?: number;
};
export declare const CardSwiper: (props: TProps) => React.JSX.Element;
export {};
