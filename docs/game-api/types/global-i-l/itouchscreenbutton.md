---
title: "ITouchScreenButton"
description: "interface ITouchScreenButton in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ITouchScreenButton

An **interface** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`TouchScreenButton`](/game-api/types/alta-menus/touchscreenbutton), [`BasicTouchScreenButton`](/game-api/types/global-a-b/basictouchscreenbutton), [`ILabeledTouchScreenButton`](/game-api/types/global-i-l/ilabeledtouchscreenbutton), [`TouchScreenKeyboardKey`](/game-api/types/global-t-x/touchscreenkeyboardkey)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-buttonsize" /><code>{"Vector2 ButtonSize { get; }"}</code> |  |
| <Link id="m-gameobject" /><code>{"GameObject gameObject { get; }"}</code> |  |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; set; }"}</code> |  |
| <Link id="m-state" /><code>{"bool State { get; }"}</code> |  |
| <Link id="m-transform" /><code>{"Transform transform { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-press" /><code>{"void Press()"}</code> |  |
| <Link id="m-release" /><code>{"void Release()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ITouchScreenButton`:

[`TouchScreenKeyboard.instantiatedButtons`](/game-api/types/global-t-x/touchscreenkeyboard#m-instantiatedbuttons), [`TouchScreenKeyboard.InstantiatedButtons`](/game-api/types/global-t-x/touchscreenkeyboard#m-instantiatedbuttons-2), [`TouchScreenMenuBase.activeButtonPress`](/game-api/types/global-t-x/touchscreenmenubase#m-activebuttonpress), [`TouchScreenMenuBase.ButtonMap`](/game-api/types/global-t-x/touchscreenmenubase#m-buttonmap), [`TouchScreenMenuBase.buttonPressCache`](/game-api/types/global-t-x/touchscreenmenubase#m-buttonpresscache), [`TouchScreenMenuBase.InstantiatedButtons`](/game-api/types/global-t-x/touchscreenmenubase#m-instantiatedbuttons), [`TouchScreenMenuBase.IsButtonValid`](/game-api/types/global-t-x/touchscreenmenubase#m-isbuttonvalid), [`TouchScreenMenuBase.MapKey`](/game-api/types/global-t-x/touchscreenmenubase#m-mapkey), [`TouchScreenMenuBase.toRelease`](/game-api/types/global-t-x/touchscreenmenubase#m-torelease), [`TouchScreenMenuBase.touched`](/game-api/types/global-t-x/touchscreenmenubase#m-touched), [`TouchScreenMenuBase.ValidateMultiTouch`](/game-api/types/global-t-x/touchscreenmenubase#m-validatemultitouch).
