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
| <Link id="m-ctor" /><code>{"BonesBaking()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bakingmesh" /><code>{"private Mesh bakingMesh"}</code> | <span className="api-desc">Mesh the dummy's skinned renderer bakes into.</span> |
| <Link id="m-bones" /><code>{"private int[] bones"}</code> | <span className="api-desc">Indices of bones to remove.</span> |
| <Link id="m-btnmap" /><code>{"private bool btnMap"}</code> | <span className="api-desc">Inspector button that runs `Map`.</span> |
| <Link id="m-dummyprefab" /><code>{"private "}<Link to="/mod/game-api/types/global-s/simpledummy">{"SimpleDummy"}</Link>{" dummyPrefab"}</code> | <span className="api-desc">Prefab of the dummy character used for baking.</span> |
| <Link id="m-mappedparents" /><code>{"private int[] mappedParents"}</code> | <span className="api-desc">For each bone index, the parent bone its weight moves to, or -1.</span> |
| <Link id="m-parents" /><code>{"private int[] parents"}</code> | <span className="api-desc">Parent bone index for each entry in `bones`.</span> |
| <Link id="m-scenedummy" /><code>{"private "}<Link to="/mod/game-api/types/global-s/simpledummy">{"SimpleDummy"}</Link>{" sceneDummy"}</code> | <span className="api-desc">The dummy instance in the scene.</span> |
| <Link id="m-workingvector3" /><code>{"private static List<Vector3> workingVector3"}</code> | <span className="api-desc">Shared buffer for vertex and normal data.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bakemeshes" /><code>{"void BakeMeshes(IEnumerable<Mesh> originalMeshes, int index)"}</code> | <span className="api-desc">Poses a dummy with the given body type, bakes each mesh's vertices and normals into it, and remaps bone weights from masked bones to their parents.</span> |
| <Link id="m-check" /><code>{"void Check(AvatarMask mask, SkinnedMeshRenderer source)"}</code> | <span className="api-desc">Fills `bones` and `parents` from the bones an `AvatarMask` enables on a skinned mesh renderer.</span> |
| <Link id="m-instantiatedummy" /><code>{"void InstantiateDummy()"}</code> | <span className="api-desc">Creates or reactivates the scene dummy used for baking.</span> |
| <Link id="m-map" /><code>{"void Map()"}</code> | <span className="api-desc">Builds `mappedParents` from `bones` and `parents`, with -1 for bones that stay.</span> |

## Used in

Members of other types that take, return or hold a `BonesBaking`:

<div className="api-used-in">

[`CosmeticPacker.bonesBaking`](/mod/game-api/types/alta-customization/cosmeticpacker#m-bonesbaking).

</div>
