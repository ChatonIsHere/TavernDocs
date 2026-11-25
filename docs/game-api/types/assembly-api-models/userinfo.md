---
title: "UserInfo"
description: "A user as returned by the Alta web API: id and username."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserInfo

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

A user as returned by the Alta web API: id and username. Equal when the ids match.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** [`INamedEntity`](/game-api/types/assembly-api-models/inamedentity)
- **Derived types** [`RegisterRequest`](/game-api/types/assembly-api-models/registerrequest), [`FriendshipInfo`](/game-api/types/assembly-api-models/friendshipinfo), [`PublicUserInfoResponse`](/game-api/types/assembly-api-models/publicuserinforesponse), [`UserInfoWithPermissions`](/game-api/types/assembly-api-models/userinfowithpermissions), [`UserInfoDetailed`](/game-api/types/alta-console/userinfodetailed)
- **Documented in** [Player](/game-api/networking/player#userinfo)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserInfo()"}</code> |  |
| <Link id="m-ctor-2" /><code>{"UserInfo(int identifier, string username)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> | The user's account id. |
| <Link id="m-username" /><code>{"string Username { get; set; }"}</code> | The user's name. |
| <Link id="m-alta-api-datatransfermodels-models-responses-inamedentity-name" /><code>{"private string Alta.Api.DataTransferModels.Models.Responses.INamedEntity.Name { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | True if the other object is a `UserInfo` with the same id; the username is ignored. |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | Based on the id only. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Formats as `(Username:Identifier)`. |

## Used in

Members of other types that take, return or hold a `UserInfo`:

[`GroupBans.Add`](/game-api/types/assembly-api-client/groupbans#m-add), [`GroupInvites.Add`](/game-api/types/assembly-api-client/groupinvites#m-add), [`HighLevelApiClient.RegisterOculusUserAsync`](/game-api/types/assembly-api-client/highlevelapiclient#m-registeroculususerasync), [`HighLevelApiClient.RegisterPicoUserAsync`](/game-api/types/assembly-api-client/highlevelapiclient#m-registerpicouserasync), [`HighLevelApiClient.RegisterUserAsync`](/game-api/types/assembly-api-client/highlevelapiclient#m-registeruserasync), [`IHighLevelApiClient.RegisterOculusUserAsync`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-registeroculususerasync), [`IHighLevelApiClient.RegisterPicoUserAsync`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-registerpicouserasync), [`IHighLevelApiClient.RegisterUserAsync`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-registeruserasync), [`IOculusClient.GetLinkedAccount`](/game-api/types/assembly-api-client/ioculusclient#m-getlinkedaccount), [`IPicoClient.GetLinkedAccount`](/game-api/types/assembly-api-client/ipicoclient#m-getlinkedaccount), [`IRecentPlayersClient.RecordInteractionAsync`](/game-api/types/assembly-api-client/irecentplayersclient#m-recordinteractionasync), [`IServerAccess.SetOnlinePlayersAsync`](/game-api/types/assembly-api-client/iserveraccess#m-setonlineplayersasync), [`IUserApiClient.GetUserInfoAsync`](/game-api/types/assembly-api-client/iuserapiclient#m-getuserinfoasync), [`LocalServerAccess.SetOnlinePlayersAsync`](/game-api/types/assembly-api-client/localserveraccess#m-setonlineplayersasync), [`OculusClient.GetLinkedAccount`](/game-api/types/assembly-api-client/oculusclient#m-getlinkedaccount), [`OfflineHighLevelApiClient.RegisterOculusUserAsync`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-registeroculususerasync), [`OfflineHighLevelApiClient.RegisterPicoUserAsync`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-registerpicouserasync), [`OfflineHighLevelApiClient.RegisterUserAsync`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-registeruserasync), [`OfflineUserApiClient.GetUserInfoAsync`](/game-api/types/assembly-api-client/offlineuserapiclient#m-getuserinfoasync), [`PaginatedListWithAdd<T>.Add`](/game-api/types/assembly-api-client/paginatedlistwithadd-t#m-add), [`PicoClient.GetLinkedAccount`](/game-api/types/assembly-api-client/picoclient#m-getlinkedaccount), [`PlayerReportSummary.ReportedPlayer`](/game-api/types/assembly-api-client/playerreportsummary#m-reportedplayer), [`PlayerReportSummary.Reporters`](/game-api/types/assembly-api-client/playerreportsummary#m-reporters), [`RecentPlayersClient.RecordInteractionAsync`](/game-api/types/assembly-api-client/recentplayersclient#m-recordinteractionasync), [`ServerAccess.SetOnlinePlayersAsync`](/game-api/types/assembly-api-client/serveraccess#m-setonlineplayersasync), [`UserApiClient.GetUserInfoAsync`](/game-api/types/assembly-api-client/userapiclient#m-getuserinfoasync), [`LowLevelApiClient.GetLinkedAccountForOculusUser`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getlinkedaccountforoculususer), [`LowLevelApiClient.GetLinkedAccountForPicoUser`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getlinkedaccountforpicouser), [`LowLevelApiClient.GetUserByUsernameAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getuserbyusernameasync), [`LowLevelApiClient.RegisterAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-registerasync), [`LowLevelApiClient.VerifyUserAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-verifyuserasync), [`RecentPlayerInteractionRequest.OtherUser`](/game-api/types/assembly-api-models/recentplayerinteractionrequest#m-otheruser), [`SetServersOnlinePlayersRequest.OnlinePlayers`](/game-api/types/assembly-api-models/setserversonlineplayersrequest#m-onlineplayers), [`DiscordSupporterRoleVerificationResults.GainedSupporters`](/game-api/types/assembly-api-models/discordsupporterroleverificationresults#m-gainedsupporters), [`DiscordSupporterRoleVerificationResults.RemovedSupporters`](/game-api/types/assembly-api-models/discordsupporterroleverificationresults#m-removedsupporters), [`GameServerInfo.OnlinePlayers`](/game-api/types/assembly-api-models/gameserverinfo#m-onlineplayers), [`GroupMemberInfo.UserInfo`](/game-api/types/assembly-api-models/groupmemberinfo#m-userinfo), [`PlayerReportInfo.ActingUser`](/game-api/types/assembly-api-models/playerreportinfo#m-actinguser), [`PlayerReportInfo.ReportedUser`](/game-api/types/assembly-api-models/playerreportinfo#m-reporteduser), [`PlayerReportInfo.ReportingUser`](/game-api/types/assembly-api-models/playerreportinfo#m-reportinguser), [`RecentPlayerInteractionInfo.UserInfo`](/game-api/types/assembly-api-models/recentplayerinteractioninfo#m-userinfo), [`TrialCommandModule.Players`](/game-api/types/alta-console/trialcommandmodule#m-players), [`PickupActionData.DestinationUser`](/game-api/types/alta-items/pickupactiondata#m-destinationuser), [`PickupEventStreamLogger.GetUserInfoFromDock`](/game-api/types/alta-items/pickupeventstreamlogger#m-getuserinfofromdock), [`PickupEventStreamLogger.GetUserInfoFromInteractor`](/game-api/types/alta-items/pickupeventstreamlogger#m-getuserinfofrominteractor), [`FriendsManager.ConfigureTokenForTab`](/game-api/types/alta-menus/friendsmanager#m-configuretokenfortab), [`FriendsManager.DisplayUser`](/game-api/types/alta-menus/friendsmanager#m-displayuser), [`FriendsManager.GetUserInfoToDisplay`](/game-api/types/alta-menus/friendsmanager#m-getuserinfotodisplay), [`UserToken.Setup`](/game-api/types/alta-menus/usertoken#m-setup), [`UserToken.UserInfo`](/game-api/types/alta-menus/usertoken#m-userinfo), [`InviteUserToGroupPanel.SetupForUser`](/game-api/types/alta-menus/inviteusertogrouppanel#m-setupforuser), [`InviteUserToGroupPanel.user`](/game-api/types/alta-menus/inviteusertogrouppanel#m-user), [`InviteUserToGroupViaFriendsPanel.FinishInvite`](/game-api/types/alta-menus/inviteusertogroupviafriendspanel#m-finishinvite), [`InviteUserToGroupViaFriendsPanel.InviteToGroup`](/game-api/types/alta-menus/inviteusertogroupviafriendspanel#m-invitetogroup), [`InviteUserToGroupViaFriendsPanel.SpawnAltaFriendButtons`](/game-api/types/alta-menus/inviteusertogroupviafriendspanel#m-spawnaltafriendbuttons), [`PlayerJoinLeaveData.user`](/game-api/types/alta-networking/playerjoinleavedata#m-user), [`AuthenticationService.RegisterAccount`](/game-api/types/assembly-other/authenticationservice#m-registeraccount), [`UserService.RegisterAccount`](/game-api/types/assembly-other/userservice#m-registeraccount), [`IAuthenticationService.RegisterAccount`](/game-api/types/assembly-other/iauthenticationservice#m-registeraccount), [`KilledData.killerPlayer`](/game-api/types/alta-player/killeddata#m-killerplayer) and 23 more.
