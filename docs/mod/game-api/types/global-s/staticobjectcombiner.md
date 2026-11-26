---
title: "StaticObjectCombiner"
description: "Bake-time tool on static prefabs that merges LOD groups, joins meshes by material, removes hidden or underground triangles and flattens colliders, based on..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticObjectCombiner

A **class** in `Root.Township`, the global namespace.

Bake-time tool on static prefabs that merges LOD groups, joins meshes by material, removes hidden or underground triangles and flattens colliders, based on its `functions` flags. Runs during static batching, not in a live game.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`DynamicObjectCombiner`](/mod/game-api/types/global-c-d/dynamicobjectcombiner), [`SceneStaticObjectCombiner`](/mod/game-api/types/global-s/scenestaticobjectcombiner)
- **Nested types** [`CombineFunctions`](/mod/game-api/types/global-s/staticobjectcombiner-combinefunctions), [`IncrementalMesh`](/mod/game-api/types/global-s/staticobjectcombiner-incrementalmesh), [`Space`](/mod/game-api/types/global-s/staticobjectcombiner-space)
- **Documented in** [Static objects](/mod/game-api/world/static-objects#staticobjectcombiner)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticObjectCombiner()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-functions" /><code>{"protected "}<Link to="/mod/game-api/types/global-s/staticobjectcombiner-combinefunctions">{"StaticObjectCombiner.CombineFunctions"}</Link>{" functions"}</code> | <span className="api-desc">Flags for which bake steps to run (LOD join, mesh join, occlusion, collider joining and flattening, terrain occlusion).</span> |

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-additionalcheckpoints" /><code>{"private Vector3[] additionalCheckPoints"}</code> | <span className="api-desc">Extra local-space points used as view points when finding hidden triangles.</span> |
| <Link id="m-btnbake" /><code>{"private bool btnBake"}</code> | <span className="api-desc">Inspector button that runs a preview bake.</span> |
| <Link id="m-impostorkey" /><code>{"private const string ImpostorKey"}</code> | <span className="api-desc">Shader name part (`Impostor`) used to skip impostor renderers.</span> |
| <Link id="m-isforcingjoinedmeshcollidersconvex" /><code>{"private bool isForcingJoinedMeshCollidersConvex"}</code> | <span className="api-desc">Makes the joined mesh colliders convex.</span> |
| <Link id="m-isignoringautomatedmarking" /><code>{"private bool isIgnoringAutomatedMarking"}</code> | <span className="api-desc">Runs collider joining and terrain occlusion even during automated static batching, and joins layers with a single collider.</span> |
| <Link id="m-joinedlodvalues" /><code>{"private float[] joinedLODValues"}</code> | <span className="api-desc">Screen transition heights applied to the joined LOD group's levels.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isautomatedcall" /><code>{"static bool IsAutomatedCall { get; set; }"}</code> | <span className="api-desc">Static flag for automated batch runs. While set, collider joining and terrain collider steps are skipped unless the object opts in.</span> |
| <Link id="m-isterrainbakinglocked" /><code>{"static bool IsTerrainBakingLocked { get; set; }"}</code> | <span className="api-desc">Static switch that turns off all terrain-based triangle removal.</span> |
| <Link id="m-iscleaningonjoin" /><code>{"protected virtual bool IsCleaningOnJoin { get; }"}</code> | <span className="api-desc">Whether empty child objects are deleted after joining. True by default.</span> |
| <Link id="m-issettingtoterrainlayer" /><code>{"protected virtual bool IsSettingToTerrainLayer { get; }"}</code> | <span className="api-desc">Whether joined meshes are moved to the Terrain layer. True by default.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-oncreatedrenderers" /><code>{"static event Action<IEnumerable<Renderer>> OnCreatedRenderers"}</code> | <span className="api-desc">Static one-shot event raised with the renderers a mesh join created. Cleared after each join.</span> |
| <Link id="m-postbakeables" /><code>{"event Action<GameObject> PostBakeables"}</code> | <span className="api-desc">Raised after the object's build bakeables have been baked, before any combining.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-autolod" /><code>{"static void AutoLOD(GameObject baseObject)"}</code> | <span className="api-desc">Merges all child LOD groups into a single LOD group on the base object, taking the largest transition height per level.</span> |
| <Link id="m-bake" /><code>{"virtual void Bake()"}</code> | <span className="api-desc">Runs every enabled bake step on this object.</span> |
| <Link id="m-cleanrecursive" /><code>{"static bool CleanRecursive(Transform parent)"}</code> | <span className="api-desc">Deletes child objects that have nothing but a transform. True if the given object was deleted.</span> |
| <Link id="m-excludeoccludedtriangles" /><code>{"static Mesh ExcludeOccludedTriangles(Mesh mesh, List<"}<Link to="/mod/game-api/types/global-q-r/removingtriangle">{"RemovingTriangle"}</Link>{"> trianglesToRemove)"}</code> | <span className="api-desc">Returns a copy of a mesh with the listed triangles removed.</span> |
| <Link id="m-flattenprimitivecolliders" /><code>{"static void FlattenPrimitiveColliders(Transform transform)"}</code> | <span className="api-desc">Moves box colliders onto shared child objects grouped by layer and rotation, so there are fewer collider objects.</span> |
| <Link id="m-gatherrenderers" /><code>{"static void GatherRenderers(GameObject prefab, LODGroup lodGroup, Dictionary<"}<Link to="/mod/game-api/types/global-m-o/materiallod">{"MaterialLOD"}</Link>{", List<MeshFilter>> meshesByMaterial, Func<Renderer, bool> validateRenderer = null)"}</code> | <span className="api-desc">Groups the prefab's mesh filters by material and LOD level, skipping impostors and parts on other rigidbodies.</span> |
| <Link id="m-joinmeshes" /><code>{"static List<GameObject> JoinMeshes(Transform baseTransform, LODGroup lodGroup, KeyValuePair<"}<Link to="/mod/game-api/types/global-m-o/materiallod">{"MaterialLOD"}</Link>{", List<MeshFilter>> pair, out List<Mesh> newMeshes, bool isCleaningUp = false)"}</code> | <span className="api-desc">Combines a group of meshes with the same material and LOD into new mesh objects under the base transform.</span> |
| <Link id="m-setupfull" /><code>{"void SetupFull()"}</code> | <span className="api-desc">Turns on every bake step.</span> |
| <Link id="m-validaterenderer" /><code>{"protected virtual bool ValidateRenderer(Renderer renderer)"}</code> | <span className="api-desc">Subclass filter for which renderers may be joined. Allows all by default.</span> |

<details className="api-private">
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-additionalcheckpoints-2" /><code>{"private IEnumerable<Vector3> AdditionalCheckPoints() (iterator)"}</code> | <span className="api-desc">Yields `additionalCheckPoints` in world space, as extra view points for the triangle occlusion check.</span> |
| <Link id="m-anychecks" /><code>{"private static bool AnyChecks(bool[] checks, List<int> triangles, int i)"}</code> | <span className="api-desc">True when all three vertices of a triangle passed the check (the name says any, the code needs all).</span> |
| <Link id="m-getlodlevel" /><code>{"private static int GetLODLevel(Renderer renderer, LOD[] lods)"}</code> | <span className="api-desc">Returns which LOD level of the group a renderer is in, or -1.</span> |
| <Link id="m-getmesh" /><code>{"private static void GetMesh(List<Vector3> vertices, List<int> triangles, ref bool needsNormal, List<Vector3> normals, ref bool needsTangents, List<Vector4> tangents, ref bool needsUV, List<Vector2> uv, ref bool needsUV2, List<Vector4> uv2, ref bool needsUV3, List<Vector4> uv3, ref bool needsUV4, List<Vector4> uv4, ref bool needsColor, List<Color> colors, "}<Link to="/mod/game-api/types/global-m-o/materiallod">{"MaterialLOD"}</Link>{" materialLOD, List<Mesh> meshes, bool hasLOD, int finalLayer, List<GameObject> result, Transform baseTransform, List<Renderer> joinedRenderers)"}</code> | <span className="api-desc">Builds a mesh from the gathered vertex lists, clears them, and adds a renderer object for it under the base transform.</span> |
| <Link id="m-getnewparent" /><code>{"private static "}<Link to="/mod/game-api/types/global-s/staticobjectcombiner-space">{"StaticObjectCombiner.Space"}</Link>{" GetNewParent(int layer, List<"}<Link to="/mod/game-api/types/global-s/staticobjectcombiner-space">{"StaticObjectCombiner.Space"}</Link>{"> spaces, Quaternion rotation, Transform parent)"}</code> | <span className="api-desc">Creates a new collider parent `Space` for a layer and rotation and adds it to the list.</span> |
| <Link id="m-isvalidateterrain" /><code>{"private bool IsValidateTerrain(Object terrain)"}</code> | <span className="api-desc">True when a terrain exists, terrain baking isn't locked and `TerrainOccludesTriangles` is set.</span> |
| <Link id="m-joinmeshcolliders" /><code>{"private void JoinMeshColliders()"}</code> | <span className="api-desc">Merges child mesh colliders into one collision mesh per layer, strips occluded triangles and destroys the originals.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-trianglevalidation" /><code>{"private static bool TriangleValidation(Vector3 a, Vector3 b, Vector3 c, Matrix4x4 localToWorld, Terrain terrain)"}</code> | <span className="api-desc">True when any edge of the triangle crosses the terrain (temporarily moved to layer 3 for the linecast).</span> |
| <Link id="m-validation" /><code>{"private static bool Validation(Vector3 worldVertex, Matrix4x4 localToWorld, Terrain terrain)"}</code> | <span className="api-desc">True when a vertex is above the terrain height at its position.</span> |

</details>
