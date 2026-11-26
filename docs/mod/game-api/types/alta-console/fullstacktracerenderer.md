---
title: "FullStackTraceRenderer"
description: "NLog layout renderer ${fullstacktrace}: the full stack trace with file and line for each frame."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FullStackTraceRenderer

A **class** in `Root.Township`, `Alta.Logging.Targets`.

NLog layout renderer `${fullstacktrace}`: the full stack trace with file and line for each frame.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** `LayoutRenderer`, `IUsesStackTrace`
- **Attributes** `LayoutRenderer`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FullStackTraceRenderer()"}</code> | <span className="api-desc">Creates a `FullStackTraceRenderer` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-stacktraceusage" /><code>{"StackTraceUsage StackTraceUsage { get; }"}</code> | <span className="api-desc">Asks NLog to capture the stack trace with source info.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-append" /><code>{"protected override void Append(StringBuilder builder, LogEventInfo logEvent)"}</code> | <span className="api-desc">Writes a `stacktrace` event property if there is one, otherwise each frame from the caller down.</span> |
