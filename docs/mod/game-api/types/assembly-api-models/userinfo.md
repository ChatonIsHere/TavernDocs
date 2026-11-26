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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** [`INamedEntity`](/mod/game-api/types/assembly-api-models/inamedentity)
- **Derived types** [`RegisterRequest`](/mod/game-api/types/assembly-api-models/registerrequest), [`FriendshipInfo`](/mod/game-api/types/assembly-api-models/friendshipinfo), [`PublicUserInfoResponse`](/mod/game-api/types/assembly-api-models/publicuserinforesponse), [`UserInfoWithPermissions`](/mod/game-api/types/assembly-api-models/userinfowithpermissions), [`UserInfoDetailed`](/mod/game-api/types/alta-console/userinfodetailed)
- **Documented in** [Player](/mod/game-api/networking/player#userinfo)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserInfo()"}</code> | <span className="api-desc">Creates an `UserInfo` from `identifier` and `username`.</span> |
| <Link id="m-ctor-2" /><code>{"UserInfo(int identifier, string username)"}</code> | <span className="api-desc">Creates an `UserInfo` from `identifier` and `username`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> | <span className="api-desc">The user's account id.</span> |
| <Link id="m-username" /><code>{"string Username { get; set; }"}</code> | <span className="api-desc">The user's name.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-api-datatransfermodels-models-responses-inamedentity-name" /><code>{"private string Alta.Api.DataTransferModels.Models.Responses.INamedEntity.Name { get; }"}</code> | <span className="api-desc">Returns `Username`, so a `UserInfo` can be shown wherever a named entity is expected.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | <span className="api-desc">True if the other object is a `UserInfo` with the same id; the username is ignored.</span> |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | <span className="api-desc">Based on the id only.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Formats as `(Username:Identifier)`.</span> |

## Used in

Members of other types that take, return or hold a `UserInfo`:

<div className="api-used-in">

[`GroupBans.Add`](/mod/game-api/types/assembly-api-client/groupbans#m-add), [`GroupInvites.Add`](/mod/game-api/types/assembly-api-client/groupinvites#m-add), [`HighLevelApiClient.RegisterOculusUserAsync`](/mod/game-api/types/assembly-api-client/highlevelapiclient#m-registeroculususerasync), [`HighLevelApiClient.RegisterPicoUserAsync`](/mod/game-api/types/assembly-api-client/highlevelapiclient#m-registerpicouserasync), [`HighLevelApiClient.RegisterUserAsync`](/mod/game-api/types/assembly-api-client/highlevelapiclient#m-registeruserasync), [`IHighLevelApiClient.RegisterOculusUserAsync`](/mod/game-api/types/assembly-api-client/ihighlevelapiclient#m-registeroculususerasync), [`IHighLevelApiClient.RegisterPicoUserAsync`](/mod/game-api/types/assembly-api-client/ihighlevelapiclient#m-registerpicouserasync), [`IHighLevelApiClient.RegisterUserAsync`](/mod/game-api/types/assembly-api-client/ihighlevelapiclient#m-registeruserasync), [`IOculusClient.GetLinkedAccount`](/mod/game-api/types/assembly-api-client/ioculusclient#m-getlinkedaccount), [`IPicoClient.GetLinkedAccount`](/mod/game-api/types/assembly-api-client/ipicoclient#m-getlinkedaccount), [`IRecentPlayersClient.RecordInteractionAsync`](/mod/game-api/types/assembly-api-client/irecentplayersclient#m-recordinteractionasync), [`IServerAccess.SetOnlinePlayersAsync`](/mod/game-api/types/assembly-api-client/iserveraccess#m-setonlineplayersasync), [`IUserApiClient.GetUserInfoAsync`](/mod/game-api/types/assembly-api-client/iuserapiclient#m-getuserinfoasync), [`LocalServerAccess.SetOnlinePlayersAsync`](/mod/game-api/types/assembly-api-client/localserveraccess#m-setonlineplayersasync), [`OculusClient.GetLinkedAccount`](/mod/game-api/types/assembly-api-client/oculusclient#m-getlinkedaccount), [`OfflineHighLevelApiClient.RegisterOculusUserAsync`](/mod/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-registeroculususerasync), [`OfflineHighLevelApiClient.RegisterPicoUserAsync`](/mod/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-registerpicouserasync), [`OfflineHighLevelApiClient.RegisterUserAsync`](/mod/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-registeruserasync), [`OfflineUserApiClient.GetUserInfoAsync`](/mod/game-api/types/assembly-api-client/offlineuserapiclient#m-getuserinfoasync), [`PaginatedListWithAdd<T>.Add`](/mod/game-api/types/assembly-api-client/paginatedlistwithadd-t#m-add), [`PicoClient.GetLinkedAccount`](/mod/game-api/types/assembly-api-client/picoclient#m-getlinkedaccount), [`PlayerReportSummary.ReportedPlayer`](/mod/game-api/types/assembly-api-client/playerreportsummary#m-reportedplayer), [`PlayerReportSummary.Reporters`](/mod/game-api/types/assembly-api-client/playerreportsummary#m-reporters), [`RecentPlayersClient.RecordInteractionAsync`](/mod/game-api/types/assembly-api-client/recentplayersclient#m-recordinteractionasync), [`ServerAccess.SetOnlinePlayersAsync`](/mod/game-api/types/assembly-api-client/serveraccess#m-setonlineplayersasync), [`UserApiClient.GetUserInfoAsync`](/mod/game-api/types/assembly-api-client/userapiclient#m-getuserinfoasync), [`LowLevelApiClient.GetLinkedAccountForOculusUser`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getlinkedaccountforoculususer), [`LowLevelApiClient.GetLinkedAccountForPicoUser`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getlinkedaccountforpicouser), [`LowLevelApiClient.GetUserByUsernameAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getuserbyusernameasync), [`LowLevelApiClient.RegisterAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-registerasync), [`LowLevelApiClient.VerifyUserAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-verifyuserasync), [`RecentPlayerInteractionRequest.OtherUser`](/mod/game-api/types/assembly-api-models/recentplayerinteractionrequest#m-otheruser), [`SetServersOnlinePlayersRequest.OnlinePlayers`](/mod/game-api/types/assembly-api-models/setserversonlineplayersrequest#m-onlineplayers), [`DiscordSupporterRoleVerificationResults.GainedSupporters`](/mod/game-api/types/assembly-api-models/discordsupporterroleverificationresults#m-gainedsupporters), [`DiscordSupporterRoleVerificationResults.RemovedSupporters`](/mod/game-api/types/assembly-api-models/discordsupporterroleverificationresults#m-removedsupporters), [`GameServerInfo.OnlinePlayers`](/mod/game-api/types/assembly-api-models/gameserverinfo#m-onlineplayers), [`GroupMemberInfo.UserInfo`](/mod/game-api/types/assembly-api-models/groupmemberinfo#m-userinfo), [`PlayerReportInfo.ActingUser`](/mod/game-api/types/assembly-api-models/playerreportinfo#m-actinguser), [`PlayerReportInfo.ReportedUser`](/mod/game-api/types/assembly-api-models/playerreportinfo#m-reporteduser), [`PlayerReportInfo.ReportingUser`](/mod/game-api/types/assembly-api-models/playerreportinfo#m-reportinguser), [`RecentPlayerInteractionInfo.UserInfo`](/mod/game-api/types/assembly-api-models/recentplayerinteractioninfo#m-userinfo), [`TrialCommandModule.Players`](/mod/game-api/types/alta-console/trialcommandmodule#m-players), [`PickupActionData.DestinationUser`](/mod/game-api/types/alta-items/pickupactiondata#m-destinationuser), [`PickupEventStreamLogger.GetUserInfoFromDock`](/mod/game-api/types/alta-items/pickupeventstreamlogger#m-getuserinfofromdock), [`PickupEventStreamLogger.GetUserInfoFromInteractor`](/mod/game-api/types/alta-items/pickupeventstreamlogger#m-getuserinfofrominteractor), [`FriendsManager.ConfigureTokenForTab`](/mod/game-api/types/alta-menus/friendsmanager#m-configuretokenfortab), [`FriendsManager.DisplayUser`](/mod/game-api/types/alta-menus/friendsmanager#m-displayuser), [`FriendsManager.GetUserInfoToDisplay`](/mod/game-api/types/alta-menus/friendsmanager#m-getuserinfotodisplay), [`UserToken.Setup`](/mod/game-api/types/alta-menus/usertoken#m-setup), [`UserToken.UserInfo`](/mod/game-api/types/alta-menus/usertoken#m-userinfo), [`InviteUserToGroupPanel.SetupForUser`](/mod/game-api/types/alta-menus/inviteusertogrouppanel#m-setupforuser), [`InviteUserToGroupPanel.user`](/mod/game-api/types/alta-menus/inviteusertogrouppanel#m-user), [`InviteUserToGroupViaFriendsPanel.FinishInvite`](/mod/game-api/types/alta-menus/inviteusertogroupviafriendspanel#m-finishinvite), [`InviteUserToGroupViaFriendsPanel.InviteToGroup`](/mod/game-api/types/alta-menus/inviteusertogroupviafriendspanel#m-invitetogroup), [`InviteUserToGroupViaFriendsPanel.SpawnAltaFriendButtons`](/mod/game-api/types/alta-menus/inviteusertogroupviafriendspanel#m-spawnaltafriendbuttons), [`PlayerJoinLeaveData.user`](/mod/game-api/types/alta-networking/playerjoinleavedata#m-user), [`AuthenticationService.RegisterAccount`](/mod/game-api/types/assembly-other/authenticationservice#m-registeraccount), [`UserService.RegisterAccount`](/mod/game-api/types/assembly-other/userservice#m-registeraccount), [`IAuthenticationService.RegisterAccount`](/mod/game-api/types/assembly-other/iauthenticationservice#m-registeraccount), [`KilledData.killerPlayer`](/mod/game-api/types/alta-player/killeddata#m-killerplayer) and 23 more.

</div>
