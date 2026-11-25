---
title: "WindowsServerConsole"
description: "class WindowsServerConsole in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WindowsServerConsole

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`ServerConsole`](/game-api/types/global-s/serverconsole)
- **Nested types** [`ConsoleLogEntry`](/game-api/types/global-t-x/windowsserverconsole-consolelogentry)
- **Documented in** [Remote console](/game-api/console-and-utilities/remote-console)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WindowsServerConsole()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-console" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/consolewindow">{"ConsoleWindow"}</Link>{" console"}</code> |  |
| <Link id="m-consolethread" /><code>{"private Thread consoleThread"}</code> |  |
| <Link id="m-entryqueue" /><code>{"private ConcurrentQueue<"}<Link to="/game-api/types/global-t-x/windowsserverconsole-consolelogentry">{"WindowsServerConsole.ConsoleLogEntry"}</Link>{"> entryQueue"}</code> |  |
| <Link id="m-input" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/consoleinput">{"ConsoleInput"}</Link>{" input"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handlelog" /><code>{"override void HandleLog(string message, LogLevel level)"}</code> |  |
| <Link id="m-shutdown" /><code>{"override void Shutdown()"}</code> |  |
| <Link id="m-changeconsoletitle" /><code>{"private void ChangeConsoleTitle()"}</code> |  |
| <Link id="m-consolethread-2" /><code>{"private void ConsoleThread()"}</code> |  |
