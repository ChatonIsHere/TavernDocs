---
title: "Pointer.HungerMaterial"
description: "A pointer colour to use at one hunger level."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Pointer.HungerMaterial

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A pointer colour to use at one hunger level.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`Pointer`](/mod/game-api/types/global-p/pointer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HungerMaterial()"}</code> | <span className="api-desc">Creates a `Pointer.HungerMaterial` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"private Color color"}</code> | <span className="api-desc">Backing field for `Color`.</span> |
| <Link id="m-hungerlevel" /><code>{"private int hungerLevel"}</code> | <span className="api-desc">Backing field for `HungerLevel`.</span> |
| <Link id="m-name" /><code>{"private string name"}</code> | <span className="api-desc">Backing field for `Name`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-color-2" /><code>{"Color Color { get; }"}</code> | <span className="api-desc">The pointer's valid colour at this hunger level.</span> |
| <Link id="m-hungerlevel-2" /><code>{"int HungerLevel { get; }"}</code> | <span className="api-desc">The hunger level this colour is for.</span> |
| <Link id="m-name-2" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">A label for the entry.</span> |

## Used in

Members of other types that take, return or hold a `HungerMaterial`:

<div className="api-used-in">

[`Pointer.hungerMaterials`](/mod/game-api/types/global-p/pointer#m-hungermaterials).

</div>
