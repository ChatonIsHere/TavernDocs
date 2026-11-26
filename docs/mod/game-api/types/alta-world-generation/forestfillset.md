---
title: "ForestFillSet"
description: "A fill set asset for forest generation with its own spawn modifiers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestFillSet

A **class** in `Root.Township`, `Alta.Forests`.

A fill set asset for forest generation with its own spawn modifiers.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`FillSet`](/mod/game-api/types/alta-world-generation/fillset)
- **Derived types** [`ForestFillSet.Create`](/mod/game-api/types/alta-world-generation/forestfillset-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-world-generation/forestfillset-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForestFillSet()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger; unused in this class.</span> |
| <Link id="m-spawnmodifiers" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/spawnmodifiers">{"SpawnModifiers"}</Link>{" spawnModifiers"}</code> | <span className="api-desc">Backing field for `SpawnModifiers`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-spawnmodifiers-2" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/spawnmodifiers">{"SpawnModifiers"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/spawnmodifiers">{"SpawnModifiers"}</Link>{" { get; }"}</code> | <span className="api-desc">The spawn modifiers applied to this set.</span> |

## Used in

Members of other types that take, return or hold a `ForestFillSet`:

<div className="api-used-in">

[`ForestFillCore.fillSet`](/mod/game-api/types/alta-world-generation/forestfillcore#m-fillset), [`SpaceFilter.Redirect.fillSet`](/mod/game-api/types/global-s/spacefilter-redirect#m-fillset), [`SpaceFilter.Redirect.FillSet`](/mod/game-api/types/global-s/spacefilter-redirect#m-fillset-2), [`SpawnModifierPointNormalRedirect.fillSet`](/mod/game-api/types/global-s/spawnmodifierpointnormalredirect#m-fillset), [`SpawnModifierPointRedirect.fillSet`](/mod/game-api/types/global-s/spawnmodifierpointredirect#m-fillset), [`SpawnModifierSpawnParametersRedirect.fillSet`](/mod/game-api/types/global-s/spawnmodifierspawnparametersredirect#m-fillset).

</div>
