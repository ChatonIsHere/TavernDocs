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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`HashedGeneralValue<VisibilityData>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`VisibilityData`](/mod/game-api/types/alta-crafting/visibilitydata), [`VisibilityData.Create`](/mod/game-api/types/alta-crafting/visibilitydata-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-crafting/visibilitydata-create)
- **Attributes** `HashedPath`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VisibilityData()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-enabled" /><code>{"private bool enabled"}</code> | <span className="api-desc">Backing field for `Enabled`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-enabled-2" /><code>{"bool Enabled { get; }"}</code> | <span className="api-desc">Whether the renderers should be shown.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-savedata" /><code>{"void SaveData(bool enabled)"}</code> | <span className="api-desc">Sets the stored enabled value.</span> |

## Used in

Members of other types that take, return or hold a `VisibilityData`:

<div className="api-used-in">

[`Visibility.data`](/mod/game-api/types/alta-crafting/visibility#m-data), [`VisibilitySaveData.data`](/mod/game-api/types/alta-crafting/visibilitysavedata#m-data).

</div>
