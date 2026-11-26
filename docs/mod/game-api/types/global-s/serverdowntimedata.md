---
title: "ServerDowntimeData"
description: "A date and time split into fields, probably for a planned server downtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerDowntimeData

A **class** in `Root.Township`, the global namespace.

A date and time split into fields, probably for a planned server downtime. Not used elsewhere in this build.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerDowntimeData()"}</code> | Creates a `ServerDowntimeData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-day" /><code>{"int day"}</code> | Day of the month. |
| <Link id="m-hour" /><code>{"int hour"}</code> | Hour. |
| <Link id="m-minute" /><code>{"int minute"}</code> | Minute. |
| <Link id="m-month" /><code>{"int month"}</code> | Month. |
| <Link id="m-second" /><code>{"int second"}</code> | Second. |
| <Link id="m-year" /><code>{"int year"}</code> | Year. |

## Used in

Members of other types that take, return or hold a `ServerDowntimeData`:

[`TimeManagerSaveDataOld1.downtime`](/mod/game-api/types/global-t-x/timemanagersavedataold1#m-downtime), [`TimeManagerSaveDataOld2.downtime`](/mod/game-api/types/global-t-x/timemanagersavedataold2#m-downtime).
