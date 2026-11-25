---
title: "PlatformModeHandler"
description: "delegate PlatformModeHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformModeHandler

A **delegate** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformModeHandler(object object, IntPtr method)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" mode, AsyncCallback callback, object object)"}</code> |  |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |  |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" mode)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlatformModeHandler`:

[`PlatformDriver.PlatformSet`](/game-api/types/global-p/platformdriver#m-platformset).
