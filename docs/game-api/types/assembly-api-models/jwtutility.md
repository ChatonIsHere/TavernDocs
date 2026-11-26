---
title: "JWTUtility"
description: "Builds a JwtSecurityToken from a raw token string without checking its signature."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JWTUtility

A **static class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Converters`.

Builds a `JwtSecurityToken` from a raw token string without checking its signature.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createfromstring" /><code>{"static JwtSecurityToken CreateFromString(string rawData, bool includeRawData = false)"}</code> | Decodes the token's payload into claims (array values become one claim each). Optionally adds the raw token as a `raw` claim. No signature check. |
