---
title: "TeenyPatches"
description: "A class in TavernLib, TavernLib.Patches."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TeenyPatches

A **class** in `TavernLib`, `TavernLib.Patches`.

A **class** in `TavernLib`, `TavernLib.Patches`.

- **Listed in** [TavernLib.Patches](/tavernlib-api/types/patches)
- **Attributes** `HarmonyPatch`
- **Documented in** [TeenyPatches](/tavernlib-api/types/patches/teenypatches)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TeenyPatches()"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-alwaysallowanyitem" /><code>{"static bool AlwaysAllowAnyItem(ref Task<bool> __result)"}</code> |  |
| <Link id="m-checkjointoken" /><code>{"static bool CheckJoinToken(string tokenString, int playerId, ref Task<ServerPlayerConnectionHandlerOld.PlayerJoinResult> __result)"}</code> |  |
| <Link id="m-disallowpaidcosmetics" /><code>{"static bool DisallowPaidCosmetics(ref Task __result, "}<Link to="/game-api/types/alta-customization/purchasedlist">{"PurchasedList"}</Link>{" __instance)"}</code> |  |
| <Link id="m-isconnectedtointernetinternal-postfix" /><code>{"static void IsConnectedToInternetInternal_Postfix(ref bool __result)"}</code> |  |
| <Link id="m-localcreatecosmeticpreset" /><code>{"static bool LocalCreateCosmeticPreset(int presetId, uint[] data, int byteSize, ref Task<"}<Link to="/game-api/types/assembly-api-models/userpresetdatainfo">{"UserPresetDataInfo"}</Link>{"> __result)"}</code> |  |
| <Link id="m-localdeletecosmeticpreset" /><code>{"static bool LocalDeleteCosmeticPreset(int presetId, ref Task __result)"}</code> |  |
| <Link id="m-localdeletecosmeticpreset-2" /><code>{"static bool LocalDeleteCosmeticPreset(ref Task __result)"}</code> |  |
| <Link id="m-localdeletecosmeticpreset-3" /><code>{"static bool LocalDeleteCosmeticPreset("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" __instance)"}</code> |  |
| <Link id="m-localgameserverinfo-postfix" /><code>{"static void LocalGameServerInfo_Postfix(int sceneIndex, ref "}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" __result)"}</code> |  |
| <Link id="m-localgetallcosmeticpresets" /><code>{"static bool LocalGetAllCosmeticPresets(ref Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/userpresetdatainfo">{"UserPresetDataInfo"}</Link>{">> __result)"}</code> |  |
| <Link id="m-localjoinarg" /><code>{"static bool LocalJoinArg()"}</code> |  |
| <Link id="m-quitonmenureturn" /><code>{"static bool QuitOnMenuReturn("}<Link to="/game-api/types/alta-player/returntomainmenuaction">{"ReturnToMainMenuAction"}</Link>{" __instance)"}</code> |  |
| <Link id="m-joinresult" /><code>{"private static ServerPlayerConnectionHandlerOld.PlayerJoinResult JoinResult(string tokenString, int playerId)"}</code> |  |
| <Link id="m-memberstatusfromroles" /><code>{"internal static "}<Link to="/game-api/types/assembly-other/playersubscriberstatus">{"PlayerSubscriberStatus"}</Link>{" MemberStatusFromRoles(string username)"}</code> |  |
| <Link id="m-webportarg" /><code>{"private static int? WebPortArg()"}</code> |  |
