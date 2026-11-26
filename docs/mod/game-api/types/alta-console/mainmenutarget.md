---
title: "MainMenuTarget"
description: "NLog target named MainMenuTarget that sends log lines to the MainMenuLogger singleton, as info or error by level."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MainMenuTarget

A **class** in `Root.Township`, `Alta.Logging.Targets`.

NLog target named `MainMenuTarget` that sends log lines to the `MainMenuLogger` singleton, as info or error by level.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** `TargetWithLayout`
- **Attributes** `Target`
- **Documented in** [Logging](/mod/game-api/console-and-utilities/logging)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MainMenuTarget()"}</code> | <span className="api-desc">Creates a `MainMenuTarget` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-write" /><code>{"protected override void Write(LogEventInfo logEvent)"}</code> | <span className="api-desc">Sends the rendered message to `MainMenuLogger`: levels up to Warn as info, Error and Fatal (or any exception) as error.</span> |
