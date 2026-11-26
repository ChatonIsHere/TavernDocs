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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PositionChangedHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> |

## Used in

Members of other types that take, return or hold a `PositionChangedHandler`:

[`LocomotionController.PositionAboutToChange`](/game-api/types/global-i-l/locomotioncontroller#m-positionabouttochange), [`LocomotionController.PositionChanged`](/game-api/types/global-i-l/locomotioncontroller#m-positionchanged).
