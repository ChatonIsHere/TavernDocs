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
| <Link id="m-ctor" /><code>{"LifeTimeEffect()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effectDefinition"}</code> | <span className="api-desc">Pool definition of the effect.</span> |
| <Link id="m-pooledeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledEffect"}</code> | <span className="api-desc">The live effect, or null.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-releaseeffect" /><code>{"void ReleaseEffect()"}</code> | <span className="api-desc">Returns the effect to its pool.</span> |
| <Link id="m-seteffect" /><code>{"void SetEffect("}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effectDefinition)"}</code> | <span className="api-desc">Changes which pooled effect to spawn.</span> |
| <Link id="m-spawnat" /><code>{"void SpawnAt(Transform target)"}</code> | <span className="api-desc">Spawns the effect at a transform's position and rotation, if one isn't already alive.</span> |
| <Link id="m-spawnatparented" /><code>{"void SpawnAtParented(Transform target)"}</code> | <span className="api-desc">Spawns the effect as a child of a transform, if one isn't already alive.</span> |
