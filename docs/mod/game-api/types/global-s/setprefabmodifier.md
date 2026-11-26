---
title: "SetPrefabModifier"
description: "Forest fill spawn modifier that sets each spawn point's prefab to a static environment piece, from a list or a pipeline."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SetPrefabModifier

A **class** in `Root.Township`, the global namespace.

Forest fill spawn modifier that sets each spawn point's prefab to a static environment piece, from a list or a pipeline. Points with no piece get weight 0.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`SpawnModifierSpawnParameters`](/mod/game-api/types/global-s/spawnmodifierspawnparameters)
- **Derived types** [`SetPrefabModifier.Create`](/mod/game-api/types/global-s/setprefabmodifier-create)
- **Nested types** [`Create`](/mod/game-api/types/global-s/setprefabmodifier-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SetPrefabModifier()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnmigrate" /><code>{"private bool btnMigrate"}</code> | <span className="api-desc">Inspector button that calls `Migrate`.</span> |
| <Link id="m-piecepipeline" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" piecePipeline"}</code> | <span className="api-desc">Pipeline that gives a `StaticEnvironmentPieceInstance`, used when `pieces` is empty.</span> |
| <Link id="m-pieces" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{"[] pieces"}</code> | <span className="api-desc">Pieces to pick from at random.</span> |
| <Link id="m-pipeline" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" pipeline"}</code> | <span className="api-desc">Old GameObject pipeline. Not used by `Filter`.</span> |
| <Link id="m-prefabs" /><code>{"private GameObject[] prefabs"}</code> | <span className="api-desc">Old GameObject list. Not used by `Filter`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/mod/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/mod/game-api/types/alta-world-generation/spawnparameters">{"SpawnParameters"}</Link>{" point, ref float weight)"}</code> | <span className="api-desc">Picks a random entry from `pieces`, or from `piecePipeline` if the list is empty; sets weight to 0 if nothing came back.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"private void Migrate()"}</code> | <span className="api-desc">Empty in this build.</span> |

</details>
