---
title: "NullConsole"
description: "Server console that throws away all log output."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NullConsole

A **class** in `Root.Township`, the global namespace.

Server console that throws away all log output.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`ServerConsole`](/mod/game-api/types/global-s/serverconsole)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NullConsole()"}</code> | <span className="api-desc">Creates a `NullConsole` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handlelog" /><code>{"override void HandleLog(string message, LogLevel level)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-shutdown" /><code>{"override void Shutdown()"}</code> | <span className="api-desc">Does nothing.</span> |
