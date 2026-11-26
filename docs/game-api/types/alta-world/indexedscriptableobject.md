---
title: "IndexedScriptableObject"
description: "abstract class IndexedScriptableObject in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IndexedScriptableObject

An **abstract class** in `Root.Township`, `Alta.Static`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`StaticEnvironmentPiece`](/game-api/types/alta-world/staticenvironmentpiece)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected IndexedScriptableObject()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-index" /><code>{"private uint index"}</code> |
| <Link id="m-isinonvalidateloop" /><code>{"private static bool isInOnValidateLoop"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-index-2" /><code>{"uint Index { get; }"}</code> |
| <Link id="m-key" /><code>{"virtual Type Key { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> |
