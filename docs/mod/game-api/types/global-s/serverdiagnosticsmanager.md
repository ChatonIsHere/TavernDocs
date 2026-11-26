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
| <Link id="m-ctor" /><code>{"ServerDiagnosticsManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-playerstosendto" /><code>{"static Dictionary<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", bool> PlayersToSendTo"}</code> | <span className="api-desc">Per player, whether they get server FPS messages. Players are added as false the first time they're seen.</span> |
| <Link id="m-serverprofile" /><code>{"static readonly "}<Link to="/mod/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/mod/game-api/types/global-s/serverprofilingdata">{"ServerProfilingData"}</Link>{"> ServerProfile"}</code> | <span className="api-desc">Console event (`ProfilingData`) that receives the profiling data.</span> |

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autoprofile" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" autoProfile"}</code> | <span className="api-desc">Handle for the auto profile coroutine. Not used.</span> |
| <Link id="m-diagnostics" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serverprofilingdata">{"ServerProfilingData"}</Link>{" diagnostics"}</code> | <span className="api-desc">The profiling data being collected.</span> |
| <Link id="m-issending" /><code>{"private bool isSending"}</code> | <span className="api-desc">Inspector Test Send button that calls `SendDiagnosticsToDatabase`.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-sendfpstoclientscoroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" sendFpsToClientsCoroutine"}</code> | <span className="api-desc">The running FPS send coroutine.</span> |
| <Link id="m-sendtodbcoroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" sendToDBCoroutine"}</code> | <span className="api-desc">The running diagnostics coroutine.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"static bool IsActive { get; set; }"}</code> | <span className="api-desc">True while the diagnostics coroutines are running.</span> |

## Methods

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autoprofile-2" /><code>{"private IEnumerator AutoProfile() (iterator)"}</code> | <span className="api-desc">Coroutine that takes a profile sample when FPS drops below 60, then waits 15 minutes. Never started in this code.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops the coroutines.</span> |
| <Link id="m-senddiagnosticstodatabase" /><code>{"private void SendDiagnosticsToDatabase()"}</code> | <span className="api-desc">Caches the profiling data, logs it, fires the `ServerProfile` console event and resets the data.</span> |
| <Link id="m-senddiagnosticstodatabasecoroutine" /><code>{"private IEnumerator SendDiagnosticsToDatabaseCoroutine() (iterator)"}</code> | <span className="api-desc">Coroutine that calls `SendDiagnosticsToDatabase` every `DiagnosticsSendInterval` seconds while the server exists.</span> |
| <Link id="m-sendserverfpstoallclients" /><code>{"private void SendServerFpsToAllClients()"}</code> | <span className="api-desc">Sends a `ServerDiagnostics` message to each player flagged true in `PlayersToSendTo`.</span> |
| <Link id="m-sendserverfpstoclients" /><code>{"private IEnumerator SendServerFpsToClients() (iterator)"}</code> | <span className="api-desc">Coroutine that sends the server FPS every `FpsSendInterval` seconds while the server exists.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Hooks server start and end so the coroutines start and stop with the server.</span> |
| <Link id="m-startupdatingandsending" /><code>{"private void StartUpdatingAndSending()"}</code> | <span className="api-desc">Creates the profiling data, inits the network profiler and starts both coroutines.</span> |
| <Link id="m-stopupdatingandsending" /><code>{"private void StopUpdatingAndSending()"}</code> | <span className="api-desc">Stops both coroutines and clears `IsActive`.</span> |

</details>
