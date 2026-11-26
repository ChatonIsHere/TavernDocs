---
title: "StatBarNotch"
description: "One notch mark on a curved stat bar."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatBarNotch

A **class** in `Root.Township`, `Alta.StatSystem`.

One notch mark on a curved stat bar. The bar places it along the curve and sets it to a minor or major size.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatBarNotch()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-axistorotatearound" /><code>{"private Vector3 axisToRotateAround"}</code> | Local axis the notch rotates around to sit along the curve. |
| <Link id="m-basescale" /><code>{"private Vector3 baseScale"}</code> | Scale applied before the major or minor height is set. |
| <Link id="m-majorscale" /><code>{"private float majorScale"}</code> | Y scale for major notches. Defaults to 0.5. |
| <Link id="m-minorscale" /><code>{"private float minorScale"}</code> | Y scale for minor notches. Defaults to 0.1. |
| <Link id="m-renderer" /><code>{"private Renderer renderer"}</code> | Backing field for `Renderer`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"float Position { get; private set; }"}</code> | Normalized position along the bar's curve, set by `SetPosition`. |
| <Link id="m-renderer-2" /><code>{"Renderer Renderer { get; }"}</code> | The notch's renderer. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setmaterial" /><code>{"void SetMaterial(Material material)"}</code> | Sets the renderer's shared material. |
| <Link id="m-setposition" /><code>{"void SetPosition(float positionAlongCurve, float sizeOfStatBar, bool isMajor)"}</code> | Rotates the notch to its place along a bar of the given angular size and scales it as major or minor. |

## Used in

Members of other types that take, return or hold a `StatBarNotch`:

[`StatBar.notches`](/mod/game-api/types/alta-stats-effects/statbar#m-notches), [`StatBar.notchPrefab`](/mod/game-api/types/alta-stats-effects/statbar#m-notchprefab).
