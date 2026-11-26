---
title: "StaticBatchedRecombiner.AnchoredList<T>"
description: "A vertex attribute list (such as a UV channel) used while recombining static meshes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticBatchedRecombiner.AnchoredList&lt;T&gt;

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A vertex attribute list (such as a UV channel) used while recombining static meshes. It pads itself with defaults to match the vertex count, so channels only some meshes have stay aligned.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Nested in** [`StaticBatchedRecombiner`](/game-api/types/global-s/staticbatchedrecombiner)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnchoredList(Func<int> getCount)"}</code> | Creates a `StaticBatchedRecombiner.AnchoredList` from `getCount`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getcount" /><code>{"private readonly Func<int> getCount"}</code> | Returns the current vertex count to pad to. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-values" /><code>{"List<T> Values { get; }"}</code> | The collected values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addrange" /><code>{"void AddRange(List<T> newValues)"}</code> | Pads to the current vertex count, then appends the new values. Does nothing for an empty list. |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Empties the list. |
| <Link id="m-isneeded" /><code>{"bool IsNeeded()"}</code> | True if any values were added, padding the list to full length first. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ensurelength" /><code>{"private void EnsureLength()"}</code> | Adds default values until the list is as long as the vertex count. |

</details>

## Used in

Members of other types that take, return or hold a `AnchoredList&lt;T>`:

[`StaticBatchedRecombiner.WorkingMesh.colors`](/game-api/types/global-s/staticbatchedrecombiner-workingmesh#m-colors), [`StaticBatchedRecombiner.WorkingMesh.normals`](/game-api/types/global-s/staticbatchedrecombiner-workingmesh#m-normals), [`StaticBatchedRecombiner.WorkingMesh.tangents`](/game-api/types/global-s/staticbatchedrecombiner-workingmesh#m-tangents), [`StaticBatchedRecombiner.WorkingMesh.uv`](/game-api/types/global-s/staticbatchedrecombiner-workingmesh#m-uv), [`StaticBatchedRecombiner.WorkingMesh.uv2`](/game-api/types/global-s/staticbatchedrecombiner-workingmesh#m-uv2), [`StaticBatchedRecombiner.WorkingMesh.uv3`](/game-api/types/global-s/staticbatchedrecombiner-workingmesh#m-uv3), [`StaticBatchedRecombiner.WorkingMesh.uv4`](/game-api/types/global-s/staticbatchedrecombiner-workingmesh#m-uv4).
