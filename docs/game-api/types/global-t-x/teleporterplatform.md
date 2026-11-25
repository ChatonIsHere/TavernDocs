---
title: "TeleporterPlatform"
description: "class TeleporterPlatform in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TeleporterPlatform

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TeleporterPlatform()"}</code> |

## Fields

<details>
<summary>18 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-duration" /><code>{"private float duration"}</code> |
| <Link id="m-fadeduration" /><code>{"private float fadeDuration"}</code> |
| <Link id="m-finished" /><code>{"private "}<Link to="/game-api/types/global-c-d/charactercontrollerevent">{"CharacterControllerEvent"}</Link>{" finished"}</code> |
| <Link id="m-islocalpressing" /><code>{"private bool isLocalPressing"}</code> |
| <Link id="m-isnetworked" /><code>{"private bool isNetworked"}</code> |
| <Link id="m-isprogressing" /><code>{"private bool isProgressing"}</code> |
| <Link id="m-isremotepressing" /><code>{"private bool isRemotePressing"}</code> |
| <Link id="m-localcharacter" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" localCharacter"}</code> |
| <Link id="m-localendtime" /><code>{"private float localEndTime"}</code> |
| <Link id="m-pressing" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> pressing"}</code> |
| <Link id="m-progresschanged" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" progressChanged"}</code> |
| <Link id="m-progresscurve" /><code>{"private AnimationCurve progressCurve"}</code> |
| <Link id="m-progressingchanged" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{" progressingChanged"}</code> |
| <Link id="m-syncfinish" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFinish"}</code> |
| <Link id="m-syncpressing" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPressing"}</code> |
| <Link id="m-trigger" /><code>{"private "}<Link to="/game-api/types/global-t-x/triggershape">{"TriggerShape"}</Link>{" trigger"}</code> |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |
| <Link id="m-visualprogress" /><code>{"private float visualProgress"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |

<details>
<summary>9 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-entered" /><code>{"private void Entered(Collider collider)"}</code> |
| <Link id="m-exited" /><code>{"private void Exited(Collider collider)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-onprogressingchanged" /><code>{"private void OnProgressingChanged()"}</code> |
| <Link id="m-removeplayer" /><code>{"private void RemovePlayer("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |
| <Link id="m-syncfinished" /><code>{"private void SyncFinished("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-syncpressing-2" /><code>{"private void SyncPressing("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-updateprogress" /><code>{"private void UpdateProgress()"}</code> |

</details>
