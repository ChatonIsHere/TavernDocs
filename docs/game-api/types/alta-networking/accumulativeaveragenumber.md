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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AccumulativeAverageNumber()"}</code> | Creates an `AccumulativeAverageNumber` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"private "}<Link to="/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" duration"}</code> | The running average the totals are recorded into. |
| <Link id="m-sum" /><code>{"private double sum"}</code> | The total for the current period. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-durationms" /><code>{"float DurationMs { get; }"}</code> | The running average of the recorded totals, as a float (milliseconds by how it is used). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearrecord" /><code>{"void ClearRecord()"}</code> | Resets the running average. |
| <Link id="m-recordandresetcurrentsum" /><code>{"void RecordAndResetCurrentSum()"}</code> | Adds the current total to the average and starts a new total at zero. |
| <Link id="m-recordnumber" /><code>{"void RecordNumber(double number)"}</code> | Adds a number to the current total. |

## Used in

Members of other types that take, return or hold a `AccumulativeAverageNumber`:

[`EntitySerializer.PrepareDuration`](/game-api/types/alta-networking/entityserializer#m-prepareduration), [`EntitySerializer.SerializationDuration`](/game-api/types/alta-networking/entityserializer#m-serializationduration).
