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

- **Listed in** [TavernLib.ModulePorts](/tavernlib-api/types/moduleports)
- **Nested in** [`PlayerCommandModule`](/tavernlib-api/types/moduleports/playercommandmodule)
- **Nested types** [`PathXp`](/tavernlib-api/types/moduleports/playercommandmodule-progressioncommandmodule-pathxp), [`SkillRow`](/tavernlib-api/types/moduleports/playercommandmodule-progressioncommandmodule-skillrow)
- **Attributes** `Module`
- **Documented in** [PlayerCommandModule.ProgressionCommandModule](/tavernlib-api/types/moduleports/playercommandmodule-progressioncommandmodule)

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-available" /><code>{"private static Dictionary<int, "}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{"> available"}</code> |
| <Link id="m-lastplayer" /><code>{"private static "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" lastPlayer"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |

</details>

## Methods

<details>
<summary>11 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-addofflinelevels" /><code>{"private static async Task<string> AddOfflineLevels("}<Link to="/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" userInfo, "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, int levels)"}</code> |
| <Link id="m-buyskill" /><code>{"private static string BuySkill(int slotIndex, bool isConsumingExperience = true)"}</code> |
| <Link id="m-checkallxp" /><code>{"private static "}<Link to="/tavernlib-api/types/moduleports/lines-t">{"Lines"}</Link>{"<"}<Link to="/tavernlib-api/types/moduleports/playercommandmodule-progressioncommandmodule-pathxp">{"PlayerCommandModule.ProgressionCommandModule.PathXp"}</Link>{"> CheckAllXP("}<Link to="/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players)"}</code> |
| <Link id="m-clearall" /><code>{"private static void ClearAll("}<Link to="/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players)"}</code> |
| <Link id="m-clearpath" /><code>{"private static void ClearPath("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> |
| <Link id="m-gainpathlevel" /><code>{"private static void GainPathLevel("}<Link to="/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> |
| <Link id="m-gainpathxp" /><code>{"private static void GainPathXp("}<Link to="/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, int xp)"}</code> |
| <Link id="m-gainxp" /><code>{"private static void GainXp("}<Link to="/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, int xp)"}</code> |
| <Link id="m-list" /><code>{"private static "}<Link to="/tavernlib-api/types/moduleports/lines-t">{"Lines"}</Link>{"<string> List()"}</code> |
| <Link id="m-printofflinelevels" /><code>{"private static void PrintOfflineLevels()"}</code> |
| <Link id="m-showavailableskills" /><code>{"private static "}<Link to="/tavernlib-api/types/moduleports/lines-t">{"Lines"}</Link>{"<"}<Link to="/tavernlib-api/types/moduleports/playercommandmodule-progressioncommandmodule-skillrow">{"PlayerCommandModule.ProgressionCommandModule.SkillRow"}</Link>{"> ShowAvailableSkills("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |

</details>
