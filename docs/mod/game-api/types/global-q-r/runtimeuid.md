---
title: "RuntimeUid"
description: "A per-launch ID made from the time since 2018-01-01 in 5 second units."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RuntimeUid

A **class** in `Root.Township`, the global namespace.

A per-launch ID made from the time since 2018-01-01 in 5 second units. `GenerationStarter` saves it to tell whether data came from this same run.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RuntimeUid()"}</code> | Creates a `RuntimeUid` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-id" /><code>{"static uint Id { get; }"}</code> | The ID for this process, fixed when the class first loads. |
