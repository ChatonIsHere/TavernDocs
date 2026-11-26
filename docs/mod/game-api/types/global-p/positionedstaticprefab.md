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
| <Link id="m-ctor" /><code>{"PositionedStaticPrefab()"}</code> | Creates a `PositionedStaticPrefab` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-prefab" /><code>{"private GameObject prefab"}</code> | Prefab to instantiate on load. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"override GameObject Load(Transform transformParent, "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Instantiates the prefab under the given parent at the saved local position and rotation. |
| <Link id="m-save" /><code>{"override void Save(GameObject scenePrefab)"}</code> | Stores the scene object's local position and rotation (same as the base class). |
| <Link id="m-gettransform" /><code>{"protected override Transform GetTransform(GameObject scenePrefab)"}</code> | Returns the scene object's transform, used by `Save` to read its local position and rotation. |

## Used in

Members of other types that take, return or hold a `PositionedStaticPrefab`:

[`ProfessionSkill.staticContentPrefabs`](/mod/game-api/types/global-p/professionskill#m-staticcontentprefabs), [`ProfessionSkill.StaticContentPrefabs`](/mod/game-api/types/global-p/professionskill#m-staticcontentprefabs-2).
