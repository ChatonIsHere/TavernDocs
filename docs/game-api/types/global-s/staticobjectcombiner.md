---
title: "StaticObjectCombiner"
description: "StaticObjectCombiner (no namespace) and its subclasses SceneStaticObjectCombiner and DynamicObjectCombiner merge meshes, join LOD groups, flatten coll"
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticObjectCombiner

A **class** in `Root.Township`, no namespace.

`StaticObjectCombiner` (no namespace) and its subclasses `SceneStaticObjectCombiner` and `DynamicObjectCombiner` merge meshes, join LOD groups, flatten colliders and cut hidden triangles.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`DynamicObjectCombiner`](/game-api/types/global-c-d/dynamicobjectcombiner), [`SceneStaticObjectCombiner`](/game-api/types/global-s/scenestaticobjectcombiner)
- **Nested types** [`CombineFunctions`](/game-api/types/global-s/staticobjectcombiner-combinefunctions), [`IncrementalMesh`](/game-api/types/global-s/staticobjectcombiner-incrementalmesh), [`Space`](/game-api/types/global-s/staticobjectcombiner-space)
- **Documented in** [Static objects](/game-api/world/static-objects#staticobjectcombiner)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticObjectCombiner()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-additionalcheckpoints" /><code>{"private Vector3[] additionalCheckPoints"}</code> |  |
| <Link id="m-btnbake" /><code>{"private bool btnBake"}</code> |  |
| <Link id="m-functions" /><code>{"protected "}<Link to="/game-api/types/global-s/staticobjectcombiner-combinefunctions">{"StaticObjectCombiner.CombineFunctions"}</Link>{" functions"}</code> |  |
| <Link id="m-impostorkey" /><code>{"private const string ImpostorKey"}</code> |  |
| <Link id="m-isforcingjoinedmeshcollidersconvex" /><code>{"private bool isForcingJoinedMeshCollidersConvex"}</code> |  |
| <Link id="m-isignoringautomatedmarking" /><code>{"private bool isIgnoringAutomatedMarking"}</code> |  |
| <Link id="m-joinedlodvalues" /><code>{"private float[] joinedLODValues"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isautomatedcall" /><code>{"static bool IsAutomatedCall { get; set; }"}</code> |  |
| <Link id="m-isterrainbakinglocked" /><code>{"static bool IsTerrainBakingLocked { get; set; }"}</code> |  |
| <Link id="m-iscleaningonjoin" /><code>{"protected virtual bool IsCleaningOnJoin { get; }"}</code> |  |
| <Link id="m-issettingtoterrainlayer" /><code>{"protected virtual bool IsSettingToTerrainLayer { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-oncreatedrenderers" /><code>{"static event Action<IEnumerable<Renderer>> OnCreatedRenderers"}</code> |  |
| <Link id="m-postbakeables" /><code>{"event Action<GameObject> PostBakeables"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-autolod" /><code>{"static void AutoLOD(GameObject baseObject)"}</code> |  |
| <Link id="m-bake" /><code>{"virtual void Bake()"}</code> |  |
| <Link id="m-cleanrecursive" /><code>{"static bool CleanRecursive(Transform parent)"}</code> |  |
| <Link id="m-excludeoccludedtriangles" /><code>{"static Mesh ExcludeOccludedTriangles(Mesh mesh, List<"}<Link to="/game-api/types/global-q-r/removingtriangle">{"RemovingTriangle"}</Link>{"> trianglesToRemove)"}</code> |  |
| <Link id="m-flattenprimitivecolliders" /><code>{"static void FlattenPrimitiveColliders(Transform transform)"}</code> |  |
| <Link id="m-gatherrenderers" /><code>{"static void GatherRenderers(GameObject prefab, LODGroup lodGroup, Dictionary<"}<Link to="/game-api/types/global-m-o/materiallod">{"MaterialLOD"}</Link>{", List<MeshFilter>> meshesByMaterial, Func<Renderer, bool> validateRenderer = null)"}</code> |  |
| <Link id="m-joinmeshes" /><code>{"static List<GameObject> JoinMeshes(Transform baseTransform, LODGroup lodGroup, KeyValuePair<"}<Link to="/game-api/types/global-m-o/materiallod">{"MaterialLOD"}</Link>{", List<MeshFilter>> pair, out List<Mesh> newMeshes, bool isCleaningUp = false)"}</code> |  |
| <Link id="m-setupfull" /><code>{"void SetupFull()"}</code> |  |
| <Link id="m-additionalcheckpoints-2" /><code>{"private IEnumerable<Vector3> AdditionalCheckPoints() (iterator)"}</code> |  |
| <Link id="m-anychecks" /><code>{"private static bool AnyChecks(bool[] checks, List<int> triangles, int i)"}</code> |  |
| <Link id="m-getlodlevel" /><code>{"private static int GetLODLevel(Renderer renderer, LOD[] lods)"}</code> |  |
| <Link id="m-getmesh" /><code>{"private static void GetMesh(List<Vector3> vertices, List<int> triangles, ref bool needsNormal, List<Vector3> normals, ref bool needsTangents, List<Vector4> tangents, ref bool needsUV, List<Vector2> uv, ref bool needsUV2, List<Vector4> uv2, ref bool needsUV3, List<Vector4> uv3, ref bool needsUV4, List<Vector4> uv4, ref bool needsColor, List<Color> colors, "}<Link to="/game-api/types/global-m-o/materiallod">{"MaterialLOD"}</Link>{" materialLOD, List<Mesh> meshes, bool hasLOD, int finalLayer, List<GameObject> result, Transform baseTransform, List<Renderer> joinedRenderers)"}</code> |  |
| <Link id="m-getnewparent" /><code>{"private static "}<Link to="/game-api/types/global-s/staticobjectcombiner-space">{"StaticObjectCombiner.Space"}</Link>{" GetNewParent(int layer, List<"}<Link to="/game-api/types/global-s/staticobjectcombiner-space">{"StaticObjectCombiner.Space"}</Link>{"> spaces, Quaternion rotation, Transform parent)"}</code> |  |
| <Link id="m-isvalidateterrain" /><code>{"private bool IsValidateTerrain(Object terrain)"}</code> |  |
| <Link id="m-joinmeshcolliders" /><code>{"private void JoinMeshColliders()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-trianglevalidation" /><code>{"private static bool TriangleValidation(Vector3 a, Vector3 b, Vector3 c, Matrix4x4 localToWorld, Terrain terrain)"}</code> |  |
| <Link id="m-validaterenderer" /><code>{"protected virtual bool ValidateRenderer(Renderer renderer)"}</code> |  |
| <Link id="m-validation" /><code>{"private static bool Validation(Vector3 worldVertex, Matrix4x4 localToWorld, Terrain terrain)"}</code> |  |
