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

- **Listed in** [TavernLib.Debugging](/tavernlib-api/types/debugging)
- **Nested in** [`NLogCatcher`](/tavernlib-api/types/debugging/nlogcatcher)
- **Inherits or implements** `TargetWithLayout`
- **Documented in** [NLogCatcher.MelonTarget](/tavernlib-api/types/debugging/nlogcatcher-melontarget)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MelonTarget()"}</code> | Created by TavernLib; mods don't make one. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-logginglevels" /><code>{"Dictionary<string, bool> LoggingLevels { get; }"}</code> | Which NLog levels are copied, by level name. All on at first; `DebugHelper`'s toggles change them. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-write" /><code>{"protected override void Write(LogEventInfo logEvent)"}</code> | Copies one log line, skipping a few noisy loggers (`Connection`, `MessageDebug`, `SpawingLogger`) and levels that are off. |

## Used in

Members of other types that take, return or hold a `MelonTarget`:

[`NLogCatcher.Target`](/tavernlib-api/types/debugging/nlogcatcher#m-target).
