---
title: "PositionChangedHandler"
description: "Event handler for a player moving, with the old and new positions and the locomotion function that moved them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionChangedHandler

A **delegate** in `Root.Township`, `Alta.Character`.

Event handler for a player moving, with the old and new positions and the locomotion function that moved them. Used by `LocomotionController.PositionChanged` and `PositionAboutToChange`.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PositionChangedHandler(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `PositionChangedHandler`:

<div className="api-used-in">

[`LocomotionController.PositionAboutToChange`](/mod/game-api/types/global-i-l/locomotioncontroller#m-positionabouttochange), [`LocomotionController.PositionChanged`](/mod/game-api/types/global-i-l/locomotioncontroller#m-positionchanged).

</div>
