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
| <Link id="m-ctor" /><code>{"TimeName()"}</code> | <span className="api-desc">Creates a `GameTimeManager.TimeName` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"private string name"}</code> | <span className="api-desc">Backing field for `Name`.</span> |
| <Link id="m-time" /><code>{"private float time"}</code> | <span className="api-desc">Backing field for `Time`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name-2" /><code>{"string Name { get; }"}</code> | <span className="api-desc">The keyword, matched without case.</span> |
| <Link id="m-time-2" /><code>{"float Time { get; }"}</code> | <span className="api-desc">Time of day the keyword rushes to.</span> |

## Used in

Members of other types that take, return or hold a `TimeName`:

<div className="api-used-in">

[`TimeCommandModule.Keywords`](/mod/game-api/types/alta-console/timecommandmodule#m-keywords), [`GameTimeManager.availableKeyWords`](/mod/game-api/types/global-e-h/gametimemanager#m-availablekeywords), [`GameTimeManager.AvailableKeyWords`](/mod/game-api/types/global-e-h/gametimemanager#m-availablekeywords-2).

</div>
