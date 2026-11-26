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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Derived types** [`GameServerInfoMinimal`](/game-api/types/assembly-api-models/gameserverinfominimal), [`UserInfo`](/game-api/types/assembly-api-models/userinfo)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"int Identifier { get; }"}</code> | The entity's numeric ID. |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | The entity's display name. |

## Used in

Members of other types that take, return or hold a `INamedEntity`:

[`OculusFriendsListPanel.InviteToBeFriend`](/game-api/types/alta-menus/oculusfriendslistpanel#m-invitetobefriend).
