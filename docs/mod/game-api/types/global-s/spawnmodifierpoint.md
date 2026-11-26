---
title: "SpawnModifierPoint"
description: "Base for spawn modifiers in forest generation that work on point edges."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnModifierPoint

An **abstract class** in `Root.Township`, the global namespace.

Base for spawn modifiers in forest generation that work on point edges.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`SpawnModifier<PointEdge>`](/mod/game-api/types/global-s/spawnmodifier-t)
- **Derived types** [`DistanceFilter`](/mod/game-api/types/global-c-d/distancefilter), [`EdgeCutFilter`](/mod/game-api/types/global-e-h/edgecutfilter), [`RandomCutFilter`](/mod/game-api/types/global-q-r/randomcutfilter), [`RandomOffsetFilter`](/mod/game-api/types/global-q-r/randomoffsetfilter), [`SimpleNoiseFilter`](/mod/game-api/types/global-s/simplenoisefilter), [`SpaceFilter`](/mod/game-api/types/global-s/spacefilter), [`SpawnModifierPointRedirect`](/mod/game-api/types/global-s/spawnmodifierpointredirect)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected SpawnModifierPoint()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Used in

Members of other types that take, return or hold a `SpawnModifierPoint`:

[`SpawnModifiers.pointModifiers`](/mod/game-api/types/alta-world-generation/spawnmodifiers#m-pointmodifiers).
