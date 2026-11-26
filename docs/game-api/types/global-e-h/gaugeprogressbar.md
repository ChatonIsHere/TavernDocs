---
title: "GaugeProgressBar"
description: "A progress bar drawn with a gauge shader, with an extra alpha limit that hides the renderers at zero."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GaugeProgressBar

A **class** in `Root.Township`, no namespace.

A progress bar drawn with a gauge shader, with an extra alpha limit that hides the renderers at zero. Client side.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`ProgressBar`](/game-api/types/global-p/progressbar)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GaugeProgressBar()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alphalimit" /><code>{"private static readonly int _AlphaLimit"}</code> | Shader property id for `_AlphaLimit`. |
| <Link id="m-fillprogress" /><code>{"private static readonly int _FillProgress"}</code> | Shader property id for `_FillProgress`. |
| <Link id="m-alpha" /><code>{"private float alpha"}</code> | Backing field for `Alpha`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-alpha-2" /><code>{"float Alpha { get; set; }"}</code> | Alpha limit for the gauge. Zero hides the renderers. |
| <Link id="m-progressvariable" /><code>{"override int ProgressVariable { get; }"}</code> | Uses the `_FillProgress` shader property for progress. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Editor: refreshes the bar and alpha on prefab instances. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatealpha" /><code>{"private void UpdateAlpha()"}</code> | Sets `_AlphaLimit` on the renderers, or turns them off when alpha is zero. |

</details>

## Used in

Members of other types that take, return or hold a `GaugeProgressBar`:

[`TaxManager.taxMeterBar`](/game-api/types/alta-crafting/taxmanager#m-taxmeterbar), [`PickupWeightScale.gaugeProgressBar`](/game-api/types/global-p/pickupweightscale#m-gaugeprogressbar), [`ServerSelector.gaugeProgress`](/game-api/types/global-s/serverselector#m-gaugeprogress).
