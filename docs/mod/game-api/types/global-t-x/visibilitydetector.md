---
title: "VisibilityDetector"
description: "Raises events when the renderer on the same object becomes visible to or hidden from any camera."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VisibilityDetector

A **class** in `Root.Township`, the global namespace.

Raises events when the renderer on the same object becomes visible to or hidden from any camera. Client side; the build bake fails if there is no renderer.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VisibilityDetector()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-becameinvisible" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" becameInvisible"}</code> | Serialized event behind `BecameInvisible`. |
| <Link id="m-becamevisible" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" becameVisible"}</code> | Serialized event behind `BecameVisible`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isvisible" /><code>{"bool IsVisible { get; private set; }"}</code> | Whether the renderer is currently seen by a camera. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-becameinvisible-2" /><code>{"event Action BecameInvisible"}</code> | Raised when the renderer is no longer seen by any camera. |
| <Link id="m-becamevisible-2" /><code>{"event Action BecameVisible"}</code> | Raised when the renderer is first seen by a camera. |

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onbecameinvisible" /><code>{"private void OnBecameInvisible()"}</code> | Unity callback; clears `IsVisible` and raises `BecameInvisible`. |
| <Link id="m-onbecamevisible" /><code>{"private void OnBecameVisible()"}</code> | Unity callback; sets `IsVisible` and raises `BecameVisible`. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build step: throws if the object has no `Renderer`, naming the root object. |

</details>

## Used in

Members of other types that take, return or hold a `VisibilityDetector`:

[`StorageOrganizer.visibilityDetector`](/mod/game-api/types/alta-items/storageorganizer#m-visibilitydetector), [`LiquidStencilShaderController.volumeVisibilityDetector`](/mod/game-api/types/alta-stats-effects/liquidstencilshadercontroller#m-volumevisibilitydetector), [`LiquidSurfaceVisual.androidContainerLod0`](/mod/game-api/types/alta-stats-effects/liquidsurfacevisual#m-androidcontainerlod0), [`LiquidSurfaceVisual.containerLod0`](/mod/game-api/types/alta-stats-effects/liquidsurfacevisual#m-containerlod0), [`PageInstance.visibilityDetector`](/mod/game-api/types/alta-items/pageinstance#m-visibilitydetector).
