---
title: "PotatoSapling"
description: "class PotatoSapling in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PotatoSapling

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`GeneratedNetworkEntityBehaviour`](/game-api/types/alta-networking/generatednetworkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PotatoSapling()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-disposable" /><code>{"private "}<Link to="/game-api/types/global-c-d/disposablepickup">{"DisposablePickup"}</Link>{" disposable"}</code> |
| <Link id="m-growergroup" /><code>{"private "}<Link to="/game-api/types/global-e-h/growergroup">{"GrowerGroup"}</Link>{" growerGroup"}</code> |
| <Link id="m-growth" /><code>{"private "}<Link to="/game-api/types/global-e-h/growthdefinition">{"GrowthDefinition"}</Link>{" growth"}</code> |
| <Link id="m-maximum" /><code>{"private int maximum"}</code> |
| <Link id="m-minimum" /><code>{"private int minimum"}</code> |
| <Link id="m-positions" /><code>{"private "}<Link to="/game-api/types/global-s/spawnpositions">{"SpawnPositions"}</Link>{" positions"}</code> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> |
| <Link id="m-probabilitycurve" /><code>{"private AnimationCurve probabilityCurve"}</code> |
| <Link id="m-pullpickupgroup" /><code>{"private "}<Link to="/game-api/types/global-p/pullpickupgroup">{"PullPickupGroup"}</Link>{" pullPickupGroup"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
| <Link id="m-generate" /><code>{"protected override void Generate("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |

<details>
<summary>7 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-addpickup" /><code>{"private void AddPickup("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |
| <Link id="m-checkdispose" /><code>{"private void CheckDispose()"}</code> |
| <Link id="m-evaluatecount" /><code>{"private int EvaluateCount()"}</code> |
| <Link id="m-pickuppulled" /><code>{"private void PickupPulled("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |
| <Link id="m-removepickup" /><code>{"private void RemovePickup("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |
| <Link id="m-setup" /><code>{"private void Setup("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" child, int index)"}</code> |
| <Link id="m-spawnchildren" /><code>{"private void SpawnChildren("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData, int quantity)"}</code> |

</details>
