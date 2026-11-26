---
title: "NLogCatcher.MelonTarget"
description: "An NLog target that writes the game's log lines to TavernLib's MelonLoader log, coloured by level."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NLogCatcher.MelonTarget

A **class** in `TavernLib`, `TavernLib.Debugging`.

An NLog target that writes the game's log lines to TavernLib's MelonLoader log, coloured by level.

- **Listed in** [TavernLib.Debugging](/mod/tavernlib-api/types/debugging)
- **Nested in** [`NLogCatcher`](/mod/tavernlib-api/types/debugging/nlogcatcher)
- **Inherits or implements** `TargetWithLayout`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MelonTarget()"}</code> | <span className="api-desc">Created by TavernLib; mods don't make one.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-logginglevels" /><code>{"Dictionary<string, bool> LoggingLevels { get; }"}</code> | <span className="api-desc">Which NLog levels are copied, by level name. All on at first; `DebugHelper`'s toggles change them.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-write" /><code>{"protected override void Write(LogEventInfo logEvent)"}</code> | <span className="api-desc">Copies one log line, skipping a few noisy loggers (`Connection`, `MessageDebug`, `SpawingLogger`) and levels that are off.</span> |

## Used in

Members of other types that take, return or hold a `MelonTarget`:

<div className="api-used-in">

[`NLogCatcher.Target`](/mod/tavernlib-api/types/debugging/nlogcatcher#m-target).

</div>
