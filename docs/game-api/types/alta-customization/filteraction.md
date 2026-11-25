---
title: "FilterAction"
description: "abstract class FilterAction in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FilterAction

An **abstract class** in `Root.Township`, `Alta.ScreenshotCamera`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`OnDrawFilter`](/game-api/types/alta-customization/ondrawfilter), [`PostProcessFilter`](/game-api/types/alta-customization/postprocessfilter)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected FilterAction()"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"abstract void Initialize("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" camera, PostProcessVolume volume)"}</code> |
| <Link id="m-terminate" /><code>{"abstract void Terminate("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" camera, PostProcessVolume volume)"}</code> |

## Used in

Members of other types that take, return or hold a `FilterAction`:

[`Filter.actions`](/game-api/types/alta-customization/filter#m-actions).
