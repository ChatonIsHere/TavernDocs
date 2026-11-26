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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** [`UserInfo`](/game-api/types/assembly-api-models/userinfo)
- **Derived types** [`PersonalUserInfoResponse`](/game-api/types/assembly-api-models/personaluserinforesponse)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PublicUserInfoResponse()"}</code> | Creates a `PublicUserInfoResponse` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-issupporter" /><code>{"bool IsSupporter { get; set; }"}</code> | Whether the user is a paying supporter. |
| <Link id="m-statistics" /><code><Link to="/game-api/types/assembly-api-models/userstatistics">{"UserStatistics"}</Link>{" Statistics { get; set; }"}</code> | The user's play statistics. |
