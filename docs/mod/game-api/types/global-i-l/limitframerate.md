---
title: "LimitFrameRate"
description: "Debug component that caps the frame rate by sleeping the main thread."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LimitFrameRate

A **class** in `Root.Township`, the global namespace.

Debug component that caps the frame rate by sleeping the main thread. Added by a debugging console command.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LimitFrameRate()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-targetfps" /><code>{"private int targetFPS"}</code> | Backing field for `TargetFPS` (default 20). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-targetfps-2" /><code>{"int TargetFPS { get; set; }"}</code> | The frame rate cap. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Sleeps for one target frame time whenever the measured FPS is above the target. |

</details>

## Used in

Members of other types that take, return or hold a `LimitFrameRate`:

[`DebuggingCommandModule.frameRateLimit`](/mod/game-api/types/alta-console/debuggingcommandmodule#m-frameratelimit).
