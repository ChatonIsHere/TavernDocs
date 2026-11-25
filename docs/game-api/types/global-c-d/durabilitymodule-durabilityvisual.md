---
title: "DurabilityModule.DurabilityVisual"
description: "class DurabilityModule.DurabilityVisual in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DurabilityModule.DurabilityVisual

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Nested in** [`DurabilityModule`](/game-api/types/global-c-d/durabilitymodule)
- **Inherits or implements** [`IReferenceRenderer`](/game-api/types/global-i-l/ireferencerenderer)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DurabilityVisual()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-threshold" /><code>{"private float threshold"}</code> |
| <Link id="m-visualrenderers" /><code>{"private Renderer[] visualRenderers"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-firstrenderer" /><code>{"Renderer FirstRenderer { get; }"}</code> |
| <Link id="m-threshold-2" /><code>{"float Threshold { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-cleanmissing" /><code>{"void CleanMissing()"}</code> |
| <Link id="m-setenable" /><code>{"void SetEnable("}<Link to="/game-api/types/global-c-d/durabilitymodule">{"DurabilityModule"}</Link>{" module, bool isEnabled)"}</code> |
| <Link id="m-updaterenderers" /><code>{"void UpdateRenderers(Renderer[] oldFirstRenderers, Renderer[] newFirstRenderers)"}</code> |

## Used in

Members of other types that take, return or hold a `DurabilityVisual`:

[`ForgedModel<TB, TA>.UpdateDurabilityStage`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-updatedurabilitystage), [`DurabilityModule.OnChangedStage`](/game-api/types/global-c-d/durabilitymodule#m-onchangedstage), [`DurabilityModule.stageVisuals`](/game-api/types/global-c-d/durabilitymodule#m-stagevisuals).
