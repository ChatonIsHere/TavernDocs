---
title: "CommandLineArgsLogger"
description: "Logs the command line arguments at startup, to both the Unity log and NLog."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommandLineArgsLogger

A **class** in `Root.Township`, `Alta.Logging`.

Logs the command line arguments at startup, to both the Unity log and NLog.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CommandLineArgsLogger()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | Logger for this class. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Logs the raw arguments, then the game's parsed arguments. |
| <Link id="m-logaltacommandlineargs" /><code>{"private void LogAltaCommandLineArgs()"}</code> | Logs `CommandLineArguments.AllArguments`, though the message still says raw. |
| <Link id="m-lograwcommandlineargs" /><code>{"private void LogRawCommandLineArgs()"}</code> | Logs the process's raw command line arguments. |

</details>
