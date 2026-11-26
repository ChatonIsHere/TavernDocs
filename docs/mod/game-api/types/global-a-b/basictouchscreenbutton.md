---
title: "BasicTouchScreenButton"
description: "Base for a button on an in-world touch screen (such as the camera or menus): tracks pressed state, changes the renderer alpha and plays sounds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicTouchScreenButton

An **abstract class** in `Root.Township`, the global namespace.

Base for a button on an in-world touch screen (such as the camera or menus): tracks pressed state, changes the renderer alpha and plays sounds. Pressed by `TouchScreenMenuBase`.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`, [`ITouchScreenButton`](/mod/game-api/types/global-i-l/itouchscreenbutton)
- **Derived types** [`FiltersButton`](/mod/game-api/types/alta-customization/filtersbutton), [`TouchScreenButtonOld`](/mod/game-api/types/global-t-x/touchscreenbuttonold), [`TouchScreenKeyboardKey`](/mod/game-api/types/global-t-x/touchscreenkeyboardkey)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected BasicTouchScreenButton()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-allrenderers" /><code>{"Renderer[] allRenderers"}</code> | Renderers that share the button's material. |
| <Link id="m-buttonsize" /><code>{"Vector2 buttonSize"}</code> | Backing value for `ButtonSize`. |
| <Link id="m-idlealpha" /><code>{"float idleAlpha"}</code> | Material alpha when not pressed. |
| <Link id="m-mainrenderer" /><code>{"Renderer mainRenderer"}</code> | Main renderer whose material alpha changes. |
| <Link id="m-pressedalpha" /><code>{"float pressedAlpha"}</code> | Material alpha when pressed. |
| <Link id="m-alpha" /><code>{"protected static readonly int _Alpha"}</code> | Shader property id for `_Alpha`. |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | Shared logger. |

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-material" /><code>{"private Material material"}</code> | Instance of the main renderer's material, shared by all its renderers, whose `_Alpha` shows pressed or idle. |
| <Link id="m-onpressed" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onPressed"}</code> | Event behind `Pressed`, invoked by `Press`. |
| <Link id="m-onreleased" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onReleased"}</code> | Event behind `Released`, invoked by `Release`. |
| <Link id="m-sounds" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/buttonsoundsettings">{"ButtonSoundSettings"}</Link>{" sounds"}</code> | Optional press and release sounds, hooked up in `Awake`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-buttonsize-2" /><code>{"virtual Vector2 ButtonSize { get; }"}</code> | Size of the touch area. |
| <Link id="m-isenabled" /><code>{"virtual bool IsEnabled { get; set; }"}</code> | Whether the button can be pressed. |
| <Link id="m-state" /><code>{"bool State { get; private set; }"}</code> | Whether the button is pressed. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-pressed" /><code>{"event Action Pressed"}</code> | Raised when the button is pressed. |
| <Link id="m-released" /><code>{"event Action Released"}</code> | Raised when the button is released. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-press" /><code>{"void Press()"}</code> | Marks the button pressed and raises `Pressed`. |
| <Link id="m-release" /><code>{"void Release()"}</code> | Marks the button released and raises `Released`. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Makes a material copy for the renderers and hooks the press and release sounds. |
| <Link id="m-internalpress" /><code>{"protected virtual void InternalPress()"}</code> | Hook for subclasses, called after `Pressed`. |
| <Link id="m-internalrelease" /><code>{"protected virtual void InternalRelease()"}</code> | Hook for subclasses, called after `Released`. |
| <Link id="m-setalpha" /><code>{"protected void SetAlpha(bool isPressed)"}</code> | Sets the material alpha to the pressed or idle value. |
| <Link id="m-setpressedalpha" /><code>{"protected void SetPressedAlpha()"}</code> | Sets the material alpha to the pressed value. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Editor: draws the button's touch area as a wire rectangle. |

</details>
