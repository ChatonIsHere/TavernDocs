---
title: "FaceEmblem"
description: "A book flair asset for the emblem on a book's cover."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FaceEmblem

A **class** in `Root.Township`, `Alta.Pages`.

A book flair asset for the emblem on a book's cover. Used by `FlairSettings` when there is no glyph.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`BookFlair`](/game-api/types/alta-items/bookflair)
- **Derived types** [`FaceEmblem.Create`](/game-api/types/alta-items/faceemblem-create)
- **Nested types** [`Create`](/game-api/types/alta-items/faceemblem-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FaceEmblem()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Used in

Members of other types that take, return or hold a `FaceEmblem`:

[`FlairSettings.emblem`](/game-api/types/alta-items/flairsettings#m-emblem), [`FlairSettings.Emblem`](/game-api/types/alta-items/flairsettings#m-emblem-2).
