---
title: "PersonalUserInfoResponse"
description: "A user's public info plus their private name and email, from the Alta web API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PersonalUserInfoResponse

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

A user's public info plus their private name and email, from the Alta web API.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** [`PublicUserInfoResponse`](/mod/game-api/types/assembly-api-models/publicuserinforesponse)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PersonalUserInfoResponse()"}</code> | <span className="api-desc">Creates a `PersonalUserInfoResponse` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-email" /><code>{"string Email { get; set; }"}</code> | <span className="api-desc">The user's email address.</span> |
| <Link id="m-firstname" /><code>{"string FirstName { get; set; }"}</code> | <span className="api-desc">The user's first name.</span> |
| <Link id="m-lastname" /><code>{"string LastName { get; set; }"}</code> | <span className="api-desc">The user's last name.</span> |

## Used in

Members of other types that take, return or hold a `PersonalUserInfoResponse`:

<div className="api-used-in">

[`IUserApiClient.GetPersonalUserInfo`](/mod/game-api/types/assembly-api-client/iuserapiclient#m-getpersonaluserinfo), [`OfflineUserApiClient.GetPersonalUserInfo`](/mod/game-api/types/assembly-api-client/offlineuserapiclient#m-getpersonaluserinfo), [`UserApiClient.GetPersonalUserInfo`](/mod/game-api/types/assembly-api-client/userapiclient#m-getpersonaluserinfo).

</div>
