---
title: "CrystalsAvailablePointManager"
description: "class CrystalsAvailablePointManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CrystalsAvailablePointManager

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`AvailablePointVisualizerManager`](/game-api/types/global-a-b/availablepointvisualizermanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CrystalsAvailablePointManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activevisuals" /><code>{"private Queue<"}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> activeVisuals"}</code> |  |
| <Link id="m-availablepointsposition" /><code>{"private Transform availablePointsPosition"}</code> |  |
| <Link id="m-freepointseffectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" freePointsEffectDefinition"}</code> |  |
| <Link id="m-temporaryvisuals" /><code>{"private Queue<"}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> temporaryVisuals"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cleantemporary" /><code>{"override void CleanTemporary()"}</code> |  |
| <Link id="m-opentemporary" /><code>{"override void OpenTemporary(int index)"}</code> |  |
| <Link id="m-openvisual" /><code>{"override void OpenVisual(int index)"}</code> |  |
| <Link id="m-updateavailablepointsvisual" /><code>{"override void UpdateAvailablePointsVisual(int freePoints)"}</code> |  |
