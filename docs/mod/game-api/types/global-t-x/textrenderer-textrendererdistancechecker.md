---
title: "TextRenderer.TextRendererDistanceChecker"
description: "Private helper for TextRenderer that shows or hides text renderers with a max render distance based on how far they are from the local player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TextRenderer.TextRendererDistanceChecker

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private helper for `TextRenderer` that shows or hides text renderers with a max render distance based on how far they are from the local player. Not used on headless servers.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`TextRenderer`](/mod/game-api/types/global-t-x/textrenderer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TextRendererDistanceChecker()"}</code> | Creates a `TextRenderer.TextRendererDistanceChecker` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activerenderers" /><code>{"private readonly Dictionary<"}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{", Vector3> activeRenderers"}</code> | Renderers being checked, with their cached positions. |
| <Link id="m-instance" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/textrenderer-textrendererdistancechecker">{"TextRenderer.TextRendererDistanceChecker"}</Link>{" instance"}</code> | The single checker, made on first register. |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | The registered budgeted update method. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"static void Deregister("}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" renderer)"}</code> | Stops checking a renderer, and stops updating when none are left. |
| <Link id="m-register" /><code>{"static void Register("}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" renderer)"}</code> | Starts checking a renderer, caching the position of static ones. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-update-2" /><code>{"private void Update()"}</code> | Budgeted update: sets each renderer visible if it's within its max distance of the local player. |

</details>
