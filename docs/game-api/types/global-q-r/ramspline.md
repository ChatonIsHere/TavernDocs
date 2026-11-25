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

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RamSpline()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-beginnigchildsplines" /><code>{"List<"}<Link to="/game-api/types/global-q-r/ramspline">{"RamSpline"}</Link>{"> beginnigChildSplines"}</code> | Splines that connect to the start of this one; rebuilt after this one. |
| <Link id="m-beginningconnectionid" /><code>{"int beginningConnectionID"}</code> |  |
| <Link id="m-beginningmaxwidth" /><code>{"float beginningMaxWidth"}</code> |  |
| <Link id="m-beginningminwidth" /><code>{"float beginningMinWidth"}</code> |  |
| <Link id="m-beginningspline" /><code><Link to="/game-api/types/global-q-r/ramspline">{"RamSpline"}</Link>{" beginningSpline"}</code> | Spline whose end this spline's start joins onto. |
| <Link id="m-colors" /><code>{"Color[] colors"}</code> |  |
| <Link id="m-colorsflowmap" /><code>{"List<Vector2> colorsFlowMap"}</code> |  |
| <Link id="m-controlpoints" /><code>{"List<Vector4> controlPoints"}</code> | Control points: XYZ is the local position, W the width there. |
| <Link id="m-controlpointsdown" /><code>{"List<Vector3> controlPointsDown"}</code> |  |
| <Link id="m-controlpointsmeshcurves" /><code>{"List<AnimationCurve> controlPointsMeshCurves"}</code> |  |
| <Link id="m-controlpointsorientation" /><code>{"List<Quaternion> controlPointsOrientation"}</code> |  |
| <Link id="m-controlpointsrotations" /><code>{"List<Quaternion> controlPointsRotations"}</code> | Extra rotation per control point. |
| <Link id="m-controlpointssnap" /><code>{"List<float> controlPointsSnap"}</code> |  |
| <Link id="m-controlpointsup" /><code>{"List<Vector3> controlPointsUp"}</code> |  |
| <Link id="m-currentprofile" /><code><Link to="/game-api/types/global-s/splineprofile">{"SplineProfile"}</Link>{" currentProfile"}</code> |  |
| <Link id="m-debug" /><code>{"bool debug"}</code> |  |
| <Link id="m-detailterrain" /><code>{"int detailTerrain"}</code> |  |
| <Link id="m-detailterrainforward" /><code>{"int detailTerrainForward"}</code> |  |
| <Link id="m-drawcolor" /><code>{"Color drawColor"}</code> |  |
| <Link id="m-drawonmesh" /><code>{"bool drawOnMesh"}</code> |  |
| <Link id="m-drawonmeshflowmap" /><code>{"bool drawOnMeshFlowMap"}</code> |  |
| <Link id="m-drawonmultiple" /><code>{"bool drawOnMultiple"}</code> |  |
| <Link id="m-drawsize" /><code>{"float drawSize"}</code> |  |
| <Link id="m-endingchildsplines" /><code>{"List<"}<Link to="/game-api/types/global-q-r/ramspline">{"RamSpline"}</Link>{"> endingChildSplines"}</code> | Splines that connect to the end of this one; rebuilt after this one. |
| <Link id="m-endingconnectionid" /><code>{"int endingConnectionID"}</code> |  |
| <Link id="m-endingmaxwidth" /><code>{"float endingMaxWidth"}</code> |  |
| <Link id="m-endingminwidth" /><code>{"float endingMinWidth"}</code> |  |
| <Link id="m-endingspline" /><code><Link to="/game-api/types/global-q-r/ramspline">{"RamSpline"}</Link>{" endingSpline"}</code> | Spline whose start this spline's end joins onto. |
| <Link id="m-flowdirection" /><code>{"float flowDirection"}</code> |  |
| <Link id="m-flowflat" /><code>{"AnimationCurve flowFlat"}</code> |  |
| <Link id="m-flowspeed" /><code>{"float flowSpeed"}</code> | Speed written into the flow map. |
| <Link id="m-flowwaterfall" /><code>{"AnimationCurve flowWaterfall"}</code> |  |
| <Link id="m-fulllength" /><code>{"float fulllength"}</code> |  |
| <Link id="m-generatemeshparts" /><code>{"bool generateMeshParts"}</code> | Whether the mesh is split into several child parts. |
| <Link id="m-invertuvdirection" /><code>{"bool invertUVDirection"}</code> |  |
| <Link id="m-length" /><code>{"float length"}</code> |  |
| <Link id="m-lerpvalues" /><code>{"List<float> lerpValues"}</code> |  |
| <Link id="m-maxval" /><code>{"float maxVal"}</code> |  |
| <Link id="m-meshcurve" /><code>{"AnimationCurve meshCurve"}</code> |  |
| <Link id="m-meshesparttransforms" /><code>{"List<Transform> meshesPartTransforms"}</code> |  |
| <Link id="m-meshfilter" /><code>{"MeshFilter meshfilter"}</code> |  |
| <Link id="m-meshpartscount" /><code>{"int meshPartsCount"}</code> | How many parts the mesh is split into. |
| <Link id="m-minmaxwidth" /><code>{"float minMaxWidth"}</code> |  |
| <Link id="m-minval" /><code>{"float minVal"}</code> |  |
| <Link id="m-normalfromraycast" /><code>{"bool normalFromRaycast"}</code> |  |
| <Link id="m-normalsbeginning" /><code>{"List<Vector3> normalsBeginning"}</code> |  |
| <Link id="m-normalsending" /><code>{"List<Vector3> normalsEnding"}</code> |  |
| <Link id="m-normalslist" /><code>{"List<Vector3> normalsList"}</code> |  |
| <Link id="m-oldmaterial" /><code>{"Material oldMaterial"}</code> |  |
| <Link id="m-oldprofile" /><code><Link to="/game-api/types/global-s/splineprofile">{"SplineProfile"}</Link>{" oldProfile"}</code> |  |
| <Link id="m-opacity" /><code>{"float opacity"}</code> |  |
| <Link id="m-orientations" /><code>{"List<Quaternion> orientations"}</code> |  |
| <Link id="m-overrideflowmap" /><code>{"bool overrideFlowMap"}</code> |  |
| <Link id="m-points" /><code>{"List<Vector3> points"}</code> |  |
| <Link id="m-points2" /><code>{"List<Vector3> points2"}</code> |  |
| <Link id="m-pointsdown" /><code>{"List<Vector3> pointsDown"}</code> |  |
| <Link id="m-pointsup" /><code>{"List<Vector3> pointsUp"}</code> |  |
| <Link id="m-raycastheightoffset" /><code>{"float raycastHeightOffset"}</code> |  |
| <Link id="m-showflowmap" /><code>{"bool showFlowMap"}</code> |  |
| <Link id="m-showvertexcolors" /><code>{"bool showVertexColors"}</code> |  |
| <Link id="m-simulatedriverlength" /><code>{"float simulatedRiverLength"}</code> |  |
| <Link id="m-simulatedriverpoints" /><code>{"int simulatedRiverPoints"}</code> |  |
| <Link id="m-simulationminstepsize" /><code>{"float simulationMinStepSize"}</code> |  |
| <Link id="m-snapmask" /><code>{"LayerMask snapMask"}</code> |  |
| <Link id="m-snaps" /><code>{"List<float> snaps"}</code> |  |
| <Link id="m-snaptoterrain" /><code>{"bool snapToTerrain"}</code> | Whether generated vertices are raycast down onto `snapMask` colliders. |
| <Link id="m-tangents" /><code>{"List<Vector3> tangents"}</code> |  |
| <Link id="m-terrainadditionalwidth" /><code>{"float terrainAdditionalWidth"}</code> |  |
| <Link id="m-terraincurve" /><code>{"AnimationCurve terrainCurve"}</code> |  |
| <Link id="m-terraindepthheight" /><code>{"float terrainDepthHeight"}</code> |  |
| <Link id="m-terraindepthmultiplier" /><code>{"float terrainDepthMultiplier"}</code> |  |
| <Link id="m-terrainsmoothmultiplier" /><code>{"float terrainSmoothMultiplier"}</code> |  |
| <Link id="m-toolbarint" /><code>{"int toolbarInt"}</code> |  |
| <Link id="m-triangledensity" /><code>{"float triangleDensity"}</code> | How densely the spline is sampled along its length. |
| <Link id="m-uvbeginning" /><code>{"float uvBeginning"}</code> |  |
| <Link id="m-uvrotation" /><code>{"bool uvRotation"}</code> |  |
| <Link id="m-uvscale" /><code>{"float uvScale"}</code> | UV tiling along the river. |
| <Link id="m-uvscaleoverride" /><code>{"bool uvScaleOverride"}</code> |  |
| <Link id="m-uvwidth" /><code>{"float uvWidth"}</code> |  |
| <Link id="m-verticesbeginning" /><code>{"List<Vector3> verticesBeginning"}</code> |  |
| <Link id="m-verticesending" /><code>{"List<Vector3> verticesEnding"}</code> |  |
| <Link id="m-vertsinshape" /><code>{"int vertsInShape"}</code> | Vertices across the river's width. |
| <Link id="m-width" /><code>{"float width"}</code> | Default width for new control points. |
| <Link id="m-widths" /><code>{"List<float> widths"}</code> |  |
| <Link id="m-isgenerationcontrolled" /><code>{"private bool isGenerationControlled"}</code> |  |

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
| <Link id="m-calculatecatmullromsidesplines" /><code>{"private void CalculateCatmullRomSideSplines(List<Vector4> controlPoints, int pos)"}</code> |  |
| <Link id="m-calculatecatmullromspline" /><code>{"private void CalculateCatmullRomSpline(List<Vector3> controlPoints, int pos, ref List<Vector3> points)"}</code> |  |
| <Link id="m-calculatecatmullromsplineparameters" /><code>{"private void CalculateCatmullRomSplineParameters(List<Vector4> controlPoints, int pos, bool initialPoints = false)"}</code> |  |
| <Link id="m-calculatenormal" /><code>{"private Vector3 CalculateNormal(Vector3 tangent, Vector3 up)"}</code> |  |
| <Link id="m-calculatepointparameters" /><code>{"private void CalculatePointParameters(List<Vector4> controlPoints, int pos, Vector3 p0, Vector3 p1, Vector3 p2, Vector3 p3, float t)"}</code> |  |
| <Link id="m-calculatepointposition" /><code>{"private void CalculatePointPosition(List<Vector3> controlPoints, int pos, Vector3 p0, Vector3 p1, Vector3 p2, Vector3 p3, float t, ref List<Vector3> points)"}</code> |  |
| <Link id="m-clamplistpos" /><code>{"private int ClampListPos(int pos)"}</code> |  |
| <Link id="m-flowcalculate" /><code>{"private float FlowCalculate(float u, float normalY)"}</code> |  |
| <Link id="m-generatemesh" /><code>{"private void GenerateMesh(ref Mesh mesh)"}</code> |  |
| <Link id="m-generaterow" /><code>{"private float GenerateRow(int i, int j, int offset, ref float u, ref float u3, Vector3[] vertices, Vector3[] normals, Vector2[] uvs, Vector2[] uvs3, Vector2[] uvs4, bool isRaycasting)"}</code> |  |
| <Link id="m-getcatmullromposition" /><code>{"private Vector3 GetCatmullRomPosition(float t, Vector3 p0, Vector3 p1, Vector3 p2, Vector3 p3)"}</code> |  |
| <Link id="m-getcatmullromtangent" /><code>{"private Vector3 GetCatmullRomTangent(float t, Vector3 p0, Vector3 p1, Vector3 p2, Vector3 p3)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |

## Used in

Members of other types that take, return or hold a `RamSpline`:

[`RiverMeshTest.pathSplines`](/game-api/types/alta-world-generation/rivermeshtest#m-pathsplines), [`RiverMeshTest.prefab`](/game-api/types/alta-world-generation/rivermeshtest#m-prefab), [`RiverMeshTest.splines`](/game-api/types/alta-world-generation/rivermeshtest#m-splines), [`RiverPath.Mesh`](/game-api/types/alta-world-generation/riverpath#m-mesh).
