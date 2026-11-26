---
title: "PlacementObject"
description: "Component that stores the size of an object for placement, with an editor tickbox that measures it from the child renderers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlacementObject

A **class** in `Root.Township`, the global namespace.

Component that stores the size of an object for placement, with an editor tickbox that measures it from the child renderers.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlacementObject()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bounds" /><code>{"private Vector3 bounds"}</code> | <span className="api-desc">Backing field for `Size`.</span> |
| <Link id="m-getbounds" /><code>{"private bool getBounds"}</code> | <span className="api-desc">Editor tickbox that triggers measuring, then clears itself.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-size" /><code>{"Vector3 Size { get; }"}</code> | <span className="api-desc">The stored size of the object.</span> |

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the stored bounds in the editor.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">When `getBounds` is ticked, measures the child renderers' bounds and stores the size.</span> |

</details>
