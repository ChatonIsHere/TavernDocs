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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`ButtonSettings`](/game-api/types/alta-menus/buttonsettings)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TouchScreenButtonVisualSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"private Material color"}</code> | Backing field for `Color`. |
| <Link id="m-growcurve" /><code>{"private AnimationCurve growCurve"}</code> | Backing field for `GrowCurve`. |
| <Link id="m-growduration" /><code>{"private float growDuration"}</code> | Backing field for `GrowDuration`. |
| <Link id="m-idlealpha" /><code>{"private float idleAlpha"}</code> | Backing field for `IdleAlpha`. |
| <Link id="m-pressedalpha" /><code>{"private float pressedAlpha"}</code> | Backing field for `PressedAlpha`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-color-2" /><code>{"Material Color { get; }"}</code> | Material used for the button. |
| <Link id="m-growcurve-2" /><code>{"AnimationCurve GrowCurve { get; }"}</code> | Curve for the grow animation. |
| <Link id="m-growduration-2" /><code>{"float GrowDuration { get; }"}</code> | Length of the grow animation in seconds (default 0.5). |
| <Link id="m-idlealpha-2" /><code>{"float IdleAlpha { get; }"}</code> | Alpha when not pressed (default 0.5). |
| <Link id="m-pressedalpha-2" /><code>{"float PressedAlpha { get; }"}</code> | Alpha when pressed (default 1). |

## Used in

Members of other types that take, return or hold a `TouchScreenButtonVisualSettings`:

[`TouchScreenButtonVisual.settings`](/game-api/types/alta-menus/touchscreenbuttonvisual#m-settings).
