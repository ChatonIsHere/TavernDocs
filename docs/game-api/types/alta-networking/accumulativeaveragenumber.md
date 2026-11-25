---
title: "AccumulativeAverageNumber"
description: "class AccumulativeAverageNumber in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AccumulativeAverageNumber

A **class** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AccumulativeAverageNumber()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-duration" /><code>{"private "}<Link to="/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" duration"}</code> |
| <Link id="m-sum" /><code>{"private double sum"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-durationms" /><code>{"float DurationMs { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-clearrecord" /><code>{"void ClearRecord()"}</code> |
| <Link id="m-recordandresetcurrentsum" /><code>{"void RecordAndResetCurrentSum()"}</code> |
| <Link id="m-recordnumber" /><code>{"void RecordNumber(double number)"}</code> |

## Used in

Members of other types that take, return or hold a `AccumulativeAverageNumber`:

[`EntitySerializer.PrepareDuration`](/game-api/types/alta-networking/entityserializer#m-prepareduration), [`EntitySerializer.SerializationDuration`](/game-api/types/alta-networking/entityserializer#m-serializationduration).
