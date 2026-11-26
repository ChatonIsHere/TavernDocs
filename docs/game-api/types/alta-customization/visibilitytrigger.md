---
title: "VisibilityTrigger"
description: "Reports when a renderer on this object becomes visible or invisible to any camera."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VisibilityTrigger

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

Reports when a renderer on this object becomes visible or invisible to any camera.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VisibilityTrigger()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isvisible" /><code>{"bool IsVisible { get; private set; }"}</code> | Whether the renderer is currently visible to some camera. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-visibilityupdated" /><code>{"event Action<bool> VisibilityUpdated"}</code> | Raised with the new visibility. It is invoked without a null check, so it throws if nothing is subscribed. |

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onbecameinvisible" /><code>{"private void OnBecameInvisible()"}</code> | Unity callback. Sets `IsVisible` false and raises `VisibilityUpdated`. |
| <Link id="m-onbecamevisible" /><code>{"private void OnBecameVisible()"}</code> | Unity callback. Sets `IsVisible` true and raises `VisibilityUpdated`. |

</details>

## Used in

Members of other types that take, return or hold a `VisibilityTrigger`:

[`HandCamera.visibilityTrigger`](/game-api/types/alta-customization/handcamera#m-visibilitytrigger).
