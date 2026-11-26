---
title: "PotatoSapling"
description: "Server: a plant that spawns a random number of pullable crops (potatoes and the like) at set positions, and disposes of itself once all are pulled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PotatoSapling

A **class** in `Root.Township`, the global namespace.

Server: a plant that spawns a random number of pullable crops (potatoes and the like) at set positions, and disposes of itself once all are pulled.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`GeneratedNetworkEntityBehaviour`](/mod/game-api/types/alta-networking/generatednetworkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PotatoSapling()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disposable" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/disposablepickup">{"DisposablePickup"}</Link>{" disposable"}</code> | <span className="api-desc">Disposes the plant once empty.</span> |
| <Link id="m-growergroup" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/growergroup">{"GrowerGroup"}</Link>{" growerGroup"}</code> | <span className="api-desc">Optional group that grows crops over time.</span> |
| <Link id="m-growth" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/growthdefinition">{"GrowthDefinition"}</Link>{" growth"}</code> | <span className="api-desc">Growth to plant at each position. Use this or `prefab`.</span> |
| <Link id="m-maximum" /><code>{"private int maximum"}</code> | <span className="api-desc">Most crops to spawn (default 5).</span> |
| <Link id="m-minimum" /><code>{"private int minimum"}</code> | <span className="api-desc">Fewest crops to spawn (default 1).</span> |
| <Link id="m-positions" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spawnpositions">{"SpawnPositions"}</Link>{" positions"}</code> | <span className="api-desc">Spawn positions for the crops.</span> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | <span className="api-desc">Crop prefab spawned directly when `growth` is not set.</span> |
| <Link id="m-probabilitycurve" /><code>{"private AnimationCurve probabilityCurve"}</code> | <span className="api-desc">Curve that weights the crop count.</span> |
| <Link id="m-pullpickupgroup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pullpickupgroup">{"PullPickupGroup"}</Link>{" pullPickupGroup"}</code> | <span className="api-desc">Group of crops that can be pulled out.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Hooks the grower group and pull group, adds existing crops, and disposes at once if there are none.</span> |
| <Link id="m-generate" /><code>{"protected override void Generate("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">At generation, spawns the picked number of crops.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addpickup" /><code>{"private void AddPickup("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Adds a grown pickup to the pull group.</span> |
| <Link id="m-checkdispose" /><code>{"private void CheckDispose()"}</code> | <span className="api-desc">Disposes the plant if nothing is left to pull.</span> |
| <Link id="m-evaluatecount" /><code>{"private int EvaluateCount()"}</code> | <span className="api-desc">Picks a count between `minimum` and `maximum`, weighted by `probabilityCurve`.</span> |
| <Link id="m-pickuppulled" /><code>{"private void PickupPulled("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">When the last crop is pulled, checks a frame later whether to dispose.</span> |
| <Link id="m-removepickup" /><code>{"private void RemovePickup("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Removes a pickup from the pull group.</span> |
| <Link id="m-setup" /><code>{"private void Setup("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" child, int index)"}</code> | <span className="api-desc">Adds a spawned crop's pickup to the pull group.</span> |
| <Link id="m-spawnchildren" /><code>{"private void SpawnChildren("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData, int quantity)"}</code> | <span className="api-desc">Spawns each crop as `prefab` or, if `growth` is set, adds it to the grower group to grow.</span> |

</details>
