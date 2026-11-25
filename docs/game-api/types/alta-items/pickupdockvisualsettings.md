---
title: "PickupDockVisualSettings"
description: "class PickupDockVisualSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupDockVisualSettings

A **class** in `Root.Township`, `Alta.Inventory`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`PickupDockVisualSettings.Create`](/game-api/types/alta-items/pickupdockvisualsettings-create)
- **Nested types** [`Create`](/game-api/types/alta-items/pickupdockvisualsettings-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PickupDockVisualSettings()"}</code> |

## Fields

<details>
<summary>23 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-color" /><code>{"private readonly int _Color"}</code> |
| <Link id="m-edgepower" /><code>{"private readonly int _EdgePower"}</code> |
| <Link id="m-glossiness" /><code>{"private readonly int _Glossiness"}</code> |
| <Link id="m-maximumalpha" /><code>{"private readonly int _MaximumAlpha"}</code> |
| <Link id="m-alphamultiplierheaddistance" /><code>{"private AnimationCurve alphaMultiplierHeadDistance"}</code> |
| <Link id="m-androidmaterial" /><code>{"private Material androidMaterial"}</code> |
| <Link id="m-badcolor" /><code>{"private Color badColor"}</code> |
| <Link id="m-closematerial" /><code>{"private Material closeMaterial"}</code> |
| <Link id="m-defaultcolor" /><code>{"private Color defaultColor"}</code> |
| <Link id="m-defaultsharedmaterials" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-items/pickupdockvisualsettings">{"PickupDockVisualSettings"}</Link>{", Material> defaultSharedMaterials"}</code> |
| <Link id="m-dockedalphamultiplier" /><code>{"private float dockedAlphaMultiplier"}</code> |
| <Link id="m-farmaterial" /><code>{"private Material farMaterial"}</code> |
| <Link id="m-goodcolor" /><code>{"private Color goodColor"}</code> |
| <Link id="m-hoveredgepower" /><code>{"private float hoverEdgePower"}</code> |
| <Link id="m-hoverpulsespeed" /><code>{"private float hoverPulseSpeed"}</code> |
| <Link id="m-hoverscale" /><code>{"private float hoverScale"}</code> |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> |
| <Link id="m-maximumalpha-2" /><code>{"private float maximumAlpha"}</code> |
| <Link id="m-maximumevaluationdistance" /><code>{"private float maximumEvaluationDistance"}</code> |
| <Link id="m-maximumsmoothness" /><code>{"private float maximumSmoothness"}</code> |
| <Link id="m-normaledgepower" /><code>{"private float normalEdgePower"}</code> |
| <Link id="m-propertyblock" /><code>{"private MaterialPropertyBlock propertyBlock"}</code> |
| <Link id="m-weighthanddistance" /><code>{"private AnimationCurve weightHandDistance"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-androidmaterial-2" /><code>{"Material AndroidMaterial { get; }"}</code> |
| <Link id="m-defaultcolor-2" /><code>{"Color DefaultColor { get; }"}</code> |
| <Link id="m-hoverpulsespeed-2" /><code>{"float HoverPulseSpeed { get; }"}</code> |
| <Link id="m-hoverscale-2" /><code>{"float HoverScale { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-evaluate" /><code>{"void Evaluate("}<Link to="/game-api/types/alta-items/dockvisual">{"DockVisual"}</Link>{" dockVisual, Renderer renderer, Vector3 headPosition)"}</code> |
| <Link id="m-evaluateandroid" /><code>{"void EvaluateAndroid("}<Link to="/game-api/types/alta-items/dockvisual">{"DockVisual"}</Link>{" dockVisual, Vector3 headPosition)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-evaluatenearplayer" /><code>{"private void EvaluateNearPlayer("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, Renderer renderer)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `PickupDockVisualSettings`:

[`PickupDockSettings.visualSettings`](/game-api/types/alta-items/pickupdocksettings#m-visualsettings), [`PickupDockSettings.VisualSettings`](/game-api/types/alta-items/pickupdocksettings#m-visualsettings-2).
