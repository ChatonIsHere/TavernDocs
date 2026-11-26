---
title: "TrialCommandModule"
description: "Console module trial: lists, advances and resets active combat trials."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TrialCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console module `trial`: lists, advances and resets active combat trials. Server and play mode only.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Attributes** `PlayOnly`, `ServerOnly`, `Module`

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-completephase" /><code>{"private static void CompletePhase(string key)"}</code> | <span className="api-desc">`trial progress`: forces the trial with the key on to its next phase.</span> |
| <Link id="m-list" /><code>{"private static IEnumerable<string> List()"}</code> | <span className="api-desc">`trial list`: lists active trial keys.</span> |
| <Link id="m-players" /><code>{"private static IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> Players(string key)"}</code> | <span className="api-desc">`trial players`: lists the participants of a trial.</span> |
| <Link id="m-reset" /><code>{"private static void Reset(string key)"}</code> | <span className="api-desc">`trial reset`: force resets a trial's state.</span> |

</details>
