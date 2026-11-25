---
title: "PoseChangedHandler"
description: "delegate PoseChangedHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PoseChangedHandler

A **delegate** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PoseChangedHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-s/steamvrpose">{"SteamVRPose"}</Link>{" pose, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-s/steamvrpose">{"SteamVRPose"}</Link>{" pose)"}</code> |

## Used in

Members of other types that take, return or hold a `PoseChangedHandler`:

[`SteamVRPose.Changed`](/game-api/types/global-s/steamvrpose#m-changed).
