---
title: "Outgoing"
description: "Base for something the logged-in user sent or set in a group (an invite, a join request, a ban) that can be taken back."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Outgoing

An **abstract class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Base for something the logged-in user sent or set in a group (an invite, a join request, a ban) that can be taken back. Calls Alta's web API, which no longer answers.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Derived types** [`GroupBan`](/mod/game-api/types/assembly-api-client/groupban), [`OutgoingGroupInvite`](/mod/game-api/types/assembly-api-client/outgoinggroupinvite), [`OutgoingGroupJoinRequest`](/mod/game-api/types/assembly-api-client/outgoinggroupjoinrequest), [`OutgoingPrivateGroupJoinRequest`](/mod/game-api/types/assembly-api-client/outgoingprivategroupjoinrequest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Outgoing("}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api)"}</code> | <span className="api-desc">Creates an `Outgoing` from `api`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-api" /><code>{"protected "}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api"}</code> | <span className="api-desc">The low-level client the request is sent through.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-revoke" /><code>{"abstract Task Revoke()"}</code> | <span className="api-desc">Withdraws the request through the API.</span> |
