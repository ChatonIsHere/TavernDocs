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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AnalyticsEventData()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-eventtype" /><code>{"string EventType { get; set; }"}</code> | Event name used by the generic event calls. |
| <Link id="m-ipaddress" /><code>{"string IpAddress { get; set; }"}</code> | Sender's IP address, if set. |
| <Link id="m-metadata" /><code>{"Dictionary<string, object> Metadata { get; set; }"}</code> | Key-value data for the event. |
| <Link id="m-oculusidentifier" /><code>{"string OculusIdentifier { get; set; }"}</code> | Oculus id of the user, if any. |
| <Link id="m-source" /><code>{"string Source { get; set; }"}</code> | Where the event came from, used by the old `PostEvent` call. |
| <Link id="m-time" /><code>{"DateTime Time { get; set; }"}</code> | When the event happened. |
| <Link id="m-type" /><code>{"string Type { get; set; }"}</code> | Event type used by the old `PostEvent` call. |
| <Link id="m-useridentifier" /><code>{"int? UserIdentifier { get; set; }"}</code> | Alta user id, if known. |
| <Link id="m-version" /><code>{"string Version { get; set; }"}</code> | Game version that sent the event. |

## Used in

Members of other types that take, return or hold a `AnalyticsEventData`:

[`AnalyticsClient.PostGenericEventAsync`](/game-api/types/assembly-api-client/analyticsclient#m-postgenericeventasync-3), [`IAnalyticsClient.PostGenericEventAsync`](/game-api/types/assembly-api-client/ianalyticsclient#m-postgenericeventasync-3), [`LowLevelApiClient.EnqueueAnalyticsEvent`](/game-api/types/assembly-api-client/lowlevelapiclient#m-enqueueanalyticsevent).
