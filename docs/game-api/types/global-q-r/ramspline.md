---
title: "RamSpline"
description: "Third-party NatureManufacture river spline: builds a river mesh along Catmull-Rom control points, with width, flow map and vertex colours."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RamSpline

A **class** in `Root.Township`, no namespace.

Third-party NatureManufacture river spline: builds a river mesh along Catmull-Rom control points, with width, flow map and vertex colours. Used for forest river paths (`RiverPath.Mesh`).

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RamSpline()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-beginnigchildsplines" /><code>{"List<"}<Link to="/game-api/types/global-q-r/ramspline">{"RamSpline"}</Link>{"> beginnigChildSplines"}</code> | Splines that connect to the start of this one; rebuilt after this one. |
| <Link id="m-beginningconnectionid" /><code>{"int beginningConnectionID"}</code> | Index of the point on `beginningSpline` this spline starts from (its last point). |
| <Link id="m-beginningmaxwidth" /><code>{"float beginningMaxWidth"}</code> | Where across the parent's width (0 to 1) this spline's start ends. |
| <Link id="m-beginningminwidth" /><code>{"float beginningMinWidth"}</code> | Where across the parent's width (0 to 1) this spline's start begins. |
| <Link id="m-beginningspline" /><code><Link to="/game-api/types/global-q-r/ramspline">{"RamSpline"}</Link>{" beginningSpline"}</code> | Spline whose end this spline's start joins onto. |
| <Link id="m-colors" /><code>{"Color[] colors"}</code> | Vertex colours. Reset to black when the vertex count changes. |
| <Link id="m-colorsflowmap" /><code>{"List<Vector2> colorsFlowMap"}</code> | Per-vertex flow map written to uv4. Kept when `overrideFlowMap` is set. |
| <Link id="m-controlpoints" /><code>{"List<Vector4> controlPoints"}</code> | Control points: XYZ is the local position, W the width there. |
| <Link id="m-controlpointsdown" /><code>{"List<Vector3> controlPointsDown"}</code> | Left edge points at each control point. |
| <Link id="m-controlpointsmeshcurves" /><code>{"List<AnimationCurve> controlPointsMeshCurves"}</code> | Per control point curve that lifts vertices across the width. |
| <Link id="m-controlpointsorientation" /><code>{"List<Quaternion> controlPointsOrientation"}</code> | Orientation at each control point. |
| <Link id="m-controlpointsrotations" /><code>{"List<Quaternion> controlPointsRotations"}</code> | Extra rotation per control point. |
| <Link id="m-controlpointssnap" /><code>{"List<float> controlPointsSnap"}</code> | Per control point amount (0 to 1) that edge vertices snap to the ground. |
| <Link id="m-controlpointsup" /><code>{"List<Vector3> controlPointsUp"}</code> | Right edge points at each control point. |
| <Link id="m-currentprofile" /><code><Link to="/game-api/types/global-s/splineprofile">{"SplineProfile"}</Link>{" currentProfile"}</code> | Spline profile asset in use. Probably read by the editor tool only. |
| <Link id="m-debug" /><code>{"bool debug"}</code> | Editor tool setting. Not read in the game code. |
| <Link id="m-detailterrain" /><code>{"int detailTerrain"}</code> | Editor tool setting for terrain carving. Not read in the game code. |
| <Link id="m-detailterrainforward" /><code>{"int detailTerrainForward"}</code> | Editor tool setting for terrain carving. Not read in the game code. |
| <Link id="m-drawcolor" /><code>{"Color drawColor"}</code> | Editor vertex painting colour. Not read in the game code. |
| <Link id="m-drawonmesh" /><code>{"bool drawOnMesh"}</code> | Editor vertex painting toggle. Not read in the game code. |
| <Link id="m-drawonmeshflowmap" /><code>{"bool drawOnMeshFlowMap"}</code> | Editor flow map painting toggle. Not read in the game code. |
| <Link id="m-drawonmultiple" /><code>{"bool drawOnMultiple"}</code> | Editor painting toggle for several splines. Not read in the game code. |
| <Link id="m-drawsize" /><code>{"float drawSize"}</code> | Editor painting brush size. Not read in the game code. |
| <Link id="m-endingchildsplines" /><code>{"List<"}<Link to="/game-api/types/global-q-r/ramspline">{"RamSpline"}</Link>{"> endingChildSplines"}</code> | Splines that connect to the end of this one; rebuilt after this one. |
| <Link id="m-endingconnectionid" /><code>{"int endingConnectionID"}</code> | Index of the point on `endingSpline` this spline ends at (always 0). |
| <Link id="m-endingmaxwidth" /><code>{"float endingMaxWidth"}</code> | Where across the next spline's width (0 to 1) this spline's end stops. |
| <Link id="m-endingminwidth" /><code>{"float endingMinWidth"}</code> | Where across the next spline's width (0 to 1) this spline's end starts. |
| <Link id="m-endingspline" /><code><Link to="/game-api/types/global-q-r/ramspline">{"RamSpline"}</Link>{" endingSpline"}</code> | Spline whose start this spline's end joins onto. |
| <Link id="m-flowdirection" /><code>{"float flowDirection"}</code> | Editor flow painting setting. Not read in the game code. |
| <Link id="m-flowflat" /><code>{"AnimationCurve flowFlat"}</code> | Flow speed across the width on level ground. |
| <Link id="m-flowspeed" /><code>{"float flowSpeed"}</code> | Speed written into the flow map. |
| <Link id="m-flowwaterfall" /><code>{"AnimationCurve flowWaterfall"}</code> | Flow speed across the width on steep ground. |
| <Link id="m-fulllength" /><code>{"float fulllength"}</code> | Total UV length of the spline, worked out in `GenerateMesh`. |
| <Link id="m-generatemeshparts" /><code>{"bool generateMeshParts"}</code> | Whether the mesh is split into several child parts. |
| <Link id="m-invertuvdirection" /><code>{"bool invertUVDirection"}</code> | Flips the UV direction along the river. |
| <Link id="m-length" /><code>{"float length"}</code> | Running UV length along the spline, carried on from `beginningSpline`. |
| <Link id="m-lerpvalues" /><code>{"List<float> lerpValues"}</code> | Per sample position along the control points (segment index plus `t`). |
| <Link id="m-maxval" /><code>{"float maxVal"}</code> | Shapes how vertices spread across the right half of the width. |
| <Link id="m-meshcurve" /><code>{"AnimationCurve meshCurve"}</code> | Default lift curve across the width. Not read in this class. |
| <Link id="m-meshesparttransforms" /><code>{"List<Transform> meshesPartTransforms"}</code> | Child objects made when the mesh is split into parts. Destroyed on each rebuild. |
| <Link id="m-meshfilter" /><code>{"MeshFilter meshfilter"}</code> | Mesh filter that gets the generated mesh. |
| <Link id="m-meshpartscount" /><code>{"int meshPartsCount"}</code> | How many parts the mesh is split into. |
| <Link id="m-minmaxwidth" /><code>{"float minMaxWidth"}</code> | Share of the joined spline's width this spline covers, for UVs. |
| <Link id="m-minval" /><code>{"float minVal"}</code> | Shapes how vertices spread across the left half of the width. |
| <Link id="m-normalfromraycast" /><code>{"bool normalFromRaycast"}</code> | When true, normals come from a raycast to the ground instead of the spline orientation. |
| <Link id="m-normalsbeginning" /><code>{"List<Vector3> normalsBeginning"}</code> | Normals of the first row, used by splines that join onto this one. |
| <Link id="m-normalsending" /><code>{"List<Vector3> normalsEnding"}</code> | Normals of the last row, used by splines that join onto this one. |
| <Link id="m-normalslist" /><code>{"List<Vector3> normalsList"}</code> | Per sample normal. |
| <Link id="m-oldmaterial" /><code>{"Material oldMaterial"}</code> | Editor tool setting. Not read in the game code. |
| <Link id="m-oldprofile" /><code><Link to="/game-api/types/global-s/splineprofile">{"SplineProfile"}</Link>{" oldProfile"}</code> | Previous spline profile. Probably used by the editor tool only. |
| <Link id="m-opacity" /><code>{"float opacity"}</code> | Editor painting opacity. Not read in the game code. |
| <Link id="m-orientations" /><code>{"List<Quaternion> orientations"}</code> | Per sample orientation. |
| <Link id="m-overrideflowmap" /><code>{"bool overrideFlowMap"}</code> | When true, a hand painted flow map is kept instead of recomputed. |
| <Link id="m-points" /><code>{"List<Vector3> points"}</code> | Sampled centre line points. |
| <Link id="m-points2" /><code>{"List<Vector3> points2"}</code> | Unused point list. |
| <Link id="m-pointsdown" /><code>{"List<Vector3> pointsDown"}</code> | Sampled left edge points. |
| <Link id="m-pointsup" /><code>{"List<Vector3> pointsUp"}</code> | Sampled right edge points. |
| <Link id="m-raycastheightoffset" /><code>{"float raycastHeightOffset"}</code> | Height above a vertex that ground snap raycasts start from. |
| <Link id="m-showflowmap" /><code>{"bool showFlowMap"}</code> | Editor display toggle. Not read in the game code. |
| <Link id="m-showvertexcolors" /><code>{"bool showVertexColors"}</code> | Editor display toggle. Not read in the game code. |
| <Link id="m-simulatedriverlength" /><code>{"float simulatedRiverLength"}</code> | Editor river simulation setting. Not read in the game code. |
| <Link id="m-simulatedriverpoints" /><code>{"int simulatedRiverPoints"}</code> | Editor river simulation setting. Not read in the game code. |
| <Link id="m-simulationminstepsize" /><code>{"float simulationMinStepSize"}</code> | Editor river simulation setting. Not read in the game code. |
| <Link id="m-snapmask" /><code>{"LayerMask snapMask"}</code> | Layers the edge vertices snap and raycast onto. |
| <Link id="m-snaps" /><code>{"List<float> snaps"}</code> | Per sample ground snap amount. |
| <Link id="m-snaptoterrain" /><code>{"bool snapToTerrain"}</code> | Whether generated vertices are raycast down onto `snapMask` colliders. |
| <Link id="m-tangents" /><code>{"List<Vector3> tangents"}</code> | Per sample tangent. |
| <Link id="m-terrainadditionalwidth" /><code>{"float terrainAdditionalWidth"}</code> | Editor terrain carving setting. Not read in the game code. |
| <Link id="m-terraincurve" /><code>{"AnimationCurve terrainCurve"}</code> | Editor terrain carving curve. Not read in the game code. |
| <Link id="m-terraindepthheight" /><code>{"float terrainDepthHeight"}</code> | Editor terrain carving setting. Not read in the game code. |
| <Link id="m-terraindepthmultiplier" /><code>{"float terrainDepthMultiplier"}</code> | Editor terrain carving setting. Not read in the game code. |
| <Link id="m-terrainsmoothmultiplier" /><code>{"float terrainSmoothMultiplier"}</code> | Editor terrain carving setting. Not read in the game code. |
| <Link id="m-toolbarint" /><code>{"int toolbarInt"}</code> | Selected tab in the editor tool. Not read in the game code. |
| <Link id="m-triangledensity" /><code>{"float triangleDensity"}</code> | How densely the spline is sampled along its length. |
| <Link id="m-uvbeginning" /><code>{"float uvBeginning"}</code> | UV offset across the width, from where this spline joins its parent. |
| <Link id="m-uvrotation" /><code>{"bool uvRotation"}</code> | When true, the along-river UV goes in u instead of v. |
| <Link id="m-uvscale" /><code>{"float uvScale"}</code> | UV tiling along the river. |
| <Link id="m-uvscaleoverride" /><code>{"bool uvScaleOverride"}</code> | When true, keeps this spline's own `uvScale` instead of copying the parent's. |
| <Link id="m-uvwidth" /><code>{"float uvWidth"}</code> | UV width across the river, scaled by the share of the parent it covers. |
| <Link id="m-verticesbeginning" /><code>{"List<Vector3> verticesBeginning"}</code> | Vertices of the first row, used by splines that join onto this one. |
| <Link id="m-verticesending" /><code>{"List<Vector3> verticesEnding"}</code> | Vertices of the last row, used by splines that join onto this one. |
| <Link id="m-vertsinshape" /><code>{"int vertsInShape"}</code> | Vertices across the river's width. |
| <Link id="m-width" /><code>{"float width"}</code> | Default width for new control points. |
| <Link id="m-widths" /><code>{"List<float> widths"}</code> | Per sample river width. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isgenerationcontrolled" /><code>{"private bool isGenerationControlled"}</code> | Set by `ControlledGenerate` so `Start` doesn't generate again. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addpoint" /><code>{"void AddPoint(Vector4 position)"}</code> | Adds a control point at the end. A `w` of 0 copies the last point's width, or `width` for the first. |
| <Link id="m-addpoint-2" /><code>{"void AddPoint(Vector4 position, AnimationCurve curve)"}</code> | Adds a control point at the end. A `w` of 0 copies the last point's width, or `width` for the first. |
| <Link id="m-addpointafter" /><code>{"void AddPointAfter(int i)"}</code> | Inserts a control point after index `i`, halfway to the next point or extended past the last one. |
| <Link id="m-changepointposition" /><code>{"void ChangePointPosition(int i, Vector3 position)"}</code> | Moves a control point. A `w` of 0 keeps its current width. |
| <Link id="m-changepointposition-2" /><code>{"void ChangePointPosition(int i, Vector4 position)"}</code> | Moves a control point. A `w` of 0 keeps its current width. |
| <Link id="m-controlledgenerate" /><code>{"void ControlledGenerate()"}</code> | Builds the mesh now and stops `Start` from building it again. |
| <Link id="m-createspline" /><code>{"static "}<Link to="/game-api/types/global-q-r/ramspline">{"RamSpline"}</Link>{" CreateSpline(Material splineMaterial = null, List<Vector4> positions = null)"}</code> | Creates a new game object with a spline and an unshadowed mesh renderer, optionally with a material and points. |
| <Link id="m-generatebeginningparentbased" /><code>{"void GenerateBeginningParentBased()"}</code> | Snaps the first control point onto the end of `beginningSpline`, between its min and max width. |
| <Link id="m-generateendingparentbased" /><code>{"void GenerateEndingParentBased()"}</code> | Snaps the last control point onto the start of `endingSpline`, between its min and max width. |
| <Link id="m-generatemeshparts-2" /><code>{"void GenerateMeshParts(Mesh baseMesh)"}</code> | Splits a built mesh into `meshPartsCount` child mesh objects and hides the main renderer. |
| <Link id="m-generatespline" /><code>{"void GenerateSpline(List<"}<Link to="/game-api/types/global-q-r/ramspline">{"RamSpline"}</Link>{"> generatedSplines = null)"}</code> | Rebuilds the river mesh from the control points, then regenerates connected child splines. The list argument is ignored. |
| <Link id="m-removepoint" /><code>{"void RemovePoint(int i)"}</code> | Removes a control point and its rotation, snap and curve entries. |
| <Link id="m-removepoints" /><code>{"void RemovePoints(int fromID = -1)"}</code> | Removes every control point after index `fromID` (all of them by default). |
| <Link id="m-start" /><code>{"void Start()"}</code> | Builds the mesh unless `ControlledGenerate` already did. |

