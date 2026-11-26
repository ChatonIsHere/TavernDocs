---
title: "CrystalsAvailablePointManager"
description: "Shows a player's unspent skill points as pooled crystal effects at one spot, one effect per point."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CrystalsAvailablePointManager

A **class** in `Root.Township`, the global namespace.

Shows a player's unspent skill points as pooled crystal effects at one spot, one effect per point. A version of `AvailablePointVisualizerManager`; client visual.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`AvailablePointVisualizerManager`](/mod/game-api/types/global-a-b/availablepointvisualizermanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CrystalsAvailablePointManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activevisuals" /><code>{"private Queue<"}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> activeVisuals"}</code> | <span className="api-desc">Effects currently showing free points.</span> |
| <Link id="m-availablepointsposition" /><code>{"private Transform availablePointsPosition"}</code> | <span className="api-desc">Transform the effects are spawned at.</span> |
| <Link id="m-freepointseffectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" freePointsEffectDefinition"}</code> | <span className="api-desc">Pooled effect spawned for each point (was `visualDefinition`).</span> |
| <Link id="m-temporaryvisuals" /><code>{"private Queue<"}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> temporaryVisuals"}</code> | <span className="api-desc">Effects opened by `OpenTemporary`, cleared by `CleanTemporary`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cleantemporary" /><code>{"override void CleanTemporary()"}</code> | <span className="api-desc">Releases every temporary effect back to its pool.</span> |
| <Link id="m-opentemporary" /><code>{"override void OpenTemporary(int index)"}</code> | <span className="api-desc">Spawns one temporary effect, kept apart from the active ones. The index is ignored.</span> |
| <Link id="m-openvisual" /><code>{"override void OpenVisual(int index)"}</code> | <span className="api-desc">Spawns one more active point effect. The index is ignored.</span> |
| <Link id="m-updateavailablepointsvisual" /><code>{"override void UpdateAvailablePointsVisual(int freePoints)"}</code> | <span className="api-desc">Adds or releases active effects until their count matches the given free points.</span> |
