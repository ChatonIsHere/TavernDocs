---
title: "IGroupsClient"
description: "interface IGroupsClient in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IGroupsClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`GroupsClient`](/game-api/types/assembly-api-client/groupsclient), [`OfflineGroupsClient`](/game-api/types/assembly-api-client/offlinegroupsclient)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-creategroup" /><code><Link to="/game-api/types/assembly-api-client/groupcreator">{"GroupCreator"}</Link>{" CreateGroup { get; }"}</code> |  |
| <Link id="m-discovery" /><code><Link to="/game-api/types/assembly-api-client/groupdiscovery">{"GroupDiscovery"}</Link>{" Discovery { get; }"}</code> |  |
| <Link id="m-joined" /><code><Link to="/game-api/types/assembly-api-client/joinedgroups">{"JoinedGroups"}</Link>{" Joined { get; }"}</code> |  |
| <Link id="m-personal" /><code><Link to="/game-api/types/assembly-api-client/personalgroups">{"PersonalGroups"}</Link>{" Personal { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getuserpermissionsforgroup" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{">> GetUserPermissionsForGroup(int groupIdentifier, int userIdentifier)"}</code> |  |
| <Link id="m-haspermissionsingroup" /><code>{"Task<bool> HasPermissionsInGroup(int groupIdentifier, int userIdentifier, "}<Link to="/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] permissions)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IGroupsClient`:

[`HighLevelApiClient.Groups`](/game-api/types/assembly-api-client/highlevelapiclient#m-groups), [`IHighLevelApiClient.Groups`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-groups), [`OfflineHighLevelApiClient.Groups`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-groups).
