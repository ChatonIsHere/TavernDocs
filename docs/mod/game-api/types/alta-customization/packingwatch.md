---
title: "PackingWatch"
description: "Shared stopwatch that lets cosmetic packing yield a frame on Android once more than 2 ms have passed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PackingWatch

A **static class** in `Root.Township`, `Alta.Customization`.

Shared stopwatch that lets cosmetic packing yield a frame on Android once more than 2 ms have passed.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-watch" /><code>{"private static Stopwatch watch"}</code> | <span className="api-desc">The stopwatch.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-measure" /><code>{"static bool Measure()"}</code> | <span className="api-desc">True when more than 2 ms have passed since the last restart.</span> |
| <Link id="m-restart" /><code>{"static void Restart()"}</code> | <span className="api-desc">Restarts the stopwatch.</span> |
| <Link id="m-stop" /><code>{"static void Stop()"}</code> | <span className="api-desc">Stops the stopwatch.</span> |
