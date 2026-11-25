---
title: "BonesBaking"
description: "class BonesBaking in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BonesBaking

A **class** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BonesBaking()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bakingmesh" /><code>{"private Mesh bakingMesh"}</code> |  |
| <Link id="m-bones" /><code>{"private int[] bones"}</code> |  |
| <Link id="m-btnmap" /><code>{"private bool btnMap"}</code> |  |
| <Link id="m-dummyprefab" /><code>{"private "}<Link to="/game-api/types/global-s/simpledummy">{"SimpleDummy"}</Link>{" dummyPrefab"}</code> |  |
| <Link id="m-mappedparents" /><code>{"private int[] mappedParents"}</code> |  |
| <Link id="m-parents" /><code>{"private int[] parents"}</code> |  |
| <Link id="m-scenedummy" /><code>{"private "}<Link to="/game-api/types/global-s/simpledummy">{"SimpleDummy"}</Link>{" sceneDummy"}</code> |  |
| <Link id="m-workingvector3" /><code>{"private static List<Vector3> workingVector3"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bakemeshes" /><code>{"void BakeMeshes(IEnumerable<Mesh> originalMeshes, int index)"}</code> |  |
| <Link id="m-check" /><code>{"void Check(AvatarMask mask, SkinnedMeshRenderer source)"}</code> |  |
| <Link id="m-instantiatedummy" /><code>{"void InstantiateDummy()"}</code> |  |
| <Link id="m-map" /><code>{"void Map()"}</code> |  |

## Used in

Members of other types that take, return or hold a `BonesBaking`:

[`CosmeticPacker.bonesBaking`](/game-api/types/alta-customization/cosmeticpacker#m-bonesbaking).
