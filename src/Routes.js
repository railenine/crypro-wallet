import { Switch, Route } from "react-router-dom";

import Wallet from "./pages/wallet/Wallet";
import Rates from "./pages/rates/Rates";

const Routes = () => {
    return (
        <Switch>
            <Route path='/' component={Wallet} exact/>
            <Route path='/rates' component={Rates} />
        </Switch>
    )
}

export default Routes;