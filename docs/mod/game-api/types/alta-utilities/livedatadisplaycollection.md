---
title: "LiveDataDisplayCollection"
description: "Asset listing the live data displays that LiveDataDisplayView shows on the debug overlay."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiveDataDisplayCollection

A **class** in `Root.Township`, `Alta.Utilities.Profiling`.

Asset listing the live data displays that `LiveDataDisplayView` shows on the debug overlay.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** `ScriptableObject`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiveDataDisplayCollection()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-datadisplays" /><code><Link to="/mod/game-api/types/alta-utilities/livedatadisplaybase">{"LiveDataDisplayBase"}</Link>{"[] DataDisplays"}</code> | <span className="api-desc">The displays, stored by reference so each can be a different `LiveDataDisplayBase` subclass.</span> |

## Used in

Members of other types that take, return or hold a `LiveDataDisplayCollection`:

<div className="api-used-in">

[`LiveDataDisplayView.dataDisplays`](/mod/game-api/types/alta-utilities/livedatadisplayview#m-datadisplays).

</div>
