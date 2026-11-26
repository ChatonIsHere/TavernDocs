---
title: "PlacementObject"
description: "Component that stores the size of an object for placement, with an editor tickbox that measures it from the child renderers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlacementObject

A **class** in `Root.Township`, no namespace.

Component that stores the size of an object for placement, with an editor tickbox that measures it from the child renderers.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlacementObject()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bounds" /><code>{"private Vector3 bounds"}</code> | Backing field for `Size`. |
| <Link id="m-getbounds" /><code>{"private bool getBounds"}</code> | Editor tickbox that triggers measuring, then clears itself. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-size" /><code>{"Vector3 Size { get; }"}</code> | The stored size of the object. |

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the stored bounds in the editor. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | When `getBounds` is ticked, measures the child renderers' bounds and stores the size. |

</details>
