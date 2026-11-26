---
title: "SelectionCommandModule.MovingModule"
description: "Console submodule select move (alias m): moves the selected entity along world axes and forces a position sync."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SelectionCommandModule.MovingModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console submodule `select move` (alias `m`): moves the selected entity along world axes and forces a position sync.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested in** [`SelectionCommandModule`](/mod/game-api/types/alta-console/selectioncommandmodule)
- **Attributes** `Module`, `Alias`

## Methods

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-back" /><code>{"private static void Back(float amount = 1)"}</code> | <span className="api-desc">`select move back`: moves the selection along world -Z by the amount (default 1).</span> |
| <Link id="m-down" /><code>{"private static void Down(float amount = 1)"}</code> | <span className="api-desc">`select move down`: moves the selection down world Y by the amount (default 1).</span> |
| <Link id="m-exact" /><code>{"private static void Exact(Vector3 position)"}</code> | <span className="api-desc">`select move exact`: sets the selection's world position.</span> |
| <Link id="m-forward" /><code>{"private static void Forward(float amount = 1)"}</code> | <span className="api-desc">`select move forward`: moves the selection along world +Z by the amount.</span> |
| <Link id="m-left" /><code>{"private static void Left(float amount = 1)"}</code> | <span className="api-desc">`select move left`: moves the selection along world -X by the amount.</span> |
| <Link id="m-right" /><code>{"private static void Right(float amount = 1)"}</code> | <span className="api-desc">`select move right`: moves the selection along world +X by the amount (default 1).</span> |
| <Link id="m-up" /><code>{"private static void Up(float amount = 1)"}</code> | <span className="api-desc">`select move up`: moves the selection up world Y by the amount.</span> |

</details>
