---
title: "NLogCatcher"
description: "Internal: adds a MelonTarget to NLog's configuration once the app has started, and again whenever the configuration is replaced."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NLogCatcher

A **internal class** in `TavernLib`, `TavernLib.Debugging`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal: adds a `MelonTarget` to NLog's configuration once the app has started, and again whenever the configuration is replaced. Used by `DebugHelper`.

- **Listed in** [TavernLib.Debugging](/mod/tavernlib-api/types/debugging)
- **Nested types** [`MelonTarget`](/mod/tavernlib-api/types/debugging/nlogcatcher-melontarget)
- **Documented in** [NLogCatcher](/mod/tavernlib-api/types/debugging/nlogcatcher)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NLogCatcher()"}</code> | <span className="api-desc">After late start, adds a target that forwards the game's NLog lines to MelonLoader, and re-adds it if the NLog configuration changes.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-target" /><code><Link to="/mod/tavernlib-api/types/debugging/nlogcatcher-melontarget">{"NLogCatcher.MelonTarget"}</Link>{" Target { get; private set; }"}</code> | <span className="api-desc">The NLog target that writes to MelonLoader. `null` until the app's late start.</span> |

## Used in

Members of other types that take, return or hold a `NLogCatcher`:

<div className="api-used-in">

[`DebugHelper._logCatcher`](/mod/tavernlib-api/types/debugging/debughelper#m-logcatcher).

</div>
