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

- **Listed in** [TavernLib.Debugging](/tavernlib-api/types/debugging)
- **Nested types** [`MelonTarget`](/tavernlib-api/types/debugging/nlogcatcher-melontarget)
- **Documented in** [NLogCatcher](/tavernlib-api/types/debugging/nlogcatcher)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NLogCatcher()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-target" /><code><Link to="/tavernlib-api/types/debugging/nlogcatcher-melontarget">{"NLogCatcher.MelonTarget"}</Link>{" Target { get; private set; }"}</code> | The NLog target that writes to MelonLoader. `null` until the app's late start. |

## Used in

Members of other types that take, return or hold a `NLogCatcher`:

[`DebugHelper._logCatcher`](/tavernlib-api/types/debugging/debughelper#m-logcatcher).
