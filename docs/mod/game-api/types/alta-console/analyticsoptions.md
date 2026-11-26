---
title: "AnalyticsOptions"
description: "Obsolete flags for which extra fields (timestamp, user ID, server ID, game time) the old analytics system adds to events."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnalyticsOptions

An **enum** in `Root.Township`, `Alta.Analytics`.

Obsolete flags for which extra fields (timestamp, user ID, server ID, game time) the old analytics system adds to events.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Attributes** `Flags`, `Obsolete`

## Values

| Member |
| --- |
| <Link id="m-gametimestamp" /><code>{"GameTimeStamp = 8"}</code> |
| <Link id="m-none" /><code>{"None = 0"}</code> |
| <Link id="m-notimestamp" /><code>{"NoTimestamp = 1"}</code> |
| <Link id="m-serverid" /><code>{"ServerId = 4"}</code> |
| <Link id="m-userid" /><code>{"UserId = 2"}</code> |

## Used in

Members of other types that take, return or hold a `AnalyticsOptions`:

[`Analytics.SendRecord`](/mod/game-api/types/alta-console/analytics#m-sendrecord), [`AnalyticsRecordForAllAttribute.AnalyticsRecordForAllAttribute`](/mod/game-api/types/alta-console/analyticsrecordforallattribute#m-ctor), [`AnalyticsRecordForAllAttribute.Options`](/mod/game-api/types/alta-console/analyticsrecordforallattribute#m-options), [`AnalyticsTools.CreateSerializationFunction`](/mod/game-api/types/alta-console/analyticstools#m-createserializationfunction), [`AnalyticsTools.CreateSerializationHandler`](/mod/game-api/types/alta-console/analyticstools#m-createserializationhandler), [`AnalyticsTools.Serialize`](/mod/game-api/types/alta-console/analyticstools#m-serialize).
