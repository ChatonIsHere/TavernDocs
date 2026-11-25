---
title: "ServerConsole"
description: "abstract class ServerConsole in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerConsole

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Derived types** [`LinuxServerConsole`](/game-api/types/global-i-l/linuxserverconsole), [`NullConsole`](/game-api/types/global-m-o/nullconsole), [`WindowsServerConsole`](/game-api/types/global-t-x/windowsserverconsole)
- **Documented in** [Logging](/game-api/console-and-utilities/logging)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerConsole()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-inputqueue" /><code>{"private ConcurrentQueue<string> inputQueue"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-textentered" /><code>{"event Action<string> TextEntered"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handlelog" /><code>{"abstract void HandleLog(string message, LogLevel level)"}</code> |  |
| <Link id="m-processinputqueue" /><code>{"void ProcessInputQueue()"}</code> |  |
| <Link id="m-shutdown" /><code>{"abstract void Shutdown()"}</code> |  |
| <Link id="m-ontextentered" /><code>{"protected void OnTextEntered(string command)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ServerConsole`:

[`ServerConsoleManager.console`](/game-api/types/global-s/serverconsolemanager#m-console).
