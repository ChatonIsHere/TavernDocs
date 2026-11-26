---
title: "PlatformHeightOffsetSettings"
description: "Asset listing per platform height offsets."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformHeightOffsetSettings

A **class** in `Root.Township`, no namespace.

Asset listing per platform height offsets. `PlayerHeightFixer` adds up the offsets for the platforms that are active.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `ScriptableObject`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformHeightOffsetSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-offsets" /><code>{"private List<"}<Link to="/game-api/types/global-p/platformheightoffset">{"PlatformHeightOffset"}</Link>{"> offsets"}</code> | Backing field for `Offsets`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-offsets-2" /><code>{"List<"}<Link to="/game-api/types/global-p/platformheightoffset">{"PlatformHeightOffset"}</Link>{"> Offsets { get; }"}</code> | The platform and offset pairs. |

## Used in

Members of other types that take, return or hold a `PlatformHeightOffsetSettings`:

[`PlayerHeightFixer.platformHeightOffsets`](/game-api/types/global-p/playerheightfixer#m-platformheightoffsets).
