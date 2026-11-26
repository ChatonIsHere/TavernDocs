---
title: "AnalyticsType"
description: "Old analytics record categories (combat hit, teleportation, device stats and so on), each mapped to an endpoint name."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnalyticsType

An **enum** in `Root.Township`, `Alta.Analytics`.

Old analytics record categories (combat hit, teleportation, device stats and so on), each mapped to an endpoint name. `Analytics.SendRecord` is empty in this build.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)

## Values

| Member |
| --- |
| <Link id="m-combathit" /><code>{"CombatHit = 0"}</code> |
| <Link id="m-creaturespopulation" /><code>{"CreaturesPopulation = 4"}</code> |
| <Link id="m-deaths" /><code>{"Deaths = 5"}</code> |
| <Link id="m-devicestats" /><code>{"DeviceStats = 2"}</code> |
| <Link id="m-teleportation" /><code>{"Teleportation = 1"}</code> |
| <Link id="m-test" /><code>{"Test = 3"}</code> |

## Used in

Members of other types that take, return or hold a `AnalyticsType`:

[`Analytics.GetAPIEndpoint`](/mod/game-api/types/alta-console/analytics#m-getapiendpoint), [`Analytics.SendRecord`](/mod/game-api/types/alta-console/analytics#m-sendrecord).
