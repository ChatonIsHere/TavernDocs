---
title: "BasicTouchScreenButton"
description: "abstract class BasicTouchScreenButton in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicTouchScreenButton

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`, [`ITouchScreenButton`](/game-api/types/global-i-l/itouchscreenbutton)
- **Derived types** [`FiltersButton`](/game-api/types/alta-customization/filtersbutton), [`TouchScreenButtonOld`](/game-api/types/global-t-x/touchscreenbuttonold), [`TouchScreenKeyboardKey`](/game-api/types/global-t-x/touchscreenkeyboardkey)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected BasicTouchScreenButton()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-allrenderers" /><code>{"Renderer[] allRenderers"}</code> |  |
| <Link id="m-buttonsize" /><code>{"Vector2 buttonSize"}</code> |  |
| <Link id="m-idlealpha" /><code>{"float idleAlpha"}</code> |  |
| <Link id="m-mainrenderer" /><code>{"Renderer mainRenderer"}</code> |  |
| <Link id="m-pressedalpha" /><code>{"float pressedAlpha"}</code> |  |
| <Link id="m-alpha" /><code>{"protected static readonly int _Alpha"}</code> |  |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> |  |
| <Link id="m-material" /><code>{"private Material material"}</code> |  |
| <Link id="m-onpressed" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onPressed"}</code> |  |
| <Link id="m-onreleased" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onReleased"}</code> |  |
| <Link id="m-sounds" /><code>{"private "}<Link to="/game-api/types/global-a-b/buttonsoundsettings">{"ButtonSoundSettings"}</Link>{" sounds"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-buttonsize-2" /><code>{"virtual Vector2 ButtonSize { get; }"}</code> |  |
| <Link id="m-isenabled" /><code>{"virtual bool IsEnabled { get; set; }"}</code> |  |
| <Link id="m-state" /><code>{"bool State { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-pressed" /><code>{"event Action Pressed"}</code> |  |
| <Link id="m-released" /><code>{"event Action Released"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-press" /><code>{"void Press()"}</code> |  |
| <Link id="m-release" /><code>{"void Release()"}</code> |  |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> |  |
| <Link id="m-internalpress" /><code>{"protected virtual void InternalPress()"}</code> |  |
| <Link id="m-internalrelease" /><code>{"protected virtual void InternalRelease()"}</code> |  |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |  |
| <Link id="m-setalpha" /><code>{"protected void SetAlpha(bool isPressed)"}</code> |  |
| <Link id="m-setpressedalpha" /><code>{"protected void SetPressedAlpha()"}</code> |  |
