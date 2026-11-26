---
title: "PracticeObjectFader"
description: "A practice object at a skill shrine test area that fades in and out."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PracticeObjectFader

A **class** in `Root.Township`, no namespace.

A practice object at a skill shrine test area that fades in and out. Syncs which test area it belongs to, and on clients stops the fade and shows fully once docked.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`FadeInOutNetworkEntity`](/game-api/types/global-e-h/fadeinoutnetworkentity), [`INetworkEntityBehaviour`](/game-api/types/alta-networking/inetworkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PracticeObjectFader()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | The pickup on this object. |
| <Link id="m-syncshrine" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncShrine"}</code> | Sync for the test area. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-registertestingarea" /><code>{"override void RegisterTestingArea("}<Link to="/game-api/types/global-s/skillshrinetestingarea">{"SkillShrineTestingArea"}</Link>{" testingArea)"}</code> | Links the object to a test area. On the server, also sends it to clients. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Client: hooks the pickup's `Docked` event. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-forcefinish" /><code>{"private void ForceFinish("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg1, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arg2, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" arg3)"}</code> | Stops any fade and shows the object fully. |
| <Link id="m-initialize" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.Initialize()"}</code> | Sets up the test area sync. |
| <Link id="m-initializeasserver" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Does nothing. |
| <Link id="m-onconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the test area to a joining player. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks from the test area's orb event. |
| <Link id="m-ondisconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Does nothing. |
| <Link id="m-syncshrine-2" /><code>{"private void SyncShrine("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sends or reads the test area's entity id; clients wait for it to spawn and register it. |

</details>
