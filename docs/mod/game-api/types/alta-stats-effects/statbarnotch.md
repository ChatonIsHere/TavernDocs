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
| <Link id="m-ctor" /><code>{"StatBarNotch()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-axistorotatearound" /><code>{"private Vector3 axisToRotateAround"}</code> | <span className="api-desc">Local axis the notch rotates around to sit along the curve.</span> |
| <Link id="m-basescale" /><code>{"private Vector3 baseScale"}</code> | <span className="api-desc">Scale applied before the major or minor height is set.</span> |
| <Link id="m-majorscale" /><code>{"private float majorScale"}</code> | <span className="api-desc">Y scale for major notches. Defaults to 0.5.</span> |
| <Link id="m-minorscale" /><code>{"private float minorScale"}</code> | <span className="api-desc">Y scale for minor notches. Defaults to 0.1.</span> |
| <Link id="m-renderer" /><code>{"private Renderer renderer"}</code> | <span className="api-desc">Backing field for `Renderer`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"float Position { get; private set; }"}</code> | <span className="api-desc">Normalized position along the bar's curve, set by `SetPosition`.</span> |
| <Link id="m-renderer-2" /><code>{"Renderer Renderer { get; }"}</code> | <span className="api-desc">The notch's renderer.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setmaterial" /><code>{"void SetMaterial(Material material)"}</code> | <span className="api-desc">Sets the renderer's shared material.</span> |
| <Link id="m-setposition" /><code>{"void SetPosition(float positionAlongCurve, float sizeOfStatBar, bool isMajor)"}</code> | <span className="api-desc">Rotates the notch to its place along a bar of the given angular size and scales it as major or minor.</span> |

## Used in

Members of other types that take, return or hold a `StatBarNotch`:

<div className="api-used-in">

[`StatBar.notches`](/mod/game-api/types/alta-stats-effects/statbar#m-notches), [`StatBar.notchPrefab`](/mod/game-api/types/alta-stats-effects/statbar#m-notchprefab).

</div>
