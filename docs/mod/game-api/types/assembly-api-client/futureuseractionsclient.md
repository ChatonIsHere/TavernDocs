---
title: "FutureUserActionsClient"
description: "Online client for actions the API should run for a platform user later, such as friending or inviting an Oculus user once they join."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FutureUserActionsClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Online client for actions the API should run for a platform user later, such as friending or inviting an Oculus user once they join. Calls Alta's web API, which no longer answers.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/mod/game-api/types/assembly-api-client/highlevelapiclientbase), [`IFutureUserActions`](/mod/game-api/types/assembly-api-client/ifutureuseractions)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal FutureUserActionsClient("}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> | <span className="api-desc">Creates a `FutureUserActionsClient` from `clientManager`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addoculusfriendasaltafriend" /><code>{"Task AddOculusFriendAsAltaFriend(ulong oculusId)"}</code> | <span className="api-desc">Asks the API to friend the logged-in user with this Oculus user once they have an Alta account.</span> |
| <Link id="m-createcustomaction" /><code>{"Task CreateCustomAction("}<Link to="/mod/game-api/types/assembly-api-models/usertype">{"UserType"}</Link>{" userType, ulong userIdentifier, "}<Link to="/mod/game-api/types/assembly-api-models/futureuseractiontype">{"FutureUserActionType"}</Link>{" actionType, object actionData)"}</code> | <span className="api-desc">Queues any future action type with your own action data for a platform user.</span> |
| <Link id="m-inviteoculusfriendtogroup" /><code>{"Task InviteOculusFriendToGroup(ulong oculusId, int groupId)"}</code> | <span className="api-desc">Asks the API to invite this Oculus user to a group once they have an Alta account.</span> |
