---
title: "IndexedScriptableObject"
description: "Base for asset types that have a fixed numeric index, such as StaticEnvironmentPiece, so they can be sent and loaded by number."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IndexedScriptableObject

An **abstract class** in `Root.Township`, `Alta.Static`.

Base for asset types that have a fixed numeric index, such as `StaticEnvironmentPiece`, so they can be sent and loaded by number.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`StaticEnvironmentPiece`](/mod/game-api/types/alta-world/staticenvironmentpiece)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected IndexedScriptableObject()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-index" /><code>{"private uint index"}</code> | <span className="api-desc">Backing field for `Index`.</span> |
| <Link id="m-isinonvalidateloop" /><code>{"private static bool isInOnValidateLoop"}</code> | <span className="api-desc">Unused in this build.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-index-2" /><code>{"uint Index { get; }"}</code> | <span className="api-desc">The asset's index, set in the asset.</span> |
| <Link id="m-key" /><code>{"virtual Type Key { get; }"}</code> | <span className="api-desc">The type the index belongs to; by default the asset's own type.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | <span className="api-desc">Editor hook; does nothing in this build.</span> |
