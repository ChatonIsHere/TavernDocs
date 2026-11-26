---
title: "PlatformHeightOffset"
description: "A player height offset for one set of platforms, listed in PlatformHeightOffsetSettings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformHeightOffset

A **struct** in `Root.Township`, no namespace.

A player height offset for one set of platforms, listed in `PlatformHeightOffsetSettings`.

- **Listed in** [No namespace: P](/game-api/types/global-p)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlatformHeightOffset("}<Link to="/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" platform, float offset)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-offset" /><code>{"private float offset"}</code> | Backing field for `Offset`. |
| <Link id="m-platform" /><code>{"private "}<Link to="/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" platform"}</code> | Platforms this offset applies to. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; }"}</code> | Whether the running platform matches. |
| <Link id="m-offset-2" /><code>{"float Offset { get; }"}</code> | Height offset to apply on that platform. |

## Used in

Members of other types that take, return or hold a `PlatformHeightOffset`:

[`PlatformHeightOffsetSettings.offsets`](/game-api/types/global-p/platformheightoffsetsettings#m-offsets), [`PlatformHeightOffsetSettings.Offsets`](/game-api/types/global-p/platformheightoffsetsettings#m-offsets-2).
