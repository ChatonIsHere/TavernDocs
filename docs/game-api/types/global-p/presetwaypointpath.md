---
title: "PresetWayPointPath"
description: "class PresetWayPointPath in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PresetWayPointPath

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IPositionRotationPath`](/game-api/types/global-i-l/ipositionrotationpath)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PresetWayPointPath()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-lengths" /><code>{"private float[] lengths"}</code> |  |
| <Link id="m-localpositions" /><code>{"private Vector3[] localPositions"}</code> |  |
| <Link id="m-localrotations" /><code>{"private Quaternion[] localRotations"}</code> |  |
| <Link id="m-totaldistance" /><code>{"private float totalDistance"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-getposition" /><code>{"private void IPositionRotationPath.GetPosition(float value, out Vector3 position, out Quaternion rotation, bool isNormalized)"}</code> |  |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> |  |
