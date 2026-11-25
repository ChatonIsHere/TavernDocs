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

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-atmbalancechanged" /><code>{"static "}<Link to="/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/game-api/types/game-other-namespaces/atmbalancechangedata">{"AtmBalanceChangeData"}</Link>{"> AtmBalanceChanged"}</code> | Raised when an ATM balance changes. |
| <Link id="m-commandexecuted" /><code>{"static "}<Link to="/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/game-api/types/game-other-namespaces/commandexecuteddata">{"CommandExecutedData"}</Link>{"> CommandExecuted"}</code> | Raised when a websocket console command finishes, with the line, whether it worked and its output. |
| <Link id="m-inventorychanged" /><code>{"static "}<Link to="/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/game-api/types/game-other-namespaces/inventorychangedata">{"InventoryChangeData"}</Link>{"> InventoryChanged"}</code> | Raised when a player picks up, drops, docks or undocks an item. |
| <Link id="m-objectkilled" /><code>{"static "}<Link to="/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/game-api/types/alta-player/objectkilleddata">{"ObjectKilledData"}</Link>{"> ObjectKilled"}</code> | Raised when something with health dies. |
| <Link id="m-playerjoined" /><code>{"static "}<Link to="/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/game-api/types/alta-networking/playerjoinleavedata">{"PlayerJoinLeaveData"}</Link>{"> PlayerJoined"}</code> | Never raised by the game itself. TavernLib raises it when a player joins. |
| <Link id="m-playerkilled" /><code>{"static "}<Link to="/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/game-api/types/alta-player/playerkilleddata">{"PlayerKilledData"}</Link>{"> PlayerKilled"}</code> | Raised when a player dies (the dead state starts). |
| <Link id="m-playerleft" /><code>{"static "}<Link to="/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/game-api/types/alta-networking/playerjoinleavedata">{"PlayerJoinLeaveData"}</Link>{"> PlayerLeft"}</code> | Never raised by the game itself. TavernLib raises it when a player leaves. |
| <Link id="m-playermovedchunk" /><code>{"static "}<Link to="/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/game-api/types/global-p/playermovechunkdata">{"PlayerMoveChunkData"}</Link>{"> PlayerMovedChunk"}</code> | Raised when a player crosses into another chunk. |
| <Link id="m-playerstatechanged" /><code>{"static "}<Link to="/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/game-api/types/alta-player/playerstatechangedata">{"PlayerStateChangeData"}</Link>{"> PlayerStateChanged"}</code> | Raised when a player enters or leaves a player state. |
| <Link id="m-populationmodified" /><code>{"static "}<Link to="/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/game-api/types/alta-world-generation/populationeventdata">{"PopulationEventData"}</Link>{"> PopulationModified"}</code> | Raised when a population member spawns or is lost. |
| <Link id="m-serversettingschanged" /><code>{"static "}<Link to="/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/game-api/types/game-other-namespaces/serversettingschangedata">{"ServerSettingsChangeData"}</Link>{"> ServerSettingsChanged"}</code> | Raised when server settings change, once with the old settings and once with the new. |
| <Link id="m-socialtabletplayerbanned" /><code>{"static "}<Link to="/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/game-api/types/game-other-namespaces/socialtabletplayerbandata">{"SocialTabletPlayerBanData"}</Link>{"> SocialTabletPlayerBanned"}</code> | Raised when a player is banned from the social tablet. |
| <Link id="m-socialtabletplayerreported" /><code>{"static "}<Link to="/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/game-api/types/game-other-namespaces/socialtabletplayerreportdata">{"SocialTabletPlayerReportData"}</Link>{"> SocialTabletPlayerReported"}</code> | Raised when a player is reported from the social tablet. |
| <Link id="m-tradedeckused" /><code>{"static "}<Link to="/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/game-api/types/alta-crafting/tradinglogger-tradedecksale">{"TradingLogger.TradeDeckSale"}</Link>{"> TradeDeckUsed"}</code> | Raised on a trade deck sale. |
| <Link id="m-trialfinished" /><code>{"static "}<Link to="/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/game-api/types/global-t-x/trialeventdata">{"TrialEventData"}</Link>{"> TrialFinished"}</code> | Raised when a combat trial ends. |
| <Link id="m-trialstarted" /><code>{"static "}<Link to="/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/game-api/types/global-t-x/trialeventdata">{"TrialEventData"}</Link>{"> TrialStarted"}</code> | Raised when a combat trial starts. |
