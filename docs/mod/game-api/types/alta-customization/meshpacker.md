---
title: "MeshPacker"
description: "Merges the meshes of all cosmetic parts into a character's skinned meshes, one per LOD, remapping UVs into each part's place in the texture atlas."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MeshPacker

A **static class** in `Root.Township`, `Alta.Customization`.

Merges the meshes of all cosmetic parts into a character's skinned meshes, one per LOD, remapping UVs into each part's place in the texture atlas. Used by `CosmeticPacker`.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)

## Fields

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-boneweights" /><code>{"private static List<BoneWeight> boneWeights"}</code> | <span className="api-desc">Shared buffer for merged bone weights.</span> |
| <Link id="m-indices" /><code>{"private static List<int> indices"}</code> | <span className="api-desc">Shared buffer for merged triangle indices.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-normals" /><code>{"private static List<Vector3> normals"}</code> | <span className="api-desc">Shared buffer for merged normals.</span> |
| <Link id="m-tangents" /><code>{"private static List<Vector4> tangents"}</code> | <span className="api-desc">Shared buffer for merged tangents.</span> |
| <Link id="m-uvs" /><code>{"private static List<Vector2> uvs"}</code> | <span className="api-desc">Shared buffer for merged, atlas-remapped UVs.</span> |
| <Link id="m-vertices" /><code>{"private static List<Vector3> vertices"}</code> | <span className="api-desc">Shared buffer for merged vertices.</span> |
| <Link id="m-workingboneweight" /><code>{"private static List<BoneWeight> workingBoneWeight"}</code> | <span className="api-desc">Scratch buffer for one mesh's bone weights.</span> |
| <Link id="m-workingint" /><code>{"private static List<int> workingInt"}</code> | <span className="api-desc">Scratch buffer for one mesh's triangles.</span> |
| <Link id="m-workingvector2" /><code>{"private static List<Vector2> workingVector2"}</code> | <span className="api-desc">Scratch buffer for one mesh's UVs.</span> |
| <Link id="m-workingvector3" /><code>{"private static List<Vector3> workingVector3"}</code> | <span className="api-desc">Scratch buffer for one mesh's vertices and normals.</span> |
| <Link id="m-workingvector4" /><code>{"private static List<Vector4> workingVector4"}</code> | <span className="api-desc">Scratch buffer for one mesh's tangents.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-pack" /><code>{"static async Task Pack(Dictionary<"}<Link to="/mod/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{", "}<Link to="/mod/game-api/types/alta-customization/icosmeticmeshpartbase">{"ICosmeticMeshPartBase"}</Link>{"> map, Matrix4x4[] defaultBindposes, IEnumerable<"}<Link to="/mod/game-api/types/alta-customization/cosmeticpacker-input">{"CosmeticPacker.Input"}</Link>{"> parts, Mesh[] targetMeshes, bool? isUsingHeadParts, bool isAlphaBlending, int startingLOD, CancellationToken cancellation)"}</code> | <span className="api-desc">Merges matching parts (by alpha blending and head or body) into the target meshes; with a head flag it only packs `startingLOD`. Uses impeded LODs when a part is impeded.</span> |
