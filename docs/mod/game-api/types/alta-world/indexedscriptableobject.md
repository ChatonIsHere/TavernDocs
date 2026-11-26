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
| <Link id="m-ctor" /><code>{"protected IndexedScriptableObject()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-index" /><code>{"private uint index"}</code> | Backing field for `Index`. |
| <Link id="m-isinonvalidateloop" /><code>{"private static bool isInOnValidateLoop"}</code> | Unused in this build. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-index-2" /><code>{"uint Index { get; }"}</code> | The asset's index, set in the asset. |
| <Link id="m-key" /><code>{"virtual Type Key { get; }"}</code> | The type the index belongs to; by default the asset's own type. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | Editor hook; does nothing in this build. |
