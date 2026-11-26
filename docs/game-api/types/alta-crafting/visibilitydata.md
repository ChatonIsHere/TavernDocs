---
title: "VisibilityData"
description: "A hashed scrapper asset holding one on or off value for mesh renderers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VisibilityData

A **class** in `Root.Township`, `Alta.Scrapper.Data`.

A hashed scrapper asset holding one on or off value for mesh renderers. A `Visibility` component applies it and syncs it by hash.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`HashedGeneralValue<VisibilityData>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`VisibilityData`](/game-api/types/alta-crafting/visibilitydata), [`VisibilityData.Create`](/game-api/types/alta-crafting/visibilitydata-create)
- **Nested types** [`Create`](/game-api/types/alta-crafting/visibilitydata-create)
- **Attributes** `HashedPath`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"VisibilityData()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-enabled" /><code>{"private bool enabled"}</code> | Backing field for `Enabled`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-enabled-2" /><code>{"bool Enabled { get; }"}</code> | Whether the renderers should be shown. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-savedata" /><code>{"void SaveData(bool enabled)"}</code> | Sets the stored enabled value. |

## Used in

Members of other types that take, return or hold a `VisibilityData`:

[`Visibility.data`](/game-api/types/alta-crafting/visibility#m-data), [`VisibilitySaveData.data`](/game-api/types/alta-crafting/visibilitysavedata#m-data).
