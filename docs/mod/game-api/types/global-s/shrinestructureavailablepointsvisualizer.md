---
title: "ShrineStructureAvailablePointsVisualizer"
description: "Experience fill visualizer for a skill shrine that also has settings for showing the player's unspent points."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShrineStructureAvailablePointsVisualizer

A **class** in `Root.Township`, the global namespace.

Experience fill visualizer for a skill shrine that also has settings for showing the player's unspent points. Client-side visuals.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`ExperienceFillVisualizer`](/mod/game-api/types/global-e-h/experiencefillvisualizer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShrineStructureAvailablePointsVisualizer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-availablepointsposition" /><code>{"private Transform availablePointsPosition"}</code> | <span className="api-desc">Where the free points effect is placed.</span> |
| <Link id="m-freepointseffectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" freePointsEffectDefinition"}</code> | <span className="api-desc">Pooled effect used to show available points.</span> |

</details>
