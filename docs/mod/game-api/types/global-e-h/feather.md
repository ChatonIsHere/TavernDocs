---
title: "Feather"
description: "Component on a feather model that points at its bottom part."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Feather

A **class** in `Root.Township`, the global namespace.

Component on a feather model that points at its bottom part. `DummyArrow` copies that part onto arrows.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Feather()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bottom" /><code>{"private GameObject bottom"}</code> | Backing field for `Bottom`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bottom-2" /><code>{"GameObject Bottom { get; }"}</code> | The feather's bottom object, instantiated by `DummyArrow` at the arrow's feather position. |

## Used in

Members of other types that take, return or hold a `Feather`:

[`DummyArrow.Configure`](/mod/game-api/types/global-c-d/dummyarrow#m-configure), [`Quiver.dockedFeather`](/mod/game-api/types/global-q-r/quiver#m-dockedfeather).
