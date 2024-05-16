import React, { ReactNode } from "react";
import { User } from "@lbucior/tiander-sdk";
export type UserUIContextContract = {
    me?: User;
};
export declare const UserUIContext: React.Context<UserUIContextContract>;
export declare function useUserContext(): UserUIContextContract;
export declare const UserUIConsumer: React.Consumer<UserUIContextContract>;
interface UserUIProviderProps {
    children?: ReactNode;
}
declare const UserUIProvider: (props: UserUIProviderProps) => React.JSX.Element;
export default UserUIProvider;
