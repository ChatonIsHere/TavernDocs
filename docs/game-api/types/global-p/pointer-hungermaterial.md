---
title: "Pointer.HungerMaterial"
description: "A pointer colour to use at one hunger level."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Pointer.HungerMaterial

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A pointer colour to use at one hunger level.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`Pointer`](/game-api/types/global-p/pointer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HungerMaterial()"}</code> | Creates a `Pointer.HungerMaterial` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"private Color color"}</code> | Backing field for `Color`. |
| <Link id="m-hungerlevel" /><code>{"private int hungerLevel"}</code> | Backing field for `HungerLevel`. |
| <Link id="m-name" /><code>{"private string name"}</code> | Backing field for `Name`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-color-2" /><code>{"Color Color { get; }"}</code> | The pointer's valid colour at this hunger level. |
| <Link id="m-hungerlevel-2" /><code>{"int HungerLevel { get; }"}</code> | The hunger level this colour is for. |
| <Link id="m-name-2" /><code>{"string Name { get; set; }"}</code> | A label for the entry. |

## Used in

Members of other types that take, return or hold a `HungerMaterial`:

[`Pointer.hungerMaterials`](/game-api/types/global-p/pointer#m-hungermaterials).
