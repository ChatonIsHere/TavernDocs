---
title: "CaveTeleporterReplacerAnimator"
description: "Runs the dissolve swap between a cave teleporter and its replacement using the material and curves in CaveTeleportSettings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveTeleporterReplacerAnimator

A **class** in `Root.Township`, no namespace.

Runs the dissolve swap between a cave teleporter and its replacement using the material and curves in `CaveTeleportSettings`. On a headless server it just waits the animation length.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Nested types** [`ObjectHandler`](/game-api/types/global-c-d/caveteleporterreplaceranimator-objecthandler)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member |
| --- |
| <Link id="m-ctor" /><code>{"private CaveTeleporterReplacerAnimator("}<Link to="/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" originalRenderers, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" replacing, Action<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> finished)"}</code> |

</details>

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-finished" /><code>{"private Action finished"}</code> | Callback run when the animation is done. |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/caveteleportsettings">{"CaveTeleportSettings"}</Link>{" settings"}</code> | The `CaveTeleportSettings` global settings used for material, curves and duration. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-animatereplace" /><code>{"static void AnimateReplace("}<Link to="/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" originalRenderers, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" replacing, Action<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> finished)"}</code> | Starts the animation, then calls `finished` with the replacing entity when it ends. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animation" /><code>{"private IEnumerator Animation("}<Link to="/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" originalRenderers, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" replacing) (iterator)"}</code> | Coroutine: swaps both objects to an animating material, drives progress over the duration, then hides the old one and restores the new one. |

</details>
