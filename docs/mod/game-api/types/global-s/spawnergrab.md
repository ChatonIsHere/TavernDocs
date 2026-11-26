---
title: "SpawnerGrab"
description: "Server: when a player grabs this object's pickup, spawns a fresh copy of prefab and swaps it into their hand, like taking an item from an endless pile."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnerGrab

A **class** in `Root.Township`, the global namespace.

Server: when a player grabs this object's pickup, spawns a fresh copy of `prefab` and swaps it into their hand, like taking an item from an endless pile.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnerGrab()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | <span className="api-desc">The prefab handed to the grabbing player.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawntograb" /><code>{"void SpawnToGrab("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Server: spawns `prefab` here and replaces the grabbed pickup with it. The no-argument overload uses this entity's pickup and its first holder.</span> |
| <Link id="m-spawntograb-2" /><code>{"void SpawnToGrab()"}</code> | <span className="api-desc">Server: spawns `prefab` here and replaces the grabbed pickup with it. The no-argument overload uses this entity's pickup and its first holder.</span> |
