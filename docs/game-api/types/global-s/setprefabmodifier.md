---
title: "SetPrefabModifier"
description: "Forest fill spawn modifier that sets each spawn point's prefab to a static environment piece, from a list or a pipeline."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SetPrefabModifier

A **class** in `Root.Township`, no namespace.

Forest fill spawn modifier that sets each spawn point's prefab to a static environment piece, from a list or a pipeline. Points with no piece get weight 0.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`SpawnModifierSpawnParameters`](/game-api/types/global-s/spawnmodifierspawnparameters)
- **Derived types** [`SetPrefabModifier.Create`](/game-api/types/global-s/setprefabmodifier-create)
- **Nested types** [`Create`](/game-api/types/global-s/setprefabmodifier-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SetPrefabModifier()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnmigrate" /><code>{"private bool btnMigrate"}</code> | Inspector button that calls `Migrate`. |
| <Link id="m-piecepipeline" /><code>{"private "}<Link to="/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" piecePipeline"}</code> | Pipeline that gives a `StaticEnvironmentPieceInstance`, used when `pieces` is empty. |
| <Link id="m-pieces" /><code>{"private "}<Link to="/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{"[] pieces"}</code> | Pieces to pick from at random. |
| <Link id="m-pipeline" /><code>{"private "}<Link to="/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" pipeline"}</code> | Old GameObject pipeline. Not used by `Filter`. |
| <Link id="m-prefabs" /><code>{"private GameObject[] prefabs"}</code> | Old GameObject list. Not used by `Filter`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/game-api/types/alta-world-generation/spawnparameters">{"SpawnParameters"}</Link>{" point, ref float weight)"}</code> | Picks a random entry from `pieces`, or from `piecePipeline` if the list is empty; sets weight to 0 if nothing came back. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"private void Migrate()"}</code> | Empty in this build. |

</details>
