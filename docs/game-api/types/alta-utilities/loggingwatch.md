---
title: "LoggingWatch"
description: "Stopwatch that logs how long a step took, at debug, warn or error level."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoggingWatch

A **class** in `Root.Township`, `Alta.Utilities`.

Stopwatch that logs how long a step took, at debug, warn or error level.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LoggingWatch()"}</code> | Creates a `LoggingWatch` from `errorLevel`. |
| <Link id="m-ctor-2" /><code>{"LoggingWatch(int errorLevel)"}</code> | Creates a `LoggingWatch` from `errorLevel`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-errorlevel" /><code>{"private int errorLevel"}</code> | Log level: 0 is debug, 1 is warn, anything else is error. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |
| <Link id="m-watch" /><code>{"private Stopwatch watch"}</code> | The underlying `Stopwatch`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-measure" /><code>{"void Measure(string name)"}</code> | Stops the watch and logs that the named step took so many milliseconds, at the chosen level. |
| <Link id="m-start" /><code>{"void Start()"}</code> | Restarts the watch from zero. |
