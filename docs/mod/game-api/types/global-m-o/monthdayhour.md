---
title: "MonthDayHour"
description: "A point in the year (month, day, hour) with no year, used for seasonal or dated events."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MonthDayHour

A **struct** in `Root.Township`, the global namespace.

A point in the year (month, day, hour) with no year, used for seasonal or dated events. Compares in month, day, hour order.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** `IComparable<MonthDayHour>`, `IEquatable<MonthDayHour>`
- **Derived types** [`MonthDayHour`](/mod/game-api/types/global-m-o/monthdayhour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MonthDayHour("}<Link to="/mod/game-api/types/global-m-o/month">{"Month"}</Link>{" month, int day, int hour)"}</code> | Creates a `MonthDayHour` from `month`, `day` and `hour`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"private static "}<Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" current"}</code> | Unused static field. The `Current` property builds a fresh value from UTC now instead. |
| <Link id="m-day" /><code>{"private int day"}</code> | Day of the month, 1 to 32 in the inspector. |
| <Link id="m-hour" /><code>{"private int hour"}</code> | Hour of the day, 0 to 23. |
| <Link id="m-month" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/month">{"Month"}</Link>{" month"}</code> | The month. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-current-2" /><code>{"static "}<Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" Current { get; }"}</code> | The current UTC month, day and hour. |
| <Link id="m-day-2" /><code>{"int Day { get; }"}</code> | Day of the month. |
| <Link id="m-hour-2" /><code>{"int Hour { get; }"}</code> | Hour of the day, 0 to 23. |
| <Link id="m-month-2" /><code><Link to="/mod/game-api/types/global-m-o/month">{"Month"}</Link>{" "}<Link to="/mod/game-api/types/global-m-o/month">{"Month"}</Link>{" { get; }"}</code> | The month. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-compareto" /><code>{"int CompareTo("}<Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" other)"}</code> | Orders by month, then day, then hour. |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | True if month, day and hour match. |
| <Link id="m-equals-2" /><code>{"bool Equals("}<Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" other)"}</code> | True if month, day and hour match. |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | Hash from month, day and hour. |
| <Link id="m-isbetween" /><code>{"bool IsBetween("}<Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" start, "}<Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" end)"}</code> | True if strictly after start and before end. Handles ranges that wrap past the year end. |
| <Link id="m-op-equality" /><code>{"static bool op_Equality("}<Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" a, "}<Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" b)"}</code> | Same month, day and hour. |
| <Link id="m-op-greaterthan" /><code>{"static bool op_GreaterThan("}<Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" a, "}<Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" b)"}</code> | Later in the year. |
| <Link id="m-op-inequality" /><code>{"static bool op_Inequality("}<Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" a, "}<Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" b)"}</code> | Different month, day or hour. |
| <Link id="m-op-lessthan" /><code>{"static bool op_LessThan("}<Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" a, "}<Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" b)"}</code> | Earlier in the year. |

## Used in

Members of other types that take, return or hold a `MonthDayHour`:

[`Festivity.end`](/mod/game-api/types/global-e-h/festivity#m-end), [`Festivity.End`](/mod/game-api/types/global-e-h/festivity#m-end-2), [`Festivity.start`](/mod/game-api/types/global-e-h/festivity#m-start), [`Festivity.Start`](/mod/game-api/types/global-e-h/festivity#m-start-2).
