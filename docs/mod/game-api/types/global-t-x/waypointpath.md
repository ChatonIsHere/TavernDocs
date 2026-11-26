---
title: "WayPointPath"
description: "A networked, saved path of points with rotations that other code samples by distance (IPositionRotationPath)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WayPointPath

A **class** in `Root.Township`, the global namespace.

A networked, saved path of points with rotations that other code samples by distance (`IPositionRotationPath`). The server sends the points to each player who connects.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IPositionRotationPath`](/mod/game-api/types/global-i-l/ipositionrotationpath), [`ISavable<WayPointPathData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<WayPointPathData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`WayPointPathData`](/mod/game-api/types/global-t-x/waypointpathdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WayPointPath()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lengths" /><code>{"private float[] lengths"}</code> | <span className="api-desc">Length of each segment between points.</span> |
| <Link id="m-positions" /><code>{"private Vector3[] positions"}</code> | <span className="api-desc">Backing field for `Positions`.</span> |
| <Link id="m-rotations" /><code>{"private Quaternion[] rotations"}</code> | <span className="api-desc">Backing field for `Rotations`.</span> |
| <Link id="m-syncpositions" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPositions"}</code> | <span className="api-desc">Method sync that sends the points to players.</span> |
| <Link id="m-totaldistance" /><code>{"private float totalDistance"}</code> | <span className="api-desc">Total path length, used for normalised lookups.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-positions-2" /><code>{"Vector3[] Positions { get; set; }"}</code> | <span className="api-desc">Point positions in world space. Setting it doesn't recompute lengths or resync.</span> |
| <Link id="m-rotations-2" /><code>{"Quaternion[] Rotations { get; set; }"}</code> | <span className="api-desc">Point rotations, one per position.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpointfromarray" /><code>{"static void GetPointFromArray(Vector3[] positions, Quaternion[] rotations, float[] lengths, ref float distance, out Vector3 position, out Quaternion rotation)"}</code> | <span className="api-desc">Static: walks the segment lengths to find the position and rotation at a distance along the points, clamped to the ends. `PresetWayPointPath` uses it too.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the method sync that sends the points.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: works out segment lengths from the loaded points.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the points to a joining player.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"private void IPositionRotationPath.GetPosition(float value, out Vector3 position, out Quaternion rotation, bool isNormalized)"}</code> | <span className="api-desc">Gets the point at a distance along the path, or at a 0 to 1 fraction of it when `isNormalized` is true.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the path in the editor.</span> |
| <Link id="m-setupdistances" /><code>{"private void SetupDistances()"}</code> | <span className="api-desc">Works out each segment length and the total length.</span> |
| <Link id="m-syncpositions-2" /><code>{"private void SyncPositions("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the points and rotations (15 at most). Clients rebuild the lengths after reading.</span> |

</details>
