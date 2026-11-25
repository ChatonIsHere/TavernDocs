---
title: "GroupsClient"
description: "class GroupsClient in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupsClient

A **internal class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/game-api/types/assembly-api-client/highlevelapiclientbase), [`IGroupsClient`](/game-api/types/assembly-api-client/igroupsclient)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GroupsClient("}<Link to="/game-api/types/assembly-api-client/highlevelapiclient">{"HighLevelApiClient"}</Link>{" highLevelApiClient)"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-creategroup" /><code><Link to="/game-api/types/assembly-api-client/groupcreator">{"GroupCreator"}</Link>{" CreateGroup { get; }"}</code> |
| <Link id="m-discovery" /><code><Link to="/game-api/types/assembly-api-client/groupdiscovery">{"GroupDiscovery"}</Link>{" Discovery { get; }"}</code> |
| <Link id="m-joined" /><code><Link to="/game-api/types/assembly-api-client/joinedgroups">{"JoinedGroups"}</Link>{" Joined { get; }"}</code> |
| <Link id="m-personal" /><code><Link to="/game-api/types/assembly-api-client/personalgroups">{"PersonalGroups"}</Link>{" Personal { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-getuserpermissionsforgroup" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{">> GetUserPermissionsForGroup(int groupIdentifier, int userIdentifier)"}</code> |
| <Link id="m-haspermissionsingroup" /><code>{"async Task<bool> HasPermissionsInGroup(int groupIdentifier, int userIdentifier, "}<Link to="/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] permissions)"}</code> |
