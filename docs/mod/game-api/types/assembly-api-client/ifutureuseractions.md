---
title: "IFutureUserActions"
description: "Alta web API calls that store an action to run for an outside user (an Oculus user, for example) once they have an Alta account."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IFutureUserActions

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Alta web API calls that store an action to run for an outside user (an Oculus user, for example) once they have an Alta account. `ApiAccess.ApiClient.FutureUserActions`.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Derived types** [`FutureUserActionsClient`](/mod/game-api/types/assembly-api-client/futureuseractionsclient)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addoculusfriendasaltafriend" /><code>{"Task AddOculusFriendAsAltaFriend(ulong oculusId)"}</code> | <span className="api-desc">Stores a request to make an Oculus user the logged-in user's friend.</span> |
| <Link id="m-createcustomaction" /><code>{"Task CreateCustomAction("}<Link to="/mod/game-api/types/assembly-api-models/usertype">{"UserType"}</Link>{" userType, ulong userIdentifier, "}<Link to="/mod/game-api/types/assembly-api-models/futureuseractiontype">{"FutureUserActionType"}</Link>{" actionType, object actionData)"}</code> | <span className="api-desc">Stores any future action for a user of the given type, with free-form action data.</span> |
| <Link id="m-inviteoculusfriendtogroup" /><code>{"Task InviteOculusFriendToGroup(ulong oculusId, int groupId)"}</code> | <span className="api-desc">Stores an invite to a group for an Oculus user.</span> |

## Used in

Members of other types that take, return or hold a `IFutureUserActions`:

<div className="api-used-in">

[`HighLevelApiClient.FutureUserActions`](/mod/game-api/types/assembly-api-client/highlevelapiclient#m-futureuseractions), [`IHighLevelApiClient.FutureUserActions`](/mod/game-api/types/assembly-api-client/ihighlevelapiclient#m-futureuseractions), [`OfflineHighLevelApiClient.FutureUserActions`](/mod/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-futureuseractions).

</div>
