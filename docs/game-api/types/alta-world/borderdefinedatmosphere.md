---
title: "BorderDefinedAtmosphere"
description: "Client: an area outlined by corner transforms that blends the atmosphere from an outside set to an inside set as the local player walks in from the border."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BorderDefinedAtmosphere

A **class** in `Root.Township`, `Alta.Environmental.Atmosphere`.

Client: an area outlined by corner transforms that blends the atmosphere from an outside set to an inside set as the local player walks in from the border.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Time and environment](/game-api/world/time-and-environment)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BorderDefinedAtmosphere()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allchunks" /><code>{"private IEnumerable<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> allChunks"}</code> | Location chunks overlapping the area. |
| <Link id="m-borderbounds" /><code>{"private Bounds borderBounds"}</code> | Bounds around the corners, `boundsHeight` tall. |
| <Link id="m-boundsheight" /><code>{"private float boundsHeight"}</code> | Height of the area above the object. |
| <Link id="m-btnaddnewchild" /><code>{"private bool btnAddNewChild"}</code> | Inspector button for `AddCorner`. |
| <Link id="m-distancefrombordertoconsiderinside" /><code>{"private float distanceFromBorderToConsiderInside"}</code> | Distance in from the border over which the blend goes from outside to fully inside. |
| <Link id="m-insideset" /><code>{"private "}<Link to="/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" insideSet"}</code> | Atmosphere used inside the area. |
| <Link id="m-ischeckingatendofframe" /><code>{"private bool isCheckingAtEndOfFrame"}</code> | Guards against more than one recheck per frame. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | Logger for this class. |
| <Link id="m-orderedbordercorners" /><code>{"private Transform[] orderedBorderCorners"}</code> | Corner transforms in order around the outline. |
| <Link id="m-outsideset" /><code>{"private "}<Link to="/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" outsideSet"}</code> | Atmosphere used outside the area. |
| <Link id="m-updateplayerposition" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updatePlayerPosition"}</code> | Registered per-frame check, while the player is near. |
| <Link id="m-verticespositions" /><code>{"private Vector3[] verticesPositions"}</code> | Cached corner positions. |
| <Link id="m-waslocalplayerwithinarea" /><code>{"private bool wasLocalPlayerWithinArea"}</code> | Meant to track the last inside state; never set in this build, so it stays false. |

</details>

## Methods

<details>
<summary>21 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addcorner" /><code>{"private void AddCorner()"}</code> | Editor button: adds a new corner child halfway between the first and last corners. |
| <Link id="m-checkplayer" /><code>{"private async void CheckPlayer(bool hasPlayer)"}</code> | Handler for a covered chunk gaining or losing the local player; rechecks at most once a frame. |
| <Link id="m-clampcorners" /><code>{"private void ClampCorners()"}</code> | Flattens every corner to local height 0. |
| <Link id="m-distacetobordery" /><code>{"private float DistaceToBorderY(Vector3 point)"}</code> | Distance from the point to the top of the area bounds. |
| <Link id="m-distancetoborderxz" /><code>{"private float DistanceToBorderXZ(Vector3 point)"}</code> | Horizontal distance from the point to the nearest border edge. |
| <Link id="m-drawgizmoquadforline" /><code>{"private void DrawGizmoQuadForLine(Vector3 from, Vector3 to, Color color)"}</code> | Empty in this build. |
| <Link id="m-drawgizmos" /><code>{"private void DrawGizmos(Color color)"}</code> | Editor: flattens the corners and refreshes the bounds for gizmo drawing. |
| <Link id="m-getverticespositions" /><code>{"private Vector3[] GetVerticesPositions()"}</code> | The corner positions at the object's height, refreshed if any corner moved. |
| <Link id="m-islocalplayerwithinarea" /><code>{"private bool IsLocalPlayerWithinArea()"}</code> | True if any chunk overlapping the area has the local player. |
| <Link id="m-needtoupdatepositions" /><code>{"private bool NeedToUpdatePositions()"}</code> | True if a corner was added, removed or moved. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Unhooks the local player and chunk events. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Editor gizmo, faint. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor gizmo when selected. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Client: sets up now, or once the local player exists. |
| <Link id="m-onlocalplayerset" /><code>{"private void OnLocalPlayerSet("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | Sets up once the local player is created. |
| <Link id="m-setambiencevalue" /><code>{"private void SetAmbienceValue(float outsideToInsideRatio)"}</code> | Blends ambient colour between the two sets by the ratio and crossfades their ambience audio. |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | Works out the bounds, finds the chunks overlapping them and listens for the local player in them. |
| <Link id="m-updatebounds" /><code>{"private void UpdateBounds()"}</code> | Fits the bounds around the corners, extending `boundsHeight` above the object. |
| <Link id="m-updateplayerinsidezone" /><code>{"private void UpdatePlayerInsideZone()"}</code> | Starts the per-frame position check when the player is in a covered chunk, otherwise resets to outside. |
| <Link id="m-updateplayerposition-2" /><code>{"private void UpdatePlayerPosition()"}</code> | Per frame: works out how far inside the border the player is and sets the blend. |
| <Link id="m-updatepositions" /><code>{"private void UpdatePositions()"}</code> | Copies the corner positions, flattened to the object's height. |

</details>
