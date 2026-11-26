---
title: "WayPointPath"
description: "A networked, saved path of points with rotations that other code samples by distance (IPositionRotationPath)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WayPointPath

A **class** in `Root.Township`, no namespace.

A networked, saved path of points with rotations that other code samples by distance (`IPositionRotationPath`). The server sends the points to each player who connects.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IPositionRotationPath`](/game-api/types/global-i-l/ipositionrotationpath), [`ISavable<WayPointPathData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<WayPointPathData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`WayPointPathData`](/game-api/types/global-t-x/waypointpathdata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WayPointPath()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lengths" /><code>{"private float[] lengths"}</code> | Length of each segment between points. |
| <Link id="m-positions" /><code>{"private Vector3[] positions"}</code> | Backing field for `Positions`. |
| <Link id="m-rotations" /><code>{"private Quaternion[] rotations"}</code> | Backing field for `Rotations`. |
| <Link id="m-syncpositions" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPositions"}</code> | Method sync that sends the points to players. |
| <Link id="m-totaldistance" /><code>{"private float totalDistance"}</code> | Total path length, used for normalised lookups. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-positions-2" /><code>{"Vector3[] Positions { get; set; }"}</code> | Point positions in world space. Setting it doesn't recompute lengths or resync. |
| <Link id="m-rotations-2" /><code>{"Quaternion[] Rotations { get; set; }"}</code> | Point rotations, one per position. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpointfromarray" /><code>{"static void GetPointFromArray(Vector3[] positions, Quaternion[] rotations, float[] lengths, ref float distance, out Vector3 position, out Quaternion rotation)"}</code> | Static: walks the segment lengths to find the position and rotation at a distance along the points, clamped to the ends. `PresetWayPointPath` uses it too. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the method sync that sends the points. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: works out segment lengths from the loaded points. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the points to a joining player. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"private void IPositionRotationPath.GetPosition(float value, out Vector3 position, out Quaternion rotation, bool isNormalized)"}</code> | Gets the point at a distance along the path, or at a 0 to 1 fraction of it when `isNormalized` is true. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the path in the editor. |
| <Link id="m-setupdistances" /><code>{"private void SetupDistances()"}</code> | Works out each segment length and the total length. |
| <Link id="m-syncpositions-2" /><code>{"private void SyncPositions("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the points and rotations (15 at most). Clients rebuild the lengths after reading. |

</details>
