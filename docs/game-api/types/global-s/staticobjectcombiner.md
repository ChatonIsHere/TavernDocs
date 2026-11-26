---
title: "StaticObjectCombiner"
description: "Bake-time tool on static prefabs that merges LOD groups, joins meshes by material, removes hidden or underground triangles and flattens colliders, based on..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticObjectCombiner

A **class** in `Root.Township`, no namespace.

Bake-time tool on static prefabs that merges LOD groups, joins meshes by material, removes hidden or underground triangles and flattens colliders, based on its `functions` flags. Runs during static batching, not in a live game.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`DynamicObjectCombiner`](/game-api/types/global-c-d/dynamicobjectcombiner), [`SceneStaticObjectCombiner`](/game-api/types/global-s/scenestaticobjectcombiner)
- **Nested types** [`CombineFunctions`](/game-api/types/global-s/staticobjectcombiner-combinefunctions), [`IncrementalMesh`](/game-api/types/global-s/staticobjectcombiner-incrementalmesh), [`Space`](/game-api/types/global-s/staticobjectcombiner-space)
- **Documented in** [Static objects](/game-api/world/static-objects#staticobjectcombiner)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StaticObjectCombiner()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-functions" /><code>{"protected "}<Link to="/game-api/types/global-s/staticobjectcombiner-combinefunctions">{"StaticObjectCombiner.CombineFunctions"}</Link>{" functions"}</code> | Flags for which bake steps to run (LOD join, mesh join, occlusion, collider joining and flattening, terrain occlusion). |

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-additionalcheckpoints" /><code>{"private Vector3[] additionalCheckPoints"}</code> | Extra local-space points used as view points when finding hidden triangles. |
| <Link id="m-btnbake" /><code>{"private bool btnBake"}</code> | Inspector button that runs a preview bake. |
| <Link id="m-impostorkey" /><code>{"private const string ImpostorKey"}</code> | Shader name part (`Impostor`) used to skip impostor renderers. |
| <Link id="m-isforcingjoinedmeshcollidersconvex" /><code>{"private bool isForcingJoinedMeshCollidersConvex"}</code> | Makes the joined mesh colliders convex. |
| <Link id="m-isignoringautomatedmarking" /><code>{"private bool isIgnoringAutomatedMarking"}</code> | Runs collider joining and terrain occlusion even during automated static batching, and joins layers with a single collider. |
| <Link id="m-joinedlodvalues" /><code>{"private float[] joinedLODValues"}</code> | Screen transition heights applied to the joined LOD group's levels. |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> | NLog logger for this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isautomatedcall" /><code>{"static bool IsAutomatedCall { get; set; }"}</code> | Static flag for automated batch runs. While set, collider joining and terrain collider steps are skipped unless the object opts in. |
| <Link id="m-isterrainbakinglocked" /><code>{"static bool IsTerrainBakingLocked { get; set; }"}</code> | Static switch that turns off all terrain-based triangle removal. |
| <Link id="m-iscleaningonjoin" /><code>{"protected virtual bool IsCleaningOnJoin { get; }"}</code> | Whether empty child objects are deleted after joining. True by default. |
| <Link id="m-issettingtoterrainlayer" /><code>{"protected virtual bool IsSettingToTerrainLayer { get; }"}</code> | Whether joined meshes are moved to the Terrain layer. True by default. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-oncreatedrenderers" /><code>{"static event Action<IEnumerable<Renderer>> OnCreatedRenderers"}</code> | Static one-shot event raised with the renderers a mesh join created. Cleared after each join. |
| <Link id="m-postbakeables" /><code>{"event Action<GameObject> PostBakeables"}</code> | Raised after the object's build bakeables have been baked, before any combining. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-autolod" /><code>{"static void AutoLOD(GameObject baseObject)"}</code> | Merges all child LOD groups into a single LOD group on the base object, taking the largest transition height per level. |
| <Link id="m-bake" /><code>{"virtual void Bake()"}</code> | Runs every enabled bake step on this object. |
| <Link id="m-cleanrecursive" /><code>{"static bool CleanRecursive(Transform parent)"}</code> | Deletes child objects that have nothing but a transform. True if the given object was deleted. |
| <Link id="m-excludeoccludedtriangles" /><code>{"static Mesh ExcludeOccludedTriangles(Mesh mesh, List<"}<Link to="/game-api/types/global-q-r/removingtriangle">{"RemovingTriangle"}</Link>{"> trianglesToRemove)"}</code> | Returns a copy of a mesh with the listed triangles removed. |
| <Link id="m-flattenprimitivecolliders" /><code>{"static void FlattenPrimitiveColliders(Transform transform)"}</code> | Moves box colliders onto shared child objects grouped by layer and rotation, so there are fewer collider objects. |
| <Link id="m-gatherrenderers" /><code>{"static void GatherRenderers(GameObject prefab, LODGroup lodGroup, Dictionary<"}<Link to="/game-api/types/global-m-o/materiallod">{"MaterialLOD"}</Link>{", List<MeshFilter>> meshesByMaterial, Func<Renderer, bool> validateRenderer = null)"}</code> | Groups the prefab's mesh filters by material and LOD level, skipping impostors and parts on other rigidbodies. |
| <Link id="m-joinmeshes" /><code>{"static List<GameObject> JoinMeshes(Transform baseTransform, LODGroup lodGroup, KeyValuePair<"}<Link to="/game-api/types/global-m-o/materiallod">{"MaterialLOD"}</Link>{", List<MeshFilter>> pair, out List<Mesh> newMeshes, bool isCleaningUp = false)"}</code> | Combines a group of meshes with the same material and LOD into new mesh objects under the base transform. |
| <Link id="m-setupfull" /><code>{"void SetupFull()"}</code> | Turns on every bake step. |
| <Link id="m-validaterenderer" /><code>{"protected virtual bool ValidateRenderer(Renderer renderer)"}</code> | Subclass filter for which renderers may be joined. Allows all by default. |

<details>
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-additionalcheckpoints-2" /><code>{"private IEnumerable<Vector3> AdditionalCheckPoints() (iterator)"}</code> | Yields `additionalCheckPoints` in world space, as extra view points for the triangle occlusion check. |
| <Link id="m-anychecks" /><code>{"private static bool AnyChecks(bool[] checks, List<int> triangles, int i)"}</code> | True when all three vertices of a triangle passed the check (the name says any, the code needs all). |
| <Link id="m-getlodlevel" /><code>{"private static int GetLODLevel(Renderer renderer, LOD[] lods)"}</code> | Returns which LOD level of the group a renderer is in, or -1. |
| <Link id="m-getmesh" /><code>{"private static void GetMesh(List<Vector3> vertices, List<int> triangles, ref bool needsNormal, List<Vector3> normals, ref bool needsTangents, List<Vector4> tangents, ref bool needsUV, List<Vector2> uv, ref bool needsUV2, List<Vector4> uv2, ref bool needsUV3, List<Vector4> uv3, ref bool needsUV4, List<Vector4> uv4, ref bool needsColor, List<Color> colors, "}<Link to="/game-api/types/global-m-o/materiallod">{"MaterialLOD"}</Link>{" materialLOD, List<Mesh> meshes, bool hasLOD, int finalLayer, List<GameObject> result, Transform baseTransform, List<Renderer> joinedRenderers)"}</code> | Builds a mesh from the gathered vertex lists, clears them, and adds a renderer object for it under the base transform. |
| <Link id="m-getnewparent" /><code>{"private static "}<Link to="/game-api/types/global-s/staticobjectcombiner-space">{"StaticObjectCombiner.Space"}</Link>{" GetNewParent(int layer, List<"}<Link to="/game-api/types/global-s/staticobjectcombiner-space">{"StaticObjectCombiner.Space"}</Link>{"> spaces, Quaternion rotation, Transform parent)"}</code> | Creates a new collider parent `Space` for a layer and rotation and adds it to the list. |
| <Link id="m-isvalidateterrain" /><code>{"private bool IsValidateTerrain(Object terrain)"}</code> | True when a terrain exists, terrain baking isn't locked and `TerrainOccludesTriangles` is set. |
| <Link id="m-joinmeshcolliders" /><code>{"private void JoinMeshColliders()"}</code> | Merges child mesh colliders into one collision mesh per layer, strips occluded triangles and destroys the originals. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Empty. |
| <Link id="m-trianglevalidation" /><code>{"private static bool TriangleValidation(Vector3 a, Vector3 b, Vector3 c, Matrix4x4 localToWorld, Terrain terrain)"}</code> | True when any edge of the triangle crosses the terrain (temporarily moved to layer 3 for the linecast). |
| <Link id="m-validation" /><code>{"private static bool Validation(Vector3 worldVertex, Matrix4x4 localToWorld, Terrain terrain)"}</code> | True when a vertex is above the terrain height at its position. |

</details>
