---
title: "StaticObjectCombiner.Space"
description: "class StaticObjectCombiner.Space in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticObjectCombiner.Space

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Nested in** [`StaticObjectCombiner`](/game-api/types/global-s/staticobjectcombiner)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Space(Quaternion rotation, Transform root, int layer)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentparent" /><code>{"private GameObject currentParent"}</code> |  |
| <Link id="m-defaultxyz" /><code>{"private readonly Vector3[] defaultXYZ"}</code> |  |
| <Link id="m-layer" /><code>{"private readonly int layer"}</code> |  |
| <Link id="m-root" /><code>{"private readonly Transform root"}</code> |  |
| <Link id="m-rotation" /><code>{"private readonly Quaternion rotation"}</code> |  |
| <Link id="m-xyz" /><code>{"private readonly Vector3[] xyz"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-parent" /><code>{"GameObject Parent { get; }"}</code> |  |
| <Link id="m-parenttothis" /><code>{"Matrix4x4 ParentToThis { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getdirection" /><code>{"int GetDirection(Vector3 direction)"}</code> |  |
| <Link id="m-isaligned" /><code>{"bool IsAligned(Quaternion rotation)"}</code> |  |
| <Link id="m-getnewparent" /><code>{"private void GetNewParent()"}</code> |  |

## Used in

Members of other types that take, return or hold a `Space`:

[`StaticObjectCombiner.GetNewParent`](/game-api/types/global-s/staticobjectcombiner#m-getnewparent).
