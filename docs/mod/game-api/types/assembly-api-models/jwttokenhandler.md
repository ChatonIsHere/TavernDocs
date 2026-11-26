---
title: "JwtTokenHandler"
description: "Turns a JwtSecurityToken back into its encoded string."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JwtTokenHandler

A **static class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Utility`.

Turns a `JwtSecurityToken` back into its encoded string.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Attributes** `Extension`

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code>{"private static readonly JwtSecurityTokenHandler Handler"}</code> | Shared token handler used to encode signed tokens. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-write" /><code>{"static string Write(JwtSecurityToken token)"}</code> | Returns the encoded token. Unsigned tokens give their `raw` claim, or their raw data, so parsed tokens round-trip unchanged. |
