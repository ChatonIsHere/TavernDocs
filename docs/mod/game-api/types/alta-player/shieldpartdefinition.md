---
title: "ShieldPartDefinition"
description: "One saved mesh part of a NameBoardShield: mesh, material and local transform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShieldPartDefinition

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

One saved mesh part of a `NameBoardShield`: mesh, material and local transform.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShieldPartDefinition()"}</code> | Creates a `ShieldPartDefinition` with default values. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-material" /><code>{"private Material material"}</code> | Backing field for `Material`. |
| <Link id="m-mesh" /><code>{"private Mesh mesh"}</code> | Backing field for `Mesh`. |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | Backing field for `Position`. |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | Backing field for `Rotation`. |
| <Link id="m-scale" /><code>{"private Vector3 scale"}</code> | Backing field for `Scale`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-material-2" /><code>{"Material Material { get; }"}</code> | Material of the part. |
| <Link id="m-mesh-2" /><code>{"Mesh Mesh { get; }"}</code> | Mesh of the part. |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; }"}</code> | Local position of the part. |
| <Link id="m-rotation-2" /><code>{"Quaternion Rotation { get; }"}</code> | Local rotation of the part. |
| <Link id="m-scale-2" /><code>{"Vector3 Scale { get; }"}</code> | Local scale of the part. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"void Create(MeshRenderer meshRenderer)"}</code> | Copies the mesh, material and local transform from an existing mesh renderer. |

## Used in

Members of other types that take, return or hold a `ShieldPartDefinition`:

[`NameBoardShield.parts`](/mod/game-api/types/alta-player/nameboardshield#m-parts), [`NameBoardShield.Parts`](/mod/game-api/types/alta-player/nameboardshield#m-parts-2).
