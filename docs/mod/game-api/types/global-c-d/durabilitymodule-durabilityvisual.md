---
title: "DurabilityModule.DurabilityVisual"
description: "One damage stage of a DurabilityModule: the renderers to show and the integrity threshold the stage starts below."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DurabilityModule.DurabilityVisual

A **class** in `Root.Township`, the global namespace.

One damage stage of a `DurabilityModule`: the renderers to show and the integrity threshold the stage starts below.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Nested in** [`DurabilityModule`](/mod/game-api/types/global-c-d/durabilitymodule)
- **Inherits or implements** [`IReferenceRenderer`](/mod/game-api/types/global-i-l/ireferencerenderer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DurabilityVisual()"}</code> | <span className="api-desc">Creates a `DurabilityModule.DurabilityVisual` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-threshold" /><code>{"private float threshold"}</code> | <span className="api-desc">Backing field for `Threshold`.</span> |
| <Link id="m-visualrenderers" /><code>{"private Renderer[] visualRenderers"}</code> | <span className="api-desc">Renderers shown while this stage is active.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-firstrenderer" /><code>{"Renderer FirstRenderer { get; }"}</code> | <span className="api-desc">The stage's first renderer, used for the stage change effect mesh.</span> |
| <Link id="m-threshold-2" /><code>{"float Threshold { get; }"}</code> | <span className="api-desc">Integrity (0 to 1) above which the module stays on an earlier stage; stages are walked in order.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cleanmissing" /><code>{"void CleanMissing()"}</code> | <span className="api-desc">Removes destroyed renderers from the list.</span> |
| <Link id="m-setenable" /><code>{"void SetEnable("}<Link to="/mod/game-api/types/global-c-d/durabilitymodule">{"DurabilityModule"}</Link>{" module, bool isEnabled)"}</code> | <span className="api-desc">Client: turns the stage's renderers on or off. Does nothing on a headless server.</span> |
| <Link id="m-updaterenderers" /><code>{"void UpdateRenderers(Renderer[] oldFirstRenderers, Renderer[] newFirstRenderers)"}</code> | <span className="api-desc">Swaps old renderers in the stage list for new ones.</span> |

## Used in

Members of other types that take, return or hold a `DurabilityVisual`:

<div className="api-used-in">

[`ForgedModel<TB, TA>.UpdateDurabilityStage`](/mod/game-api/types/alta-crafting/forgedmodel-tb-ta#m-updatedurabilitystage), [`DurabilityModule.OnChangedStage`](/mod/game-api/types/global-c-d/durabilitymodule#m-onchangedstage), [`DurabilityModule.stageVisuals`](/mod/game-api/types/global-c-d/durabilitymodule#m-stagevisuals).

</div>
