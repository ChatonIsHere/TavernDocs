---
title: "GymnasiumTeleportTablet"
description: "Tablet action item in the feature test gymnasium with a page of teleport points."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GymnasiumTeleportTablet

A **class** in `Root.Township`, `ATT.FeatureTestGymnasium`.

Tablet action item in the feature test gymnasium with a page of teleport points. Not saved.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`ActionItem`](/mod/game-api/types/global-a-b/actionitem)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GymnasiumTeleportTablet()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-teleportpointpage" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/gymnasiumteleportpointpage">{"GymnasiumTeleportPointPage"}</Link>{" teleportPointPage"}</code> | <span className="api-desc">Page listing the teleport points.</span> |
| <Link id="m-touchscreen" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/touchscreenmenubase">{"TouchScreenMenuBase"}</Link>{" touchScreen"}</code> | <span className="api-desc">The tablet's touch screen menu.</span> |
| <Link id="m-window" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/window">{"Window"}</Link>{" window"}</code> | <span className="api-desc">The tablet's UI window.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishfadein" /><code>{"protected override void FinishFadeIn()"}</code> | <span className="api-desc">For the local player, sets up the touch screen and starts the window.</span> |
| <Link id="m-startfade" /><code>{"protected override void StartFade(bool isFadingIn)"}</code> | <span className="api-desc">On fade out, disables the touch screen and stops the window.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Stops the tablet being saved and has the teleport page fade the tablet out when used.</span> |

</details>
