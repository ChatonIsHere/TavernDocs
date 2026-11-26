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
- **Documented in** [ServerListingController](/mod/tavernlib-api/types/backend-server/serverlistingcontroller), [Internals](/mod/tavernlib-api/internals)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerListingController("}<Link to="/mod/tavernlib-api/types/backend-api/tavernmanager">{"TavernManager"}</Link>{" manager)"}</code> | Sets up the HTTP client, starts the heartbeat loop, and closes the listing when the game quits. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-apiclient" /><code>{"private readonly HttpClient _apiClient"}</code> | HTTP client used to post to and delete from the community server listing. |
| <Link id="m-closed" /><code>{"private bool _closed"}</code> | Set once the listing is closing, which ends the heartbeat loop. |
| <Link id="m-manager" /><code>{"private "}<Link to="/mod/tavernlib-api/types/backend-api/tavernmanager">{"TavernManager"}</Link>{" _manager"}</code> | The `TavernManager` that supplies the server and port configs. |
| <Link id="m-interval" /><code>{"private static readonly TimeSpan Interval"}</code> | Time between listing heartbeats when they succeed (3 seconds). |
| <Link id="m-longestwaitseconds" /><code>{"private const double LongestWaitSeconds"}</code> | Longest wait, in seconds, between heartbeats after repeated failures. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-closelisting" /><code>{"void CloseListing()"}</code> | Sends the listing a remove request with the listing token and stops the loop. Waits up to two seconds for it. |
| <Link id="m-openlisting" /><code>{"async Task OpenListing()"}</code> | Sends one heartbeat now, the same as `Ping`. |
| <Link id="m-ping" /><code>{"async Task Ping()"}</code> | Sends one heartbeat now. Throws `HttpRequestException` with the listing's answer if it isn't accepted. |
| <Link id="m-startclosinglisting" /><code>{"bool StartClosingListing()"}</code> | The `Application.wantsToQuit` handler: closes the listing and returns true so the quit goes on. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-heartbeatasync" /><code>{"private async Task HeartbeatAsync()"}</code> | Loop that posts the listing, logs only when the answer changes, and waits longer after each failure. |
| <Link id="m-jsonbody" /><code>{"private static StringContent JsonBody(object payload)"}</code> | Wraps an object as a JSON request body without going through the game's own HTTP helpers. |
| <Link id="m-post" /><code>{"private async Task<string> Post()"}</code> | Posts the current listing payload; returns null on success, otherwise a short description of what went wrong. |

</details>

## Used in

Members of other types that take, return or hold a `ServerListingController`:

[`TavernManager.ListingController`](/mod/tavernlib-api/types/backend-api/tavernmanager#m-listingcontroller).
