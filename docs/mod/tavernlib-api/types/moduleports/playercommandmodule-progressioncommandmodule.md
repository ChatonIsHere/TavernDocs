---
title: "PlayerCommandModule.ProgressionCommandModule"
description: "The player progression submodule: list paths, give and check experience, clear progress, and show and buy skills."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerCommandModule.ProgressionCommandModule

A **static class** in `TavernLib`, `TavernLib.ModulePorts`.

The `player progression` submodule: list paths, give and check experience, clear progress, and show and buy skills. Its commands are private.

- **Listed in** [TavernLib.ModulePorts](/mod/tavernlib-api/types/moduleports)
- **Nested in** [`PlayerCommandModule`](/mod/tavernlib-api/types/moduleports/playercommandmodule)
- **Nested types** [`PathXp`](/mod/tavernlib-api/types/moduleports/playercommandmodule-progressioncommandmodule-pathxp), [`SkillRow`](/mod/tavernlib-api/types/moduleports/playercommandmodule-progressioncommandmodule-skillrow)
- **Attributes** `Module`

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-available" /><code>{"private static Dictionary<int, "}<Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{"> available"}</code> | <span className="api-desc">The skills the last `showskills` listed, by row index, for `buyskill`.</span> |
| <Link id="m-lastplayer" /><code>{"private static "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" lastPlayer"}</code> | <span className="api-desc">The player the last `showskills` was run for.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for the module.</span> |

</details>

## Methods

<details className="api-private">
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addofflinelevels" /><code>{"private static async Task<string> AddOfflineLevels("}<Link to="/mod/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" userInfo, "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, int levels)"}</code> | <span className="api-desc">`player progression offlinelevels`: gives levels on a path to a player even when they are offline.</span> |
| <Link id="m-buyskill" /><code>{"private static string BuySkill(int slotIndex, bool isConsumingExperience = true)"}</code> | <span className="api-desc">`player progression buyskill`: buys a skill from the last `showskills` list for that player.</span> |
| <Link id="m-checkallxp" /><code>{"private static "}<Link to="/mod/tavernlib-api/types/moduleports/lines-t">{"Lines"}</Link>{"<"}<Link to="/mod/tavernlib-api/types/moduleports/playercommandmodule-progressioncommandmodule-pathxp">{"PlayerCommandModule.ProgressionCommandModule.PathXp"}</Link>{"> CheckAllXP("}<Link to="/mod/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players)"}</code> | <span className="api-desc">`player progression checkallxp`: server only, lists each path's level, experience and next level threshold for the players.</span> |
| <Link id="m-clearall" /><code>{"private static void ClearAll("}<Link to="/mod/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players)"}</code> | <span className="api-desc">`player progression clearall`: clears players' progress on every path.</span> |
| <Link id="m-clearpath" /><code>{"private static void ClearPath("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | <span className="api-desc">`player progression clearpath`: clears a player's progress on one path.</span> |
| <Link id="m-gainpathlevel" /><code>{"private static void GainPathLevel("}<Link to="/mod/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | <span className="api-desc">`player progression pathlevelup`: server only, gives players the experience for one more level on a path.</span> |
| <Link id="m-gainpathxp" /><code>{"private static void GainPathXp("}<Link to="/mod/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, int xp)"}</code> | <span className="api-desc">`player progression pathxp`: server only, gives players experience on one path.</span> |
| <Link id="m-gainxp" /><code>{"private static void GainXp("}<Link to="/mod/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, int xp)"}</code> | <span className="api-desc">`player progression allxp`: server only, gives players experience on every path.</span> |
| <Link id="m-list" /><code>{"private static "}<Link to="/mod/tavernlib-api/types/moduleports/lines-t">{"Lines"}</Link>{"<string> List()"}</code> | <span className="api-desc">`player progression list`: server only, lists the profession path names.</span> |
| <Link id="m-printofflinelevels" /><code>{"private static void PrintOfflineLevels()"}</code> | <span className="api-desc">`player progression printofflinelevels`: logs the offline level changes waiting to be applied.</span> |
| <Link id="m-showavailableskills" /><code>{"private static "}<Link to="/mod/tavernlib-api/types/moduleports/lines-t">{"Lines"}</Link>{"<"}<Link to="/mod/tavernlib-api/types/moduleports/playercommandmodule-progressioncommandmodule-skillrow">{"PlayerCommandModule.ProgressionCommandModule.SkillRow"}</Link>{"> ShowAvailableSkills("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">`player progression showskills`: lists the skills a player can buy and remembers them for `buyskill`.</span> |

</details>
