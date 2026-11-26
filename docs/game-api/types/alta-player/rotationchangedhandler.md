---
title: "RotationChangedHandler"
description: "Callback for LocomotionController.RotationChanged: the player plus their old and new rotation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RotationChangedHandler

A **delegate** in `Root.Township`, `Alta.Character`.

Callback for `LocomotionController.RotationChanged`: the player plus their old and new rotation.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RotationChangedHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Quaternion oldRotation, Quaternion newRotation, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Quaternion oldRotation, Quaternion newRotation)"}</code> |

## Used in

Members of other types that take, return or hold a `RotationChangedHandler`:

[`LocomotionController.RotationChanged`](/game-api/types/global-i-l/locomotioncontroller#m-rotationchanged).
