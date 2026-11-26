---
title: "RespawnBeaconController"
description: "Client: spawns a beacon view for each powered (non-global) respawn shrine and updates it when the respawn model changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnBeaconController

A **class** in `Root.Township`, `ATT.Respawn`.

Client: spawns a beacon view for each powered (non-global) respawn shrine and updates it when the respawn model changes.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IRespawnBeaconController`](/mod/game-api/types/game-other-namespaces/irespawnbeaconcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RespawnBeaconController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |
| <Link id="m-respawnbeaconviews" /><code>{"private Dictionary<Guid, "}<Link to="/mod/game-api/types/game-other-namespaces/irespawnbeaconview">{"IRespawnBeaconView"}</Link>{"> respawnBeaconViews"}</code> | Beacon views by shrine ID. |
| <Link id="m-respawnsystem" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystem">{"IRespawnSystem"}</Link>{" respawnSystem"}</code> | Injected respawn system. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-systemsettings" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystemsettings">{"IRespawnSystemSettings"}</Link>{" SystemSettings { get; }"}</code> | The global `RespawnSystemSettings`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Only calls the base method. |
| <Link id="m-onmodelchanged" /><code>{"void OnModelChanged("}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{" model)"}</code> | Client: spawns the beacons on the first update, then passes each shrine's model to its beacon view. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-inject" /><code>{"private void Inject("}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystem">{"IRespawnSystem"}</Link>{" respawnSystem)"}</code> | VContainer injection of the respawn system. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops listening to model changes. |
| <Link id="m-spawnallbeaconviews" /><code>{"private void SpawnAllBeaconViews("}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{" model)"}</code> | Spawns a beacon view for every shrine in the model that isn't the global shrine. |
| <Link id="m-spawnbeaconviewforshrine" /><code>{"private void SpawnBeaconViewForShrine(Guid shrineId)"}</code> | Takes a pooled beacon from the shrine's settings, places it at the beacon position and stores its view. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Creates the view lookup and listens to the respawn system's model changes. |

</details>
