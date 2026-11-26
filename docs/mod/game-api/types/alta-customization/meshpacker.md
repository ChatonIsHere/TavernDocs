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

<details>
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-boneweights" /><code>{"private static List<BoneWeight> boneWeights"}</code> | Shared buffer for merged bone weights. |
| <Link id="m-indices" /><code>{"private static List<int> indices"}</code> | Shared buffer for merged triangle indices. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-normals" /><code>{"private static List<Vector3> normals"}</code> | Shared buffer for merged normals. |
| <Link id="m-tangents" /><code>{"private static List<Vector4> tangents"}</code> | Shared buffer for merged tangents. |
| <Link id="m-uvs" /><code>{"private static List<Vector2> uvs"}</code> | Shared buffer for merged, atlas-remapped UVs. |
| <Link id="m-vertices" /><code>{"private static List<Vector3> vertices"}</code> | Shared buffer for merged vertices. |
| <Link id="m-workingboneweight" /><code>{"private static List<BoneWeight> workingBoneWeight"}</code> | Scratch buffer for one mesh's bone weights. |
| <Link id="m-workingint" /><code>{"private static List<int> workingInt"}</code> | Scratch buffer for one mesh's triangles. |
| <Link id="m-workingvector2" /><code>{"private static List<Vector2> workingVector2"}</code> | Scratch buffer for one mesh's UVs. |
| <Link id="m-workingvector3" /><code>{"private static List<Vector3> workingVector3"}</code> | Scratch buffer for one mesh's vertices and normals. |
| <Link id="m-workingvector4" /><code>{"private static List<Vector4> workingVector4"}</code> | Scratch buffer for one mesh's tangents. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-pack" /><code>{"static async Task Pack(Dictionary<"}<Link to="/mod/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{", "}<Link to="/mod/game-api/types/alta-customization/icosmeticmeshpartbase">{"ICosmeticMeshPartBase"}</Link>{"> map, Matrix4x4[] defaultBindposes, IEnumerable<"}<Link to="/mod/game-api/types/alta-customization/cosmeticpacker-input">{"CosmeticPacker.Input"}</Link>{"> parts, Mesh[] targetMeshes, bool? isUsingHeadParts, bool isAlphaBlending, int startingLOD, CancellationToken cancellation)"}</code> | Merges matching parts (by alpha blending and head or body) into the target meshes; with a head flag it only packs `startingLOD`. Uses impeded LODs when a part is impeded. |
