---
title: "SAMeshColliderCommon.SplitMode"
description: "SAColliderBuilder (third party, editor) option for how a mesh is split into colliders: none, by material, by primitive or by polygon."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SAMeshColliderCommon.SplitMode

An **enum** in `Root.Township`, the global namespace.

SAColliderBuilder (third party, editor) option for how a mesh is split into colliders: none, by material, by primitive or by polygon.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested in** [`SAMeshColliderCommon`](/mod/game-api/types/global-s/sameshcollidercommon)

## Values

| Member |
| --- |
| <Link id="m-material" /><code>{"Material = 1"}</code> |
| <Link id="m-none" /><code>{"None = 0"}</code> |
| <Link id="m-polygon" /><code>{"Polygon = 3"}</code> |
| <Link id="m-primitive" /><code>{"Primitive = 2"}</code> |

## Used in

Members of other types that take, return or hold a `SplitMode`:

<div className="api-used-in">

[`SAMeshCollider.splitMode`](/mod/game-api/types/global-s/sameshcollider#m-splitmode).

</div>
