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
| <Link id="m-ctor" /><code>{"LimitFrameRate()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-targetfps" /><code>{"private int targetFPS"}</code> | <span className="api-desc">Backing field for `TargetFPS` (default 20).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-targetfps-2" /><code>{"int TargetFPS { get; set; }"}</code> | <span className="api-desc">The frame rate cap.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Sleeps for one target frame time whenever the measured FPS is above the target.</span> |

</details>

## Used in

Members of other types that take, return or hold a `LimitFrameRate`:

<div className="api-used-in">

[`DebuggingCommandModule.frameRateLimit`](/mod/game-api/types/alta-console/debuggingcommandmodule#m-frameratelimit).

</div>
