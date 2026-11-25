---
title: "ServerListingController"
description: "A class in TavernLib, TavernLib.Backend.Server."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerListingController

A **class** in `TavernLib`, `TavernLib.Backend.Server`.

A **class** in `TavernLib`, `TavernLib.Backend.Server`.

- **Listed in** [TavernLib.Backend.Server](/tavernlib-api/types/backend-server)
- **Documented in** [ServerListingController](/tavernlib-api/types/backend-server/serverlistingcontroller), [Internals](/tavernlib-api/internals)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerListingController("}<Link to="/tavernlib-api/types/backend-api/tavernmanager">{"TavernManager"}</Link>{" manager)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-apiclient" /><code>{"private readonly HttpClient _apiClient"}</code> |  |
| <Link id="m-closed" /><code>{"private bool _closed"}</code> |  |
| <Link id="m-manager" /><code>{"private "}<Link to="/tavernlib-api/types/backend-api/tavernmanager">{"TavernManager"}</Link>{" _manager"}</code> |  |
| <Link id="m-interval" /><code>{"private static readonly TimeSpan Interval"}</code> |  |
| <Link id="m-longestwaitseconds" /><code>{"private const double LongestWaitSeconds"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-closelisting" /><code>{"void CloseListing()"}</code> |  |
| <Link id="m-openlisting" /><code>{"async Task OpenListing()"}</code> |  |
| <Link id="m-ping" /><code>{"async Task Ping()"}</code> |  |
| <Link id="m-startclosinglisting" /><code>{"bool StartClosingListing()"}</code> |  |
| <Link id="m-heartbeatasync" /><code>{"private async Task HeartbeatAsync()"}</code> |  |
| <Link id="m-jsonbody" /><code>{"private static StringContent JsonBody(object payload)"}</code> |  |
| <Link id="m-post" /><code>{"private async Task<string> Post()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ServerListingController`:

[`TavernManager.ListingController`](/tavernlib-api/types/backend-api/tavernmanager#m-listingcontroller).
