---
title: "Spawner"
description: "class Spawner in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Spawner

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`SpawnerBase`](/game-api/types/global-s/spawnerbase)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Spawner()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-count" /><code>{"private int count"}</code> |
| <Link id="m-distribution" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" distribution"}</code> |
| <Link id="m-isallsame" /><code>{"private bool isAllSame"}</code> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-spawn" /><code>{"override void Spawn()"}</code> |
| <Link id="m-spawnandreplace" /><code>{"void SpawnAndReplace()"}</code> |

## Used in

Members of other types that take, return or hold a `Spawner`:

[`Interactable.ReplaceWith`](/game-api/types/global-i-l/interactable#m-replacewith-2), [`Pickup.ReplaceWith`](/game-api/types/global-p/pickup#m-replacewith-2), [`PickupDockPedestalSpawn.spawner`](/game-api/types/global-p/pickupdockpedestalspawn#m-spawner).
