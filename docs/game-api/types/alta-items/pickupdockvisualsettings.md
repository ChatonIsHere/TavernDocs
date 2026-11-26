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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`PickupDockVisualSettings.Create`](/game-api/types/alta-items/pickupdockvisualsettings-create)
- **Nested types** [`Create`](/game-api/types/alta-items/pickupdockvisualsettings-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupDockVisualSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>23 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"private readonly int _Color"}</code> | Shader property ID for the colour. |
| <Link id="m-edgepower" /><code>{"private readonly int _EdgePower"}</code> | Shader property ID for the edge power. |
| <Link id="m-glossiness" /><code>{"private readonly int _Glossiness"}</code> | Shader property ID for smoothness. |
| <Link id="m-maximumalpha" /><code>{"private readonly int _MaximumAlpha"}</code> | Shader property ID for the maximum alpha. |
| <Link id="m-alphamultiplierheaddistance" /><code>{"private AnimationCurve alphaMultiplierHeadDistance"}</code> | Curve from head distance to alpha multiplier. |
| <Link id="m-androidmaterial" /><code>{"private Material androidMaterial"}</code> | Backing field for `AndroidMaterial`. |
| <Link id="m-badcolor" /><code>{"private Color badColor"}</code> | Colour blended in when a held item can't go in the dock. |
| <Link id="m-closematerial" /><code>{"private Material closeMaterial"}</code> | Material used within `maximumEvaluationDistance` of the head. |
| <Link id="m-defaultcolor" /><code>{"private Color defaultColor"}</code> | Backing field for `DefaultColor`. |
| <Link id="m-defaultsharedmaterials" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-items/pickupdockvisualsettings">{"PickupDockVisualSettings"}</Link>{", Material> defaultSharedMaterials"}</code> | One shared far material per settings asset, created on first use. |
| <Link id="m-dockedalphamultiplier" /><code>{"private float dockedAlphaMultiplier"}</code> | Alpha and smoothness multiplier when the dock already holds something. |
| <Link id="m-farmaterial" /><code>{"private Material farMaterial"}</code> | Template for the shared material used beyond the evaluation distance. |
| <Link id="m-goodcolor" /><code>{"private Color goodColor"}</code> | Colour blended in when a held item fits the dock. |
| <Link id="m-hoveredgepower" /><code>{"private float hoverEdgePower"}</code> | Edge power while the dock is hovered. |
| <Link id="m-hoverpulsespeed" /><code>{"private float hoverPulseSpeed"}</code> | Backing field for `HoverPulseSpeed`. |
| <Link id="m-hoverscale" /><code>{"private float hoverScale"}</code> | Backing field for `HoverScale`. |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> | How fast the shader values ease towards their targets. |
| <Link id="m-maximumalpha-2" /><code>{"private float maximumAlpha"}</code> | Highest bubble alpha (default 0.7). |
| <Link id="m-maximumevaluationdistance" /><code>{"private float maximumEvaluationDistance"}</code> | Head distance within which bubbles are fully evaluated (default 10). |
| <Link id="m-maximumsmoothness" /><code>{"private float maximumSmoothness"}</code> | Highest bubble smoothness (default 0.8). |
| <Link id="m-normaledgepower" /><code>{"private float normalEdgePower"}</code> | Edge power when not hovered. |
| <Link id="m-propertyblock" /><code>{"private MaterialPropertyBlock propertyBlock"}</code> | Reused property block for the near-player shader values. |
| <Link id="m-weighthanddistance" /><code>{"private AnimationCurve weightHandDistance"}</code> | Curve from hand-to-dock distance to how much that hand's item affects the colour. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-androidmaterial-2" /><code>{"Material AndroidMaterial { get; }"}</code> | Material used for dock bubbles on Android. |
| <Link id="m-defaultcolor-2" /><code>{"Color DefaultColor { get; }"}</code> | Bubble colour when nothing relevant is held. |
| <Link id="m-hoverpulsespeed-2" /><code>{"float HoverPulseSpeed { get; }"}</code> | Speed of the pulse while a dock is hovered. |
| <Link id="m-hoverscale-2" /><code>{"float HoverScale { get; }"}</code> | Scale of the bubble while hovered (default 1.2). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"void Evaluate("}<Link to="/game-api/types/alta-items/dockvisual">{"DockVisual"}</Link>{" dockVisual, Renderer renderer, Vector3 headPosition)"}</code> | Switches the bubble between the close and far material by head distance and, when close, updates its colour and alpha. |
| <Link id="m-evaluateandroid" /><code>{"void EvaluateAndroid("}<Link to="/game-api/types/alta-items/dockvisual">{"DockVisual"}</Link>{" dockVisual, Vector3 headPosition)"}</code> | Android version: just turns the bubble on near the head and off far away. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-evaluatenearplayer" /><code>{"private void EvaluateNearPlayer("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, Renderer renderer)"}</code> | Tints the bubble good or bad by whether the local player's held items fit, fades it by head distance and eases the shader values. |

</details>

## Used in

Members of other types that take, return or hold a `PickupDockVisualSettings`:

[`PickupDockSettings.visualSettings`](/game-api/types/alta-items/pickupdocksettings#m-visualsettings), [`PickupDockSettings.VisualSettings`](/game-api/types/alta-items/pickupdocksettings#m-visualsettings-2).
