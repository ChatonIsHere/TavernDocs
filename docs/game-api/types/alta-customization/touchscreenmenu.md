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

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`TouchScreenMenuBase`](/game-api/types/global-t-x/touchscreenmenubase)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TouchScreenMenu()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handcamera" /><code>{"private "}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera"}</code> | The camera this menu is on. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isscreenfree" /><code>{"protected override bool IsScreenFree { get; }"}</code> | Whether the camera screen is free, from `HandCamera.IsScreenFree`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setupforlocal" /><code>{"protected override void SetupForLocal()"}</code> | For the local owner, hooks the hand camera render events. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Off headless, waits for the camera's owner update. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks the render events. |
| <Link id="m-postrenderenablebuttons" /><code>{"private void PostRenderEnableButtons("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" renderingCamera, "}<Link to="/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | Turns the buttons back on after a hand camera render. |
| <Link id="m-prerenderdisablebuttons" /><code>{"private void PreRenderDisableButtons("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" renderingCamera, "}<Link to="/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | Turns the buttons off before a hand camera render. |
| <Link id="m-updateowner" /><code>{"private void UpdateOwner(bool isOwned)"}</code> | Runs `Setup` once with whether the local player owns the camera. |

</details>

## Used in

Members of other types that take, return or hold a `TouchScreenMenu`:

[`FiltersButton.touchScreen`](/game-api/types/alta-customization/filtersbutton#m-touchscreen).
