---
title: "JoinRejectionRecorder"
description: "A static class in TavernLib, TavernLib.Patches."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JoinRejectionRecorder

A **static class** in `TavernLib`, `TavernLib.Patches`.

A **static class** in `TavernLib`, `TavernLib.Patches`.

- **Listed in** [TavernLib.Patches](/tavernlib-api/types/patches)
- **Attributes** `HarmonyPatch`
- **Documented in** [JoinRejectionRecorder](/tavernlib-api/types/patches/joinrejectionrecorder)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-quickjoin" /><code>{"private static MelonPreferences_Entry<bool> _quickJoin"}</code> |  |
| <Link id="m-refusedat" /><code>{"private static DateTime _refusedAt"}</code> |  |
| <Link id="m-refusedby" /><code>{"private static string _refusedBy"}</code> |  |
| <Link id="m-shown" /><code>{"private static string _shown"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-launcherexe" /><code>{"private static string LauncherExe { get; }"}</code> |  |
| <Link id="m-launcherwatching" /><code>{"private static bool LauncherWatching { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attempttoconnecttoserver" /><code>{"static bool AttemptToConnectToServer("}<Link to="/game-api/types/global-i-l/joinserverpipeline">{"JoinServerPipeline"}</Link>{" __instance, ref Task<"}<Link to="/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{"> __result)"}</code> |  |
| <Link id="m-initquickjoin" /><code>{"static void InitQuickJoin()"}</code> |  |
| <Link id="m-onserverrejectedrequest" /><code>{"static void OnServerRejectedRequest("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, ref "}<Link to="/game-api/types/alta-networking/confirmjoinmessage">{"ConfirmJoinMessage"}</Link>{" joinMessage, "}<Link to="/game-api/types/global-i-l/joinserverpipeline">{"JoinServerPipeline"}</Link>{" __instance)"}</code> |  |
| <Link id="m-showwhy" /><code>{"static void ShowWhy("}<Link to="/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{" __instance, ref string __result)"}</code> |  |
| <Link id="m-handover" /><code>{"private static bool HandOver()"}</code> |  |
| <Link id="m-handoversoon" /><code>{"private static IEnumerator HandOverSoon() (iterator)"}</code> |  |
| <Link id="m-save" /><code>{"private static void Save(string json)"}</code> |  |
