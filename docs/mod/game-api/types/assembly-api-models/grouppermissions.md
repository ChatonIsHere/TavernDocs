---
title: "GroupPermissions"
description: "Permissions a role can grant in an Alta group (server community): inviting, banning, kicking, managing servers, console access, roles, reports and saves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupPermissions

An **enum** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Permissions a role can grant in an Alta group (server community): inviting, banning, kicking, managing servers, console access, roles, reports and saves.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

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

<div className="api-used-in">

[`GroupRoles.HaveIGotPermissions`](/mod/game-api/types/assembly-api-client/grouproles#m-haveigotpermissions), [`GroupsClient.GetUserPermissionsForGroup`](/mod/game-api/types/assembly-api-client/groupsclient#m-getuserpermissionsforgroup), [`GroupsClient.HasPermissionsInGroup`](/mod/game-api/types/assembly-api-client/groupsclient#m-haspermissionsingroup), [`IGroupsClient.GetUserPermissionsForGroup`](/mod/game-api/types/assembly-api-client/igroupsclient#m-getuserpermissionsforgroup), [`IGroupsClient.HasPermissionsInGroup`](/mod/game-api/types/assembly-api-client/igroupsclient#m-haspermissionsingroup), [`IServerApiClient.GetUserPermissionsForServer`](/mod/game-api/types/assembly-api-client/iserverapiclient#m-getuserpermissionsforserver), [`IServerApiClient.HasPermissionsInServer`](/mod/game-api/types/assembly-api-client/iserverapiclient#m-haspermissionsinserver), [`OfflineGroupsClient.GetUserPermissionsForGroup`](/mod/game-api/types/assembly-api-client/offlinegroupsclient#m-getuserpermissionsforgroup), [`OfflineGroupsClient.HasPermissionsInGroup`](/mod/game-api/types/assembly-api-client/offlinegroupsclient#m-haspermissionsingroup), [`OfflineServerApiClient.GetUserPermissionsForServer`](/mod/game-api/types/assembly-api-client/offlineserverapiclient#m-getuserpermissionsforserver), [`OfflineServerApiClient.HasPermissionsInServer`](/mod/game-api/types/assembly-api-client/offlineserverapiclient#m-haspermissionsinserver), [`ServerApiClient.GetUserPermissionsForServer`](/mod/game-api/types/assembly-api-client/serverapiclient#m-getuserpermissionsforserver), [`ServerApiClient.HasPermissionsInServer`](/mod/game-api/types/assembly-api-client/serverapiclient#m-haspermissionsinserver), [`LowLevelApiClient.GetUserPermissionsForGroup`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getuserpermissionsforgroup), [`LowLevelApiClient.GetUserPermissionsForServer`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getuserpermissionsforserver), [`EditGroupRoleRequest.Permissions`](/mod/game-api/types/assembly-api-models/editgrouprolerequest#m-permissions), [`GroupPermissionsCheckRequest.Permissions`](/mod/game-api/types/assembly-api-models/grouppermissionscheckrequest#m-permissions), [`GroupRoleRequest.Permissions`](/mod/game-api/types/assembly-api-models/grouprolerequest#m-permissions), [`GroupRoleInfo.Permissions`](/mod/game-api/types/assembly-api-models/grouproleinfo#m-permissions), [`CommandContext.CommandContext`](/mod/game-api/types/alta-console/commandcontext#m-ctor-2), [`CommandContext.GroupPermissions`](/mod/game-api/types/alta-console/commandcontext#m-grouppermissions), [`GroupPermissionAttribute.GroupPermissionAttribute`](/mod/game-api/types/alta-console/grouppermissionattribute#m-ctor), [`GroupPermissionAttribute.permissions`](/mod/game-api/types/alta-console/grouppermissionattribute#m-permissions), [`WebSocketCommandHandler.GetCurrentServerPermissionsForLoggedInUser`](/mod/game-api/types/alta-console/websocketcommandhandler#m-getcurrentserverpermissionsforloggedinuser), [`WithGroupPermissionsOnlyAttribute.Groups`](/mod/game-api/types/alta-console/withgrouppermissionsonlyattribute#m-groups), [`WithGroupPermissionsOnlyAttribute.WithGroupPermissionsOnlyAttribute`](/mod/game-api/types/alta-console/withgrouppermissionsonlyattribute#m-ctor), [`GroupPermissionsEnabler.permissions`](/mod/game-api/types/alta-menus/grouppermissionsenabler#m-permissions), [`PermissionsHelper.requiredPermissions`](/mod/game-api/types/game-other-namespaces/permissionshelper#m-requiredpermissions), [`PlayerCommunityAnalytics.serverOwnerPermissionData`](/mod/game-api/types/global-p/playercommunityanalytics#m-serverownerpermissiondata), [`RecentPlayerActionPage.groupBanPermissionFlags`](/mod/game-api/types/global-q-r/recentplayeractionpage#m-groupbanpermissionflags), [`SocialService.serverOwnerPermissions`](/mod/game-api/types/global-s/socialservice#m-serverownerpermissions).

</div>
