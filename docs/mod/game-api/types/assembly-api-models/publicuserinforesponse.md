---
title: "PublicUserInfoResponse"
description: "Public user info plus statistics and supporter status."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PublicUserInfoResponse

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Public user info plus statistics and supporter status.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** [`UserInfo`](/mod/game-api/types/assembly-api-models/userinfo)
- **Derived types** [`PersonalUserInfoResponse`](/mod/game-api/types/assembly-api-models/personaluserinforesponse)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PublicUserInfoResponse()"}</code> | <span className="api-desc">Creates a `PublicUserInfoResponse` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-issupporter" /><code>{"bool IsSupporter { get; set; }"}</code> | <span className="api-desc">Whether the user is a paying supporter.</span> |
| <Link id="m-statistics" /><code><Link to="/mod/game-api/types/assembly-api-models/userstatistics">{"UserStatistics"}</Link>{" Statistics { get; set; }"}</code> | <span className="api-desc">The user's play statistics.</span> |
