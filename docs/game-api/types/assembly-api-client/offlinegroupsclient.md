---
title: "OfflineGroupsClient"
description: "Offline stand-in for the groups client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OfflineGroupsClient

A **internal class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Offline stand-in for the groups client. Every member throws `OfflineException`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`IGroupsClient`](/game-api/types/assembly-api-client/igroupsclient)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OfflineGroupsClient()"}</code> | Creates an `OfflineGroupsClient` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-creategroup" /><code><Link to="/game-api/types/assembly-api-client/groupcreator">{"GroupCreator"}</Link>{" CreateGroup { get; }"}</code> | Throws `OfflineException`. |
| <Link id="m-discovery" /><code><Link to="/game-api/types/assembly-api-client/groupdiscovery">{"GroupDiscovery"}</Link>{" Discovery { get; }"}</code> | Throws `OfflineException`. |
| <Link id="m-joined" /><code><Link to="/game-api/types/assembly-api-client/joinedgroups">{"JoinedGroups"}</Link>{" Joined { get; }"}</code> | Throws `OfflineException`. |
| <Link id="m-personal" /><code><Link to="/game-api/types/assembly-api-client/personalgroups">{"PersonalGroups"}</Link>{" Personal { get; }"}</code> | Throws `OfflineException`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getuserpermissionsforgroup" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{">> GetUserPermissionsForGroup(int groupIdentifier, int userIdentifier)"}</code> | Throws `OfflineException` straight away rather than returning a failed task. |
| <Link id="m-haspermissionsingroup" /><code>{"Task<bool> HasPermissionsInGroup(int groupIdentifier, int userIdentifier, "}<Link to="/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] permissions)"}</code> | Throws `OfflineException` straight away rather than returning a failed task. |
