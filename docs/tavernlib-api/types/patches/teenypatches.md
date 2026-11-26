---
title: "TeenyPatches"
description: "Small Harmony patches that let the game run without Alta's services: local cosmetic presets, free cosmetics only, local server joins, TavernLib's join token..."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TeenyPatches

A **class** in `TavernLib`, `TavernLib.Patches`.

Small Harmony patches that let the game run without Alta's services: local cosmetic presets, free cosmetics only, local server joins, TavernLib's join token check and an always-online flag. Both sides.

- **Listed in** [TavernLib.Patches](/tavernlib-api/types/patches)
- **Attributes** `HarmonyPatch`
- **Documented in** [TeenyPatches](/tavernlib-api/types/patches/teenypatches)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TeenyPatches()"}</code> | Created by TavernLib; mods don't make one. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-alwaysallowanyitem" /><code>{"static bool AlwaysAllowAnyItem(ref Task<bool> __result)"}</code> | Prefix on `PurchasedList.ValidatePlayersOwnedItems` that answers true, so a player's look is always accepted. |
| <Link id="m-checkjointoken" /><code>{"static bool CheckJoinToken(string tokenString, int playerId, ref Task<ServerPlayerConnectionHandlerOld.PlayerJoinResult> __result)"}</code> | Prefix on `ServerPlayerConnectionHandlerOld.CheckIfPlayerIsAllowedCustom`: checks the token's user id, the player limit and sets the status from roles. |
| <Link id="m-disallowpaidcosmetics" /><code>{"static bool DisallowPaidCosmetics(ref Task __result, "}<Link to="/game-api/types/alta-customization/purchasedlist">{"PurchasedList"}</Link>{" __instance)"}</code> | Prefix on `PurchasedList.Refresh` that skips it and sets owned and available cosmetics to the free-for-all set only. |
| <Link id="m-isconnectedtointernetinternal-postfix" /><code>{"static void IsConnectedToInternetInternal_Postfix(ref bool __result)"}</code> | Postfix on `ApiAccess.IsConnectedToInternetInternal` that always answers true. |
| <Link id="m-localcreatecosmeticpreset" /><code>{"static bool LocalCreateCosmeticPreset(int presetId, uint[] data, int byteSize, ref Task<"}<Link to="/game-api/types/assembly-api-models/userpresetdatainfo">{"UserPresetDataInfo"}</Link>{"> __result)"}</code> | Prefix on `UserApiClient.CreateCosmeticsPreset` that writes the preset to `A Township Tale\presets\<id>.preset` instead. |
| <Link id="m-localdeletecosmeticpreset" /><code>{"static bool LocalDeleteCosmeticPreset(int presetId, ref Task __result)"}</code> | Three prefixes: deletes a local preset file, empties the store rotation (never applied, it has no prefix marker), and replaces `Player.SyncCosmetics`. |
| <Link id="m-localdeletecosmeticpreset-2" /><code>{"static bool LocalDeleteCosmeticPreset(ref Task __result)"}</code> | Three prefixes: deletes a local preset file, empties the store rotation (never applied, it has no prefix marker), and replaces `Player.SyncCosmetics`. |
| <Link id="m-localdeletecosmeticpreset-3" /><code>{"static bool LocalDeleteCosmeticPreset("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" __instance)"}</code> | Three prefixes: deletes a local preset file, empties the store rotation (never applied, it has no prefix marker), and replaces `Player.SyncCosmetics`. |
| <Link id="m-localgameserverinfo-postfix" /><code>{"static void LocalGameServerInfo_Postfix(int sceneIndex, ref "}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" __result)"}</code> | Postfix on `MenuSettings.LocalGameServerInfo`: applies the forced scene and points a local join at loopback with the command-line ports. |
| <Link id="m-localgetallcosmeticpresets" /><code>{"static bool LocalGetAllCosmeticPresets(ref Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/userpresetdatainfo">{"UserPresetDataInfo"}</Link>{">> __result)"}</code> | Prefix on `UserApiClient.GetAllCosmeticsPresets` that reads every `.preset` file in `A Township Tale\presets` instead. |
| <Link id="m-localjoinarg" /><code>{"static bool LocalJoinArg()"}</code> | Prefix on `ApplicationStartupManager.RunStartupActions`: with `/join_local_server`, skips startup and joins the server from the command line. |
| <Link id="m-quitonmenureturn" /><code>{"static bool QuitOnMenuReturn("}<Link to="/game-api/types/alta-player/returntomainmenuaction">{"ReturnToMainMenuAction"}</Link>{" __instance)"}</code> | Prefix on `ReturnToMainMenuAction.LetGoValid` that quits the game instead of going back to the main menu. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-joinresult" /><code>{"private static ServerPlayerConnectionHandlerOld.PlayerJoinResult JoinResult(string tokenString, int playerId)"}</code> | Server side: checks the join token's user id and the player limit and returns an allowed or denied result. |
| <Link id="m-memberstatusfromroles" /><code>{"internal static "}<Link to="/game-api/types/assembly-other/playersubscriberstatus">{"PlayerSubscriberStatus"}</Link>{" MemberStatusFromRoles(string username)"}</code> | Internal: the game status for a username from its roles: `dev` is Developer, `mod` is AltaMod, `supporter` is Subscriber. |
| <Link id="m-webportarg" /><code>{"private static int? WebPortArg()"}</code> | The web port from the dev server web port argument, or null if it is missing or out of range. |

</details>
