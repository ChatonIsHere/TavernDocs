---
title: "AccumulativeAverageNumber"
description: "Profiling helper: adds up numbers over one period, then records the total into a running average."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AccumulativeAverageNumber

A **class** in `Root.Township`, `Alta.Networking`.

Profiling helper: adds up numbers over one period, then records the total into a running average. `EntitySerializer` uses two of these for prepare and serialization time.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AccumulativeAverageNumber()"}</code> | <span className="api-desc">Creates an `AccumulativeAverageNumber` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" duration"}</code> | <span className="api-desc">The running average the totals are recorded into.</span> |
| <Link id="m-sum" /><code>{"private double sum"}</code> | <span className="api-desc">The total for the current period.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-durationms" /><code>{"float DurationMs { get; }"}</code> | <span className="api-desc">The running average of the recorded totals, as a float (milliseconds by how it is used).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearrecord" /><code>{"void ClearRecord()"}</code> | <span className="api-desc">Resets the running average.</span> |
| <Link id="m-recordandresetcurrentsum" /><code>{"void RecordAndResetCurrentSum()"}</code> | <span className="api-desc">Adds the current total to the average and starts a new total at zero.</span> |
| <Link id="m-recordnumber" /><code>{"void RecordNumber(double number)"}</code> | <span className="api-desc">Adds a number to the current total.</span> |

## Used in

Members of other types that take, return or hold a `AccumulativeAverageNumber`:

<div className="api-used-in">

[`EntitySerializer.PrepareDuration`](/mod/game-api/types/alta-networking/entityserializer#m-prepareduration), [`EntitySerializer.SerializationDuration`](/mod/game-api/types/alta-networking/entityserializer#m-serializationduration).

</div>
