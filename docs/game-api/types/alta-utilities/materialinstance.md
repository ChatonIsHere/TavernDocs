---
title: "MaterialInstance"
description: "Takes a renderer's own material copy (renderer.material) and cleans it up when disposed, so the copy does not leak."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MaterialInstance

A **class** in `Root.Township`, `Alta.Rendering`.

Takes a renderer's own material copy (`renderer.material`) and cleans it up when disposed, so the copy does not leak.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `IDisposable`
- **Derived types** [`MaterialInstanceGroup`](/game-api/types/alta-utilities/materialinstancegroup)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MaterialInstance(Renderer renderer)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-material" /><code>{"Material Material { get; }"}</code> | The renderer's own material copy, made when this object is created. |
| <Link id="m-renderer" /><code>{"Renderer Renderer { get; }"}</code> | The renderer the material belongs to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Cleans up the material copy. |

## Used in

Members of other types that take, return or hold a `MaterialInstance`:

[`MaterialInstanceGroup.GetEnumerator`](/game-api/types/alta-utilities/materialinstancegroup#m-getenumerator), [`MaterialInstanceGroup.instances`](/game-api/types/alta-utilities/materialinstancegroup#m-instances).
