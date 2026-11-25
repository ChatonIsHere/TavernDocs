---
title: "BorderDefinedAtmosphere"
description: "class BorderDefinedAtmosphere in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BorderDefinedAtmosphere

A **class** in `Root.Township`, `Alta.Environmental.Atmosphere`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Time and environment](/game-api/world/time-and-environment)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BorderDefinedAtmosphere()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-allchunks" /><code>{"private IEnumerable<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> allChunks"}</code> |  |
| <Link id="m-borderbounds" /><code>{"private Bounds borderBounds"}</code> |  |
| <Link id="m-boundsheight" /><code>{"private float boundsHeight"}</code> |  |
| <Link id="m-btnaddnewchild" /><code>{"private bool btnAddNewChild"}</code> |  |
| <Link id="m-distancefrombordertoconsiderinside" /><code>{"private float distanceFromBorderToConsiderInside"}</code> |  |
| <Link id="m-insideset" /><code>{"private "}<Link to="/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" insideSet"}</code> |  |
| <Link id="m-ischeckingatendofframe" /><code>{"private bool isCheckingAtEndOfFrame"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-orderedbordercorners" /><code>{"private Transform[] orderedBorderCorners"}</code> |  |
| <Link id="m-outsideset" /><code>{"private "}<Link to="/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" outsideSet"}</code> |  |
| <Link id="m-updateplayerposition" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updatePlayerPosition"}</code> |  |
| <Link id="m-verticespositions" /><code>{"private Vector3[] verticesPositions"}</code> |  |
| <Link id="m-waslocalplayerwithinarea" /><code>{"private bool wasLocalPlayerWithinArea"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addcorner" /><code>{"private void AddCorner()"}</code> |  |
| <Link id="m-checkplayer" /><code>{"private async void CheckPlayer(bool hasPlayer)"}</code> |  |
| <Link id="m-clampcorners" /><code>{"private void ClampCorners()"}</code> |  |
| <Link id="m-distacetobordery" /><code>{"private float DistaceToBorderY(Vector3 point)"}</code> |  |
| <Link id="m-distancetoborderxz" /><code>{"private float DistanceToBorderXZ(Vector3 point)"}</code> |  |
| <Link id="m-drawgizmoquadforline" /><code>{"private void DrawGizmoQuadForLine(Vector3 from, Vector3 to, Color color)"}</code> |  |
| <Link id="m-drawgizmos" /><code>{"private void DrawGizmos(Color color)"}</code> |  |
| <Link id="m-getverticespositions" /><code>{"private Vector3[] GetVerticesPositions()"}</code> |  |
| <Link id="m-islocalplayerwithinarea" /><code>{"private bool IsLocalPlayerWithinArea()"}</code> |  |
| <Link id="m-needtoupdatepositions" /><code>{"private bool NeedToUpdatePositions()"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-onlocalplayerset" /><code>{"private void OnLocalPlayerSet("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> |  |
| <Link id="m-setambiencevalue" /><code>{"private void SetAmbienceValue(float outsideToInsideRatio)"}</code> |  |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> |  |
| <Link id="m-updatebounds" /><code>{"private void UpdateBounds()"}</code> |  |
| <Link id="m-updateplayerinsidezone" /><code>{"private void UpdatePlayerInsideZone()"}</code> |  |
| <Link id="m-updateplayerposition-2" /><code>{"private void UpdatePlayerPosition()"}</code> |  |
| <Link id="m-updatepositions" /><code>{"private void UpdatePositions()"}</code> |  |
