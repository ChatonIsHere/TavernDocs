---
title: "FilterAction"
description: "Base scriptable object for an effect a hand camera filter turns on and off on the camera's post process volume."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FilterAction

An **abstract class** in `Root.Township`, `Alta.ScreenshotCamera`.

Base scriptable object for an effect a hand camera filter turns on and off on the camera's post process volume.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`OnDrawFilter`](/mod/game-api/types/alta-customization/ondrawfilter), [`PostProcessFilter`](/mod/game-api/types/alta-customization/postprocessfilter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected FilterAction()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"abstract void Initialize("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" camera, PostProcessVolume volume)"}</code> | Applies the effect to the camera and volume when the filter is selected. |
| <Link id="m-terminate" /><code>{"abstract void Terminate("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" camera, PostProcessVolume volume)"}</code> | Removes the effect when the filter is deselected. |

## Used in

Members of other types that take, return or hold a `FilterAction`:

[`Filter.actions`](/mod/game-api/types/alta-customization/filter#m-actions).