<details>
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculatecatmullromsidesplines" /><code>{"private void CalculateCatmullRomSideSplines(List<Vector4> controlPoints, int pos)"}</code> | For one control point segment, works out the orientation and the left and right edge points from the point's width. |
| <Link id="m-calculatecatmullromspline" /><code>{"private void CalculateCatmullRomSpline(List<Vector3> controlPoints, int pos, ref List<Vector3> points)"}</code> | Samples one segment of a Catmull-Rom curve through the given points into the output list, at `triangleDensity` steps. |
| <Link id="m-calculatecatmullromsplineparameters" /><code>{"private void CalculateCatmullRomSplineParameters(List<Vector4> controlPoints, int pos, bool initialPoints = false)"}</code> | Samples one segment of the centre line, filling the width, snap, orientation, tangent and normal lists. |
| <Link id="m-calculatenormal" /><code>{"private Vector3 CalculateNormal(Vector3 tangent, Vector3 up)"}</code> | Normal that is square to the tangent and as close to `up` as it can be. |
| <Link id="m-calculatepointparameters" /><code>{"private void CalculatePointParameters(List<Vector4> controlPoints, int pos, Vector3 p0, Vector3 p1, Vector3 p2, Vector3 p3, float t)"}</code> | Adds one centre line sample: position, width, snap, orientation, tangent and normal (flipped to stay on the same side). |
| <Link id="m-calculatepointposition" /><code>{"private void CalculatePointPosition(List<Vector3> controlPoints, int pos, Vector3 p0, Vector3 p1, Vector3 p2, Vector3 p3, float t, ref List<Vector3> points)"}</code> | Adds one sampled position to the output list. |
| <Link id="m-clamplistpos" /><code>{"private int ClampListPos(int pos)"}</code> | Wraps an index into the control point list. |
| <Link id="m-flowcalculate" /><code>{"private float FlowCalculate(float u, float normalY)"}</code> | Flow speed for a point across the width: the waterfall curve on steep ground, the flat curve on level ground. |
| <Link id="m-generatemesh" /><code>{"private void GenerateMesh(ref Mesh mesh)"}</code> | Builds the river mesh from the sampled edges: vertices, normals, UVs, flow map in uv4 and colours. Also sets a `MeshCollider` if there is one. |
| <Link id="m-generaterow" /><code>{"private float GenerateRow(int i, int j, int offset, ref float u, ref float u3, Vector3[] vertices, Vector3[] normals, Vector2[] uvs, Vector2[] uvs3, Vector2[] uvs4, bool isRaycasting)"}</code> | Places one vertex across the width, snapping to joined splines or the ground below, and sets its normal, UVs and flow value. |
| <Link id="m-getcatmullromposition" /><code>{"private Vector3 GetCatmullRomPosition(float t, Vector3 p0, Vector3 p1, Vector3 p2, Vector3 p3)"}</code> | Point on a Catmull-Rom curve at `t`. |
| <Link id="m-getcatmullromtangent" /><code>{"private Vector3 GetCatmullRomTangent(float t, Vector3 p0, Vector3 p1, Vector3 p2, Vector3 p3)"}</code> | Tangent of a Catmull-Rom curve at `t`. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Cleans up the generated mesh. |

</details>

## Used in

Members of other types that take, return or hold a `RamSpline`:

[`RiverMeshTest.pathSplines`](/game-api/types/alta-world-generation/rivermeshtest#m-pathsplines), [`RiverMeshTest.prefab`](/game-api/types/alta-world-generation/rivermeshtest#m-prefab), [`RiverMeshTest.splines`](/game-api/types/alta-world-generation/rivermeshtest#m-splines), [`RiverPath.Mesh`](/game-api/types/alta-world-generation/riverpath#m-mesh).
