---
title: "DurabilityModule.DurabilityVisual"
description: "One damage stage of a DurabilityModule: the renderers to show and the integrity threshold the stage starts below."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DurabilityModule.DurabilityVisual

A **class** in `Root.Township`, no namespace.

One damage stage of a `DurabilityModule`: the renderers to show and the integrity threshold the stage starts below.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Nested in** [`DurabilityModule`](/game-api/types/global-c-d/durabilitymodule)
- **Inherits or implements** [`IReferenceRenderer`](/game-api/types/global-i-l/ireferencerenderer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DurabilityVisual()"}</code> | Creates a `DurabilityModule.DurabilityVisual` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-threshold" /><code>{"private float threshold"}</code> | Backing field for `Threshold`. |
| <Link id="m-visualrenderers" /><code>{"private Renderer[] visualRenderers"}</code> | Renderers shown while this stage is active. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-firstrenderer" /><code>{"Renderer FirstRenderer { get; }"}</code> | The stage's first renderer, used for the stage change effect mesh. |
| <Link id="m-threshold-2" /><code>{"float Threshold { get; }"}</code> | Integrity (0 to 1) above which the module stays on an earlier stage; stages are walked in order. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cleanmissing" /><code>{"void CleanMissing()"}</code> | Removes destroyed renderers from the list. |
| <Link id="m-setenable" /><code>{"void SetEnable("}<Link to="/game-api/types/global-c-d/durabilitymodule">{"DurabilityModule"}</Link>{" module, bool isEnabled)"}</code> | Client: turns the stage's renderers on or off. Does nothing on a headless server. |
| <Link id="m-updaterenderers" /><code>{"void UpdateRenderers(Renderer[] oldFirstRenderers, Renderer[] newFirstRenderers)"}</code> | Swaps old renderers in the stage list for new ones. |

## Used in

Members of other types that take, return or hold a `DurabilityVisual`:

[`ForgedModel<TB, TA>.UpdateDurabilityStage`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-updatedurabilitystage), [`DurabilityModule.OnChangedStage`](/game-api/types/global-c-d/durabilitymodule#m-onchangedstage), [`DurabilityModule.stageVisuals`](/game-api/types/global-c-d/durabilitymodule#m-stagevisuals).
