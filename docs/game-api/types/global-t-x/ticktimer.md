---
title: "TickTimer"
description: "class TickTimer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TickTimer

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TickTimer(TimeSpan interval)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-entry" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry"}</code> |
| <Link id="m-interval" /><code>{"private TimeSpan interval"}</code> |

</details>

## Events

| Member |
| --- |
| <Link id="m-ticked" /><code>{"event Action Ticked"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-load" /><code>{"int Load(TimeSpan time)"}</code> |
| <Link id="m-save" /><code>{"TimeSpan Save()"}</code> |
| <Link id="m-start" /><code>{"void Start()"}</code> |
| <Link id="m-stop" /><code>{"void Stop()"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-tick" /><code>{"private void Tick()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `TickTimer`:

[`BasicPopulation.Timer`](/game-api/types/alta-world-generation/basicpopulation#m-timer).
