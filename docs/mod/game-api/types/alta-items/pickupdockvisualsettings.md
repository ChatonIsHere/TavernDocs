---
title: "PickupDockVisualSettings"
description: "ScriptableObject with how dock bubbles look: materials by distance, colours for whether a held item fits, and hover and fade settings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupDockVisualSettings

A **class** in `Root.Township`, `Alta.Inventory`.

ScriptableObject with how dock bubbles look: materials by distance, colours for whether a held item fits, and hover and fade settings. Client side, used by `DockVisual`.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`PickupDockVisualSettings.Create`](/mod/game-api/types/alta-items/pickupdockvisualsettings-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-items/pickupdockvisualsettings-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupDockVisualSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>23 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"private readonly int _Color"}</code> | <span className="api-desc">Shader property ID for the colour.</span> |
| <Link id="m-edgepower" /><code>{"private readonly int _EdgePower"}</code> | <span className="api-desc">Shader property ID for the edge power.</span> |
| <Link id="m-glossiness" /><code>{"private readonly int _Glossiness"}</code> | <span className="api-desc">Shader property ID for smoothness.</span> |
| <Link id="m-maximumalpha" /><code>{"private readonly int _MaximumAlpha"}</code> | <span className="api-desc">Shader property ID for the maximum alpha.</span> |
| <Link id="m-alphamultiplierheaddistance" /><code>{"private AnimationCurve alphaMultiplierHeadDistance"}</code> | <span className="api-desc">Curve from head distance to alpha multiplier.</span> |
| <Link id="m-androidmaterial" /><code>{"private Material androidMaterial"}</code> | <span className="api-desc">Backing field for `AndroidMaterial`.</span> |
| <Link id="m-badcolor" /><code>{"private Color badColor"}</code> | <span className="api-desc">Colour blended in when a held item can't go in the dock.</span> |
| <Link id="m-closematerial" /><code>{"private Material closeMaterial"}</code> | <span className="api-desc">Material used within `maximumEvaluationDistance` of the head.</span> |
| <Link id="m-defaultcolor" /><code>{"private Color defaultColor"}</code> | <span className="api-desc">Backing field for `DefaultColor`.</span> |
| <Link id="m-defaultsharedmaterials" /><code>{"private static Dictionary<"}<Link to="/mod/game-api/types/alta-items/pickupdockvisualsettings">{"PickupDockVisualSettings"}</Link>{", Material> defaultSharedMaterials"}</code> | <span className="api-desc">One shared far material per settings asset, created on first use.</span> |
| <Link id="m-dockedalphamultiplier" /><code>{"private float dockedAlphaMultiplier"}</code> | <span className="api-desc">Alpha and smoothness multiplier when the dock already holds something.</span> |
| <Link id="m-farmaterial" /><code>{"private Material farMaterial"}</code> | <span className="api-desc">Template for the shared material used beyond the evaluation distance.</span> |
| <Link id="m-goodcolor" /><code>{"private Color goodColor"}</code> | <span className="api-desc">Colour blended in when a held item fits the dock.</span> |
| <Link id="m-hoveredgepower" /><code>{"private float hoverEdgePower"}</code> | <span className="api-desc">Edge power while the dock is hovered.</span> |
| <Link id="m-hoverpulsespeed" /><code>{"private float hoverPulseSpeed"}</code> | <span className="api-desc">Backing field for `HoverPulseSpeed`.</span> |
| <Link id="m-hoverscale" /><code>{"private float hoverScale"}</code> | <span className="api-desc">Backing field for `HoverScale`.</span> |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> | <span className="api-desc">How fast the shader values ease towards their targets.</span> |
| <Link id="m-maximumalpha-2" /><code>{"private float maximumAlpha"}</code> | <span className="api-desc">Highest bubble alpha (default 0.7).</span> |
| <Link id="m-maximumevaluationdistance" /><code>{"private float maximumEvaluationDistance"}</code> | <span className="api-desc">Head distance within which bubbles are fully evaluated (default 10).</span> |
| <Link id="m-maximumsmoothness" /><code>{"private float maximumSmoothness"}</code> | <span className="api-desc">Highest bubble smoothness (default 0.8).</span> |
| <Link id="m-normaledgepower" /><code>{"private float normalEdgePower"}</code> | <span className="api-desc">Edge power when not hovered.</span> |
| <Link id="m-propertyblock" /><code>{"private MaterialPropertyBlock propertyBlock"}</code> | <span className="api-desc">Reused property block for the near-player shader values.</span> |
| <Link id="m-weighthanddistance" /><code>{"private AnimationCurve weightHandDistance"}</code> | <span className="api-desc">Curve from hand-to-dock distance to how much that hand's item affects the colour.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-androidmaterial-2" /><code>{"Material AndroidMaterial { get; }"}</code> | <span className="api-desc">Material used for dock bubbles on Android.</span> |
| <Link id="m-defaultcolor-2" /><code>{"Color DefaultColor { get; }"}</code> | <span className="api-desc">Bubble colour when nothing relevant is held.</span> |
| <Link id="m-hoverpulsespeed-2" /><code>{"float HoverPulseSpeed { get; }"}</code> | <span className="api-desc">Speed of the pulse while a dock is hovered.</span> |
| <Link id="m-hoverscale-2" /><code>{"float HoverScale { get; }"}</code> | <span className="api-desc">Scale of the bubble while hovered (default 1.2).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"void Evaluate("}<Link to="/mod/game-api/types/alta-items/dockvisual">{"DockVisual"}</Link>{" dockVisual, Renderer renderer, Vector3 headPosition)"}</code> | <span className="api-desc">Switches the bubble between the close and far material by head distance and, when close, updates its colour and alpha.</span> |
| <Link id="m-evaluateandroid" /><code>{"void EvaluateAndroid("}<Link to="/mod/game-api/types/alta-items/dockvisual">{"DockVisual"}</Link>{" dockVisual, Vector3 headPosition)"}</code> | <span className="api-desc">Android version: just turns the bubble on near the head and off far away.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-evaluatenearplayer" /><code>{"private void EvaluateNearPlayer("}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, Renderer renderer)"}</code> | <span className="api-desc">Tints the bubble good or bad by whether the local player's held items fit, fades it by head distance and eases the shader values.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PickupDockVisualSettings`:

<div className="api-used-in">

[`PickupDockSettings.visualSettings`](/mod/game-api/types/alta-items/pickupdocksettings#m-visualsettings), [`PickupDockSettings.VisualSettings`](/mod/game-api/types/alta-items/pickupdocksettings#m-visualsettings-2).

</div>
