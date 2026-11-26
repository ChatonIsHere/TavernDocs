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
| <Link id="m-ctor" /><code>{"ShieldPartDefinition()"}</code> | <span className="api-desc">Creates a `ShieldPartDefinition` with default values.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-material" /><code>{"private Material material"}</code> | <span className="api-desc">Backing field for `Material`.</span> |
| <Link id="m-mesh" /><code>{"private Mesh mesh"}</code> | <span className="api-desc">Backing field for `Mesh`.</span> |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | <span className="api-desc">Backing field for `Position`.</span> |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | <span className="api-desc">Backing field for `Rotation`.</span> |
| <Link id="m-scale" /><code>{"private Vector3 scale"}</code> | <span className="api-desc">Backing field for `Scale`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-material-2" /><code>{"Material Material { get; }"}</code> | <span className="api-desc">Material of the part.</span> |
| <Link id="m-mesh-2" /><code>{"Mesh Mesh { get; }"}</code> | <span className="api-desc">Mesh of the part.</span> |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; }"}</code> | <span className="api-desc">Local position of the part.</span> |
| <Link id="m-rotation-2" /><code>{"Quaternion Rotation { get; }"}</code> | <span className="api-desc">Local rotation of the part.</span> |
| <Link id="m-scale-2" /><code>{"Vector3 Scale { get; }"}</code> | <span className="api-desc">Local scale of the part.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"void Create(MeshRenderer meshRenderer)"}</code> | <span className="api-desc">Copies the mesh, material and local transform from an existing mesh renderer.</span> |

## Used in

Members of other types that take, return or hold a `ShieldPartDefinition`:

<div className="api-used-in">

[`NameBoardShield.parts`](/mod/game-api/types/alta-player/nameboardshield#m-parts), [`NameBoardShield.Parts`](/mod/game-api/types/alta-player/nameboardshield#m-parts-2).

</div>
