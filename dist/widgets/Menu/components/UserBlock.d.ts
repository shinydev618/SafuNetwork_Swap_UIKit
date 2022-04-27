import React from "react";
import { Login } from "../../WalletModal/types";
interface Props {
    account?: string;
    login: Login;
    logout: () => void;
    imgs: any;
    isDark?: boolean;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
