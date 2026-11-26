---
title: "PlatformHeightOffsetSettings"
description: "Asset listing per platform height offsets."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformHeightOffsetSettings

A **class** in `Root.Township`, the global namespace.

Asset listing per platform height offsets. `PlayerHeightFixer` adds up the offsets for the platforms that are active.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `ScriptableObject`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformHeightOffsetSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-offsets" /><code>{"private List<"}<Link to="/mod/game-api/types/global-p/platformheightoffset">{"PlatformHeightOffset"}</Link>{"> offsets"}</code> | <span className="api-desc">Backing field for `Offsets`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-offsets-2" /><code>{"List<"}<Link to="/mod/game-api/types/global-p/platformheightoffset">{"PlatformHeightOffset"}</Link>{"> Offsets { get; }"}</code> | <span className="api-desc">The platform and offset pairs.</span> |

## Used in

Members of other types that take, return or hold a `PlatformHeightOffsetSettings`:

<div className="api-used-in">

[`PlayerHeightFixer.platformHeightOffsets`](/mod/game-api/types/global-p/playerheightfixer#m-platformheightoffsets).

</div>
