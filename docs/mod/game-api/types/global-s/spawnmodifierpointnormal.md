---
title: "SpawnModifierPointNormal"
description: "Base for a spawn modifier that works on PointNormal ground points, as used by forest spawning."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnModifierPointNormal

An **abstract class** in `Root.Township`, the global namespace.

Base for a spawn modifier that works on `PointNormal` ground points, as used by forest spawning.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`SpawnModifier<PointNormal>`](/mod/game-api/types/global-s/spawnmodifier-t)
- **Derived types** [`BiomeSwitchFilter`](/mod/game-api/types/global-a-b/biomeswitchfilter), [`ElevationFromPath`](/mod/game-api/types/global-e-h/elevationfrompath), [`HeightFilter`](/mod/game-api/types/global-e-h/heightfilter), [`HeightProgressFilter`](/mod/game-api/types/global-e-h/heightprogressfilter), [`InsetModifier`](/mod/game-api/types/global-i-l/insetmodifier), [`NormalFilter`](/mod/game-api/types/global-m-o/normalfilter), [`RandomCutPointNormalFilter`](/mod/game-api/types/global-q-r/randomcutpointnormalfilter), [`SpawnModifierPointNormalRedirect`](/mod/game-api/types/global-s/spawnmodifierpointnormalredirect), [`SphereCastFilter`](/mod/game-api/types/global-s/spherecastfilter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected SpawnModifierPointNormal()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Used in

Members of other types that take, return or hold a `SpawnModifierPointNormal`:

<div className="api-used-in">

[`SpawnModifiers.pointNormalModifiers`](/mod/game-api/types/alta-world-generation/spawnmodifiers#m-pointnormalmodifiers).

</div>
