---
title: "MaterialInstanceGroup"
description: "Makes a MaterialInstance for each of a set of renderers and disposes them together."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MaterialInstanceGroup

A **class** in `Root.Township`, `Alta.Rendering`.

Makes a `MaterialInstance` for each of a set of renderers and disposes them together.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** `IDisposable`, `IReadOnlyCollection<MaterialInstance>`, `IEnumerable<MaterialInstance>`, `IEnumerable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MaterialInstanceGroup(IEnumerable<Renderer> renderers)"}</code> | <span className="api-desc">Creates a `MaterialInstanceGroup` from `renderers`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instances" /><code>{"private readonly List<"}<Link to="/mod/game-api/types/alta-utilities/materialinstance">{"MaterialInstance"}</Link>{"> instances"}</code> | <span className="api-desc">The material instances, one per renderer passed to the constructor.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | <span className="api-desc">Number of material instances in the group.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Disposes every material instance and empties the group.</span> |
| <Link id="m-getenumerator" /><code>{"IEnumerator<"}<Link to="/mod/game-api/types/alta-utilities/materialinstance">{"MaterialInstance"}</Link>{"> GetEnumerator()"}</code> | <span className="api-desc">Enumerates the material instances.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | <span className="api-desc">Enumerates the material instances.</span> |

</details>

## Used in

Members of other types that take, return or hold a `MaterialInstanceGroup`:

<div className="api-used-in">

[`ActionOrb.squishableMaterialGroup`](/mod/game-api/types/global-a-b/actionorb#m-squishablematerialgroup).

</div>
