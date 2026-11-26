---
title: "GenericReplacer"
description: "Replaces this entity with another prefab at the same position and rotation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericReplacer

A **class** in `Root.Township`, no namespace.

Replaces this entity with another prefab at the same position and rotation. Server only; subclasses can change what happens to the old entity.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`CaveTeleporterReplacer`](/game-api/types/global-c-d/caveteleporterreplacer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericReplacer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnreplace" /><code>{"private bool btnReplace"}</code> | Inspector button that runs `Replace`. |
| <Link id="m-targetprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" targetPrefab"}</code> | Prefab spawned in place of this one. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-replace" /><code>{"void Replace()"}</code> | Server: spawns `targetPrefab` in this entity's chunk and calls `OnReplace`. |
| <Link id="m-onreplace" /><code>{"protected virtual void OnReplace("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" replacing)"}</code> | Called with the new entity after spawning. By default destroys this entity. |
