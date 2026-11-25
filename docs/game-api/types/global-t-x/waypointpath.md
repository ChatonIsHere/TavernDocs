---
title: "WayPointPath"
description: "class WayPointPath in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WayPointPath

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IPositionRotationPath`](/game-api/types/global-i-l/ipositionrotationpath), [`ISavable<WayPointPathData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<WayPointPathData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`WayPointPathData`](/game-api/types/global-t-x/waypointpathdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WayPointPath()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-lengths" /><code>{"private float[] lengths"}</code> |  |
| <Link id="m-positions" /><code>{"private Vector3[] positions"}</code> |  |
| <Link id="m-rotations" /><code>{"private Quaternion[] rotations"}</code> |  |
| <Link id="m-syncpositions" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPositions"}</code> |  |
| <Link id="m-totaldistance" /><code>{"private float totalDistance"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-positions-2" /><code>{"Vector3[] Positions { get; set; }"}</code> |  |
| <Link id="m-rotations-2" /><code>{"Quaternion[] Rotations { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpointfromarray" /><code>{"static void GetPointFromArray(Vector3[] positions, Quaternion[] rotations, float[] lengths, ref float distance, out Vector3 position, out Quaternion rotation)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-getposition" /><code>{"private void IPositionRotationPath.GetPosition(float value, out Vector3 position, out Quaternion rotation, bool isNormalized)"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-setupdistances" /><code>{"private void SetupDistances()"}</code> |  |
| <Link id="m-syncpositions-2" /><code>{"private void SyncPositions("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
