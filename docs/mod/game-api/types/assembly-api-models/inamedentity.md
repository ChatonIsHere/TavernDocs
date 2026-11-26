---
title: "INamedEntity"
description: "Anything from the web API with a numeric ID and a name, such as UserInfo and GameServerInfoMinimal."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# INamedEntity

An **interface** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Anything from the web API with a numeric ID and a name, such as `UserInfo` and `GameServerInfoMinimal`.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Derived types** [`GameServerInfoMinimal`](/mod/game-api/types/assembly-api-models/gameserverinfominimal), [`UserInfo`](/mod/game-api/types/assembly-api-models/userinfo)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"int Identifier { get; }"}</code> | <span className="api-desc">The entity's numeric ID.</span> |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | <span className="api-desc">The entity's display name.</span> |

## Used in

Members of other types that take, return or hold a `INamedEntity`:

<div className="api-used-in">

[`OculusFriendsListPanel.InviteToBeFriend`](/mod/game-api/types/alta-menus/oculusfriendslistpanel#m-invitetobefriend).

</div>
