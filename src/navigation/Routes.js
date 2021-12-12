import React from "react";
import { Route, Switch } from "react-router-dom";

/** Withdraw Pages */
// Pending withdrawals
import PendingWithdrawals from "../pages/withdrawals/pending";
// All withdrawals
import Withdrawals from "../pages/withdrawals";
// Withdraws history
import WithdrawsHistory from '../pages/withdrawals/history';

/** Dashboard Pages */
import Discovery from '../pages/dashboard/index';

/** Match Maker Pages */
import mmConfig from "../pages/matchMaker/config";
import mmPatterns from "../pages/matchMaker/patterns";
import mmDiscovery from "../pages/matchMaker/discovery";
import CashBots from "../pages/matchMaker/cashBots";
import TokenBots from "../pages/matchMaker/tokenBots";

/** Player Management Pages */
import pmHome from "../pages/playerManagement/index";
import pmDiscovery from "../pages/playerManagement/discovery";
import pmList from "../pages/playerManagement/list";
import pmPatterns from "../pages/playerManagement/patterns";
import pmSupport from "../pages/playerManagement/support";

/** Prize Redeem Pages */
import prHome from "../pages/prizeRedeem/index";
import prHistory from "../pages/prizeRedeem/history";
import prDiscovery from "../pages/prizeRedeem/discovery";
import prPending from "../pages/prizeRedeem/pending";

/** Tournaments Pages */
import tourHome from "../pages/tournaments/index";
import tourActive from "../pages/tournaments/active";
import tourCancelled from "../pages/tournaments/cancelled";
import tourCompleted from "../pages/tournaments/completed";
import tourCreate from "../pages/tournaments/create";
import tourPatterns from "../pages/tournaments/patterns";
import tourSpecial from "../pages/tournaments/specialEvents";
import tourConfig from "../pages/tournaments/config";

const fourOFour = () => <h1 className="text-center">404</h1>;

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Discovery}/>
      <Route path="/withdrawals/index" exact component={Withdrawals}/>
      <Route path="/withdrawals/pending" exact component={PendingWithdrawals}/>
      <Route path="/withdrawals/history" exact component={WithdrawsHistory}/>

      <Route path={"/mm/config"} exact component={mmConfig} />
      <Route path={"/mm/patterns"} exact component={mmPatterns} />
      <Route path={"/mm/bots/token"} exact component={TokenBots} />
      <Route path={"/mm/bots/cash"} exact component={CashBots} />
      <Route path={"/mm/discovery"} exact component={mmDiscovery} />

      <Route path={"/pm"} exact component={pmHome} />
      <Route path={"/pm/player/list"} exact component={pmList} />
      <Route path={"/pm/player/patterns"} exact component={pmPatterns} />
      <Route path={"/pm/player/support"} exact component={pmSupport} />
      <Route path={"/pm/player/discovery"} exact component={pmDiscovery} />

      <Route path={"/prize/index"} exact component={prHome} />
      <Route path={"/prize/pending"} exact component={prPending} />
      <Route path={"/prize/discovery"} exact component={prDiscovery} />
      <Route path={"/prize/history"} exact component={prHistory} />

      <Route path={"/tournaments"} exact component={tourHome} />
      <Route path={"/tournaments/config"} exact component={tourConfig} />
      <Route path={"/tournaments/create"} exact component={tourCreate} />
      <Route path={"/tournaments/active"} exact component={tourActive} />
      <Route path={"/tournaments/cancelled"} exact component={tourCancelled} />
      <Route path={"/tournaments/completed"} exact component={tourCompleted} />
      <Route path={"/tournaments/patterns"} exact component={tourPatterns} />
      <Route path={"/tournaments/events"} exact component={tourSpecial} />

      <Route component={fourOFour} />
    </Switch>
  );
};

export default Routes;
