---
title: "BonesBaking"
description: "Editor test asset (menu TEST/Bones Baking) that bakes a body type into cosmetic meshes and moves weights from masked bones onto their parents."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BonesBaking

A **class** in `Root.Township`, `Alta.Customization`.

Editor test asset (menu `TEST/Bones Baking`) that bakes a body type into cosmetic meshes and moves weights from masked bones onto their parents. Probably only used in the editor.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BonesBaking()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bakingmesh" /><code>{"private Mesh bakingMesh"}</code> | Mesh the dummy's skinned renderer bakes into. |
| <Link id="m-bones" /><code>{"private int[] bones"}</code> | Indices of bones to remove. |
| <Link id="m-btnmap" /><code>{"private bool btnMap"}</code> | Inspector button that runs `Map`. |
| <Link id="m-dummyprefab" /><code>{"private "}<Link to="/mod/game-api/types/global-s/simpledummy">{"SimpleDummy"}</Link>{" dummyPrefab"}</code> | Prefab of the dummy character used for baking. |
| <Link id="m-mappedparents" /><code>{"private int[] mappedParents"}</code> | For each bone index, the parent bone its weight moves to, or -1. |
| <Link id="m-parents" /><code>{"private int[] parents"}</code> | Parent bone index for each entry in `bones`. |
| <Link id="m-scenedummy" /><code>{"private "}<Link to="/mod/game-api/types/global-s/simpledummy">{"SimpleDummy"}</Link>{" sceneDummy"}</code> | The dummy instance in the scene. |
| <Link id="m-workingvector3" /><code>{"private static List<Vector3> workingVector3"}</code> | Shared buffer for vertex and normal data. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bakemeshes" /><code>{"void BakeMeshes(IEnumerable<Mesh> originalMeshes, int index)"}</code> | Poses a dummy with the given body type, bakes each mesh's vertices and normals into it, and remaps bone weights from masked bones to their parents. |
| <Link id="m-check" /><code>{"void Check(AvatarMask mask, SkinnedMeshRenderer source)"}</code> | Fills `bones` and `parents` from the bones an `AvatarMask` enables on a skinned mesh renderer. |
| <Link id="m-instantiatedummy" /><code>{"void InstantiateDummy()"}</code> | Creates or reactivates the scene dummy used for baking. |
| <Link id="m-map" /><code>{"void Map()"}</code> | Builds `mappedParents` from `bones` and `parents`, with -1 for bones that stay. |

## Used in

Members of other types that take, return or hold a `BonesBaking`:

[`CosmeticPacker.bonesBaking`](/mod/game-api/types/alta-customization/cosmeticpacker#m-bonesbaking).
