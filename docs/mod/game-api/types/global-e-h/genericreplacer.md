---
title: "GenericReplacer"
description: "Replaces this entity with another prefab at the same position and rotation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericReplacer

A **class** in `Root.Township`, the global namespace.

Replaces this entity with another prefab at the same position and rotation. Server only; subclasses can change what happens to the old entity.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`CaveTeleporterReplacer`](/mod/game-api/types/global-c-d/caveteleporterreplacer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericReplacer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnreplace" /><code>{"private bool btnReplace"}</code> | <span className="api-desc">Inspector button that runs `Replace`.</span> |
| <Link id="m-targetprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" targetPrefab"}</code> | <span className="api-desc">Prefab spawned in place of this one.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-replace" /><code>{"void Replace()"}</code> | <span className="api-desc">Server: spawns `targetPrefab` in this entity's chunk and calls `OnReplace`.</span> |
| <Link id="m-onreplace" /><code>{"protected virtual void OnReplace("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" replacing)"}</code> | <span className="api-desc">Called with the new entity after spawning. By default destroys this entity.</span> |
