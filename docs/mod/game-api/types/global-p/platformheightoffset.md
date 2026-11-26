---
title: "PlatformHeightOffset"
description: "A player height offset for one set of platforms, listed in PlatformHeightOffsetSettings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformHeightOffset

A **struct** in `Root.Township`, the global namespace.

A player height offset for one set of platforms, listed in `PlatformHeightOffsetSettings`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformHeightOffset("}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" platform, float offset)"}</code> | <span className="api-desc">Creates a `PlatformHeightOffset` from `platform` and `offset`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-offset" /><code>{"private float offset"}</code> | <span className="api-desc">Backing field for `Offset`.</span> |
| <Link id="m-platform" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" platform"}</code> | <span className="api-desc">Platforms this offset applies to.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; }"}</code> | <span className="api-desc">Whether the running platform matches.</span> |
| <Link id="m-offset-2" /><code>{"float Offset { get; }"}</code> | <span className="api-desc">Height offset to apply on that platform.</span> |

## Used in

Members of other types that take, return or hold a `PlatformHeightOffset`:

<div className="api-used-in">

[`PlatformHeightOffsetSettings.offsets`](/mod/game-api/types/global-p/platformheightoffsetsettings#m-offsets), [`PlatformHeightOffsetSettings.Offsets`](/mod/game-api/types/global-p/platformheightoffsetsettings#m-offsets-2).

</div>
