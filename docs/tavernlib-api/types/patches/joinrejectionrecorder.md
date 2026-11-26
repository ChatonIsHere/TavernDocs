---
title: "JoinRejectionRecorder"
description: "Client patches on JoinServerPipeline and JoinResult that record a server's mod refusal in last_rejection.json and hand over to the launcher to install the..."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JoinRejectionRecorder

A **static class** in `TavernLib`, `TavernLib.Patches`.

Client patches on `JoinServerPipeline` and `JoinResult` that record a server's mod refusal in `last_rejection.json` and hand over to the launcher to install the mods and rejoin. Also owns the Quick join preference.

- **Listed in** [TavernLib.Patches](/tavernlib-api/types/patches)
- **Attributes** `HarmonyPatch`
- **Documented in** [JoinRejectionRecorder](/tavernlib-api/types/patches/joinrejectionrecorder)

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-quickjoin" /><code>{"private static MelonPreferences_Entry<bool> _quickJoin"}</code> | The "Quick join" mod preference, which mirrors the `quick_join` file. |
| <Link id="m-refusedat" /><code>{"private static DateTime _refusedAt"}</code> | When that refusal happened, UTC; a handover only counts within 10 minutes. |
| <Link id="m-refusedby" /><code>{"private static string _refusedBy"}</code> | Name of the server that last refused this client over mods, or null when a handover isn't possible. |
| <Link id="m-shown" /><code>{"private static string _shown"}</code> | The rejection text TavernLib put in the join message, so `ShowWhy` can recognise it. |

</details>

## Properties

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-launcherexe" /><code>{"private static string LauncherExe { get; }"}</code> | Path to the launcher read from the launcher path file, or null if it is missing or gone. |
| <Link id="m-launcherwatching" /><code>{"private static bool LauncherWatching { get; }"}</code> | True when the game was started with `/force_offline`, which the launcher passes and watches for. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attempttoconnecttoserver" /><code>{"static bool AttemptToConnectToServer("}<Link to="/game-api/types/global-i-l/joinserverpipeline">{"JoinServerPipeline"}</Link>{" __instance, ref Task<"}<Link to="/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{"> __result)"}</code> | Prefix on `JoinServerPipeline.AttemptToConnectToServer`: rejoining a server that refused you in the last 10 minutes quits for the launcher instead. |
| <Link id="m-initquickjoin" /><code>{"static void InitQuickJoin()"}</code> | Creates the `TavernLib`/`QuickJoin` MelonPreferences entry, mirroring the `quick_join` file both ways. Called by TavernLib on a client. |
| <Link id="m-onserverrejectedrequest" /><code>{"static void OnServerRejectedRequest("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, ref "}<Link to="/game-api/types/alta-networking/confirmjoinmessage">{"ConfirmJoinMessage"}</Link>{" joinMessage, "}<Link to="/game-api/types/global-i-l/joinserverpipeline">{"JoinServerPipeline"}</Link>{" __instance)"}</code> | Prefix on `JoinServerPipeline.OnServerRejectedRequest`: for a mod refusal, writes `last_rejection.json`, rewrites the message and, with Quick join, quits after 4 seconds. |
| <Link id="m-showwhy" /><code>{"static void ShowWhy("}<Link to="/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{" __instance, ref string __result)"}</code> | Postfix on the `JoinResult.ErrorMessage` getter that shows TavernLib's refusal line instead of the game's fixed one. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handover" /><code>{"private static bool HandOver()"}</code> | Marks the rejection record to rejoin, starts the launcher if it isn't watching, and quits the game; false if that fails. |
| <Link id="m-handoversoon" /><code>{"private static IEnumerator HandOverSoon() (iterator)"}</code> | Coroutine that waits 4 seconds so the player can read the message, then calls `HandOver`. |
| <Link id="m-save" /><code>{"private static void Save(string json)"}</code> | Writes the rejection JSON to `last_rejection.json` through a temp file. |

</details>
