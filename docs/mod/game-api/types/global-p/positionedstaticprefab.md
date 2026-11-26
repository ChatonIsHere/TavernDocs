---
title: "PositionedStaticPrefab"
description: "A saved plain prefab with a local position and rotation, spawned under a parent transform when a chunk loads it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionedStaticPrefab

A **class** in `Root.Township`, the global namespace.

A saved plain prefab with a local position and rotation, spawned under a parent transform when a chunk loads it.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`PositionedPrefab<GameObject>`](/mod/game-api/types/global-p/positionedprefab-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PositionedStaticPrefab()"}</code> | <span className="api-desc">Creates a `PositionedStaticPrefab` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-prefab" /><code>{"private GameObject prefab"}</code> | <span className="api-desc">Prefab to instantiate on load.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"override GameObject Load(Transform transformParent, "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Instantiates the prefab under the given parent at the saved local position and rotation.</span> |
| <Link id="m-save" /><code>{"override void Save(GameObject scenePrefab)"}</code> | <span className="api-desc">Stores the scene object's local position and rotation (same as the base class).</span> |
| <Link id="m-gettransform" /><code>{"protected override Transform GetTransform(GameObject scenePrefab)"}</code> | <span className="api-desc">Returns the scene object's transform, used by `Save` to read its local position and rotation.</span> |

## Used in

Members of other types that take, return or hold a `PositionedStaticPrefab`:

<div className="api-used-in">

[`ProfessionSkill.staticContentPrefabs`](/mod/game-api/types/global-p/professionskill#m-staticcontentprefabs), [`ProfessionSkill.StaticContentPrefabs`](/mod/game-api/types/global-p/professionskill#m-staticcontentprefabs-2).

</div>
