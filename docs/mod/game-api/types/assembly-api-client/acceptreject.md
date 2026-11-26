---
title: "AcceptReject"
description: "Base for an incoming API request (such as a group join request) that you can accept or reject."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AcceptReject

An **abstract class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Base for an incoming API request (such as a group join request) that you can accept or reject. Calls Alta's web API, which no longer answers.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Derived types** [`IncomingGroupInvite`](/mod/game-api/types/assembly-api-client/incominggroupinvite), [`IncomingGroupJoinRequest`](/mod/game-api/types/assembly-api-client/incominggroupjoinrequest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected AcceptReject("}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api)"}</code> | <span className="api-desc">Creates an `AcceptReject` from `api`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-api" /><code>{"protected "}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api"}</code> | <span className="api-desc">The low-level client the request is sent through.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-accept" /><code>{"abstract Task Accept()"}</code> | <span className="api-desc">Accepts the request through the API.</span> |
| <Link id="m-reject" /><code>{"abstract Task Reject()"}</code> | <span className="api-desc">Rejects the request through the API.</span> |
