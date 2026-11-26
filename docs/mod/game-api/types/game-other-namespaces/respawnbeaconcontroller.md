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
| <Link id="m-ctor" /><code>{"RespawnBeaconController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-respawnbeaconviews" /><code>{"private Dictionary<Guid, "}<Link to="/mod/game-api/types/game-other-namespaces/irespawnbeaconview">{"IRespawnBeaconView"}</Link>{"> respawnBeaconViews"}</code> | <span className="api-desc">Beacon views by shrine ID.</span> |
| <Link id="m-respawnsystem" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystem">{"IRespawnSystem"}</Link>{" respawnSystem"}</code> | <span className="api-desc">Injected respawn system.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-systemsettings" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystemsettings">{"IRespawnSystemSettings"}</Link>{" SystemSettings { get; }"}</code> | <span className="api-desc">The global `RespawnSystemSettings`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Only calls the base method.</span> |
| <Link id="m-onmodelchanged" /><code>{"void OnModelChanged("}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{" model)"}</code> | <span className="api-desc">Client: spawns the beacons on the first update, then passes each shrine's model to its beacon view.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-inject" /><code>{"private void Inject("}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystem">{"IRespawnSystem"}</Link>{" respawnSystem)"}</code> | <span className="api-desc">VContainer injection of the respawn system.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops listening to model changes.</span> |
| <Link id="m-spawnallbeaconviews" /><code>{"private void SpawnAllBeaconViews("}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{" model)"}</code> | <span className="api-desc">Spawns a beacon view for every shrine in the model that isn't the global shrine.</span> |
| <Link id="m-spawnbeaconviewforshrine" /><code>{"private void SpawnBeaconViewForShrine(Guid shrineId)"}</code> | <span className="api-desc">Takes a pooled beacon from the shrine's settings, places it at the beacon position and stores its view.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Creates the view lookup and listens to the respawn system's model changes.</span> |

</details>
