---
title: "TouchScreenButtonVisualSettings"
description: "Asset with the look of a touch screen button: alpha when idle and pressed, a grow animation and a material."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TouchScreenButtonVisualSettings

A **class** in `Root.Township`, `Alta.Meta.UI`.

Asset with the look of a touch screen button: alpha when idle and pressed, a grow animation and a material. Client.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`ButtonSettings`](/mod/game-api/types/alta-menus/buttonsettings)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TouchScreenButtonVisualSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"private Material color"}</code> | <span className="api-desc">Backing field for `Color`.</span> |
| <Link id="m-growcurve" /><code>{"private AnimationCurve growCurve"}</code> | <span className="api-desc">Backing field for `GrowCurve`.</span> |
| <Link id="m-growduration" /><code>{"private float growDuration"}</code> | <span className="api-desc">Backing field for `GrowDuration`.</span> |
| <Link id="m-idlealpha" /><code>{"private float idleAlpha"}</code> | <span className="api-desc">Backing field for `IdleAlpha`.</span> |
| <Link id="m-pressedalpha" /><code>{"private float pressedAlpha"}</code> | <span className="api-desc">Backing field for `PressedAlpha`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-color-2" /><code>{"Material Color { get; }"}</code> | <span className="api-desc">Material used for the button.</span> |
| <Link id="m-growcurve-2" /><code>{"AnimationCurve GrowCurve { get; }"}</code> | <span className="api-desc">Curve for the grow animation.</span> |
| <Link id="m-growduration-2" /><code>{"float GrowDuration { get; }"}</code> | <span className="api-desc">Length of the grow animation in seconds (default 0.5).</span> |
| <Link id="m-idlealpha-2" /><code>{"float IdleAlpha { get; }"}</code> | <span className="api-desc">Alpha when not pressed (default 0.5).</span> |
| <Link id="m-pressedalpha-2" /><code>{"float PressedAlpha { get; }"}</code> | <span className="api-desc">Alpha when pressed (default 1).</span> |

## Used in

Members of other types that take, return or hold a `TouchScreenButtonVisualSettings`:

<div className="api-used-in">

[`TouchScreenButtonVisual.settings`](/mod/game-api/types/alta-menus/touchscreenbuttonvisual#m-settings).

</div>
