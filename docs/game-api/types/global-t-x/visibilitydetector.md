---
title: "VisibilityDetector"
description: "class VisibilityDetector in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VisibilityDetector

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VisibilityDetector()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-becameinvisible" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" becameInvisible"}</code> |  |
| <Link id="m-becamevisible" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" becameVisible"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isvisible" /><code>{"bool IsVisible { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-becameinvisible-2" /><code>{"event Action BecameInvisible"}</code> |  |
| <Link id="m-becamevisible-2" /><code>{"event Action BecameVisible"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onbecameinvisible" /><code>{"private void OnBecameInvisible()"}</code> |  |
| <Link id="m-onbecamevisible" /><code>{"private void OnBecameVisible()"}</code> |  |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |  |

## Used in

Members of other types that take, return or hold a `VisibilityDetector`:

[`StorageOrganizer.visibilityDetector`](/game-api/types/alta-items/storageorganizer#m-visibilitydetector), [`LiquidStencilShaderController.volumeVisibilityDetector`](/game-api/types/alta-stats-effects/liquidstencilshadercontroller#m-volumevisibilitydetector), [`LiquidSurfaceVisual.androidContainerLod0`](/game-api/types/alta-stats-effects/liquidsurfacevisual#m-androidcontainerlod0), [`LiquidSurfaceVisual.containerLod0`](/game-api/types/alta-stats-effects/liquidsurfacevisual#m-containerlod0), [`PageInstance.visibilityDetector`](/game-api/types/alta-items/pageinstance#m-visibilitydetector).
