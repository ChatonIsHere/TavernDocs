---
title: "SpawnModifierSpawnParameters"
description: "Base for spawn modifiers in forest generation that work on spawn parameters."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnModifierSpawnParameters

An **abstract class** in `Root.Township`, the global namespace.

Base for spawn modifiers in forest generation that work on spawn parameters.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`SpawnModifier<SpawnParameters>`](/mod/game-api/types/global-s/spawnmodifier-t)
- **Derived types** [`AlignWithNormalModifier`](/mod/game-api/types/global-a-b/alignwithnormalmodifier), [`RandomRotationModifier`](/mod/game-api/types/global-q-r/randomrotationmodifier), [`RandomScaleModifier`](/mod/game-api/types/global-q-r/randomscalemodifier), [`ScaleWithScoreModifier`](/mod/game-api/types/global-s/scalewithscoremodifier), [`SetNetworkPrefabModifier`](/mod/game-api/types/global-s/setnetworkprefabmodifier), [`SetPrefabModifier`](/mod/game-api/types/global-s/setprefabmodifier), [`SpawnModifierSpawnParametersRedirect`](/mod/game-api/types/global-s/spawnmodifierspawnparametersredirect)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected SpawnModifierSpawnParameters()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Used in

Members of other types that take, return or hold a `SpawnModifierSpawnParameters`:

<div className="api-used-in">

[`SpawnModifiers.spawnParameterModifiers`](/mod/game-api/types/alta-world-generation/spawnmodifiers#m-spawnparametermodifiers).

</div>
