---
title: "GrassBladeLODMarker"
description: "Marks a grass blade object and lists its LOD child objects."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrassBladeLODMarker

A **class** in `Root.Township`, `Alta.Environmental.Vegetation`.

Marks a grass blade object and lists its LOD child objects.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `SelectionBase`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrassBladeLODMarker()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lodobjects" /><code>{"private GameObject[] lodObjects"}</code> | Backing field for `LODObjects`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-lodobjects-2" /><code>{"GameObject[] LODObjects { get; set; }"}</code> | The LOD objects for this blade. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: fills the list from the child objects if empty. |

</details>
