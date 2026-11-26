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

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `IDisposable`, `IReadOnlyCollection<MaterialInstance>`, `IEnumerable<MaterialInstance>`, `IEnumerable`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MaterialInstanceGroup(IEnumerable<Renderer> renderers)"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instances" /><code>{"private readonly List<"}<Link to="/game-api/types/alta-utilities/materialinstance">{"MaterialInstance"}</Link>{"> instances"}</code> | The material instances, one per renderer passed to the constructor. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | Number of material instances in the group. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Disposes every material instance and empties the group. |
| <Link id="m-getenumerator" /><code>{"IEnumerator<"}<Link to="/game-api/types/alta-utilities/materialinstance">{"MaterialInstance"}</Link>{"> GetEnumerator()"}</code> | Enumerates the material instances. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | Enumerates the material instances. |

</details>

## Used in

Members of other types that take, return or hold a `MaterialInstanceGroup`:

[`ActionOrb.squishableMaterialGroup`](/game-api/types/global-a-b/actionorb#m-squishablematerialgroup).
