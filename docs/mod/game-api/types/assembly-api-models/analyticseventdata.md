---
title: "AnalyticsEventData"
description: "One analytics event as sent to the Alta web API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnalyticsEventData

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Shared`.

One analytics event as sent to the Alta web API.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnalyticsEventData()"}</code> | <span className="api-desc">Creates an `AnalyticsEventData` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-eventtype" /><code>{"string EventType { get; set; }"}</code> | <span className="api-desc">Event name used by the generic event calls.</span> |
| <Link id="m-ipaddress" /><code>{"string IpAddress { get; set; }"}</code> | <span className="api-desc">Sender's IP address, if set.</span> |
| <Link id="m-metadata" /><code>{"Dictionary<string, object> Metadata { get; set; }"}</code> | <span className="api-desc">Key-value data for the event.</span> |
| <Link id="m-oculusidentifier" /><code>{"string OculusIdentifier { get; set; }"}</code> | <span className="api-desc">Oculus id of the user, if any.</span> |
| <Link id="m-source" /><code>{"string Source { get; set; }"}</code> | <span className="api-desc">Where the event came from, used by the old `PostEvent` call.</span> |
| <Link id="m-time" /><code>{"DateTime Time { get; set; }"}</code> | <span className="api-desc">When the event happened.</span> |
| <Link id="m-type" /><code>{"string Type { get; set; }"}</code> | <span className="api-desc">Event type used by the old `PostEvent` call.</span> |
| <Link id="m-useridentifier" /><code>{"int? UserIdentifier { get; set; }"}</code> | <span className="api-desc">Alta user id, if known.</span> |
| <Link id="m-version" /><code>{"string Version { get; set; }"}</code> | <span className="api-desc">Game version that sent the event.</span> |

## Used in

Members of other types that take, return or hold a `AnalyticsEventData`:

<div className="api-used-in">

[`AnalyticsClient.PostGenericEventAsync`](/mod/game-api/types/assembly-api-client/analyticsclient#m-postgenericeventasync-3), [`IAnalyticsClient.PostGenericEventAsync`](/mod/game-api/types/assembly-api-client/ianalyticsclient#m-postgenericeventasync-3), [`LowLevelApiClient.EnqueueAnalyticsEvent`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-enqueueanalyticsevent).

</div>
