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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Time and environment](/mod/game-api/world/time-and-environment)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BorderDefinedAtmosphere()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allchunks" /><code>{"private IEnumerable<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> allChunks"}</code> | <span className="api-desc">Location chunks overlapping the area.</span> |
| <Link id="m-borderbounds" /><code>{"private Bounds borderBounds"}</code> | <span className="api-desc">Bounds around the corners, `boundsHeight` tall.</span> |
| <Link id="m-boundsheight" /><code>{"private float boundsHeight"}</code> | <span className="api-desc">Height of the area above the object.</span> |
| <Link id="m-btnaddnewchild" /><code>{"private bool btnAddNewChild"}</code> | <span className="api-desc">Inspector button for `AddCorner`.</span> |
| <Link id="m-distancefrombordertoconsiderinside" /><code>{"private float distanceFromBorderToConsiderInside"}</code> | <span className="api-desc">Distance in from the border over which the blend goes from outside to fully inside.</span> |
| <Link id="m-insideset" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" insideSet"}</code> | <span className="api-desc">Atmosphere used inside the area.</span> |
| <Link id="m-ischeckingatendofframe" /><code>{"private bool isCheckingAtEndOfFrame"}</code> | <span className="api-desc">Guards against more than one recheck per frame.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |
| <Link id="m-orderedbordercorners" /><code>{"private Transform[] orderedBorderCorners"}</code> | <span className="api-desc">Corner transforms in order around the outline.</span> |
| <Link id="m-outsideset" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" outsideSet"}</code> | <span className="api-desc">Atmosphere used outside the area.</span> |
| <Link id="m-updateplayerposition" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updatePlayerPosition"}</code> | <span className="api-desc">Registered per-frame check, while the player is near.</span> |
| <Link id="m-verticespositions" /><code>{"private Vector3[] verticesPositions"}</code> | <span className="api-desc">Cached corner positions.</span> |
| <Link id="m-waslocalplayerwithinarea" /><code>{"private bool wasLocalPlayerWithinArea"}</code> | <span className="api-desc">Meant to track the last inside state; never set in this build, so it stays false.</span> |

</details>

## Methods

<details className="api-private">
<summary>21 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addcorner" /><code>{"private void AddCorner()"}</code> | <span className="api-desc">Editor button: adds a new corner child halfway between the first and last corners.</span> |
| <Link id="m-checkplayer" /><code>{"private async void CheckPlayer(bool hasPlayer)"}</code> | <span className="api-desc">Handler for a covered chunk gaining or losing the local player; rechecks at most once a frame.</span> |
| <Link id="m-clampcorners" /><code>{"private void ClampCorners()"}</code> | <span className="api-desc">Flattens every corner to local height 0.</span> |
| <Link id="m-distacetobordery" /><code>{"private float DistaceToBorderY(Vector3 point)"}</code> | <span className="api-desc">Distance from the point to the top of the area bounds.</span> |
| <Link id="m-distancetoborderxz" /><code>{"private float DistanceToBorderXZ(Vector3 point)"}</code> | <span className="api-desc">Horizontal distance from the point to the nearest border edge.</span> |
| <Link id="m-drawgizmoquadforline" /><code>{"private void DrawGizmoQuadForLine(Vector3 from, Vector3 to, Color color)"}</code> | <span className="api-desc">Empty in this build.</span> |
| <Link id="m-drawgizmos" /><code>{"private void DrawGizmos(Color color)"}</code> | <span className="api-desc">Editor: flattens the corners and refreshes the bounds for gizmo drawing.</span> |
| <Link id="m-getverticespositions" /><code>{"private Vector3[] GetVerticesPositions()"}</code> | <span className="api-desc">The corner positions at the object's height, refreshed if any corner moved.</span> |
| <Link id="m-islocalplayerwithinarea" /><code>{"private bool IsLocalPlayerWithinArea()"}</code> | <span className="api-desc">True if any chunk overlapping the area has the local player.</span> |
| <Link id="m-needtoupdatepositions" /><code>{"private bool NeedToUpdatePositions()"}</code> | <span className="api-desc">True if a corner was added, removed or moved.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Unhooks the local player and chunk events.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Editor gizmo, faint.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor gizmo when selected.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Client: sets up now, or once the local player exists.</span> |
| <Link id="m-onlocalplayerset" /><code>{"private void OnLocalPlayerSet("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Sets up once the local player is created.</span> |
| <Link id="m-setambiencevalue" /><code>{"private void SetAmbienceValue(float outsideToInsideRatio)"}</code> | <span className="api-desc">Blends ambient colour between the two sets by the ratio and crossfades their ambience audio.</span> |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | <span className="api-desc">Works out the bounds, finds the chunks overlapping them and listens for the local player in them.</span> |
| <Link id="m-updatebounds" /><code>{"private void UpdateBounds()"}</code> | <span className="api-desc">Fits the bounds around the corners, extending `boundsHeight` above the object.</span> |
| <Link id="m-updateplayerinsidezone" /><code>{"private void UpdatePlayerInsideZone()"}</code> | <span className="api-desc">Starts the per-frame position check when the player is in a covered chunk, otherwise resets to outside.</span> |
| <Link id="m-updateplayerposition-2" /><code>{"private void UpdatePlayerPosition()"}</code> | <span className="api-desc">Per frame: works out how far inside the border the player is and sets the blend.</span> |
| <Link id="m-updatepositions" /><code>{"private void UpdatePositions()"}</code> | <span className="api-desc">Copies the corner positions, flattened to the object's height.</span> |

</details>
