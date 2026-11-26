---
title: "PoseChangedHandler"
description: "Handler for SteamVRPose.Changed, given the pose that changed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PoseChangedHandler

A **delegate** in `Root.Township`, no namespace.

Handler for `SteamVRPose.Changed`, given the pose that changed.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PoseChangedHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-s/steamvrpose">{"SteamVRPose"}</Link>{" pose, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-s/steamvrpose">{"SteamVRPose"}</Link>{" pose)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `PoseChangedHandler`:

[`SteamVRPose.Changed`](/game-api/types/global-s/steamvrpose#m-changed).
