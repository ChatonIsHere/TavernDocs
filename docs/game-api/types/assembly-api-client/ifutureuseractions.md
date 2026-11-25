---
title: "IFutureUserActions"
description: "interface IFutureUserActions in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IFutureUserActions

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`FutureUserActionsClient`](/game-api/types/assembly-api-client/futureuseractionsclient)

## Methods

| Member |
| --- |
| <Link id="m-addoculusfriendasaltafriend" /><code>{"Task AddOculusFriendAsAltaFriend(ulong oculusId)"}</code> |
| <Link id="m-createcustomaction" /><code>{"Task CreateCustomAction("}<Link to="/game-api/types/assembly-api-models/usertype">{"UserType"}</Link>{" userType, ulong userIdentifier, "}<Link to="/game-api/types/assembly-api-models/futureuseractiontype">{"FutureUserActionType"}</Link>{" actionType, object actionData)"}</code> |
| <Link id="m-inviteoculusfriendtogroup" /><code>{"Task InviteOculusFriendToGroup(ulong oculusId, int groupId)"}</code> |

## Used in

Members of other types that take, return or hold a `IFutureUserActions`:

[`HighLevelApiClient.FutureUserActions`](/game-api/types/assembly-api-client/highlevelapiclient#m-futureuseractions), [`IHighLevelApiClient.FutureUserActions`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-futureuseractions), [`OfflineHighLevelApiClient.FutureUserActions`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-futureuseractions).
