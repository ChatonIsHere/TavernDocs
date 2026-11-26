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

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StatusAPI(int timeOutInSeconds = 15)"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-client" /><code>{"private readonly HttpClient client"}</code> | HTTP client with retries, pointed at the status site. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getstatus" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-client/status">{"Status"}</Link>{">> GetStatus()"}</code> | Gets the list of status notices. Returns an empty list if the request fails. |

## Used in

Members of other types that take, return or hold a `StatusAPI`:

[`HighLevelApiClientFactory.Status`](/game-api/types/assembly-api-client/highlevelapiclientfactory#m-status).
