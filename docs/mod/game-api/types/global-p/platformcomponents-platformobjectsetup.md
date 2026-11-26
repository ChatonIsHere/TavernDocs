---
title: "PlatformComponents.PlatformObjectSetup"
description: "A list of components kept only on certain platforms."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformComponents.PlatformObjectSetup

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A list of components kept only on certain platforms. Baking destroys them on any other platform.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PlatformComponents`](/mod/game-api/types/global-p/platformcomponents)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformObjectSetup()"}</code> | <span className="api-desc">Creates a `PlatformComponents.PlatformObjectSetup` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-targetplatforms" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" targetPlatforms"}</code> | <span className="api-desc">The platforms that keep the components. Defaults to Windows.</span> |
| <Link id="m-targets" /><code>{"private Component[] targets"}</code> | <span className="api-desc">The components to keep or destroy.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"void Bake()"}</code> | <span className="api-desc">Destroys every target component unless the current runtime platform is one of `targetPlatforms`.</span> |

## Used in

Members of other types that take, return or hold a `PlatformObjectSetup`:

<div className="api-used-in">

[`PlatformComponents.platformObjects`](/mod/game-api/types/global-p/platformcomponents#m-platformobjects).

</div>
