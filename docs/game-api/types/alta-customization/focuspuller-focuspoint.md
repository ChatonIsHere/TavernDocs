---
title: "FocusPuller.FocusPoint"
description: "One auto focus sample point on the hand camera viewfinder: a marker renderer and a weight."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FocusPuller.FocusPoint

A **private class** in `Root.Township`, `Alta.ScreenshotCamera`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One auto focus sample point on the hand camera viewfinder: a marker renderer and a weight.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Nested in** [`FocusPuller`](/game-api/types/alta-customization/focuspuller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FocusPoint()"}</code> | Creates a `FocusPuller.FocusPoint` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-point" /><code>{"private Renderer point"}</code> | Backing field for `Point`. |
| <Link id="m-weight" /><code>{"private int weight"}</code> | Backing field for `Weight`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-point-2" /><code>{"Renderer Point { get; }"}</code> | Marker renderer whose position is sampled and whose material shows in or out of focus. |
| <Link id="m-weight-2" /><code>{"int Weight { get; }"}</code> | How much this point counts in the auto focus average. Zero weight points are left out of the outlier check. |

## Used in

Members of other types that take, return or hold a `FocusPoint`:

[`FocusPuller.focusPoints`](/game-api/types/alta-customization/focuspuller#m-focuspoints).
