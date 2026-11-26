---
title: "CrystalsAvailablePointManager"
description: "Shows a player's unspent skill points as pooled crystal effects at one spot, one effect per point."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CrystalsAvailablePointManager

A **class** in `Root.Township`, no namespace.

Shows a player's unspent skill points as pooled crystal effects at one spot, one effect per point. A version of `AvailablePointVisualizerManager`; client visual.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`AvailablePointVisualizerManager`](/game-api/types/global-a-b/availablepointvisualizermanager)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CrystalsAvailablePointManager()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activevisuals" /><code>{"private Queue<"}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> activeVisuals"}</code> | Effects currently showing free points. |
| <Link id="m-availablepointsposition" /><code>{"private Transform availablePointsPosition"}</code> | Transform the effects are spawned at. |
| <Link id="m-freepointseffectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" freePointsEffectDefinition"}</code> | Pooled effect spawned for each point (was `visualDefinition`). |
| <Link id="m-temporaryvisuals" /><code>{"private Queue<"}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> temporaryVisuals"}</code> | Effects opened by `OpenTemporary`, cleared by `CleanTemporary`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cleantemporary" /><code>{"override void CleanTemporary()"}</code> | Releases every temporary effect back to its pool. |
| <Link id="m-opentemporary" /><code>{"override void OpenTemporary(int index)"}</code> | Spawns one temporary effect, kept apart from the active ones. The index is ignored. |
| <Link id="m-openvisual" /><code>{"override void OpenVisual(int index)"}</code> | Spawns one more active point effect. The index is ignored. |
| <Link id="m-updateavailablepointsvisual" /><code>{"override void UpdateAvailablePointsVisual(int freePoints)"}</code> | Adds or releases active effects until their count matches the given free points. |
