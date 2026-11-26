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
| <Link id="m-ctor" /><code>{"MonthDayHour("}<Link to="/mod/game-api/types/global-m-o/month">{"Month"}</Link>{" month, int day, int hour)"}</code> | <span className="api-desc">Creates a `MonthDayHour` from `month`, `day` and `hour`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"private static "}<Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" current"}</code> | <span className="api-desc">Unused static field. The `Current` property builds a fresh value from UTC now instead.</span> |
| <Link id="m-day" /><code>{"private int day"}</code> | <span className="api-desc">Day of the month, 1 to 32 in the inspector.</span> |
| <Link id="m-hour" /><code>{"private int hour"}</code> | <span className="api-desc">Hour of the day, 0 to 23.</span> |
| <Link id="m-month" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/month">{"Month"}</Link>{" month"}</code> | <span className="api-desc">The month.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-current-2" /><code>{"static "}<Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" Current { get; }"}</code> | <span className="api-desc">The current UTC month, day and hour.</span> |
| <Link id="m-day-2" /><code>{"int Day { get; }"}</code> | <span className="api-desc">Day of the month.</span> |
| <Link id="m-hour-2" /><code>{"int Hour { get; }"}</code> | <span className="api-desc">Hour of the day, 0 to 23.</span> |
| <Link id="m-month-2" /><code><Link to="/mod/game-api/types/global-m-o/month">{"Month"}</Link>{" "}<Link to="/mod/game-api/types/global-m-o/month">{"Month"}</Link>{" { get; }"}</code> | <span className="api-desc">The month.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-compareto" /><code>{"int CompareTo("}<Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" other)"}</code> | <span className="api-desc">Orders by month, then day, then hour.</span> |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | <span className="api-desc">True if month, day and hour match.</span> |
| <Link id="m-equals-2" /><code>{"bool Equals("}<Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" other)"}</code> | <span className="api-desc">True if month, day and hour match.</span> |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | <span className="api-desc">Hash from month, day and hour.</span> |
| <Link id="m-isbetween" /><code>{"bool IsBetween("}<Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" start, "}<Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" end)"}</code> | <span className="api-desc">True if strictly after start and before end. Handles ranges that wrap past the year end.</span> |
| <Link id="m-op-equality" /><code>{"static bool op_Equality("}<Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" a, "}<Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" b)"}</code> | <span className="api-desc">Same month, day and hour.</span> |
| <Link id="m-op-greaterthan" /><code>{"static bool op_GreaterThan("}<Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" a, "}<Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" b)"}</code> | <span className="api-desc">Later in the year.</span> |
| <Link id="m-op-inequality" /><code>{"static bool op_Inequality("}<Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" a, "}<Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" b)"}</code> | <span className="api-desc">Different month, day or hour.</span> |
| <Link id="m-op-lessthan" /><code>{"static bool op_LessThan("}<Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" a, "}<Link to="/mod/game-api/types/global-m-o/monthdayhour">{"MonthDayHour"}</Link>{" b)"}</code> | <span className="api-desc">Earlier in the year.</span> |

## Used in

Members of other types that take, return or hold a `MonthDayHour`:

<div className="api-used-in">

[`Festivity.end`](/mod/game-api/types/global-e-h/festivity#m-end), [`Festivity.End`](/mod/game-api/types/global-e-h/festivity#m-end-2), [`Festivity.start`](/mod/game-api/types/global-e-h/festivity#m-start), [`Festivity.Start`](/mod/game-api/types/global-e-h/festivity#m-start-2).

</div>
