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

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Attributes** `Extension`

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-nullcontextmessage" /><code>{"private const string NullContextMessage"}</code> | <span className="api-desc">Text returned for a null context.</span> |
| <Link id="m-sb" /><code>{"private static StringBuilder sb"}</code> | <span className="api-desc">Shared string builder, used under `threadLock`.</span> |
| <Link id="m-threadlock" /><code>{"private static readonly object threadLock"}</code> | <span className="api-desc">Lock around the shared string builder.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getdebuginfo" /><code>{"static string GetDebugInfo("}<Link to="/mod/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context)"}</code> | <span className="api-desc">Text with the context's calling user, raw command, group permissions and creation time. Thread safe.</span> |
