---
title: "GrassClump"
description: "Picks a random mesh for a grass clump at start and writes height-based vertex colours for the wind shader."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrassClump

A **class** in `Root.Township`, `Alta.Environmental.Vegetation`.

Picks a random mesh for a grass clump at start and writes height-based vertex colours for the wind shader.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrassClump()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-availablemeshes" /><code>{"private Mesh[] availableMeshes"}</code> | <span className="api-desc">Backing field for `AvailableMeshes`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-availablemeshes-2" /><code>{"Mesh[] AvailableMeshes { get; set; }"}</code> | <span className="api-desc">Meshes to pick from.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Picks a mesh, sets vertex colour red to half the vertex height (on the shared mesh) and turns shadows on.</span> |

</details>
