/// <reference types="react" />
export type AuthUIContextContract = {
    loginUserEmail: (_values: {
        email: string;
        password: string;
    }) => Promise<any>;
    registerUserEmail: (_values: {
        displayName: string;
        email: string;
        password: string;
    }) => Promise<any>;
    logoutUser: () => Promise<any>;
};
export declare const useAuthUIContext: () => AuthUIContextContract;
export declare const AuthUIConsumer: import("react").Consumer<AuthUIContextContract>;
declare const _default: import("react-redux").ConnectedComponent<(props: any) => import("react").JSX.Element, {
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
    context?: import("react").Context<import("react-redux").ReactReduxContextValue<any, import("redux").UnknownAction> | null> | undefined;
    store?: import("redux").Store<any, import("redux").UnknownAction, unknown> | undefined;
} | {
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
    store?: import("redux").Store<any, import("redux").UnknownAction, unknown> | undefined;
}>;
export default _default;
