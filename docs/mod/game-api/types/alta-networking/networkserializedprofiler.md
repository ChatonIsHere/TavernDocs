---
title: "NetworkSerializedProfiler"
description: "Collects the shared serialize timers of every INetworkSerialized type marked with ProfileNetworkSerializedAttribute, for performance stats."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkSerializedProfiler

A **static class** in `Root.Township`, `Alta.Networking`.

Collects the shared serialize timers of every `INetworkSerialized` type marked with `ProfileNetworkSerializedAttribute`, for performance stats.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimers" /><code>{"static Dictionary<string, "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{"> prepareForWriteTimers"}</code> | Each profiled type's public static `prepareForWriteTimer`, by type name. |
| <Link id="m-serializetimers" /><code>{"static Dictionary<string, "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{"> serializeTimers"}</code> | Each profiled type's public static `serializeTimer`, by type name. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resetalltimers" /><code>{"static void ResetAllTimers()"}</code> | Records and resets every collected timer, plus the `EntitySerializer` prepare and serialize durations. |
