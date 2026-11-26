---
title: "ITouchScreenButton"
description: "A button on an in-world touch screen menu that can be pressed and released."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ITouchScreenButton

An **interface** in `Root.Township`, the global namespace.

A button on an in-world touch screen menu that can be pressed and released.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`TouchScreenButton`](/mod/game-api/types/alta-menus/touchscreenbutton), [`BasicTouchScreenButton`](/mod/game-api/types/global-a-b/basictouchscreenbutton), [`ILabeledTouchScreenButton`](/mod/game-api/types/global-i-l/ilabeledtouchscreenbutton), [`TouchScreenKeyboardKey`](/mod/game-api/types/global-t-x/touchscreenkeyboardkey)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-buttonsize" /><code>{"Vector2 ButtonSize { get; }"}</code> | <span className="api-desc">Size of the button's touch area.</span> |
| <Link id="m-gameobject" /><code>{"GameObject gameObject { get; }"}</code> | <span className="api-desc">The button's game object.</span> |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; set; }"}</code> | <span className="api-desc">Whether the button can be pressed.</span> |
| <Link id="m-state" /><code>{"bool State { get; }"}</code> | <span className="api-desc">Whether the button is pressed.</span> |
| <Link id="m-transform" /><code>{"Transform transform { get; }"}</code> | <span className="api-desc">The button's transform.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-press" /><code>{"void Press()"}</code> | <span className="api-desc">Presses the button.</span> |
| <Link id="m-release" /><code>{"void Release()"}</code> | <span className="api-desc">Releases the button.</span> |

## Used in

Members of other types that take, return or hold a `ITouchScreenButton`:

<div className="api-used-in">

[`TouchScreenKeyboard.instantiatedButtons`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-instantiatedbuttons), [`TouchScreenKeyboard.InstantiatedButtons`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-instantiatedbuttons-2), [`TouchScreenMenuBase.activeButtonPress`](/mod/game-api/types/global-t-x/touchscreenmenubase#m-activebuttonpress), [`TouchScreenMenuBase.ButtonMap`](/mod/game-api/types/global-t-x/touchscreenmenubase#m-buttonmap), [`TouchScreenMenuBase.buttonPressCache`](/mod/game-api/types/global-t-x/touchscreenmenubase#m-buttonpresscache), [`TouchScreenMenuBase.InstantiatedButtons`](/mod/game-api/types/global-t-x/touchscreenmenubase#m-instantiatedbuttons), [`TouchScreenMenuBase.IsButtonValid`](/mod/game-api/types/global-t-x/touchscreenmenubase#m-isbuttonvalid), [`TouchScreenMenuBase.MapKey`](/mod/game-api/types/global-t-x/touchscreenmenubase#m-mapkey), [`TouchScreenMenuBase.toRelease`](/mod/game-api/types/global-t-x/touchscreenmenubase#m-torelease), [`TouchScreenMenuBase.touched`](/mod/game-api/types/global-t-x/touchscreenmenubase#m-touched), [`TouchScreenMenuBase.ValidateMultiTouch`](/mod/game-api/types/global-t-x/touchscreenmenubase#m-validatemultitouch).

</div>
