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

- **Listed in** [TavernLib.Patches](/mod/tavernlib-api/types/patches)
- **Attributes** `HarmonyPatch`

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-quickjoin" /><code>{"private static MelonPreferences_Entry<bool> _quickJoin"}</code> | <span className="api-desc">The "Quick join" mod preference, which mirrors the `quick_join` file.</span> |
| <Link id="m-refusedat" /><code>{"private static DateTime _refusedAt"}</code> | <span className="api-desc">When that refusal happened, UTC; a handover only counts within 10 minutes.</span> |
| <Link id="m-refusedby" /><code>{"private static string _refusedBy"}</code> | <span className="api-desc">Name of the server that last refused this client over mods, or null when a handover isn't possible.</span> |
| <Link id="m-shown" /><code>{"private static string _shown"}</code> | <span className="api-desc">The rejection text TavernLib put in the join message, so `ShowWhy` can recognise it.</span> |

</details>

## Properties

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-launcherexe" /><code>{"private static string LauncherExe { get; }"}</code> | <span className="api-desc">Path to the launcher read from the launcher path file, or null if it is missing or gone.</span> |
| <Link id="m-launcherwatching" /><code>{"private static bool LauncherWatching { get; }"}</code> | <span className="api-desc">True when the game was started with `/force_offline`, which the launcher passes and watches for.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attempttoconnecttoserver" /><code>{"static bool AttemptToConnectToServer("}<Link to="/mod/game-api/types/global-i-l/joinserverpipeline">{"JoinServerPipeline"}</Link>{" __instance, ref Task<"}<Link to="/mod/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{"> __result)"}</code> | <span className="api-desc">Prefix on `JoinServerPipeline.AttemptToConnectToServer`: rejoining a server that refused you in the last 10 minutes quits for the launcher instead.</span> |
| <Link id="m-initquickjoin" /><code>{"static void InitQuickJoin()"}</code> | <span className="api-desc">Creates the `TavernLib`/`QuickJoin` MelonPreferences entry, mirroring the `quick_join` file both ways. Called by TavernLib on a client.</span> |
| <Link id="m-onserverrejectedrequest" /><code>{"static void OnServerRejectedRequest("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, ref "}<Link to="/mod/game-api/types/alta-networking/confirmjoinmessage">{"ConfirmJoinMessage"}</Link>{" joinMessage, "}<Link to="/mod/game-api/types/global-i-l/joinserverpipeline">{"JoinServerPipeline"}</Link>{" __instance)"}</code> | <span className="api-desc">Prefix on `JoinServerPipeline.OnServerRejectedRequest`: for a mod refusal, writes `last_rejection.json`, rewrites the message and, with Quick join, quits after 4 seconds.</span> |
| <Link id="m-showwhy" /><code>{"static void ShowWhy("}<Link to="/mod/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{" __instance, ref string __result)"}</code> | <span className="api-desc">Postfix on the `JoinResult.ErrorMessage` getter that shows TavernLib's refusal line instead of the game's fixed one.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handover" /><code>{"private static bool HandOver()"}</code> | <span className="api-desc">Marks the rejection record to rejoin, starts the launcher if it isn't watching, and quits the game; false if that fails.</span> |
| <Link id="m-handoversoon" /><code>{"private static IEnumerator HandOverSoon() (iterator)"}</code> | <span className="api-desc">Coroutine that waits 4 seconds so the player can read the message, then calls `HandOver`.</span> |
| <Link id="m-save" /><code>{"private static void Save(string json)"}</code> | <span className="api-desc">Writes the rejection JSON to `last_rejection.json` through a temp file.</span> |

</details>
