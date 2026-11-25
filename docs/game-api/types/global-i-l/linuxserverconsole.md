---
title: "LinuxServerConsole"
description: "class LinuxServerConsole in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LinuxServerConsole

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`ServerConsole`](/game-api/types/global-s/serverconsole)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LinuxServerConsole()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isalive" /><code>{"private bool isAlive"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handlelog" /><code>{"override void HandleLog(string message, LogLevel level)"}</code> |  |
| <Link id="m-shutdown" /><code>{"override void Shutdown()"}</code> |  |
| <Link id="m-handleinteruptsignal" /><code>{"private void HandleInteruptSignal(object sender, ConsoleCancelEventArgs e)"}</code> |  |
| <Link id="m-handleterminatesignal" /><code>{"private void HandleTerminateSignal(object sender, EventArgs e)"}</code> |  |
| <Link id="m-runconsole" /><code>{"private void RunConsole()"}</code> |  |
