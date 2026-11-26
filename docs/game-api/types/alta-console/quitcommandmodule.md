---
title: "QuitCommandModule"
description: "Console module quit: closes the application."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QuitCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console module `quit`: closes the application. Play mode only.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Attributes** `PlayOnly`, `Module`

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this module. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-quit" /><code>{"private static void Quit()"}</code> | `quit`: calls `Application.Quit`. |

</details>
