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

- **Listed in** [TavernLib.ModulePorts](/mod/tavernlib-api/types/moduleports)
- **Nested types** [`InventoryModule`](/mod/tavernlib-api/types/moduleports/playercommandmodule-inventorymodule), [`ProgressionCommandModule`](/mod/tavernlib-api/types/moduleports/playercommandmodule-progressioncommandmodule), [`StatApplicationType`](/mod/tavernlib-api/types/moduleports/playercommandmodule-statapplicationtype), [`StatDefinitionInfo`](/mod/tavernlib-api/types/moduleports/playercommandmodule-statdefinitioninfo), [`StatValue`](/mod/tavernlib-api/types/moduleports/playercommandmodule-statvalue)
- **Attributes** `PlayOnly`, `Module`
- **Documented in** [Internals](/mod/tavernlib-api/internals)

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for the module.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-teleport-2" /><code>{"static void Teleport("}<Link to="/mod/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, "}<Link to="/mod/game-api/types/global-s/spawnareaidentifier">{"SpawnAreaIdentifier"}</Link>{" target = 1)"}</code> | <span className="api-desc">The `player teleport` overload that sends players to a spawn area (their respawn point by default). A player with no body makes it throw.</span> |

<details className="api-private">
<summary>28 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ban" /><code>{"private static string Ban(string username, string reason = \"Banned\")"}</code> | <span className="api-desc">`player ban`: server only, blacklists a name and its user id in `users.json` and kicks anyone playing under that name.</span> |
| <Link id="m-banlist" /><code>{"private static string BanList()"}</code> | <span className="api-desc">`player banlist`: server only, shows the blacklisted names, user ids and IPs.</span> |
| <Link id="m-changeusers" /><code>{"private static void ChangeUsers(Func<"}<Link to="/mod/tavernlib-api/types/backend-server-configs/userconfig">{"UserConfig"}</Link>{", bool> change)"}</code> | <span className="api-desc">Applies a change to `users.json` and turns a read or write failure into a command error.</span> |
| <Link id="m-checkstat" /><code>{"private static void CheckStat("}<Link to="/mod/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, "}<Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock, bool isUnlocked = true)"}</code> | <span className="api-desc">Three commands share this name: `player set-unlock` sets a permanent unlock, `player unlock-check` checks one, and `player check-stat` returns a stat's value.</span> |
| <Link id="m-checkstat-2" /><code>{"private static bool CheckStat("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock)"}</code> | <span className="api-desc">Three commands share this name: `player set-unlock` sets a permanent unlock, `player unlock-check` checks one, and `player check-stat` returns a stat's value.</span> |
| <Link id="m-checkstat-3" /><code>{"private static "}<Link to="/mod/tavernlib-api/types/moduleports/playercommandmodule-statvalue">{"PlayerCommandModule.StatValue"}</Link>{" CheckStat("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Three commands share this name: `player set-unlock` sets a permanent unlock, `player unlock-check` checks one, and `player check-stat` returns a stat's value.</span> |
| <Link id="m-count" /><code>{"private static int Count()"}</code> | <span className="api-desc">`player count`: server only, returns the number of online players.</span> |
| <Link id="m-crippleplayer" /><code>{"private static void CripplePlayer("}<Link to="/mod/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players)"}</code> | <span className="api-desc">`player cripple`: server only, cripples players.</span> |
| <Link id="m-getdamagemultiplier-command" /><code>{"private static float GetDamageMultiplier_Command()"}</code> | <span className="api-desc">`player getdamagemulti`: server only, returns `PlayerDamageTakenMultiplier` from the server settings.</span> |
| <Link id="m-gethome" /><code>{"private static Vector3 GetHome("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">`player get-home`: returns a player's respawn point.</span> |
| <Link id="m-getidentifier" /><code>{"private static "}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" GetIdentifier(string username)"}</code> | <span className="api-desc">`player id`: server only, finds a user id from a username in `users.json`.</span> |
| <Link id="m-getusername" /><code>{"private static "}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" GetUsername(int userId)"}</code> | <span className="api-desc">`player username`: server only, finds a username from a user id in `users.json`.</span> |
| <Link id="m-godmode" /><code>{"private static void GodMode("}<Link to="/mod/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, bool isOn)"}</code> | <span className="api-desc">`player god-mode`: sets whether players ignore damage.</span> |
| <Link id="m-kickplayer" /><code>{"private static void KickPlayer("}<Link to="/mod/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, string reason = \"No reason provided\")"}</code> | <span className="api-desc">`player kick`: server only, disconnects the players with a reason.</span> |
| <Link id="m-killplayer" /><code>{"private static void KillPlayer("}<Link to="/mod/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players)"}</code> | <span className="api-desc">`player kill`: server only, kills players, ignoring god mode and the damage multiplier.</span> |
| <Link id="m-list" /><code>{"private static IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> List()"}</code> | <span className="api-desc">`player list`: server only, lists all online players.</span> |
| <Link id="m-listdetailed" /><code>{"private static IEnumerable<"}<Link to="/mod/game-api/types/alta-console/userinfodetailed">{"UserInfoDetailed"}</Link>{"> ListDetailed()"}</code> | <span className="api-desc">`player list-detailed` and `player detailed`: server only, give detailed info on all players or on one player.</span> |
| <Link id="m-listdetailed-2" /><code>{"private static "}<Link to="/mod/game-api/types/alta-console/userinfodetailed">{"UserInfoDetailed"}</Link>{" ListDetailed("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">`player list-detailed` and `player detailed`: server only, give detailed info on all players or on one player.</span> |
| <Link id="m-lists" /><code>{"private static "}<Link to="/mod/tavernlib-api/types/backend-server-configs/userconfig-listconfig">{"UserConfig.ListConfig"}</Link>{" Lists("}<Link to="/mod/tavernlib-api/types/backend-server-configs/userconfig-listconfig">{"UserConfig.ListConfig"}</Link>{" list)"}</code> | <span className="api-desc">Fills in any missing name, id or IP lists on a blacklist or whitelist section and returns it.</span> |
| <Link id="m-liststats" /><code>{"private static IEnumerable<"}<Link to="/mod/tavernlib-api/types/moduleports/playercommandmodule-statdefinitioninfo">{"PlayerCommandModule.StatDefinitionInfo"}</Link>{"> ListStats("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">`player list-stats`: lists a player's stats, or the default stat definitions when the player has no body.</span> |
| <Link id="m-message" /><code>{"private static void Message("}<Link to="/mod/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, string message, float duration = 10)"}</code> | <span className="api-desc">`player message`: server only, sends a message to players for a number of seconds.</span> |
| <Link id="m-modifystat" /><code>{"private static void ModifyStat("}<Link to="/mod/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition, float valueModifier, float duration, bool isMultiplier = false)"}</code> | <span className="api-desc">`player modify-stat`: applies a timed modifier to a stat on players.</span> |
| <Link id="m-setdamagemultiplier-command" /><code>{"private static void SetDamageMultiplier_Command(float multiplier)"}</code> | <span className="api-desc">`player setdamagemulti`: server only, sets `PlayerDamageTakenMultiplier` in the server settings.</span> |
| <Link id="m-sethome" /><code>{"private static void SetHome("}<Link to="/mod/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, Vector3 home = null)"}</code> | <span className="api-desc">`player set-home`: sets players' respawn point.</span> |
| <Link id="m-setstat" /><code>{"private static void SetStat("}<Link to="/mod/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition, float value, "}<Link to="/mod/tavernlib-api/types/moduleports/playercommandmodule-statapplicationtype">{"PlayerCommandModule.StatApplicationType"}</Link>{" applicationType = 0)"}</code> | <span className="api-desc">`player set-stat`: sets a stat's base, minimum or maximum on players.</span> |
| <Link id="m-teleport" /><code>{"private static string Teleport("}<Link to="/mod/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" targetPlayer)"}</code> | <span className="api-desc">The `player teleport` overload that sends players to a spawn area (their respawn point by default). A player with no body makes it throw.</span> |
| <Link id="m-unban" /><code>{"private static string Unban(string username)"}</code> | <span className="api-desc">`player unban`: server only, takes a name and its user id off the blacklist.</span> |
| <Link id="m-unlockcancel" /><code>{"private static void UnlockCancel("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">`player unlock-cancel`: cancels a player's current unlock; a testing command.</span> |

</details>
