---
title: "Surface"
description: "Marks an object with a SurfaceDefinition, which sets how embeddables (like arrows and knives) stick into it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Surface

A **class** in `Root.Township`, no namespace.

Marks an object with a `SurfaceDefinition`, which sets how embeddables (like arrows and knives) stick into it. Objects without one use the default definition.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Grab points and hand-touch points](/game-api/items/grab-points)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Surface()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaultdefinition" /><code>{"private static "}<Link to="/game-api/types/global-s/surfacedefinition">{"SurfaceDefinition"}</Link>{" defaultDefinition"}</code> | Backing field for `DefaultDefinition`. |
| <Link id="m-definition" /><code>{"private "}<Link to="/game-api/types/global-s/surfacedefinition">{"SurfaceDefinition"}</Link>{" definition"}</code> | Backing field for `Definition`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-defaultdefinition-2" /><code>{"static "}<Link to="/game-api/types/global-s/surfacedefinition">{"SurfaceDefinition"}</Link>{" DefaultDefinition { get; }"}</code> | The `SurfaceDefinition/Default` resource, loaded on first use; used when no `Surface` is found in the hit object's parents. |
| <Link id="m-definition-2" /><code><Link to="/game-api/types/global-s/surfacedefinition">{"SurfaceDefinition"}</Link>{" Definition { get; }"}</code> | This surface's definition (embed multiplier and whether direction must line up). |
