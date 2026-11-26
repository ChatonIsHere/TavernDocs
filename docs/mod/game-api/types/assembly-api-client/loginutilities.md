---
title: "LoginUtilities"
description: "Hashing helper used when logging in: the API takes password hashes, not passwords."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoginUtilities

A **static class** in `Alta.Api.Client`, `Alta.Api.Client.Utility`.

Hashing helper used when logging in: the API takes password hashes, not passwords.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-sha512" /><code>{"private static readonly SHA512 Sha512"}</code> | <span className="api-desc">Shared SHA-512 instance used by `HashString`. Not thread safe.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-hashstring" /><code>{"static string HashString(string text)"}</code> | <span className="api-desc">Returns the SHA-512 of the UTF-8 text as a lowercase hex string.</span> |
