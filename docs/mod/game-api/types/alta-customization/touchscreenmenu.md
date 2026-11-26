---
title: "TouchScreenMenu"
description: "The hand camera's touch screen menu."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TouchScreenMenu

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

The hand camera's touch screen menu. Sets up for the owner and hides its buttons while the camera renders.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`TouchScreenMenuBase`](/mod/game-api/types/global-t-x/touchscreenmenubase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TouchScreenMenu()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handcamera" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera"}</code> | <span className="api-desc">The camera this menu is on.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isscreenfree" /><code>{"protected override bool IsScreenFree { get; }"}</code> | <span className="api-desc">Whether the camera screen is free, from `HandCamera.IsScreenFree`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setupforlocal" /><code>{"protected override void SetupForLocal()"}</code> | <span className="api-desc">For the local owner, hooks the hand camera render events.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Off headless, waits for the camera's owner update.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks the render events.</span> |
| <Link id="m-postrenderenablebuttons" /><code>{"private void PostRenderEnableButtons("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" renderingCamera, "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | <span className="api-desc">Turns the buttons back on after a hand camera render.</span> |
| <Link id="m-prerenderdisablebuttons" /><code>{"private void PreRenderDisableButtons("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" renderingCamera, "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | <span className="api-desc">Turns the buttons off before a hand camera render.</span> |
| <Link id="m-updateowner" /><code>{"private void UpdateOwner(bool isOwned)"}</code> | <span className="api-desc">Runs `Setup` once with whether the local player owns the camera.</span> |

</details>

## Used in

Members of other types that take, return or hold a `TouchScreenMenu`:

<div className="api-used-in">

[`FiltersButton.touchScreen`](/mod/game-api/types/alta-customization/filtersbutton#m-touchscreen).

</div>
