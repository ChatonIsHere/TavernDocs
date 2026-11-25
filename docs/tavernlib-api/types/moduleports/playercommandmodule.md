---
title: "PlayerCommandModule"
description: "TavernLib's player console module, a port of the game's player commands plus its own: kick, ban, list, teleport, stats, messages and the inventory and..."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerCommandModule

A **static class** in `TavernLib`, `TavernLib.ModulePorts`.

TavernLib's `player` console module, a port of the game's player commands plus its own: kick, ban, list, teleport, stats, messages and the `inventory` and `progression` submodules.

- **Listed in** [TavernLib.ModulePorts](/tavernlib-api/types/moduleports)
- **Nested types** [`InventoryModule`](/tavernlib-api/types/moduleports/playercommandmodule-inventorymodule), [`ProgressionCommandModule`](/tavernlib-api/types/moduleports/playercommandmodule-progressioncommandmodule), [`StatApplicationType`](/tavernlib-api/types/moduleports/playercommandmodule-statapplicationtype), [`StatDefinitionInfo`](/tavernlib-api/types/moduleports/playercommandmodule-statdefinitioninfo), [`StatValue`](/tavernlib-api/types/moduleports/playercommandmodule-statvalue)
- **Attributes** `PlayOnly`, `Module`
- **Documented in** [PlayerCommandModule](/tavernlib-api/types/moduleports/playercommandmodule), [Internals](/tavernlib-api/internals)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-teleport-2" /><code>{"static void Teleport("}<Link to="/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, "}<Link to="/game-api/types/global-s/spawnareaidentifier">{"SpawnAreaIdentifier"}</Link>{" target = 1)"}</code> | The `player teleport` overload that sends players to a spawn area (their respawn point by default). A player with no body makes it throw. |
| <Link id="m-ban" /><code>{"private static string Ban(string username, string reason = \"Banned\")"}</code> |  |
| <Link id="m-banlist" /><code>{"private static string BanList()"}</code> |  |
| <Link id="m-changeusers" /><code>{"private static void ChangeUsers(Func<"}<Link to="/tavernlib-api/types/backend-server-configs/userconfig">{"UserConfig"}</Link>{", bool> change)"}</code> |  |
| <Link id="m-checkstat" /><code>{"private static void CheckStat("}<Link to="/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, "}<Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock, bool isUnlocked = true)"}</code> |  |
| <Link id="m-checkstat-2" /><code>{"private static bool CheckStat("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock)"}</code> |  |
| <Link id="m-checkstat-3" /><code>{"private static "}<Link to="/tavernlib-api/types/moduleports/playercommandmodule-statvalue">{"PlayerCommandModule.StatValue"}</Link>{" CheckStat("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> |  |
| <Link id="m-count" /><code>{"private static int Count()"}</code> |  |
| <Link id="m-crippleplayer" /><code>{"private static void CripplePlayer("}<Link to="/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players)"}</code> |  |
| <Link id="m-getdamagemultiplier-command" /><code>{"private static float GetDamageMultiplier_Command()"}</code> |  |
| <Link id="m-gethome" /><code>{"private static Vector3 GetHome("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-getidentifier" /><code>{"private static "}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" GetIdentifier(string username)"}</code> |  |
| <Link id="m-getusername" /><code>{"private static "}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" GetUsername(int userId)"}</code> |  |
| <Link id="m-godmode" /><code>{"private static void GodMode("}<Link to="/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, bool isOn)"}</code> |  |
| <Link id="m-kickplayer" /><code>{"private static void KickPlayer("}<Link to="/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, string reason = \"No reason provided\")"}</code> |  |
| <Link id="m-killplayer" /><code>{"private static void KillPlayer("}<Link to="/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players)"}</code> |  |
| <Link id="m-list" /><code>{"private static IEnumerable<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> List()"}</code> |  |
| <Link id="m-listdetailed" /><code>{"private static IEnumerable<"}<Link to="/game-api/types/alta-console/userinfodetailed">{"UserInfoDetailed"}</Link>{"> ListDetailed()"}</code> |  |
| <Link id="m-listdetailed-2" /><code>{"private static "}<Link to="/game-api/types/alta-console/userinfodetailed">{"UserInfoDetailed"}</Link>{" ListDetailed("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-lists" /><code>{"private static "}<Link to="/tavernlib-api/types/backend-server-configs/userconfig-listconfig">{"UserConfig.ListConfig"}</Link>{" Lists("}<Link to="/tavernlib-api/types/backend-server-configs/userconfig-listconfig">{"UserConfig.ListConfig"}</Link>{" list)"}</code> |  |
| <Link id="m-liststats" /><code>{"private static IEnumerable<"}<Link to="/tavernlib-api/types/moduleports/playercommandmodule-statdefinitioninfo">{"PlayerCommandModule.StatDefinitionInfo"}</Link>{"> ListStats("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-message" /><code>{"private static void Message("}<Link to="/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, string message, float duration = 10)"}</code> |  |
| <Link id="m-modifystat" /><code>{"private static void ModifyStat("}<Link to="/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition, float valueModifier, float duration, bool isMultiplier = false)"}</code> |  |
| <Link id="m-setdamagemultiplier-command" /><code>{"private static void SetDamageMultiplier_Command(float multiplier)"}</code> |  |
| <Link id="m-sethome" /><code>{"private static void SetHome("}<Link to="/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, Vector3 home = null)"}</code> |  |
| <Link id="m-setstat" /><code>{"private static void SetStat("}<Link to="/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition, float value, "}<Link to="/tavernlib-api/types/moduleports/playercommandmodule-statapplicationtype">{"PlayerCommandModule.StatApplicationType"}</Link>{" applicationType = 0)"}</code> |  |
| <Link id="m-teleport" /><code>{"private static string Teleport("}<Link to="/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" targetPlayer)"}</code> | The `player teleport` overload that sends players to a spawn area (their respawn point by default). A player with no body makes it throw. |
| <Link id="m-unban" /><code>{"private static string Unban(string username)"}</code> |  |
| <Link id="m-unlockcancel" /><code>{"private static void UnlockCancel("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
