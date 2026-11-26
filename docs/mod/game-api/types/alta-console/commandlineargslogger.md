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
| <Link id="m-ctor" /><code>{"CommandLineArgsLogger()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Logs the raw arguments, then the game's parsed arguments.</span> |
| <Link id="m-logaltacommandlineargs" /><code>{"private void LogAltaCommandLineArgs()"}</code> | <span className="api-desc">Logs `CommandLineArguments.AllArguments`, though the message still says raw.</span> |
| <Link id="m-lograwcommandlineargs" /><code>{"private void LogRawCommandLineArgs()"}</code> | <span className="api-desc">Logs the process's raw command line arguments.</span> |

</details>
