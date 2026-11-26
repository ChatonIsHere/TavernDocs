---
title: "CommandContextExtensions"
description: "Debug helper for CommandContext."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommandContextExtensions

A **static class** in `Root.Township`, `Alta.Console`.

Debug helper for `CommandContext`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Attributes** `Extension`

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-nullcontextmessage" /><code>{"private const string NullContextMessage"}</code> | Text returned for a null context. |
| <Link id="m-sb" /><code>{"private static StringBuilder sb"}</code> | Shared string builder, used under `threadLock`. |
| <Link id="m-threadlock" /><code>{"private static readonly object threadLock"}</code> | Lock around the shared string builder. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getdebuginfo" /><code>{"static string GetDebugInfo("}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context)"}</code> | Text with the context's calling user, raw command, group permissions and creation time. Thread safe. |
