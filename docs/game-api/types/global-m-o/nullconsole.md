---
title: "NullConsole"
description: "Server console that throws away all log output."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NullConsole

A **class** in `Root.Township`, no namespace.

Server console that throws away all log output.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`ServerConsole`](/game-api/types/global-s/serverconsole)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NullConsole()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handlelog" /><code>{"override void HandleLog(string message, LogLevel level)"}</code> | Does nothing. |
| <Link id="m-shutdown" /><code>{"override void Shutdown()"}</code> | Does nothing. |
