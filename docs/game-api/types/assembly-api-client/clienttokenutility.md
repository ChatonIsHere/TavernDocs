---
title: "ClientTokenUtility"
description: "Helper for checking JWT tokens on the client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientTokenUtility

A **static class** in `Alta.Api.Client`, `Alta.Api.Client.Utility`.

Helper for checking JWT tokens on the client.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-istokenexpired" /><code>{"static bool IsTokenExpired(string tokenString)"}</code> | Parses a JWT and returns true if its expiry time is already past (UTC). |
