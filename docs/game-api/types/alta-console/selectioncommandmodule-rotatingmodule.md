---
title: "SelectionCommandModule.RotatingModule"
description: "Console submodule select rotate (alias r): rotates the selected entity and forces a position sync."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SelectionCommandModule.RotatingModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console submodule `select rotate` (alias `r`): rotates the selected entity and forces a position sync.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested in** [`SelectionCommandModule`](/game-api/types/alta-console/selectioncommandmodule)
- **Attributes** `Module`, `Alias`

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-exact" /><code>{"private static void Exact(Vector3 rotation)"}</code> | `select rotate exact`: sets the selection's world Euler angles. |
| <Link id="m-pitch" /><code>{"private static void Pitch(float degrees = 90)"}</code> | `select rotate pitch`: rotates the selection about its local X axis (default 90 degrees). |
| <Link id="m-roll" /><code>{"private static void Roll(float degrees = 90)"}</code> | `select rotate roll`: rotates the selection about its local Z axis (default 90 degrees). |
| <Link id="m-yaw" /><code>{"private static void Yaw(float degrees = 90)"}</code> | `select rotate yaw`: rotates the selection about its local Y axis (default 90 degrees). |

</details>
