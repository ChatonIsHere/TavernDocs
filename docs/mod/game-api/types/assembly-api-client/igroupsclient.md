---
title: "IGroupsClient"
description: "Alta web API calls for groups (the communities that own servers)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IGroupsClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Alta web API calls for groups (the communities that own servers). `ApiAccess.ApiClient.Groups`. The API is gone, so calls fail.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Derived types** [`GroupsClient`](/mod/game-api/types/assembly-api-client/groupsclient), [`OfflineGroupsClient`](/mod/game-api/types/assembly-api-client/offlinegroupsclient)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-creategroup" /><code><Link to="/mod/game-api/types/assembly-api-client/groupcreator">{"GroupCreator"}</Link>{" CreateGroup { get; }"}</code> | <span className="api-desc">Calls for creating a group.</span> |
| <Link id="m-discovery" /><code><Link to="/mod/game-api/types/assembly-api-client/groupdiscovery">{"GroupDiscovery"}</Link>{" Discovery { get; }"}</code> | <span className="api-desc">Lists of public and open groups to find.</span> |
| <Link id="m-joined" /><code><Link to="/mod/game-api/types/assembly-api-client/joinedgroups">{"JoinedGroups"}</Link>{" Joined { get; }"}</code> | <span className="api-desc">Paged list of groups the logged-in user is a member of.</span> |
| <Link id="m-personal" /><code><Link to="/mod/game-api/types/assembly-api-client/personalgroups">{"PersonalGroups"}</Link>{" Personal { get; }"}</code> | <span className="api-desc">The logged-in user's join requests and invites.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getuserpermissionsforgroup" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{">> GetUserPermissionsForGroup(int groupIdentifier, int userIdentifier)"}</code> | <span className="api-desc">Gets a user's permissions in a group.</span> |
| <Link id="m-haspermissionsingroup" /><code>{"Task<bool> HasPermissionsInGroup(int groupIdentifier, int userIdentifier, "}<Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] permissions)"}</code> | <span className="api-desc">Asks whether a user has the given permissions in a group.</span> |

## Used in

Members of other types that take, return or hold a `IGroupsClient`:

<div className="api-used-in">

[`HighLevelApiClient.Groups`](/mod/game-api/types/assembly-api-client/highlevelapiclient#m-groups), [`IHighLevelApiClient.Groups`](/mod/game-api/types/assembly-api-client/ihighlevelapiclient#m-groups), [`OfflineHighLevelApiClient.Groups`](/mod/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-groups).

</div>
