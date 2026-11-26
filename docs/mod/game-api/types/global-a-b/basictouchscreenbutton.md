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
| <Link id="m-ctor" /><code>{"protected BasicTouchScreenButton()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-allrenderers" /><code>{"Renderer[] allRenderers"}</code> | <span className="api-desc">Renderers that share the button's material.</span> |
| <Link id="m-buttonsize" /><code>{"Vector2 buttonSize"}</code> | <span className="api-desc">Backing value for `ButtonSize`.</span> |
| <Link id="m-idlealpha" /><code>{"float idleAlpha"}</code> | <span className="api-desc">Material alpha when not pressed.</span> |
| <Link id="m-mainrenderer" /><code>{"Renderer mainRenderer"}</code> | <span className="api-desc">Main renderer whose material alpha changes.</span> |
| <Link id="m-pressedalpha" /><code>{"float pressedAlpha"}</code> | <span className="api-desc">Material alpha when pressed.</span> |
| <Link id="m-alpha" /><code>{"protected static readonly int _Alpha"}</code> | <span className="api-desc">Shader property id for `_Alpha`.</span> |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | <span className="api-desc">Shared logger.</span> |

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-material" /><code>{"private Material material"}</code> | <span className="api-desc">Instance of the main renderer's material, shared by all its renderers, whose `_Alpha` shows pressed or idle.</span> |
| <Link id="m-onpressed" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onPressed"}</code> | <span className="api-desc">Event behind `Pressed`, invoked by `Press`.</span> |
| <Link id="m-onreleased" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onReleased"}</code> | <span className="api-desc">Event behind `Released`, invoked by `Release`.</span> |
| <Link id="m-sounds" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/buttonsoundsettings">{"ButtonSoundSettings"}</Link>{" sounds"}</code> | <span className="api-desc">Optional press and release sounds, hooked up in `Awake`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-buttonsize-2" /><code>{"virtual Vector2 ButtonSize { get; }"}</code> | <span className="api-desc">Size of the touch area.</span> |
| <Link id="m-isenabled" /><code>{"virtual bool IsEnabled { get; set; }"}</code> | <span className="api-desc">Whether the button can be pressed.</span> |
| <Link id="m-state" /><code>{"bool State { get; private set; }"}</code> | <span className="api-desc">Whether the button is pressed.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-pressed" /><code>{"event Action Pressed"}</code> | <span className="api-desc">Raised when the button is pressed.</span> |
| <Link id="m-released" /><code>{"event Action Released"}</code> | <span className="api-desc">Raised when the button is released.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-press" /><code>{"void Press()"}</code> | <span className="api-desc">Marks the button pressed and raises `Pressed`.</span> |
| <Link id="m-release" /><code>{"void Release()"}</code> | <span className="api-desc">Marks the button released and raises `Released`.</span> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Makes a material copy for the renderers and hooks the press and release sounds.</span> |
| <Link id="m-internalpress" /><code>{"protected virtual void InternalPress()"}</code> | <span className="api-desc">Hook for subclasses, called after `Pressed`.</span> |
| <Link id="m-internalrelease" /><code>{"protected virtual void InternalRelease()"}</code> | <span className="api-desc">Hook for subclasses, called after `Released`.</span> |
| <Link id="m-setalpha" /><code>{"protected void SetAlpha(bool isPressed)"}</code> | <span className="api-desc">Sets the material alpha to the pressed or idle value.</span> |
| <Link id="m-setpressedalpha" /><code>{"protected void SetPressedAlpha()"}</code> | <span className="api-desc">Sets the material alpha to the pressed value.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Editor: draws the button's touch area as a wire rectangle.</span> |

</details>
