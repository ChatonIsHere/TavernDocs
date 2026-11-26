---
title: "OculusFriendInfo"
description: "A friendship returned for an Oculus friends list, from LowLevelApiClient.GetOculusFriendships."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OculusFriendInfo

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

A friendship returned for an Oculus friends list, from `LowLevelApiClient.GetOculusFriendships`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** [`FriendshipInfo`](/game-api/types/assembly-api-models/friendshipinfo)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OculusFriendInfo()"}</code> | Creates an `OculusFriendInfo` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-oculusidentifier" /><code>{"ulong OculusIdentifier { get; set; }"}</code> | The friend's Oculus user id. |

## Used in

Members of other types that take, return or hold a `OculusFriendInfo`:

[`ISocialClient.GetOculusFriends`](/game-api/types/assembly-api-client/isocialclient#m-getoculusfriends), [`OfflineSocialClient.GetOculusFriends`](/game-api/types/assembly-api-client/offlinesocialclient#m-getoculusfriends), [`SocialClient.GetOculusFriends`](/game-api/types/assembly-api-client/socialclient#m-getoculusfriends), [`LowLevelApiClient.GetOculusFriendships`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getoculusfriendships).
