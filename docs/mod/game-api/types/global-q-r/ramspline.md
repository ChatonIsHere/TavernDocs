---
title: "RamSpline"
description: "Third-party NatureManufacture river spline: builds a river mesh along Catmull-Rom control points, with width, flow map and vertex colours."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RamSpline

A **class** in `Root.Township`, the global namespace.

Third-party NatureManufacture river spline: builds a river mesh along Catmull-Rom control points, with width, flow map and vertex colours. Used for forest river paths (`RiverPath.Mesh`).

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RamSpline()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-beginnigchildsplines" /><code>{"List<"}<Link to="/mod/game-api/types/global-q-r/ramspline">{"RamSpline"}</Link>{"> beginnigChildSplines"}</code> | <span className="api-desc">Splines that connect to the start of this one; rebuilt after this one.</span> |
| <Link id="m-beginningconnectionid" /><code>{"int beginningConnectionID"}</code> | <span className="api-desc">Index of the point on `beginningSpline` this spline starts from (its last point).</span> |
| <Link id="m-beginningmaxwidth" /><code>{"float beginningMaxWidth"}</code> | <span className="api-desc">Where across the parent's width (0 to 1) this spline's start ends.</span> |
| <Link id="m-beginningminwidth" /><code>{"float beginningMinWidth"}</code> | <span className="api-desc">Where across the parent's width (0 to 1) this spline's start begins.</span> |
| <Link id="m-beginningspline" /><code><Link to="/mod/game-api/types/global-q-r/ramspline">{"RamSpline"}</Link>{" beginningSpline"}</code> | <span className="api-desc">Spline whose end this spline's start joins onto.</span> |
| <Link id="m-colors" /><code>{"Color[] colors"}</code> | <span className="api-desc">Vertex colours. Reset to black when the vertex count changes.</span> |
| <Link id="m-colorsflowmap" /><code>{"List<Vector2> colorsFlowMap"}</code> | <span className="api-desc">Per-vertex flow map written to uv4. Kept when `overrideFlowMap` is set.</span> |
| <Link id="m-controlpoints" /><code>{"List<Vector4> controlPoints"}</code> | <span className="api-desc">Control points: XYZ is the local position, W the width there.</span> |
| <Link id="m-controlpointsdown" /><code>{"List<Vector3> controlPointsDown"}</code> | <span className="api-desc">Left edge points at each control point.</span> |
| <Link id="m-controlpointsmeshcurves" /><code>{"List<AnimationCurve> controlPointsMeshCurves"}</code> | <span className="api-desc">Per control point curve that lifts vertices across the width.</span> |
| <Link id="m-controlpointsorientation" /><code>{"List<Quaternion> controlPointsOrientation"}</code> | <span className="api-desc">Orientation at each control point.</span> |
| <Link id="m-controlpointsrotations" /><code>{"List<Quaternion> controlPointsRotations"}</code> | <span className="api-desc">Extra rotation per control point.</span> |
| <Link id="m-controlpointssnap" /><code>{"List<float> controlPointsSnap"}</code> | <span className="api-desc">Per control point amount (0 to 1) that edge vertices snap to the ground.</span> |
| <Link id="m-controlpointsup" /><code>{"List<Vector3> controlPointsUp"}</code> | <span className="api-desc">Right edge points at each control point.</span> |
| <Link id="m-currentprofile" /><code><Link to="/mod/game-api/types/global-s/splineprofile">{"SplineProfile"}</Link>{" currentProfile"}</code> | <span className="api-desc">Spline profile asset in use. Probably read by the editor tool only.</span> |
| <Link id="m-debug" /><code>{"bool debug"}</code> | <span className="api-desc">Editor tool setting. Not read in the game code.</span> |
| <Link id="m-detailterrain" /><code>{"int detailTerrain"}</code> | <span className="api-desc">Editor tool setting for terrain carving. Not read in the game code.</span> |
| <Link id="m-detailterrainforward" /><code>{"int detailTerrainForward"}</code> | <span className="api-desc">Editor tool setting for terrain carving. Not read in the game code.</span> |
| <Link id="m-drawcolor" /><code>{"Color drawColor"}</code> | <span className="api-desc">Editor vertex painting colour. Not read in the game code.</span> |
| <Link id="m-drawonmesh" /><code>{"bool drawOnMesh"}</code> | <span className="api-desc">Editor vertex painting toggle. Not read in the game code.</span> |
| <Link id="m-drawonmeshflowmap" /><code>{"bool drawOnMeshFlowMap"}</code> | <span className="api-desc">Editor flow map painting toggle. Not read in the game code.</span> |
| <Link id="m-drawonmultiple" /><code>{"bool drawOnMultiple"}</code> | <span className="api-desc">Editor painting toggle for several splines. Not read in the game code.</span> |
| <Link id="m-drawsize" /><code>{"float drawSize"}</code> | <span className="api-desc">Editor painting brush size. Not read in the game code.</span> |
| <Link id="m-endingchildsplines" /><code>{"List<"}<Link to="/mod/game-api/types/global-q-r/ramspline">{"RamSpline"}</Link>{"> endingChildSplines"}</code> | <span className="api-desc">Splines that connect to the end of this one; rebuilt after this one.</span> |
| <Link id="m-endingconnectionid" /><code>{"int endingConnectionID"}</code> | <span className="api-desc">Index of the point on `endingSpline` this spline ends at (always 0).</span> |
| <Link id="m-endingmaxwidth" /><code>{"float endingMaxWidth"}</code> | <span className="api-desc">Where across the next spline's width (0 to 1) this spline's end stops.</span> |
| <Link id="m-endingminwidth" /><code>{"float endingMinWidth"}</code> | <span className="api-desc">Where across the next spline's width (0 to 1) this spline's end starts.</span> |
| <Link id="m-endingspline" /><code><Link to="/mod/game-api/types/global-q-r/ramspline">{"RamSpline"}</Link>{" endingSpline"}</code> | <span className="api-desc">Spline whose start this spline's end joins onto.</span> |
| <Link id="m-flowdirection" /><code>{"float flowDirection"}</code> | <span className="api-desc">Editor flow painting setting. Not read in the game code.</span> |
| <Link id="m-flowflat" /><code>{"AnimationCurve flowFlat"}</code> | <span className="api-desc">Flow speed across the width on level ground.</span> |
| <Link id="m-flowspeed" /><code>{"float flowSpeed"}</code> | <span className="api-desc">Speed written into the flow map.</span> |
| <Link id="m-flowwaterfall" /><code>{"AnimationCurve flowWaterfall"}</code> | <span className="api-desc">Flow speed across the width on steep ground.</span> |
| <Link id="m-fulllength" /><code>{"float fulllength"}</code> | <span className="api-desc">Total UV length of the spline, worked out in `GenerateMesh`.</span> |
| <Link id="m-generatemeshparts" /><code>{"bool generateMeshParts"}</code> | <span className="api-desc">Whether the mesh is split into several child parts.</span> |
| <Link id="m-invertuvdirection" /><code>{"bool invertUVDirection"}</code> | <span className="api-desc">Flips the UV direction along the river.</span> |
| <Link id="m-length" /><code>{"float length"}</code> | <span className="api-desc">Running UV length along the spline, carried on from `beginningSpline`.</span> |
| <Link id="m-lerpvalues" /><code>{"List<float> lerpValues"}</code> | <span className="api-desc">Per sample position along the control points (segment index plus `t`).</span> |
| <Link id="m-maxval" /><code>{"float maxVal"}</code> | <span className="api-desc">Shapes how vertices spread across the right half of the width.</span> |
| <Link id="m-meshcurve" /><code>{"AnimationCurve meshCurve"}</code> | <span className="api-desc">Default lift curve across the width. Not read in this class.</span> |
| <Link id="m-meshesparttransforms" /><code>{"List<Transform> meshesPartTransforms"}</code> | <span className="api-desc">Child objects made when the mesh is split into parts. Destroyed on each rebuild.</span> |
| <Link id="m-meshfilter" /><code>{"MeshFilter meshfilter"}</code> | <span className="api-desc">Mesh filter that gets the generated mesh.</span> |
| <Link id="m-meshpartscount" /><code>{"int meshPartsCount"}</code> | <span className="api-desc">How many parts the mesh is split into.</span> |
| <Link id="m-minmaxwidth" /><code>{"float minMaxWidth"}</code> | <span className="api-desc">Share of the joined spline's width this spline covers, for UVs.</span> |
| <Link id="m-minval" /><code>{"float minVal"}</code> | <span className="api-desc">Shapes how vertices spread across the left half of the width.</span> |
| <Link id="m-normalfromraycast" /><code>{"bool normalFromRaycast"}</code> | <span className="api-desc">When true, normals come from a raycast to the ground instead of the spline orientation.</span> |
| <Link id="m-normalsbeginning" /><code>{"List<Vector3> normalsBeginning"}</code> | <span className="api-desc">Normals of the first row, used by splines that join onto this one.</span> |
| <Link id="m-normalsending" /><code>{"List<Vector3> normalsEnding"}</code> | <span className="api-desc">Normals of the last row, used by splines that join onto this one.</span> |
| <Link id="m-normalslist" /><code>{"List<Vector3> normalsList"}</code> | <span className="api-desc">Per sample normal.</span> |
| <Link id="m-oldmaterial" /><code>{"Material oldMaterial"}</code> | <span className="api-desc">Editor tool setting. Not read in the game code.</span> |
| <Link id="m-oldprofile" /><code><Link to="/mod/game-api/types/global-s/splineprofile">{"SplineProfile"}</Link>{" oldProfile"}</code> | <span className="api-desc">Previous spline profile. Probably used by the editor tool only.</span> |
| <Link id="m-opacity" /><code>{"float opacity"}</code> | <span className="api-desc">Editor painting opacity. Not read in the game code.</span> |
| <Link id="m-orientations" /><code>{"List<Quaternion> orientations"}</code> | <span className="api-desc">Per sample orientation.</span> |
| <Link id="m-overrideflowmap" /><code>{"bool overrideFlowMap"}</code> | <span className="api-desc">When true, a hand painted flow map is kept instead of recomputed.</span> |
| <Link id="m-points" /><code>{"List<Vector3> points"}</code> | <span className="api-desc">Sampled centre line points.</span> |
| <Link id="m-points2" /><code>{"List<Vector3> points2"}</code> | <span className="api-desc">Unused point list.</span> |
| <Link id="m-pointsdown" /><code>{"List<Vector3> pointsDown"}</code> | <span className="api-desc">Sampled left edge points.</span> |
| <Link id="m-pointsup" /><code>{"List<Vector3> pointsUp"}</code> | <span className="api-desc">Sampled right edge points.</span> |
| <Link id="m-raycastheightoffset" /><code>{"float raycastHeightOffset"}</code> | <span className="api-desc">Height above a vertex that ground snap raycasts start from.</span> |
| <Link id="m-showflowmap" /><code>{"bool showFlowMap"}</code> | <span className="api-desc">Editor display toggle. Not read in the game code.</span> |
| <Link id="m-showvertexcolors" /><code>{"bool showVertexColors"}</code> | <span className="api-desc">Editor display toggle. Not read in the game code.</span> |
| <Link id="m-simulatedriverlength" /><code>{"float simulatedRiverLength"}</code> | <span className="api-desc">Editor river simulation setting. Not read in the game code.</span> |
| <Link id="m-simulatedriverpoints" /><code>{"int simulatedRiverPoints"}</code> | <span className="api-desc">Editor river simulation setting. Not read in the game code.</span> |
| <Link id="m-simulationminstepsize" /><code>{"float simulationMinStepSize"}</code> | <span className="api-desc">Editor river simulation setting. Not read in the game code.</span> |
| <Link id="m-snapmask" /><code>{"LayerMask snapMask"}</code> | <span className="api-desc">Layers the edge vertices snap and raycast onto.</span> |
| <Link id="m-snaps" /><code>{"List<float> snaps"}</code> | <span className="api-desc">Per sample ground snap amount.</span> |
| <Link id="m-snaptoterrain" /><code>{"bool snapToTerrain"}</code> | <span className="api-desc">Whether generated vertices are raycast down onto `snapMask` colliders.</span> |
| <Link id="m-tangents" /><code>{"List<Vector3> tangents"}</code> | <span className="api-desc">Per sample tangent.</span> |
| <Link id="m-terrainadditionalwidth" /><code>{"float terrainAdditionalWidth"}</code> | <span className="api-desc">Editor terrain carving setting. Not read in the game code.</span> |
| <Link id="m-terraincurve" /><code>{"AnimationCurve terrainCurve"}</code> | <span className="api-desc">Editor terrain carving curve. Not read in the game code.</span> |
| <Link id="m-terraindepthheight" /><code>{"float terrainDepthHeight"}</code> | <span className="api-desc">Editor terrain carving setting. Not read in the game code.</span> |
| <Link id="m-terraindepthmultiplier" /><code>{"float terrainDepthMultiplier"}</code> | <span className="api-desc">Editor terrain carving setting. Not read in the game code.</span> |
| <Link id="m-terrainsmoothmultiplier" /><code>{"float terrainSmoothMultiplier"}</code> | <span className="api-desc">Editor terrain carving setting. Not read in the game code.</span> |
| <Link id="m-toolbarint" /><code>{"int toolbarInt"}</code> | <span className="api-desc">Selected tab in the editor tool. Not read in the game code.</span> |
| <Link id="m-triangledensity" /><code>{"float triangleDensity"}</code> | <span className="api-desc">How densely the spline is sampled along its length.</span> |
| <Link id="m-uvbeginning" /><code>{"float uvBeginning"}</code> | <span className="api-desc">UV offset across the width, from where this spline joins its parent.</span> |
| <Link id="m-uvrotation" /><code>{"bool uvRotation"}</code> | <span className="api-desc">When true, the along-river UV goes in u instead of v.</span> |
| <Link id="m-uvscale" /><code>{"float uvScale"}</code> | <span className="api-desc">UV tiling along the river.</span> |
| <Link id="m-uvscaleoverride" /><code>{"bool uvScaleOverride"}</code> | <span className="api-desc">When true, keeps this spline's own `uvScale` instead of copying the parent's.</span> |
| <Link id="m-uvwidth" /><code>{"float uvWidth"}</code> | <span className="api-desc">UV width across the river, scaled by the share of the parent it covers.</span> |
| <Link id="m-verticesbeginning" /><code>{"List<Vector3> verticesBeginning"}</code> | <span className="api-desc">Vertices of the first row, used by splines that join onto this one.</span> |
| <Link id="m-verticesending" /><code>{"List<Vector3> verticesEnding"}</code> | <span className="api-desc">Vertices of the last row, used by splines that join onto this one.</span> |
| <Link id="m-vertsinshape" /><code>{"int vertsInShape"}</code> | <span className="api-desc">Vertices across the river's width.</span> |
| <Link id="m-width" /><code>{"float width"}</code> | <span className="api-desc">Default width for new control points.</span> |
| <Link id="m-widths" /><code>{"List<float> widths"}</code> | <span className="api-desc">Per sample river width.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isgenerationcontrolled" /><code>{"private bool isGenerationControlled"}</code> | <span className="api-desc">Set by `ControlledGenerate` so `Start` doesn't generate again.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addpoint" /><code>{"void AddPoint(Vector4 position)"}</code> | <span className="api-desc">Adds a control point at the end. A `w` of 0 copies the last point's width, or `width` for the first.</span> |
| <Link id="m-addpoint-2" /><code>{"void AddPoint(Vector4 position, AnimationCurve curve)"}</code> | <span className="api-desc">Adds a control point at the end. A `w` of 0 copies the last point's width, or `width` for the first.</span> |
| <Link id="m-addpointafter" /><code>{"void AddPointAfter(int i)"}</code> | <span className="api-desc">Inserts a control point after index `i`, halfway to the next point or extended past the last one.</span> |
| <Link id="m-changepointposition" /><code>{"void ChangePointPosition(int i, Vector3 position)"}</code> | <span className="api-desc">Moves a control point. A `w` of 0 keeps its current width.</span> |
| <Link id="m-changepointposition-2" /><code>{"void ChangePointPosition(int i, Vector4 position)"}</code> | <span className="api-desc">Moves a control point. A `w` of 0 keeps its current width.</span> |
| <Link id="m-controlledgenerate" /><code>{"void ControlledGenerate()"}</code> | <span className="api-desc">Builds the mesh now and stops `Start` from building it again.</span> |
| <Link id="m-createspline" /><code>{"static "}<Link to="/mod/game-api/types/global-q-r/ramspline">{"RamSpline"}</Link>{" CreateSpline(Material splineMaterial = null, List<Vector4> positions = null)"}</code> | <span className="api-desc">Creates a new game object with a spline and an unshadowed mesh renderer, optionally with a material and points.</span> |
| <Link id="m-generatebeginningparentbased" /><code>{"void GenerateBeginningParentBased()"}</code> | <span className="api-desc">Snaps the first control point onto the end of `beginningSpline`, between its min and max width.</span> |
| <Link id="m-generateendingparentbased" /><code>{"void GenerateEndingParentBased()"}</code> | <span className="api-desc">Snaps the last control point onto the start of `endingSpline`, between its min and max width.</span> |
| <Link id="m-generatemeshparts-2" /><code>{"void GenerateMeshParts(Mesh baseMesh)"}</code> | <span className="api-desc">Splits a built mesh into `meshPartsCount` child mesh objects and hides the main renderer.</span> |
| <Link id="m-generatespline" /><code>{"void GenerateSpline(List<"}<Link to="/mod/game-api/types/global-q-r/ramspline">{"RamSpline"}</Link>{"> generatedSplines = null)"}</code> | <span className="api-desc">Rebuilds the river mesh from the control points, then regenerates connected child splines. The list argument is ignored.</span> |
| <Link id="m-removepoint" /><code>{"void RemovePoint(int i)"}</code> | <span className="api-desc">Removes a control point and its rotation, snap and curve entries.</span> |
| <Link id="m-removepoints" /><code>{"void RemovePoints(int fromID = -1)"}</code> | <span className="api-desc">Removes every control point after index `fromID` (all of them by default).</span> |
| <Link id="m-start" /><code>{"void Start()"}</code> | <span className="api-desc">Builds the mesh unless `ControlledGenerate` already did.</span> |

