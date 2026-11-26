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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** [`PublicUserInfoResponse`](/game-api/types/assembly-api-models/publicuserinforesponse)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PersonalUserInfoResponse()"}</code> | Creates a `PersonalUserInfoResponse` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-email" /><code>{"string Email { get; set; }"}</code> | The user's email address. |
| <Link id="m-firstname" /><code>{"string FirstName { get; set; }"}</code> | The user's first name. |
| <Link id="m-lastname" /><code>{"string LastName { get; set; }"}</code> | The user's last name. |

## Used in

Members of other types that take, return or hold a `PersonalUserInfoResponse`:

[`IUserApiClient.GetPersonalUserInfo`](/game-api/types/assembly-api-client/iuserapiclient#m-getpersonaluserinfo), [`OfflineUserApiClient.GetPersonalUserInfo`](/game-api/types/assembly-api-client/offlineuserapiclient#m-getpersonaluserinfo), [`UserApiClient.GetPersonalUserInfo`](/game-api/types/assembly-api-client/userapiclient#m-getpersonaluserinfo).
