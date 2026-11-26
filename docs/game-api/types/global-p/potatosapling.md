---
title: "PotatoSapling"
description: "Server: a plant that spawns a random number of pullable crops (potatoes and the like) at set positions, and disposes of itself once all are pulled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PotatoSapling

A **class** in `Root.Township`, no namespace.

Server: a plant that spawns a random number of pullable crops (potatoes and the like) at set positions, and disposes of itself once all are pulled.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`GeneratedNetworkEntityBehaviour`](/game-api/types/alta-networking/generatednetworkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PotatoSapling()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disposable" /><code>{"private "}<Link to="/game-api/types/global-c-d/disposablepickup">{"DisposablePickup"}</Link>{" disposable"}</code> | Disposes the plant once empty. |
| <Link id="m-growergroup" /><code>{"private "}<Link to="/game-api/types/global-e-h/growergroup">{"GrowerGroup"}</Link>{" growerGroup"}</code> | Optional group that grows crops over time. |
| <Link id="m-growth" /><code>{"private "}<Link to="/game-api/types/global-e-h/growthdefinition">{"GrowthDefinition"}</Link>{" growth"}</code> | Growth to plant at each position. Use this or `prefab`. |
| <Link id="m-maximum" /><code>{"private int maximum"}</code> | Most crops to spawn (default 5). |
| <Link id="m-minimum" /><code>{"private int minimum"}</code> | Fewest crops to spawn (default 1). |
| <Link id="m-positions" /><code>{"private "}<Link to="/game-api/types/global-s/spawnpositions">{"SpawnPositions"}</Link>{" positions"}</code> | Spawn positions for the crops. |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | Crop prefab spawned directly when `growth` is not set. |
| <Link id="m-probabilitycurve" /><code>{"private AnimationCurve probabilityCurve"}</code> | Curve that weights the crop count. |
| <Link id="m-pullpickupgroup" /><code>{"private "}<Link to="/game-api/types/global-p/pullpickupgroup">{"PullPickupGroup"}</Link>{" pullPickupGroup"}</code> | Group of crops that can be pulled out. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Hooks the grower group and pull group, adds existing crops, and disposes at once if there are none. |
| <Link id="m-generate" /><code>{"protected override void Generate("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | At generation, spawns the picked number of crops. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addpickup" /><code>{"private void AddPickup("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Adds a grown pickup to the pull group. |
| <Link id="m-checkdispose" /><code>{"private void CheckDispose()"}</code> | Disposes the plant if nothing is left to pull. |
| <Link id="m-evaluatecount" /><code>{"private int EvaluateCount()"}</code> | Picks a count between `minimum` and `maximum`, weighted by `probabilityCurve`. |
| <Link id="m-pickuppulled" /><code>{"private void PickupPulled("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | When the last crop is pulled, checks a frame later whether to dispose. |
| <Link id="m-removepickup" /><code>{"private void RemovePickup("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Removes a pickup from the pull group. |
| <Link id="m-setup" /><code>{"private void Setup("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" child, int index)"}</code> | Adds a spawned crop's pickup to the pull group. |
| <Link id="m-spawnchildren" /><code>{"private void SpawnChildren("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData, int quantity)"}</code> | Spawns each crop as `prefab` or, if `growth` is set, adds it to the grower group to grow. |

</details>
