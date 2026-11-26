---
title: "LifeTimeEffect"
description: "Spawns one pooled effect on request and releases it later, so only one copy is alive at a time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LifeTimeEffect

A **class** in `Root.Township`, the global namespace.

Spawns one pooled effect on request and releases it later, so only one copy is alive at a time.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LifeTimeEffect()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effectDefinition"}</code> | Pool definition of the effect. |
| <Link id="m-pooledeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledEffect"}</code> | The live effect, or null. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-releaseeffect" /><code>{"void ReleaseEffect()"}</code> | Returns the effect to its pool. |
| <Link id="m-seteffect" /><code>{"void SetEffect("}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effectDefinition)"}</code> | Changes which pooled effect to spawn. |
| <Link id="m-spawnat" /><code>{"void SpawnAt(Transform target)"}</code> | Spawns the effect at a transform's position and rotation, if one isn't already alive. |
| <Link id="m-spawnatparented" /><code>{"void SpawnAtParented(Transform target)"}</code> | Spawns the effect as a child of a transform, if one isn't already alive. |
