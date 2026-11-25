---
title: "GroupPermissions"
description: "enum GroupPermissions in Alta.Api.DataTransferModels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupPermissions

An **enum** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Values

| Member |
| --- |
| <Link id="m-acceptinvite" /><code>{"AcceptInvite = 2"}</code> |
| <Link id="m-ban" /><code>{"Ban = 3"}</code> |
| <Link id="m-console" /><code>{"Console = 8"}</code> |
| <Link id="m-controlserver" /><code>{"ControlServer = 9"}</code> |
| <Link id="m-createserver" /><code>{"CreateServer = 5"}</code> |
| <Link id="m-invite" /><code>{"Invite = 1"}</code> |
| <Link id="m-kick" /><code>{"Kick = 4"}</code> |
| <Link id="m-managereports" /><code>{"ManageReports = 11"}</code> |
| <Link id="m-manageroles" /><code>{"ManageRoles = 10"}</code> |
| <Link id="m-managesaves" /><code>{"ManageSaves = 12"}</code> |
| <Link id="m-modifygroup" /><code>{"ModifyGroup = 6"}</code> |
| <Link id="m-modifyserver" /><code>{"ModifyServer = 7"}</code> |

## Used in

Members of other types that take, return or hold a `GroupPermissions`:

[`GroupRoles.HaveIGotPermissions`](/game-api/types/assembly-api-client/grouproles#m-haveigotpermissions), [`GroupsClient.GetUserPermissionsForGroup`](/game-api/types/assembly-api-client/groupsclient#m-getuserpermissionsforgroup), [`GroupsClient.HasPermissionsInGroup`](/game-api/types/assembly-api-client/groupsclient#m-haspermissionsingroup), [`IGroupsClient.GetUserPermissionsForGroup`](/game-api/types/assembly-api-client/igroupsclient#m-getuserpermissionsforgroup), [`IGroupsClient.HasPermissionsInGroup`](/game-api/types/assembly-api-client/igroupsclient#m-haspermissionsingroup), [`IServerApiClient.GetUserPermissionsForServer`](/game-api/types/assembly-api-client/iserverapiclient#m-getuserpermissionsforserver), [`IServerApiClient.HasPermissionsInServer`](/game-api/types/assembly-api-client/iserverapiclient#m-haspermissionsinserver), [`OfflineGroupsClient.GetUserPermissionsForGroup`](/game-api/types/assembly-api-client/offlinegroupsclient#m-getuserpermissionsforgroup), [`OfflineGroupsClient.HasPermissionsInGroup`](/game-api/types/assembly-api-client/offlinegroupsclient#m-haspermissionsingroup), [`OfflineServerApiClient.GetUserPermissionsForServer`](/game-api/types/assembly-api-client/offlineserverapiclient#m-getuserpermissionsforserver), [`OfflineServerApiClient.HasPermissionsInServer`](/game-api/types/assembly-api-client/offlineserverapiclient#m-haspermissionsinserver), [`ServerApiClient.GetUserPermissionsForServer`](/game-api/types/assembly-api-client/serverapiclient#m-getuserpermissionsforserver), [`ServerApiClient.HasPermissionsInServer`](/game-api/types/assembly-api-client/serverapiclient#m-haspermissionsinserver), [`LowLevelApiClient.GetUserPermissionsForGroup`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getuserpermissionsforgroup), [`LowLevelApiClient.GetUserPermissionsForServer`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getuserpermissionsforserver), [`EditGroupRoleRequest.Permissions`](/game-api/types/assembly-api-models/editgrouprolerequest#m-permissions), [`GroupPermissionsCheckRequest.Permissions`](/game-api/types/assembly-api-models/grouppermissionscheckrequest#m-permissions), [`GroupRoleRequest.Permissions`](/game-api/types/assembly-api-models/grouprolerequest#m-permissions), [`GroupRoleInfo.Permissions`](/game-api/types/assembly-api-models/grouproleinfo#m-permissions), [`CommandContext.CommandContext`](/game-api/types/alta-console/commandcontext#m-ctor-2), [`CommandContext.GroupPermissions`](/game-api/types/alta-console/commandcontext#m-grouppermissions), [`GroupPermissionAttribute.GroupPermissionAttribute`](/game-api/types/alta-console/grouppermissionattribute#m-ctor), [`GroupPermissionAttribute.permissions`](/game-api/types/alta-console/grouppermissionattribute#m-permissions), [`WebSocketCommandHandler.GetCurrentServerPermissionsForLoggedInUser`](/game-api/types/alta-console/websocketcommandhandler#m-getcurrentserverpermissionsforloggedinuser), [`WithGroupPermissionsOnlyAttribute.Groups`](/game-api/types/alta-console/withgrouppermissionsonlyattribute#m-groups), [`WithGroupPermissionsOnlyAttribute.WithGroupPermissionsOnlyAttribute`](/game-api/types/alta-console/withgrouppermissionsonlyattribute#m-ctor), [`GroupPermissionsEnabler.permissions`](/game-api/types/alta-menus/grouppermissionsenabler#m-permissions), [`PermissionsHelper.requiredPermissions`](/game-api/types/game-other-namespaces/permissionshelper#m-requiredpermissions), [`PlayerCommunityAnalytics.serverOwnerPermissionData`](/game-api/types/global-p/playercommunityanalytics#m-serverownerpermissiondata), [`RecentPlayerActionPage.groupBanPermissionFlags`](/game-api/types/global-q-r/recentplayeractionpage#m-groupbanpermissionflags), [`SocialService.serverOwnerPermissions`](/game-api/types/global-s/socialservice#m-serverownerpermissions).
