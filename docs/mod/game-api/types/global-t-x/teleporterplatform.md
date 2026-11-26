---
title: "TeleporterPlatform"
description: "Platform that fires finished after a player stands on it for duration seconds, with progress events for visuals."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TeleporterPlatform

A **class** in `Root.Township`, the global namespace.

Platform that fires `finished` after a player stands on it for `duration` seconds, with progress events for visuals. The local client times it and tells the server, which relays to others.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TeleporterPlatform()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"private float duration"}</code> | <span className="api-desc">Seconds a player must stand on the platform.</span> |
| <Link id="m-fadeduration" /><code>{"private float fadeDuration"}</code> | <span className="api-desc">Seconds for the visual progress to fall back to zero.</span> |
| <Link id="m-finished" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/charactercontrollerevent">{"CharacterControllerEvent"}</Link>{" finished"}</code> | <span className="api-desc">Event raised with the player controller when the timer completes.</span> |
| <Link id="m-islocalpressing" /><code>{"private bool isLocalPressing"}</code> | <span className="api-desc">True while the local player is on the platform.</span> |
| <Link id="m-isnetworked" /><code>{"private bool isNetworked"}</code> | <span className="api-desc">True once initialized as a network entity; then a local player is required.</span> |
| <Link id="m-isprogressing" /><code>{"private bool isProgressing"}</code> | <span className="api-desc">True while anyone is pressing.</span> |
| <Link id="m-isremotepressing" /><code>{"private bool isRemotePressing"}</code> | <span className="api-desc">Last pressing state received over the network.</span> |
| <Link id="m-localcharacter" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" localCharacter"}</code> | <span className="api-desc">The local player standing on the platform.</span> |
| <Link id="m-localendtime" /><code>{"private float localEndTime"}</code> | <span className="api-desc">Time the local player's wait completes.</span> |
| <Link id="m-pressing" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> pressing"}</code> | <span className="api-desc">Server: players currently on the platform.</span> |
| <Link id="m-progresschanged" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" progressChanged"}</code> | <span className="api-desc">Event raised with the curved progress value each update.</span> |
| <Link id="m-progresscurve" /><code>{"private AnimationCurve progressCurve"}</code> | <span className="api-desc">Curve that maps progress to the value sent to `progressChanged`.</span> |
| <Link id="m-progressingchanged" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{" progressingChanged"}</code> | <span className="api-desc">Event raised when the platform starts or stops progressing.</span> |
| <Link id="m-syncfinish" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFinish"}</code> | <span className="api-desc">Method sync for finishing.</span> |
| <Link id="m-syncpressing" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPressing"}</code> | <span className="api-desc">Method sync for the pressing state.</span> |
| <Link id="m-trigger" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/triggershape">{"TriggerShape"}</Link>{" trigger"}</code> | <span className="api-desc">Trigger shape players stand in.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Registered update method while progress is moving.</span> |
| <Link id="m-visualprogress" /><code>{"private float visualProgress"}</code> | <span className="api-desc">Progress from 0 to 1 shown to the player.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the pressing and finished method syncs and marks the platform as networked.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: tells a joining player the platform is pressed, if anyone is on it.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Subscribes to the trigger's enter and exit events.</span> |
| <Link id="m-entered" /><code>{"private void Entered(Collider collider)"}</code> | <span className="api-desc">When the local player steps on, starts the timer and tells the server they're pressing.</span> |
| <Link id="m-exited" /><code>{"private void Exited(Collider collider)"}</code> | <span className="api-desc">When the local player steps off, stops the timer and tells the server.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unsubscribes from players and stops updating.</span> |
| <Link id="m-onprogressingchanged" /><code>{"private void OnProgressingChanged()"}</code> | <span className="api-desc">Raises `progressingChanged` when anyone starts or stops pressing and starts the progress update.</span> |
| <Link id="m-removeplayer" /><code>{"private void RemovePlayer("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Drops a destroyed player from the pressing set.</span> |
| <Link id="m-syncfinished" /><code>{"private void SyncFinished("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Server: on a finish from a pressing player, raises `finished` and relays. Clients raise `finished` with null.</span> |
| <Link id="m-syncpressing-2" /><code>{"private void SyncPressing("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sends whether this side is pressing; the server tracks which players are on the platform.</span> |
| <Link id="m-updateprogress" /><code>{"private void UpdateProgress()"}</code> | <span className="api-desc">Each frame: finishes the local timer when it runs out, moves the visual progress up or down and raises `progressChanged`.</span> |

</details>
