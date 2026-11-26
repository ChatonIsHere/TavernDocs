---
title: "StaticObjectCombiner.Space"
description: "A rotation frame used when flattening primitive colliders: box and capsule colliders aligned to it are rebuilt on one shared parent object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticObjectCombiner.Space

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A rotation frame used when flattening primitive colliders: box and capsule colliders aligned to it are rebuilt on one shared parent object.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested in** [`StaticObjectCombiner`](/mod/game-api/types/global-s/staticobjectcombiner)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Space(Quaternion rotation, Transform root, int layer)"}</code> | <span className="api-desc">Creates a `StaticObjectCombiner.Space` from `rotation`, `root` and `layer`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentparent" /><code>{"private GameObject currentParent"}</code> | <span className="api-desc">The collider parent being filled now.</span> |
| <Link id="m-defaultxyz" /><code>{"private readonly Vector3[] defaultXYZ"}</code> | <span className="api-desc">The unrotated right, up and forward axes.</span> |
| <Link id="m-layer" /><code>{"private readonly int layer"}</code> | <span className="api-desc">Layer for the collider parent objects.</span> |
| <Link id="m-root" /><code>{"private readonly Transform root"}</code> | <span className="api-desc">Transform the collider parents are created under.</span> |
| <Link id="m-rotation" /><code>{"private readonly Quaternion rotation"}</code> | <span className="api-desc">The frame's rotation relative to the root.</span> |
| <Link id="m-xyz" /><code>{"private readonly Vector3[] xyz"}</code> | <span className="api-desc">The frame's right, up and forward axes after rotation.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-parent" /><code>{"GameObject Parent { get; }"}</code> | <span className="api-desc">Current collider parent object. Starts a new one once the current has more than 300 colliders.</span> |
| <Link id="m-parenttothis" /><code>{"Matrix4x4 ParentToThis { get; }"}</code> | <span className="api-desc">Matrix that rotates from the root's space into this frame.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getdirection" /><code>{"int GetDirection(Vector3 direction)"}</code> | <span className="api-desc">Returns which of the frame's axes (0, 1, 2) a direction lies along, or -1.</span> |
| <Link id="m-isaligned" /><code>{"bool IsAligned(Quaternion rotation)"}</code> | <span className="api-desc">True if a rotation's axes line up with this frame's axes, so its colliders can share the parent.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getnewparent" /><code>{"private void GetNewParent()"}</code> | <span className="api-desc">Creates a new collider parent object under the root, on this frame's layer and rotation.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Space`:

<div className="api-used-in">

[`StaticObjectCombiner.GetNewParent`](/mod/game-api/types/global-s/staticobjectcombiner#m-getnewparent).

</div>
