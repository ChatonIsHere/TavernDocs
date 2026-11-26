---
title: "DebugHelper"
description: "The /debug_helper service: copies the game's NLog output into MelonLoader's log and draws an on-screen toggle per log level."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DebugHelper

A **class** in `TavernLib`, `TavernLib.Debugging`.

The `/debug_helper` service: copies the game's NLog output into MelonLoader's log and draws an on-screen toggle per log level. Nothing for mods to call; its constructor is internal.

- **Listed in** [TavernLib.Debugging](/mod/tavernlib-api/types/debugging)
- **Inherits or implements** [`IService`](/mod/tavernlib-api/types/services/iservice)
- **Documented in** [Internals](/mod/tavernlib-api/internals), [Services](/mod/tavernlib-api/services)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal DebugHelper()"}</code> | <span className="api-desc">Subscribes `OnGui` so the log level toggles are drawn.</span> |

</details>

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logcatcher" /><code>{"private readonly "}<Link to="/mod/tavernlib-api/types/debugging/nlogcatcher">{"NLogCatcher"}</Link>{" _logCatcher"}</code> | <span className="api-desc">The `NLogCatcher` that feeds game log lines to MelonLoader.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ongui" /><code>{"private void OnGui()"}</code> | <span className="api-desc">Draws a toggle for each log level, which turns that level on or off in the log catcher.</span> |

</details>
