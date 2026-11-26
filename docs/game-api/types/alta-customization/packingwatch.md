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

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-watch" /><code>{"private static Stopwatch watch"}</code> | The stopwatch. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-measure" /><code>{"static bool Measure()"}</code> | True when more than 2 ms have passed since the last restart. |
| <Link id="m-restart" /><code>{"static void Restart()"}</code> | Restarts the stopwatch. |
| <Link id="m-stop" /><code>{"static void Stop()"}</code> | Stops the stopwatch. |
