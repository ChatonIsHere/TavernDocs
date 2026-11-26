---
title: "ServerDiagnosticsManager"
description: "Server: while the server runs, sends its FPS to players who asked for it and logs profiling data on an interval."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerDiagnosticsManager

A **class** in `Root.Township`, the global namespace.

Server: while the server runs, sends its FPS to players who asked for it and logs profiling data on an interval. Marked obsolete in favour of the new analytics system.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `Obsolete`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerDiagnosticsManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-playerstosendto" /><code>{"static Dictionary<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", bool> PlayersToSendTo"}</code> | Per player, whether they get server FPS messages. Players are added as false the first time they're seen. |
| <Link id="m-serverprofile" /><code>{"static readonly "}<Link to="/mod/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/mod/game-api/types/global-s/serverprofilingdata">{"ServerProfilingData"}</Link>{"> ServerProfile"}</code> | Console event (`ProfilingData`) that receives the profiling data. |

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autoprofile" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" autoProfile"}</code> | Handle for the auto profile coroutine. Not used. |
| <Link id="m-diagnostics" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serverprofilingdata">{"ServerProfilingData"}</Link>{" diagnostics"}</code> | The profiling data being collected. |
| <Link id="m-issending" /><code>{"private bool isSending"}</code> | Inspector Test Send button that calls `SendDiagnosticsToDatabase`. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-sendfpstoclientscoroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" sendFpsToClientsCoroutine"}</code> | The running FPS send coroutine. |
| <Link id="m-sendtodbcoroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" sendToDBCoroutine"}</code> | The running diagnostics coroutine. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"static bool IsActive { get; set; }"}</code> | True while the diagnostics coroutines are running. |

## Methods

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autoprofile-2" /><code>{"private IEnumerator AutoProfile() (iterator)"}</code> | Coroutine that takes a profile sample when FPS drops below 60, then waits 15 minutes. Never started in this code. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops the coroutines. |
| <Link id="m-senddiagnosticstodatabase" /><code>{"private void SendDiagnosticsToDatabase()"}</code> | Caches the profiling data, logs it, fires the `ServerProfile` console event and resets the data. |
| <Link id="m-senddiagnosticstodatabasecoroutine" /><code>{"private IEnumerator SendDiagnosticsToDatabaseCoroutine() (iterator)"}</code> | Coroutine that calls `SendDiagnosticsToDatabase` every `DiagnosticsSendInterval` seconds while the server exists. |
| <Link id="m-sendserverfpstoallclients" /><code>{"private void SendServerFpsToAllClients()"}</code> | Sends a `ServerDiagnostics` message to each player flagged true in `PlayersToSendTo`. |
| <Link id="m-sendserverfpstoclients" /><code>{"private IEnumerator SendServerFpsToClients() (iterator)"}</code> | Coroutine that sends the server FPS every `FpsSendInterval` seconds while the server exists. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Hooks server start and end so the coroutines start and stop with the server. |
| <Link id="m-startupdatingandsending" /><code>{"private void StartUpdatingAndSending()"}</code> | Creates the profiling data, inits the network profiler and starts both coroutines. |
| <Link id="m-stopupdatingandsending" /><code>{"private void StopUpdatingAndSending()"}</code> | Stops both coroutines and clears `IsActive`. |

</details>
