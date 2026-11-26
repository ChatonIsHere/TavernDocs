---
title: "TeleporterPlatform"
description: "Platform that fires finished after a player stands on it for duration seconds, with progress events for visuals."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TeleporterPlatform

A **class** in `Root.Township`, no namespace.

Platform that fires `finished` after a player stands on it for `duration` seconds, with progress events for visuals. The local client times it and tells the server, which relays to others.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TeleporterPlatform()"}</code> |

## Fields

<details>
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"private float duration"}</code> | Seconds a player must stand on the platform. |
| <Link id="m-fadeduration" /><code>{"private float fadeDuration"}</code> | Seconds for the visual progress to fall back to zero. |
| <Link id="m-finished" /><code>{"private "}<Link to="/game-api/types/global-c-d/charactercontrollerevent">{"CharacterControllerEvent"}</Link>{" finished"}</code> | Event raised with the player controller when the timer completes. |
| <Link id="m-islocalpressing" /><code>{"private bool isLocalPressing"}</code> | True while the local player is on the platform. |
| <Link id="m-isnetworked" /><code>{"private bool isNetworked"}</code> | True once initialized as a network entity; then a local player is required. |
| <Link id="m-isprogressing" /><code>{"private bool isProgressing"}</code> | True while anyone is pressing. |
| <Link id="m-isremotepressing" /><code>{"private bool isRemotePressing"}</code> | Last pressing state received over the network. |
| <Link id="m-localcharacter" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" localCharacter"}</code> | The local player standing on the platform. |
| <Link id="m-localendtime" /><code>{"private float localEndTime"}</code> | Time the local player's wait completes. |
| <Link id="m-pressing" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> pressing"}</code> | Server: players currently on the platform. |
| <Link id="m-progresschanged" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" progressChanged"}</code> | Event raised with the curved progress value each update. |
| <Link id="m-progresscurve" /><code>{"private AnimationCurve progressCurve"}</code> | Curve that maps progress to the value sent to `progressChanged`. |
| <Link id="m-progressingchanged" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{" progressingChanged"}</code> | Event raised when the platform starts or stops progressing. |
| <Link id="m-syncfinish" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFinish"}</code> | Method sync for finishing. |
| <Link id="m-syncpressing" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPressing"}</code> | Method sync for the pressing state. |
| <Link id="m-trigger" /><code>{"private "}<Link to="/game-api/types/global-t-x/triggershape">{"TriggerShape"}</Link>{" trigger"}</code> | Trigger shape players stand in. |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Registered update method while progress is moving. |
| <Link id="m-visualprogress" /><code>{"private float visualProgress"}</code> | Progress from 0 to 1 shown to the player. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the pressing and finished method syncs and marks the platform as networked. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: tells a joining player the platform is pressed, if anyone is on it. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Subscribes to the trigger's enter and exit events. |
| <Link id="m-entered" /><code>{"private void Entered(Collider collider)"}</code> | When the local player steps on, starts the timer and tells the server they're pressing. |
| <Link id="m-exited" /><code>{"private void Exited(Collider collider)"}</code> | When the local player steps off, stops the timer and tells the server. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unsubscribes from players and stops updating. |
| <Link id="m-onprogressingchanged" /><code>{"private void OnProgressingChanged()"}</code> | Raises `progressingChanged` when anyone starts or stops pressing and starts the progress update. |
| <Link id="m-removeplayer" /><code>{"private void RemovePlayer("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Drops a destroyed player from the pressing set. |
| <Link id="m-syncfinished" /><code>{"private void SyncFinished("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Server: on a finish from a pressing player, raises `finished` and relays. Clients raise `finished` with null. |
| <Link id="m-syncpressing-2" /><code>{"private void SyncPressing("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sends whether this side is pressing; the server tracks which players are on the platform. |
| <Link id="m-updateprogress" /><code>{"private void UpdateProgress()"}</code> | Each frame: finishes the local timer when it runs out, moves the visual progress up or down and raises `progressChanged`. |

</details>
