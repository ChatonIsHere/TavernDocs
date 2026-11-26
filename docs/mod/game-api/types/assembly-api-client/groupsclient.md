---
title: "GroupsClient"
description: "Online client for Alta groups."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupsClient

A **internal class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Online client for Alta groups. Reached as `ApiAccess.ApiClient.Groups`; calls Alta's web API, which no longer answers.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/mod/game-api/types/assembly-api-client/highlevelapiclientbase), [`IGroupsClient`](/mod/game-api/types/assembly-api-client/igroupsclient)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GroupsClient("}<Link to="/mod/game-api/types/assembly-api-client/highlevelapiclient">{"HighLevelApiClient"}</Link>{" highLevelApiClient)"}</code> | <span className="api-desc">Creates a `GroupsClient` from `highLevelApiClient`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-creategroup" /><code><Link to="/mod/game-api/types/assembly-api-client/groupcreator">{"GroupCreator"}</Link>{" CreateGroup { get; }"}</code> | <span className="api-desc">Helper for creating a new group.</span> |
| <Link id="m-discovery" /><code><Link to="/mod/game-api/types/assembly-api-client/groupdiscovery">{"GroupDiscovery"}</Link>{" Discovery { get; }"}</code> | <span className="api-desc">Helper for finding public groups.</span> |
| <Link id="m-joined" /><code><Link to="/mod/game-api/types/assembly-api-client/joinedgroups">{"JoinedGroups"}</Link>{" Joined { get; }"}</code> | <span className="api-desc">Helper for the groups the logged-in user has joined.</span> |
| <Link id="m-personal" /><code><Link to="/mod/game-api/types/assembly-api-client/personalgroups">{"PersonalGroups"}</Link>{" Personal { get; }"}</code> | <span className="api-desc">Helper for the logged-in user's pending join requests and group invites.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getuserpermissionsforgroup" /><code>{"async Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{">> GetUserPermissionsForGroup(int groupIdentifier, int userIdentifier)"}</code> | <span className="api-desc">Gets the permissions a user has in a group.</span> |
| <Link id="m-haspermissionsingroup" /><code>{"async Task<bool> HasPermissionsInGroup(int groupIdentifier, int userIdentifier, "}<Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] permissions)"}</code> | <span className="api-desc">Asks the API whether a user has all the given permissions in a group.</span> |
