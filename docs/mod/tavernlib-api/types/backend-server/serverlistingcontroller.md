---
title: "ServerListingController"
description: "Sends the server to the Community Servers listing every 3 seconds from a background loop, backing off after failures, and removes it when the game quits."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerListingController

A **class** in `TavernLib`, `TavernLib.Backend.Server`.

Sends the server to the Community Servers listing every 3 seconds from a background loop, backing off after failures, and removes it when the game quits. Server; `TavernManager` makes one when `community_listed` is on at start.

- **Listed in** [TavernLib.Backend.Server](/mod/tavernlib-api/types/backend-server)
- **Documented in** [Internals](/mod/tavernlib-api/internals)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerListingController("}<Link to="/mod/tavernlib-api/types/backend-api/tavernmanager">{"TavernManager"}</Link>{" manager)"}</code> | <span className="api-desc">Sets up the HTTP client, starts the heartbeat loop, and closes the listing when the game quits.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-apiclient" /><code>{"private readonly HttpClient _apiClient"}</code> | <span className="api-desc">HTTP client used to post to and delete from the community server listing.</span> |
| <Link id="m-closed" /><code>{"private bool _closed"}</code> | <span className="api-desc">Set once the listing is closing, which ends the heartbeat loop.</span> |
| <Link id="m-manager" /><code>{"private "}<Link to="/mod/tavernlib-api/types/backend-api/tavernmanager">{"TavernManager"}</Link>{" _manager"}</code> | <span className="api-desc">The `TavernManager` that supplies the server and port configs.</span> |
| <Link id="m-interval" /><code>{"private static readonly TimeSpan Interval"}</code> | <span className="api-desc">Time between listing heartbeats when they succeed (3 seconds).</span> |
| <Link id="m-longestwaitseconds" /><code>{"private const double LongestWaitSeconds"}</code> | <span className="api-desc">Longest wait, in seconds, between heartbeats after repeated failures.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-closelisting" /><code>{"void CloseListing()"}</code> | <span className="api-desc">Sends the listing a remove request with the listing token and stops the loop. Waits up to two seconds for it.</span> |
| <Link id="m-openlisting" /><code>{"async Task OpenListing()"}</code> | <span className="api-desc">Sends one heartbeat now, the same as `Ping`.</span> |
| <Link id="m-ping" /><code>{"async Task Ping()"}</code> | <span className="api-desc">Sends one heartbeat now. Throws `HttpRequestException` with the listing's answer if it isn't accepted.</span> |
| <Link id="m-startclosinglisting" /><code>{"bool StartClosingListing()"}</code> | <span className="api-desc">The `Application.wantsToQuit` handler: closes the listing and returns true so the quit goes on.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-heartbeatasync" /><code>{"private async Task HeartbeatAsync()"}</code> | <span className="api-desc">Loop that posts the listing, logs only when the answer changes, and waits longer after each failure.</span> |
| <Link id="m-jsonbody" /><code>{"private static StringContent JsonBody(object payload)"}</code> | <span className="api-desc">Wraps an object as a JSON request body without going through the game's own HTTP helpers.</span> |
| <Link id="m-post" /><code>{"private async Task<string> Post()"}</code> | <span className="api-desc">Posts the current listing payload; returns null on success, otherwise a short description of what went wrong.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ServerListingController`:

<div className="api-used-in">

[`TavernManager.ListingController`](/mod/tavernlib-api/types/backend-api/tavernmanager#m-listingcontroller).

</div>
