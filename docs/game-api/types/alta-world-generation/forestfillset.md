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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`FillSet`](/game-api/types/alta-world-generation/fillset)
- **Derived types** [`ForestFillSet.Create`](/game-api/types/alta-world-generation/forestfillset-create)
- **Nested types** [`Create`](/game-api/types/alta-world-generation/forestfillset-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForestFillSet()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger; unused in this class. |
| <Link id="m-spawnmodifiers" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/spawnmodifiers">{"SpawnModifiers"}</Link>{" spawnModifiers"}</code> | Backing field for `SpawnModifiers`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-spawnmodifiers-2" /><code>{"override "}<Link to="/game-api/types/alta-world-generation/spawnmodifiers">{"SpawnModifiers"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/spawnmodifiers">{"SpawnModifiers"}</Link>{" { get; }"}</code> | The spawn modifiers applied to this set. |

## Used in

Members of other types that take, return or hold a `ForestFillSet`:

[`ForestFillCore.fillSet`](/game-api/types/alta-world-generation/forestfillcore#m-fillset), [`SpaceFilter.Redirect.fillSet`](/game-api/types/global-s/spacefilter-redirect#m-fillset), [`SpaceFilter.Redirect.FillSet`](/game-api/types/global-s/spacefilter-redirect#m-fillset-2), [`SpawnModifierPointNormalRedirect.fillSet`](/game-api/types/global-s/spawnmodifierpointnormalredirect#m-fillset), [`SpawnModifierPointRedirect.fillSet`](/game-api/types/global-s/spawnmodifierpointredirect#m-fillset), [`SpawnModifierSpawnParametersRedirect.fillSet`](/game-api/types/global-s/spawnmodifierspawnparametersredirect#m-fillset).
