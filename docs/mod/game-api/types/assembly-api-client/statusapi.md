---
title: "StatusAPI"
description: "Fetches service status notices from Alta's Strapi site (strapi.townshiptale.dev)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatusAPI

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Fetches service status notices from Alta's Strapi site (strapi.townshiptale.dev).

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatusAPI(int timeOutInSeconds = 15)"}</code> | <span className="api-desc">Creates a `StatusAPI` from `timeOutInSeconds`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-client" /><code>{"private readonly HttpClient client"}</code> | <span className="api-desc">HTTP client with retries, pointed at the status site.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getstatus" /><code>{"async Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-client/status">{"Status"}</Link>{">> GetStatus()"}</code> | <span className="api-desc">Gets the list of status notices. Returns an empty list if the request fails.</span> |

## Used in

Members of other types that take, return or hold a `StatusAPI`:

<div className="api-used-in">

[`HighLevelApiClientFactory.Status`](/mod/game-api/types/assembly-api-client/highlevelapiclientfactory#m-status).

</div>