<details className="api-private">
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculatecatmullromsidesplines" /><code>{"private void CalculateCatmullRomSideSplines(List<Vector4> controlPoints, int pos)"}</code> | <span className="api-desc">For one control point segment, works out the orientation and the left and right edge points from the point's width.</span> |
| <Link id="m-calculatecatmullromspline" /><code>{"private void CalculateCatmullRomSpline(List<Vector3> controlPoints, int pos, ref List<Vector3> points)"}</code> | <span className="api-desc">Samples one segment of a Catmull-Rom curve through the given points into the output list, at `triangleDensity` steps.</span> |
| <Link id="m-calculatecatmullromsplineparameters" /><code>{"private void CalculateCatmullRomSplineParameters(List<Vector4> controlPoints, int pos, bool initialPoints = false)"}</code> | <span className="api-desc">Samples one segment of the centre line, filling the width, snap, orientation, tangent and normal lists.</span> |
| <Link id="m-calculatenormal" /><code>{"private Vector3 CalculateNormal(Vector3 tangent, Vector3 up)"}</code> | <span className="api-desc">Normal that is square to the tangent and as close to `up` as it can be.</span> |
| <Link id="m-calculatepointparameters" /><code>{"private void CalculatePointParameters(List<Vector4> controlPoints, int pos, Vector3 p0, Vector3 p1, Vector3 p2, Vector3 p3, float t)"}</code> | <span className="api-desc">Adds one centre line sample: position, width, snap, orientation, tangent and normal (flipped to stay on the same side).</span> |
| <Link id="m-calculatepointposition" /><code>{"private void CalculatePointPosition(List<Vector3> controlPoints, int pos, Vector3 p0, Vector3 p1, Vector3 p2, Vector3 p3, float t, ref List<Vector3> points)"}</code> | <span className="api-desc">Adds one sampled position to the output list.</span> |
| <Link id="m-clamplistpos" /><code>{"private int ClampListPos(int pos)"}</code> | <span className="api-desc">Wraps an index into the control point list.</span> |
| <Link id="m-flowcalculate" /><code>{"private float FlowCalculate(float u, float normalY)"}</code> | <span className="api-desc">Flow speed for a point across the width: the waterfall curve on steep ground, the flat curve on level ground.</span> |
| <Link id="m-generatemesh" /><code>{"private void GenerateMesh(ref Mesh mesh)"}</code> | <span className="api-desc">Builds the river mesh from the sampled edges: vertices, normals, UVs, flow map in uv4 and colours. Also sets a `MeshCollider` if there is one.</span> |
| <Link id="m-generaterow" /><code>{"private float GenerateRow(int i, int j, int offset, ref float u, ref float u3, Vector3[] vertices, Vector3[] normals, Vector2[] uvs, Vector2[] uvs3, Vector2[] uvs4, bool isRaycasting)"}</code> | <span className="api-desc">Places one vertex across the width, snapping to joined splines or the ground below, and sets its normal, UVs and flow value.</span> |
| <Link id="m-getcatmullromposition" /><code>{"private Vector3 GetCatmullRomPosition(float t, Vector3 p0, Vector3 p1, Vector3 p2, Vector3 p3)"}</code> | <span className="api-desc">Point on a Catmull-Rom curve at `t`.</span> |
| <Link id="m-getcatmullromtangent" /><code>{"private Vector3 GetCatmullRomTangent(float t, Vector3 p0, Vector3 p1, Vector3 p2, Vector3 p3)"}</code> | <span className="api-desc">Tangent of a Catmull-Rom curve at `t`.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cleans up the generated mesh.</span> |

</details>

## Used in

Members of other types that take, return or hold a `RamSpline`:

<div className="api-used-in">

[`RiverMeshTest.pathSplines`](/mod/game-api/types/alta-world-generation/rivermeshtest#m-pathsplines), [`RiverMeshTest.prefab`](/mod/game-api/types/alta-world-generation/rivermeshtest#m-prefab), [`RiverMeshTest.splines`](/mod/game-api/types/alta-world-generation/rivermeshtest#m-splines), [`RiverPath.Mesh`](/mod/game-api/types/alta-world-generation/riverpath#m-mesh).

</div>
