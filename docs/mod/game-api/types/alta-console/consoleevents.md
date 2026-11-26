---
title: "ConsoleEvents"
description: "The game's console events as static fields."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleEvents

A **static class** in `Root.Township`, `Alta.Console`.

The game's console events as static fields. Console (websocket) sessions subscribe to them by name. See the Console events guide for what raises each one.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-atmbalancechanged" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/mod/game-api/types/game-other-namespaces/atmbalancechangedata">{"AtmBalanceChangeData"}</Link>{"> AtmBalanceChanged"}</code> | <span className="api-desc">Raised when an ATM balance changes.</span> |
| <Link id="m-commandexecuted" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/mod/game-api/types/game-other-namespaces/commandexecuteddata">{"CommandExecutedData"}</Link>{"> CommandExecuted"}</code> | <span className="api-desc">Raised when a websocket console command finishes, with the line, whether it worked and its output.</span> |
| <Link id="m-inventorychanged" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/mod/game-api/types/game-other-namespaces/inventorychangedata">{"InventoryChangeData"}</Link>{"> InventoryChanged"}</code> | <span className="api-desc">Raised when a player picks up, drops, docks or undocks an item.</span> |
| <Link id="m-objectkilled" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/mod/game-api/types/alta-player/objectkilleddata">{"ObjectKilledData"}</Link>{"> ObjectKilled"}</code> | <span className="api-desc">Raised when something with health dies.</span> |
| <Link id="m-playerjoined" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/mod/game-api/types/alta-networking/playerjoinleavedata">{"PlayerJoinLeaveData"}</Link>{"> PlayerJoined"}</code> | <span className="api-desc">Never raised by the game itself. TavernLib raises it when a player joins.</span> |
| <Link id="m-playerkilled" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/mod/game-api/types/alta-player/playerkilleddata">{"PlayerKilledData"}</Link>{"> PlayerKilled"}</code> | <span className="api-desc">Raised when a player dies (the dead state starts).</span> |
| <Link id="m-playerleft" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/mod/game-api/types/alta-networking/playerjoinleavedata">{"PlayerJoinLeaveData"}</Link>{"> PlayerLeft"}</code> | <span className="api-desc">Never raised by the game itself. TavernLib raises it when a player leaves.</span> |
| <Link id="m-playermovedchunk" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/mod/game-api/types/global-p/playermovechunkdata">{"PlayerMoveChunkData"}</Link>{"> PlayerMovedChunk"}</code> | <span className="api-desc">Raised when a player crosses into another chunk.</span> |
| <Link id="m-playerstatechanged" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/mod/game-api/types/alta-player/playerstatechangedata">{"PlayerStateChangeData"}</Link>{"> PlayerStateChanged"}</code> | <span className="api-desc">Raised when a player enters or leaves a player state.</span> |
| <Link id="m-populationmodified" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/mod/game-api/types/alta-world-generation/populationeventdata">{"PopulationEventData"}</Link>{"> PopulationModified"}</code> | <span className="api-desc">Raised when a population member spawns or is lost.</span> |
| <Link id="m-serversettingschanged" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/mod/game-api/types/game-other-namespaces/serversettingschangedata">{"ServerSettingsChangeData"}</Link>{"> ServerSettingsChanged"}</code> | <span className="api-desc">Raised when server settings change, once with the old settings and once with the new.</span> |
| <Link id="m-socialtabletplayerbanned" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/mod/game-api/types/game-other-namespaces/socialtabletplayerbandata">{"SocialTabletPlayerBanData"}</Link>{"> SocialTabletPlayerBanned"}</code> | <span className="api-desc">Raised when a player is banned from the social tablet.</span> |
| <Link id="m-socialtabletplayerreported" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/mod/game-api/types/game-other-namespaces/socialtabletplayerreportdata">{"SocialTabletPlayerReportData"}</Link>{"> SocialTabletPlayerReported"}</code> | <span className="api-desc">Raised when a player is reported from the social tablet.</span> |
| <Link id="m-tradedeckused" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/mod/game-api/types/alta-crafting/tradinglogger-tradedecksale">{"TradingLogger.TradeDeckSale"}</Link>{"> TradeDeckUsed"}</code> | <span className="api-desc">Raised on a trade deck sale.</span> |
| <Link id="m-trialfinished" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/mod/game-api/types/global-t-x/trialeventdata">{"TrialEventData"}</Link>{"> TrialFinished"}</code> | <span className="api-desc">Raised when a combat trial ends.</span> |
| <Link id="m-trialstarted" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/mod/game-api/types/global-t-x/trialeventdata">{"TrialEventData"}</Link>{"> TrialStarted"}</code> | <span className="api-desc">Raised when a combat trial starts.</span> |
