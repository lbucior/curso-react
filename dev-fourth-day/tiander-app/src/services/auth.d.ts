import { SystemInfo } from "@lbucior/tiander-sdk";
import { User } from "@firebase/auth";
import { AppCheck } from "@firebase/app-check";
export declare const authService: (systemInfo: SystemInfo) => {
    getCurrentUser: () => User | null;
    getCurrentSessionRefreshing: () => Promise<string | undefined>;
    getAppCheck: () => AppCheck | null;
};
