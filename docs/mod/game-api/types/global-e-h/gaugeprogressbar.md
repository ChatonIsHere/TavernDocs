---
title: "GaugeProgressBar"
description: "A progress bar drawn with a gauge shader, with an extra alpha limit that hides the renderers at zero."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GaugeProgressBar

A **class** in `Root.Township`, the global namespace.

A progress bar drawn with a gauge shader, with an extra alpha limit that hides the renderers at zero. Client side.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`ProgressBar`](/mod/game-api/types/global-p/progressbar)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GaugeProgressBar()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alphalimit" /><code>{"private static readonly int _AlphaLimit"}</code> | <span className="api-desc">Shader property id for `_AlphaLimit`.</span> |
| <Link id="m-fillprogress" /><code>{"private static readonly int _FillProgress"}</code> | <span className="api-desc">Shader property id for `_FillProgress`.</span> |
| <Link id="m-alpha" /><code>{"private float alpha"}</code> | <span className="api-desc">Backing field for `Alpha`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-alpha-2" /><code>{"float Alpha { get; set; }"}</code> | <span className="api-desc">Alpha limit for the gauge. Zero hides the renderers.</span> |
| <Link id="m-progressvariable" /><code>{"override int ProgressVariable { get; }"}</code> | <span className="api-desc">Uses the `_FillProgress` shader property for progress.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Editor: refreshes the bar and alpha on prefab instances.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatealpha" /><code>{"private void UpdateAlpha()"}</code> | <span className="api-desc">Sets `_AlphaLimit` on the renderers, or turns them off when alpha is zero.</span> |

</details>

## Used in

Members of other types that take, return or hold a `GaugeProgressBar`:

<div className="api-used-in">

[`TaxManager.taxMeterBar`](/mod/game-api/types/alta-crafting/taxmanager#m-taxmeterbar), [`PickupWeightScale.gaugeProgressBar`](/mod/game-api/types/global-p/pickupweightscale#m-gaugeprogressbar), [`ServerSelector.gaugeProgress`](/mod/game-api/types/global-s/serverselector#m-gaugeprogress).

</div>
