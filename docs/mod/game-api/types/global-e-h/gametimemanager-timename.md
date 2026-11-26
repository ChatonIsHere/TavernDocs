---
title: "GameTimeManager.TimeName"
description: "A named time of day, such as a keyword for the time command."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameTimeManager.TimeName

A **class** in `Root.Township`, the global namespace.

A named time of day, such as a keyword for the time command. `GameTimeManager.UpdateTimeByKeyWord` rushes to its time.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Nested in** [`GameTimeManager`](/mod/game-api/types/global-e-h/gametimemanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimeName()"}</code> | Creates a `GameTimeManager.TimeName` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"private string name"}</code> | Backing field for `Name`. |
| <Link id="m-time" /><code>{"private float time"}</code> | Backing field for `Time`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name-2" /><code>{"string Name { get; }"}</code> | The keyword, matched without case. |
| <Link id="m-time-2" /><code>{"float Time { get; }"}</code> | Time of day the keyword rushes to. |

## Used in

Members of other types that take, return or hold a `TimeName`:

[`TimeCommandModule.Keywords`](/mod/game-api/types/alta-console/timecommandmodule#m-keywords), [`GameTimeManager.availableKeyWords`](/mod/game-api/types/global-e-h/gametimemanager#m-availablekeywords), [`GameTimeManager.AvailableKeyWords`](/mod/game-api/types/global-e-h/gametimemanager#m-availablekeywords-2).
