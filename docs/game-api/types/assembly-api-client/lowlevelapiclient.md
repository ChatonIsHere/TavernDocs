---
title: "LowLevelApiClient"
description: "class LowLevelApiClient in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LowLevelApiClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.LowLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LowLevelApiClient(string baseUrl, string userAgent = null, float timeOutInSeconds = 40)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-apikey" /><code>{"const string ApiKey"}</code> |  |
| <Link id="m-apibaseuri" /><code>{"private const string ApiBaseUri"}</code> |  |
| <Link id="m-authenticationclient" /><code>{"private HttpClient authenticationClient"}</code> |  |
| <Link id="m-authorizedclient" /><code>{"private HttpClient authorizedClient"}</code> |  |
| <Link id="m-baseurl" /><code>{"private readonly string baseUrl"}</code> |  |
| <Link id="m-defaultclient" /><code>{"private HttpClient defaultClient"}</code> |  |
| <Link id="m-isanalyticsbatchprocessing" /><code>{"private bool isAnalyticsBatchProcessing"}</code> |  |
| <Link id="m-lasttimeout" /><code>{"private DateTime? lastTimeout"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> |  |
| <Link id="m-refreshcancel" /><code>{"private CancellationTokenSource refreshCancel"}</code> |  |
| <Link id="m-refreshinglogintask" /><code>{"private Task refreshingLoginTask"}</code> |  |
| <Link id="m-timeoutinseconds" /><code>{"private readonly float timeOutInSeconds"}</code> |  |
| <Link id="m-tokenexpirationleeway" /><code>{"private const int TokenExpirationLeeway"}</code> |  |
| <Link id="m-useragent" /><code>{"private readonly string userAgent"}</code> |  |
| <Link id="m-xrequestid" /><code>{"private const string XRequestId"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-credentials" /><code><Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" Credentials { get; private set; }"}</code> |  |
| <Link id="m-loggedinuser" /><code><Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" LoggedInUser { get; internal set; }"}</code> |  |
| <Link id="m-accountcontrolleruri" /><code>{"private static string AccountControllerUri { get; }"}</code> |  |
| <Link id="m-banscontrolleruri" /><code>{"private static string BansControllerUri { get; }"}</code> |  |
| <Link id="m-batchanalyticscontrolleruri" /><code>{"private static string BatchAnalyticsControllerUri { get; }"}</code> |  |
| <Link id="m-friendscontrolleruri" /><code>{"private static string FriendsControllerUri { get; }"}</code> |  |
| <Link id="m-futureuseractionscontrolleruri" /><code>{"private static string FutureUserActionsControllerUri { get; }"}</code> |  |
| <Link id="m-groupscontrolleruri" /><code>{"private static string GroupsControllerUri { get; }"}</code> |  |
| <Link id="m-instancescontrolleruri" /><code>{"private static string InstancesControllerUri { get; }"}</code> |  |
| <Link id="m-launchercontrolleruri" /><code>{"private static string LauncherControllerUri { get; }"}</code> |  |
| <Link id="m-loginsessionscontrolleruri" /><code>{"private static string LoginSessionsControllerUri { get; }"}</code> |  |
| <Link id="m-matchmakingcontrolleruri" /><code>{"private static string MatchMakingControllerUri { get; }"}</code> |  |
| <Link id="m-playerreportscontrolleruri" /><code>{"private static string PlayerReportsControllerUri { get; }"}</code> |  |
| <Link id="m-recentplayersbatchcontrolleruri" /><code>{"private string RecentPlayersBatchControllerUri { get; }"}</code> |  |
| <Link id="m-recentplayerscontrolleruri" /><code>{"private static string RecentPlayersControllerUri { get; }"}</code> |  |
| <Link id="m-regionscontrolleruri" /><code>{"private static string RegionsControllerUri { get; }"}</code> |  |
| <Link id="m-securitycontrolleruri" /><code>{"private static string SecurityControllerUri { get; }"}</code> |  |
| <Link id="m-serverscontrolleruri" /><code>{"private static string ServersControllerUri { get; }"}</code> |  |
| <Link id="m-servicescontrolleruri" /><code>{"private static string ServicesControllerUri { get; }"}</code> |  |
| <Link id="m-settingscontrolleruri" /><code>{"private static string SettingsControllerUri { get; }"}</code> |  |
| <Link id="m-shopaccountcontrolleruri" /><code>{"private static string ShopAccountControllerUri { get; }"}</code> |  |
| <Link id="m-shopcontrolleruri" /><code>{"private static string ShopControllerUri { get; }"}</code> |  |
| <Link id="m-shopdebugcontrolleruri" /><code>{"private static string ShopDebugControllerUri { get; }"}</code> |  |
| <Link id="m-shopoculuscontrolleruri" /><code>{"private static string ShopOculusControllerUri { get; }"}</code> |  |
| <Link id="m-shoppurchasecontrolleruri" /><code>{"private static string ShopPurchaseControllerUri { get; }"}</code> |  |
| <Link id="m-signupcodescontrolleruri" /><code>{"private static string SignUpCodesControllerUri { get; }"}</code> |  |
| <Link id="m-userscontrolleruri" /><code>{"private static string UsersControllerUri { get; }"}</code> |  |
| <Link id="m-voicecontrolleruri" /><code>{"private static string VoiceControllerUri { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-credentialschanged" /><code>{"event "}<Link to="/game-api/types/assembly-api-client/logincredentialschangedhandler">{"LoginCredentialsChangedHandler"}</Link>{" CredentialsChanged"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-acceptgroupinvite" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{"> AcceptGroupInvite(int groupIdentifier)"}</code> |  |
| <Link id="m-acceptgroupjoinrequest" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{"> AcceptGroupJoinRequest(int groupIdentifier, int userIdentifier)"}</code> |  |
| <Link id="m-addfriend" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/friendrequestresult">{"FriendRequestResult"}</Link>{"> AddFriend(int friendIdentifier)"}</code> |  |
| <Link id="m-addimagetoitemasync" /><code>{"async Task AddImageToItemAsync(int itemId, "}<Link to="/game-api/types/assembly-api-models/imagetype">{"ImageType"}</Link>{" imageType, string imagePath)"}</code> |  |
| <Link id="m-allocateserverformigration" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/allocationresult">{"AllocationResult"}</Link>{"> AllocateServerForMigration("}<Link to="/game-api/types/assembly-api-models/allocationrequest">{"AllocationRequest"}</Link>{" allocationRequest)"}</code> |  |
| <Link id="m-banuserasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/baninfo">{"BanInfo"}</Link>{"> BanUserAsync("}<Link to="/game-api/types/assembly-api-models/banrequest">{"BanRequest"}</Link>{" banRequest)"}</code> |  |
| <Link id="m-banuserfromgroup" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{"> BanUserFromGroup(int userIdentifier, int groupIdentifier)"}</code> |  |
| <Link id="m-cancellogintimer" /><code>{"void CancelLoginTimer()"}</code> |  |
| <Link id="m-cancreategroups" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/createcheckresponse">{"CreateCheckResponse"}</Link>{"> CanCreateGroups()"}</code> |  |
| <Link id="m-changeemail" /><code>{"async Task ChangeEmail("}<Link to="/game-api/types/assembly-api-models/verificationemailrequest">{"VerificationEmailRequest"}</Link>{" verificationRequest)"}</code> |  |
| <Link id="m-changepasswordasync" /><code>{"async Task ChangePasswordAsync("}<Link to="/game-api/types/assembly-api-models/changepasswordrequest">{"ChangePasswordRequest"}</Link>{" passwordRequest)"}</code> |  |
| <Link id="m-changeusernameasync" /><code>{"async Task ChangeUsernameAsync("}<Link to="/game-api/types/assembly-api-models/changeusernamerequest">{"ChangeUsernameRequest"}</Link>{" usernameRequest)"}</code> |  |
| <Link id="m-changeusersroleingroup" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{"> ChangeUsersRoleInGroup(int userIdentifier, int groupIdentifier, int roleIdentifier)"}</code> |  |
| <Link id="m-checkforsubscriptionrewardsasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/subscriptionrefreshresult">{"SubscriptionRefreshResult"}</Link>{"> CheckForSubscriptionRewardsAsync()"}</code> |  |
| <Link id="m-connectconsole" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/serverjoinresult">{"ServerJoinResult"}</Link>{"> ConnectConsole(int serverIdentifier, "}<Link to="/game-api/types/assembly-api-models/joinserverrequest">{"JoinServerRequest"}</Link>{" request)"}</code> |  |
| <Link id="m-consumealloculuspurchases" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/claimoculusitemsresponse">{"ClaimOculusItemsResponse"}</Link>{"> ConsumeAllOculusPurchases(string userToken)"}</code> |  |
| <Link id="m-createcosmeticpreset" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/userpresetdatainfo">{"UserPresetDataInfo"}</Link>{"> CreateCosmeticPreset("}<Link to="/game-api/types/assembly-api-models/createpresetrequest">{"CreatePresetRequest"}</Link>{" request)"}</code> |  |
| <Link id="m-createefsmigrationrecordforserver" /><code>{"async Task CreateEfsMigrationRecordForServer(int serverId)"}</code> |  |
| <Link id="m-createfriendship" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/friendrequestresult">{"FriendRequestResult"}</Link>{"> CreateFriendship(int userIdentifier, int friendIdentifier)"}</code> |  |
| <Link id="m-createfutureuseractions" /><code>{"async Task CreateFutureUserActions("}<Link to="/game-api/types/assembly-api-models/futureuseractioncreaterequest">{"FutureUserActionCreateRequest"}</Link>{" request)"}</code> |  |
| <Link id="m-createserver" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> CreateServer("}<Link to="/game-api/types/assembly-api-models/gameservercreaterequest">{"GameServerCreateRequest"}</Link>{" createServerRequest)"}</code> |  |
| <Link id="m-createshopitemasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{"> CreateShopItemAsync("}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" itemToCreate)"}</code> |  |
| <Link id="m-createshopitemsetasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{"> CreateShopItemSetAsync("}<Link to="/game-api/types/assembly-api-models/itemsetrequest">{"ItemSetRequest"}</Link>{" request)"}</code> |  |
| <Link id="m-deletebanasync" /><code>{"async Task DeleteBanAsync(int banIdentifier)"}</code> |  |
| <Link id="m-deletecosmeticpreset" /><code>{"async Task DeleteCosmeticPreset(int presetId)"}</code> |  |
| <Link id="m-deleteitem" /><code>{"async Task DeleteItem(int userIdentifier, int itemIdentifier)"}</code> |  |
| <Link id="m-deleteshopitemasync" /><code>{"async Task DeleteShopItemAsync(int itemIdentifier)"}</code> |  |
| <Link id="m-deleteshopitemgroupasync" /><code>{"async Task DeleteShopItemGroupAsync(int groupIdentifier)"}</code> |  |
| <Link id="m-deleteshopitemsetasync" /><code>{"async Task DeleteShopItemSetAsync(string setSku)"}</code> |  |
| <Link id="m-discoverservers" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> DiscoverServers()"}</code> |  |
| <Link id="m-downloadfile" /><code>{"async Task<Stream> DownloadFile(string url)"}</code> |  |
| <Link id="m-enqueueanalyticsevent" /><code>{"async Task EnqueueAnalyticsEvent("}<Link to="/game-api/types/assembly-api-models/analyticseventdata">{"AnalyticsEventData"}</Link>{" data)"}</code> |  |
| <Link id="m-generateidentitytokenasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/simpletokenresultresponse">{"SimpleTokenResultResponse"}</Link>{"> GenerateIdentityTokenAsync("}<Link to="/game-api/types/assembly-api-models/identitytokenrequest">{"IdentityTokenRequest"}</Link>{" request)"}</code> |  |
| <Link id="m-getachievementforuserasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/playerachievementresponse">{"PlayerAchievementResponse"}</Link>{"> GetAchievementForUserAsync(int userId)"}</code> |  |
| <Link id="m-getactionstatsforuserasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/playeractionstatresponse">{"PlayerActionStatResponse"}</Link>{"> GetActionStatsForUserAsync(int userId)"}</code> |  |
| <Link id="m-getallbans" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/baninfo">{"BanInfo"}</Link>{">> GetAllBans()"}</code> |  |
| <Link id="m-getallbansformoderator" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/baninfo">{"BanInfo"}</Link>{">> GetAllBansForModerator(int moderatorIdentifier)"}</code> |  |
| <Link id="m-getallbansforuser" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/baninfo">{"BanInfo"}</Link>{">> GetAllBansForUser(int userIdentifier)"}</code> |  |
| <Link id="m-getallcosmetics" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/userpresetdatainfo">{"UserPresetDataInfo"}</Link>{">> GetAllCosmetics()"}</code> |  |
| <Link id="m-getalllaunchergames" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/launchergameinfoshort">{"LauncherGameInfoShort"}</Link>{">> GetAllLauncherGames()"}</code> |  |
| <Link id="m-getallregions" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/regioninfo">{"RegionInfo"}</Link>{">> GetAllRegions()"}</code> |  |
| <Link id="m-getallrunninginstances" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/instanceinfo">{"InstanceInfo"}</Link>{">> GetAllRunningInstances(string region = null, string fleet = null, bool? onlyGetVisibleRegions = null)"}</code> |  |
| <Link id="m-getbestserver" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> GetBestServer("}<Link to="/game-api/types/assembly-api-models/matchmakingrequirements">{"MatchMakingRequirements"}</Link>{" request)"}</code> |  |
| <Link id="m-getcontrollableservers" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetControllableServers()"}</code> |  |
| <Link id="m-getcurrentshopconfiguration" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/shoppageconfiguration">{"ShopPageConfiguration"}</Link>{"> GetCurrentShopConfiguration()"}</code> |  |
| <Link id="m-getcurrentshopconfigurationforuser" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/shopitemdetailedforuser">{"ShopItemDetailedForUser"}</Link>{">> GetCurrentShopConfigurationForUser()"}</code> |  |
| <Link id="m-getcurrentshopconfigurationwithbanner" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/shoppageconfigurationwithbanner">{"ShopPageConfigurationWithBanner"}</Link>{"> GetCurrentShopConfigurationWithBanner()"}</code> |  |
| <Link id="m-getdiscordaccount" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/linkedaccountinfo">{"LinkedAccountInfo"}</Link>{"> GetDiscordAccount()"}</code> |  |
| <Link id="m-getdiscordaccount-2" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/linkedaccountinfo">{"LinkedAccountInfo"}</Link>{"> GetDiscordAccount(int userIdentifier)"}</code> |  |
| <Link id="m-getfriendrequests" /><code><Link to="/game-api/types/assembly-api-client/pagedresult-t">{"PagedResult"}</Link>{"<"}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{"> GetFriendRequests("}<Link to="/game-api/types/assembly-api-client/pagedconfig">{"PagedConfig"}</Link>{" config = null)"}</code> |  |
| <Link id="m-getfriends" /><code><Link to="/game-api/types/assembly-api-client/pagedresult-t">{"PagedResult"}</Link>{"<"}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{"> GetFriends("}<Link to="/game-api/types/assembly-api-client/pagedconfig">{"PagedConfig"}</Link>{" config = null)"}</code> |  |
| <Link id="m-getfriendsforuser" /><code><Link to="/game-api/types/assembly-api-client/pagedresult-t">{"PagedResult"}</Link>{"<"}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{"> GetFriendsForUser(int userIdentifier, "}<Link to="/game-api/types/assembly-api-client/pagedconfig">{"PagedConfig"}</Link>{" config = null)"}</code> |  |
| <Link id="m-getfriendship" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{"> GetFriendship(int userIdentifier, int friendIdentifier)"}</code> |  |
| <Link id="m-getfullitemdescriptions" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/shopitem">{"ShopItem"}</Link>{">> GetFullItemDescriptions(IEnumerable<int> itemIdentifiers)"}</code> |  |
| <Link id="m-getgroupbans" /><code><Link to="/game-api/types/assembly-api-client/pagedresult-t">{"PagedResult"}</Link>{"<"}<Link to="/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{"> GetGroupBans(int groupIdentifier, "}<Link to="/game-api/types/assembly-api-client/pagedconfig">{"PagedConfig"}</Link>{" config = null)"}</code> |  |
| <Link id="m-getgroupbyidentifier" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/groupinfodetailed">{"GroupInfoDetailed"}</Link>{"> GetGroupByIdentifier(int groupIdentifier)"}</code> |  |
| <Link id="m-getgroupinvites" /><code><Link to="/game-api/types/assembly-api-client/pagedresult-t">{"PagedResult"}</Link>{"<"}<Link to="/game-api/types/assembly-api-models/invitedgroupinfo">{"InvitedGroupInfo"}</Link>{"> GetGroupInvites("}<Link to="/game-api/types/assembly-api-client/pagedconfig">{"PagedConfig"}</Link>{" config = null)"}</code> |  |
| <Link id="m-getgroupjoinrequests" /><code><Link to="/game-api/types/assembly-api-client/pagedresult-t">{"PagedResult"}</Link>{"<"}<Link to="/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{"> GetGroupJoinRequests(int groupIdentifier, "}<Link to="/game-api/types/assembly-api-client/pagedconfig">{"PagedConfig"}</Link>{" config = null)"}</code> |  |
| <Link id="m-getgroupmemberinfo" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{"> GetGroupMemberInfo(int groupIdentifier, int userIdentifier)"}</code> |  |
| <Link id="m-getgroupmembers" /><code><Link to="/game-api/types/assembly-api-client/pagedresult-t">{"PagedResult"}</Link>{"<"}<Link to="/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{"> GetGroupMembers(int groupIdentifier, "}<Link to="/game-api/types/assembly-api-client/pagedconfig">{"PagedConfig"}</Link>{" config = null)"}</code> |  |
| <Link id="m-getgroupsbytype" /><code><Link to="/game-api/types/assembly-api-client/pagedresult-t">{"PagedResult"}</Link>{"<"}<Link to="/game-api/types/assembly-api-models/groupinfo">{"GroupInfo"}</Link>{"> GetGroupsByType("}<Link to="/game-api/types/assembly-api-models/grouptype">{"GroupType"}</Link>{" type, "}<Link to="/game-api/types/assembly-api-client/pagedconfig">{"PagedConfig"}</Link>{" config = null)"}</code> |  |
| <Link id="m-getinvitesingroup" /><code><Link to="/game-api/types/assembly-api-client/pagedresult-t">{"PagedResult"}</Link>{"<"}<Link to="/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{"> GetInvitesInGroup(int groupIdentifier, "}<Link to="/game-api/types/assembly-api-client/pagedconfig">{"PagedConfig"}</Link>{" config = null)"}</code> |  |
| <Link id="m-getjoinedgroups" /><code><Link to="/game-api/types/assembly-api-client/pagedresult-t">{"PagedResult"}</Link>{"<"}<Link to="/game-api/types/assembly-api-models/joinedgroupinfo">{"JoinedGroupInfo"}</Link>{"> GetJoinedGroups("}<Link to="/game-api/types/assembly-api-client/pagedconfig">{"PagedConfig"}</Link>{" config = null)"}</code> |  |
| <Link id="m-getjoinedservers" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetJoinedServers()"}</code> |  |
| <Link id="m-getlatestefsmigrationforserver" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/migrationdetailsresponse">{"MigrationDetailsResponse"}</Link>{"> GetLatestEfsMigrationForServer(int serverId)"}</code> |  |
| <Link id="m-getlaunchergame" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/launchergameinfofull">{"LauncherGameInfoFull"}</Link>{"> GetLauncherGame(int gameIdentifier)"}</code> |  |
| <Link id="m-getlinkedaccountforoculususer" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> GetLinkedAccountForOculusUser("}<Link to="/game-api/types/assembly-api-models/accountrequestbase">{"AccountRequestBase"}</Link>{" request)"}</code> |  |
| <Link id="m-getlinkedaccountforpicouser" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> GetLinkedAccountForPicoUser("}<Link to="/game-api/types/assembly-api-models/accountrequestbase">{"AccountRequestBase"}</Link>{" request)"}</code> |  |
| <Link id="m-getmembershipstatus" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/membershipstatusresponse">{"MembershipStatusResponse"}</Link>{"> GetMembershipStatus(int userIdentifer)"}</code> |  |
| <Link id="m-getoculusfriendships" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/oculusfriendinfo">{"OculusFriendInfo"}</Link>{">> GetOculusFriendships("}<Link to="/game-api/types/assembly-api-models/oculusfriendslist">{"OculusFriendsList"}</Link>{" request)"}</code> |  |
| <Link id="m-getonlineservers" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetOnlineServers()"}</code> |  |
| <Link id="m-getopenservers" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetOpenServers()"}</code> |  |
| <Link id="m-getowneditems" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/ownedshopitem">{"OwnedShopItem"}</Link>{">> GetOwnedItems()"}</code> |  |
| <Link id="m-getpublicipaddressasync" /><code>{"async Task<IPAddress> GetPublicIpAddressAsync()"}</code> |  |
| <Link id="m-getpublicservers" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetPublicServers()"}</code> |  |
| <Link id="m-getrequestedgroups" /><code><Link to="/game-api/types/assembly-api-client/pagedresult-t">{"PagedResult"}</Link>{"<"}<Link to="/game-api/types/assembly-api-models/groupinfo">{"GroupInfo"}</Link>{"> GetRequestedGroups("}<Link to="/game-api/types/assembly-api-client/pagedconfig">{"PagedConfig"}</Link>{" config = null)"}</code> |  |
| <Link id="m-getsentfriendrequests" /><code><Link to="/game-api/types/assembly-api-client/pagedresult-t">{"PagedResult"}</Link>{"<"}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{"> GetSentFriendRequests("}<Link to="/game-api/types/assembly-api-client/pagedconfig">{"PagedConfig"}</Link>{" config = null)"}</code> |  |
| <Link id="m-getserverinfo" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> GetServerInfo(int serverIdentifier)"}</code> |  |
| <Link id="m-getserversbyname" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetServersByName(string name)"}</code> |  |
| <Link id="m-getserverswithplayer" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{">> GetServersWithPlayer(int playerId)"}</code> |  |
| <Link id="m-getsettings" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/settings">{"Settings"}</Link>{"> GetSettings(string name)"}</code> |  |
| <Link id="m-getshopaccountdetailsasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/shopaccountinfo">{"ShopAccountInfo"}</Link>{"> GetShopAccountDetailsAsync()"}</code> |  |
| <Link id="m-getshopaccountdetailsasync-2" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/shopaccountinfo">{"ShopAccountInfo"}</Link>{"> GetShopAccountDetailsAsync(int userIdentifier)"}</code> |  |
| <Link id="m-getshopitemasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{"> GetShopItemAsync(int itemIdentifier)"}</code> |  |
| <Link id="m-getshopitemsetasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{"> GetShopItemSetAsync(string setSku)"}</code> |  |
| <Link id="m-getshoptokenasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/shoptokenresponse">{"ShopTokenResponse"}</Link>{"> GetShopTokenAsync("}<Link to="/game-api/types/assembly-api-models/requestshoptokenrequest">{"RequestShopTokenRequest"}</Link>{" requestShopToken)"}</code> |  |
| <Link id="m-getuserasync" /><code>{"async Task<T> GetUserAsync<T>(int userIdentifier)"}</code> |  |
| <Link id="m-getuserbyusernameasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> GetUserByUsernameAsync("}<Link to="/game-api/types/assembly-api-models/searchbyusernamerequest">{"SearchByUsernameRequest"}</Link>{" request)"}</code> |  |
| <Link id="m-getuserpermissionsforgroup" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{">> GetUserPermissionsForGroup(int groupIdentifier, int userIdentifier)"}</code> |  |
| <Link id="m-getuserpermissionsforserver" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{">> GetUserPermissionsForServer(int serverIdentifier, int userIdentifier)"}</code> |  |
| <Link id="m-getusersstatistics" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/userstatistics">{"UserStatistics"}</Link>{"> GetUsersStatistics(int userIdentifer)"}</code> |  |
| <Link id="m-getuserwithpermissionsasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{"> GetUserWithPermissionsAsync(int userIdentifier)"}</code> |  |
| <Link id="m-getvoicetokenasync" /><code>{"async Task<string> GetVoiceTokenAsync("}<Link to="/game-api/types/assembly-api-models/voicechattokenrequest">{"VoiceChatTokenRequest"}</Link>{" request)"}</code> |  |
| <Link id="m-giftitem" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/giftresult">{"GiftResult"}</Link>{"> GiftItem(int userIdentifier, string itemSku)"}</code> |  |
| <Link id="m-giveuserroleasync" /><code>{"async Task GiveUserRoleAsync(int userIdentifer, "}<Link to="/game-api/types/assembly-api-models/giverolerequest">{"GiveRoleRequest"}</Link>{" giveRoleRequest)"}</code> |  |
| <Link id="m-handleforbiddenorotherhttpstatus" /><code>{"static async Task<Exception> HandleForbiddenOrOtherHttpStatus(HttpResponseMessage response)"}</code> |  |
| <Link id="m-handlenewauthenticationtokens" /><code><Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" HandleNewAuthenticationTokens("}<Link to="/game-api/types/assembly-api-models/tokenresultresponse">{"TokenResultResponse"}</Link>{" tokens, bool isCallingEvents = true)"}</code> |  |
| <Link id="m-handleresponse" /><code>{"static async Task<T> HandleResponse<T>(HttpResponseMessage response)"}</code> |  |
| <Link id="m-haslinkedaccountforoculususer" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/booleanresponse">{"BooleanResponse"}</Link>{"> HasLinkedAccountForOculusUser(ulong otherAccountId, "}<Link to="/game-api/types/assembly-api-models/accountrequestbase">{"AccountRequestBase"}</Link>{" request)"}</code> |  |
| <Link id="m-haslinkedaccountforpicouser" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/booleanresponse">{"BooleanResponse"}</Link>{"> HasLinkedAccountForPicoUser(ulong otherAccountId, "}<Link to="/game-api/types/assembly-api-models/accountrequestbase">{"AccountRequestBase"}</Link>{" request)"}</code> |  |
| <Link id="m-haspermissionsingroup" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/booleanresponse">{"BooleanResponse"}</Link>{"> HasPermissionsInGroup(int groupIdentifier, int userIdentifier, "}<Link to="/game-api/types/assembly-api-models/grouppermissionscheckrequest">{"GroupPermissionsCheckRequest"}</Link>{" request)"}</code> |  |
| <Link id="m-haspermissionsinserver" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/booleanresponse">{"BooleanResponse"}</Link>{"> HasPermissionsInServer(int serverIdentifier, int userIdentifier, "}<Link to="/game-api/types/assembly-api-models/grouppermissionscheckrequest">{"GroupPermissionsCheckRequest"}</Link>{" request)"}</code> |  |
| <Link id="m-inviteusertogroup" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{"> InviteUserToGroup(int groupIdentifier, int userIdentifier)"}</code> |  |
| <Link id="m-isuserverifiedasync" /><code>{"async Task<bool> IsUserVerifiedAsync(int userIdentifer)"}</code> |  |
| <Link id="m-joinserver" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/serverjoinresult">{"ServerJoinResult"}</Link>{"> JoinServer(int serverIdentifier, "}<Link to="/game-api/types/assembly-api-models/joinserverrequest">{"JoinServerRequest"}</Link>{" request)"}</code> |  |
| <Link id="m-kickuserfromgroup" /><code>{"async Task KickUserFromGroup(int userIdentifier, int groupIdentifier)"}</code> |  |
| <Link id="m-leavegroup" /><code>{"async Task LeaveGroup(int groupIdentifier)"}</code> |  |
| <Link id="m-linkdiscordaccount" /><code>{"async Task LinkDiscordAccount("}<Link to="/game-api/types/assembly-api-models/linkaccountrequest">{"LinkAccountRequest"}</Link>{" request)"}</code> |  |
| <Link id="m-linkloggedinaccounttooculususer" /><code>{"async Task LinkLoggedInAccountToOculusUser("}<Link to="/game-api/types/assembly-api-models/accountrequestbase">{"AccountRequestBase"}</Link>{" request)"}</code> |  |
| <Link id="m-linkloggedinaccounttopicouser" /><code>{"async Task LinkLoggedInAccountToPicoUser("}<Link to="/game-api/types/assembly-api-models/accountrequestbase">{"AccountRequestBase"}</Link>{" request)"}</code> |  |
| <Link id="m-loginasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{"> LoginAsync(string cachedRefreshToken)"}</code> |  |
| <Link id="m-loginasync-2" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{"> LoginAsync("}<Link to="/game-api/types/assembly-api-models/loginrequest">{"LoginRequest"}</Link>{" loginRequest)"}</code> |  |
| <Link id="m-loginwithemailasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{"> LoginWithEmailAsync("}<Link to="/game-api/types/assembly-api-models/loginwithemailrequest">{"LoginWithEmailRequest"}</Link>{" loginRequest)"}</code> |  |
| <Link id="m-loginwithoculususer" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{"> LoginWithOculusUser("}<Link to="/game-api/types/assembly-api-models/loginvialinkedaccountrequest">{"LoginViaLinkedAccountRequest"}</Link>{" request)"}</code> |  |
| <Link id="m-loginwithpicouser" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{"> LoginWithPicoUser("}<Link to="/game-api/types/assembly-api-models/loginvialinkedaccountrequest">{"LoginViaLinkedAccountRequest"}</Link>{" request)"}</code> |  |
| <Link id="m-loginwithtokenasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{"> LoginWithTokenAsync("}<Link to="/game-api/types/assembly-api-models/clienttokenconfig">{"ClientTokenConfig"}</Link>{" clientTokenConfig)"}</code> |  |
| <Link id="m-logout" /><code>{"void Logout()"}</code> |  |
| <Link id="m-pingserversession" /><code>{"async Task PingServerSession(int serverIdentifier, int serverSession)"}</code> |  |
| <Link id="m-purchaseitem" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/purchaseresult">{"PurchaseResult"}</Link>{"> PurchaseItem("}<Link to="/game-api/types/assembly-api-models/purchaseitemtokenrequest">{"PurchaseItemTokenRequest"}</Link>{" request)"}</code> |  |
| <Link id="m-quickcreategroupandserver" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/quickcreateresponse">{"QuickCreateResponse"}</Link>{"> QuickCreateGroupAndServer("}<Link to="/game-api/types/assembly-api-models/creategroupandserverrequest">{"CreateGroupAndServerRequest"}</Link>{" request)"}</code> |  |
| <Link id="m-refreshloginasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{"> RefreshLoginAsync()"}</code> |  |
| <Link id="m-registerasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> RegisterAsync("}<Link to="/game-api/types/assembly-api-models/registerrequest">{"RegisterRequest"}</Link>{" registerRequest)"}</code> |  |
| <Link id="m-rejectgroupinvite" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{"> RejectGroupInvite(int groupIdentifier)"}</code> |  |
| <Link id="m-rejectgroupjoinrequest" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{"> RejectGroupJoinRequest(int groupIdentifier, int userIdentifier)"}</code> |  |
| <Link id="m-removefriend" /><code>{"async Task RemoveFriend(int friendIdentifier)"}</code> |  |
| <Link id="m-requestbufferchange" /><code>{"async Task RequestBufferChange("}<Link to="/game-api/types/assembly-api-models/bufferchangerequest">{"BufferChangeRequest"}</Link>{" bufferChangeRequest)"}</code> |  |
| <Link id="m-requestpasswordresetasync" /><code>{"async Task RequestPasswordResetAsync("}<Link to="/game-api/types/assembly-api-models/requestpasswordresetrequest">{"RequestPasswordResetRequest"}</Link>{" resetRequest)"}</code> |  |
| <Link id="m-requestsignupcode" /><code>{"async Task RequestSignupCode("}<Link to="/game-api/types/assembly-api-models/generatesignupcoderequest">{"GenerateSignUpCodeRequest"}</Link>{" signupRequest)"}</code> |  |
| <Link id="m-requesttojoingroup" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{"> RequestToJoinGroup(int groupIdentifier)"}</code> |  |
| <Link id="m-resetpasswordasync" /><code>{"async Task ResetPasswordAsync(int userId, "}<Link to="/game-api/types/assembly-api-models/resetpasswordrequest">{"ResetPasswordRequest"}</Link>{" resetRequest)"}</code> |  |
| <Link id="m-revokegroupinvite" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{"> RevokeGroupInvite(int groupIdentifier, int userIdentifier)"}</code> |  |
| <Link id="m-revokegroupjoinrequest" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{"> RevokeGroupJoinRequest(int groupIdentifier)"}</code> |  |
| <Link id="m-revokeuserbaningroup" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{"> RevokeUserBanInGroup(int userIdentifier, int groupIdentifier)"}</code> |  |
| <Link id="m-senduserverificationemailasync" /><code>{"async Task SendUserVerificationEmailAsync(int userIdentifier, "}<Link to="/game-api/types/assembly-api-models/verificationemailrequest">{"VerificationEmailRequest"}</Link>{" verificationRequest)"}</code> |  |
| <Link id="m-setonlineplayers" /><code>{"async Task SetOnlinePlayers(int serverIdentifier, "}<Link to="/game-api/types/assembly-api-models/setserversonlineplayersrequest">{"SetServersOnlinePlayersRequest"}</Link>{" onlineRequest)"}</code> |  |
| <Link id="m-setserveroffline" /><code>{"async Task SetServerOffline(int serverIdentifier, bool isForced)"}</code> |  |
| <Link id="m-setserveronline" /><code>{"async Task SetServerOnline(int serverIdentifier)"}</code> |  |
| <Link id="m-setsettings" /><code>{"async Task SetSettings(string name, string content)"}</code> |  |
| <Link id="m-startlocalserver" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/startserversessionresponse">{"StartServerSessionResponse"}</Link>{"> StartLocalServer(int serverIdentifier, "}<Link to="/game-api/types/assembly-api-models/launchlocalserverrequest">{"LaunchLocalServerRequest"}</Link>{" request)"}</code> |  |
| <Link id="m-startserversession" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/startserversessionresponse">{"StartServerSessionResponse"}</Link>{"> StartServerSession(int serverIdentifier, string gameVersion)"}</code> |  |
| <Link id="m-stoplocalserver" /><code>{"async Task StopLocalServer(int serverIdentifier)"}</code> |  |
| <Link id="m-stopserversession" /><code>{"async Task StopServerSession(int serverIdentifier, int serverSession, "}<Link to="/game-api/types/assembly-api-models/shutdownreason">{"ShutdownReason"}</Link>{" endReason)"}</code> |  |
| <Link id="m-testasync" /><code>{"async Task<string> TestAsync()"}</code> |  |
| <Link id="m-unlinkdiscordaccount" /><code>{"async Task UnLinkDiscordAccount("}<Link to="/game-api/types/assembly-api-models/unlinkaccountrequest">{"UnlinkAccountRequest"}</Link>{" request)"}</code> |  |
| <Link id="m-unlinkloggedinaccounttooculususer" /><code>{"async Task UnlinkLoggedInAccountToOculusUser("}<Link to="/game-api/types/assembly-api-models/accountrequestbase">{"AccountRequestBase"}</Link>{" request)"}</code> |  |
| <Link id="m-unlinkloggedinaccounttopicouser" /><code>{"async Task UnlinkLoggedInAccountToPicoUser("}<Link to="/game-api/types/assembly-api-models/accountrequestbase">{"AccountRequestBase"}</Link>{" request)"}</code> |  |
| <Link id="m-updateachievementforuserasync" /><code>{"async Task UpdateAchievementForUserAsync(int userId, "}<Link to="/game-api/types/assembly-api-models/updateachievementrequest">{"UpdateAchievementRequest"}</Link>{" request)"}</code> |  |
| <Link id="m-updateactionstatforuserasync" /><code>{"async Task UpdateActionStatForUserAsync(int userId, "}<Link to="/game-api/types/assembly-api-models/updateactionstatrequest">{"UpdateActionStatRequest"}</Link>{" request)"}</code> |  |
| <Link id="m-updategroupinfo" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/groupinfodetailed">{"GroupInfoDetailed"}</Link>{"> UpdateGroupInfo(int groupIdentifier, "}<Link to="/game-api/types/assembly-api-models/editgrouprequest">{"EditGroupRequest"}</Link>{" request)"}</code> |  |
| <Link id="m-updateshopitemasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{"> UpdateShopItemAsync(int itemIdentifier, "}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" itemToUpdate)"}</code> |  |
| <Link id="m-updateshopitemsetasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{"> UpdateShopItemSetAsync(string setSku, "}<Link to="/game-api/types/assembly-api-models/itemsetrequest">{"ItemSetRequest"}</Link>{" request)"}</code> |  |
| <Link id="m-uploadfileasync" /><code>{"async Task UploadFileAsync(string uploadUrl, FileStream file, string fileName)"}</code> |  |
| <Link id="m-validateemail" /><code>{"async Task ValidateEmail("}<Link to="/game-api/types/assembly-api-models/emailvalidationrequest">{"EmailValidationRequest"}</Link>{" request)"}</code> |  |
| <Link id="m-validateidentitytoken" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/booleanresponse">{"BooleanResponse"}</Link>{"> ValidateIdentityToken(string token)"}</code> |  |
| <Link id="m-validateidentitytokenasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/booleanresponse">{"BooleanResponse"}</Link>{"> ValidateIdentityTokenAsync("}<Link to="/game-api/types/assembly-api-models/identitytokenvalidationrequest">{"IdentityTokenValidationRequest"}</Link>{" validationRequest)"}</code> |  |
| <Link id="m-validateitemsownershipasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/validateitemownershipresponse">{"ValidateItemOwnershipResponse"}</Link>{"> ValidateItemsOwnershipAsync("}<Link to="/game-api/types/assembly-api-models/validateitemownershiprequest">{"ValidateItemOwnershipRequest"}</Link>{" validateItemOwnershipRequest)"}</code> |  |
| <Link id="m-validateusername" /><code>{"async Task<string> ValidateUsername("}<Link to="/game-api/types/assembly-api-models/usernamevalidationrequest">{"UsernameValidationRequest"}</Link>{" request)"}</code> |  |
| <Link id="m-verifyuserasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> VerifyUserAsync(int userIdentifer, "}<Link to="/game-api/types/assembly-api-models/verifyuserrequest">{"VerifyUserRequest"}</Link>{" verifyRequest)"}</code> |  |
| <Link id="m-verifyusersmembership" /><code>{"async Task VerifyUsersMemberShip(int userId)"}</code> |  |
| <Link id="m-cancelrefreshroutine" /><code>{"private void CancelRefreshRoutine()"}</code> |  |
| <Link id="m-createapierrorexceptionasync" /><code>{"private static async Task<"}<Link to="/game-api/types/assembly-api-models/apierrorexception">{"ApiErrorException"}</Link>{"> CreateApiErrorExceptionAsync(HttpResponseMessage response)"}</code> |  |
| <Link id="m-createhttpclient" /><code>{"private HttpClient CreateHttpClient(string baseUrl, float timeOutInSeconds)"}</code> |  |
| <Link id="m-enqueuerecentplayerinteraction" /><code>{"internal async Task EnqueueRecentPlayerInteraction("}<Link to="/game-api/types/assembly-api-models/recentplayerinteractionrequest">{"RecentPlayerInteractionRequest"}</Link>{" request)"}</code> |  |
| <Link id="m-ensureloggedinasync" /><code>{"private async Task EnsureLoggedInAsync()"}</code> |  |
| <Link id="m-generatehttpclients" /><code>{"private void GenerateHttpClients()"}</code> |  |
| <Link id="m-getallrecentplayerinteractions" /><code>{"internal async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{">> GetAllRecentPlayerInteractions(int limit = 25)"}</code> |  |
| <Link id="m-getallrecentplayerinteractionsonserver" /><code>{"internal async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{">> GetAllRecentPlayerInteractionsOnServer(int serverId, int limit = 25)"}</code> |  |
| <Link id="m-getfriendrequestsinternal" /><code>{"private async Task<HttpResponseMessage> GetFriendRequestsInternal("}<Link to="/game-api/types/assembly-api-client/pagedconfig">{"PagedConfig"}</Link>{" config)"}</code> |  |
| <Link id="m-getfriendsforuserinternal" /><code>{"private async Task<HttpResponseMessage> GetFriendsForUserInternal(int userIdentifier, "}<Link to="/game-api/types/assembly-api-client/pagedconfig">{"PagedConfig"}</Link>{" config = null)"}</code> |  |
| <Link id="m-getfriendsinternal" /><code>{"private async Task<HttpResponseMessage> GetFriendsInternal("}<Link to="/game-api/types/assembly-api-client/pagedconfig">{"PagedConfig"}</Link>{" config = null)"}</code> |  |
| <Link id="m-getplayerreports" /><code>{"internal async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/playerreportinfo">{"PlayerReportInfo"}</Link>{">> GetPlayerReports("}<Link to="/game-api/types/assembly-api-models/reportstatus">{"ReportStatus"}</Link>{"? statusFilter = null, int? serverFilter = null)"}</code> |  |
| <Link id="m-getsentfriendrequestsinternal" /><code>{"private async Task<HttpResponseMessage> GetSentFriendRequestsInternal("}<Link to="/game-api/types/assembly-api-client/pagedconfig">{"PagedConfig"}</Link>{" config)"}</code> |  |
| <Link id="m-handleemptyresponse" /><code>{"private static async Task HandleEmptyResponse(HttpResponseMessage response)"}</code> |  |
| <Link id="m-handleemptyresponsewithbadrequest" /><code>{"private static async Task HandleEmptyResponseWithBadRequest(HttpResponseMessage response)"}</code> |  |
| <Link id="m-handleemptyresponsewithbadrequestornotfound" /><code>{"private static async Task HandleEmptyResponseWithBadRequestOrNotFound(HttpResponseMessage response)"}</code> |  |
| <Link id="m-handleforbiddenorotherhttpstatus-2" /><code>{"private static Exception HandleForbiddenOrOtherHttpStatus(HttpWebResponse response)"}</code> |  |
| <Link id="m-handlerefreshtokenresponseasync" /><code>{"private async Task<"}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{"> HandleRefreshTokenResponseAsync(HttpResponseMessage response)"}</code> |  |
| <Link id="m-handleresponsewithbadrequestornotfound" /><code>{"private static async Task<T> HandleResponseWithBadRequestOrNotFound<T>(HttpResponseMessage response)"}</code> |  |
| <Link id="m-handletimeout" /><code>{"private void HandleTimeout(HttpRequestMessage request)"}</code> |  |
| <Link id="m-handletokenresponseasync" /><code>{"private async Task<"}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{"> HandleTokenResponseAsync(HttpResponseMessage response)"}</code> |  |
| <Link id="m-modifyplayerreport" /><code>{"internal async Task<"}<Link to="/game-api/types/assembly-api-models/playerreportinfo">{"PlayerReportInfo"}</Link>{"> ModifyPlayerReport(Guid reportIdentifer, "}<Link to="/game-api/types/assembly-api-models/modifyreportrequest">{"ModifyReportRequest"}</Link>{" request)"}</code> |  |
| <Link id="m-onnewcredentials" /><code>{"private void OnNewCredentials("}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" newCredentials, bool isCallingEvents = true)"}</code> |  |
| <Link id="m-refreshloginsessionusingtokenasync" /><code>{"private async Task<"}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{"> RefreshLoginSessionUsingTokenAsync(JwtSecurityToken refreshToken)"}</code> |  |
| <Link id="m-reportplayer" /><code>{"internal async Task<"}<Link to="/game-api/types/assembly-api-models/playerreportinfo">{"PlayerReportInfo"}</Link>{"> ReportPlayer("}<Link to="/game-api/types/assembly-api-models/createreportrequest">{"CreateReportRequest"}</Link>{" request)"}</code> |  |
| <Link id="m-scheduleaction" /><code>{"private async void ScheduleAction(Action action, DateTime executionTime, CancellationToken cancelToken)"}</code> |  |
| <Link id="m-setauthenticationheaderonauthenticationclient" /><code>{"private void SetAuthenticationHeaderOnAuthenticationClient(string refreshTokenString)"}</code> |  |
| <Link id="m-updaterefreshtokenasync" /><code>{"private async void UpdateRefreshTokenAsync()"}</code> |  |

## Used in

Members of other types that take, return or hold a `LowLevelApiClient`:

[`AcceptReject.AcceptReject`](/game-api/types/assembly-api-client/acceptreject#m-ctor), [`AcceptReject.api`](/game-api/types/assembly-api-client/acceptreject#m-api), [`GroupBan.GroupBan`](/game-api/types/assembly-api-client/groupban#m-ctor), [`GroupBans.GroupBans`](/game-api/types/assembly-api-client/groupbans#m-ctor), [`GroupCreator.api`](/game-api/types/assembly-api-client/groupcreator#m-api), [`GroupCreator.GroupCreator`](/game-api/types/assembly-api-client/groupcreator#m-ctor), [`GroupDiscovery.api`](/game-api/types/assembly-api-client/groupdiscovery#m-api), [`GroupDiscovery.GroupDiscovery`](/game-api/types/assembly-api-client/groupdiscovery#m-ctor), [`GroupGet.GroupGet`](/game-api/types/assembly-api-client/groupget#m-ctor), [`GroupInfoManager.GroupInfoManager`](/game-api/types/assembly-api-client/groupinfomanager#m-ctor), [`GroupInfoUpdate.api`](/game-api/types/assembly-api-client/groupinfoupdate#m-api), [`GroupInfoUpdate.GroupInfoUpdate`](/game-api/types/assembly-api-client/groupinfoupdate#m-ctor), [`GroupInvites.GroupInvites`](/game-api/types/assembly-api-client/groupinvites#m-ctor), [`GroupJoinRequests.GroupJoinRequests`](/game-api/types/assembly-api-client/groupjoinrequests#m-ctor), [`GroupMember.api`](/game-api/types/assembly-api-client/groupmember#m-api), [`GroupMember.GroupMember`](/game-api/types/assembly-api-client/groupmember#m-ctor), [`GroupMembers.GroupMembers`](/game-api/types/assembly-api-client/groupmembers#m-ctor), [`GroupRoles.api`](/game-api/types/assembly-api-client/grouproles#m-api), [`GroupRoles.GroupRoles`](/game-api/types/assembly-api-client/grouproles#m-ctor), [`HighLevelApiClient.Alta.Api.Client.HighLevel.IHighLevelApiClientManager.ApiClient`](/game-api/types/assembly-api-client/highlevelapiclient#m-alta-api-client-highlevel-ihighlevelapiclientmanager-apiclient), [`HighLevelApiClient.LowLevel`](/game-api/types/assembly-api-client/highlevelapiclient#m-lowlevel), [`IHighLevelApiClient.LowLevel`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-lowlevel), [`IHighLevelApiClientManager.ApiClient`](/game-api/types/assembly-api-client/ihighlevelapiclientmanager#m-apiclient), [`IncomingGroupInvite.IncomingGroupInvite`](/game-api/types/assembly-api-client/incominggroupinvite#m-ctor), [`IncomingGroupJoinRequest.IncomingGroupJoinRequest`](/game-api/types/assembly-api-client/incominggroupjoinrequest#m-ctor), [`InvitedGroups.InvitedGroups`](/game-api/types/assembly-api-client/invitedgroups#m-ctor), [`JoinableGroupInfo.api`](/game-api/types/assembly-api-client/joinablegroupinfo#m-api), [`JoinableGroupInfo.JoinableGroupInfo`](/game-api/types/assembly-api-client/joinablegroupinfo#m-ctor), [`JoinedGroupManager.api`](/game-api/types/assembly-api-client/joinedgroupmanager#m-api), [`JoinedGroupManager.JoinedGroupManager`](/game-api/types/assembly-api-client/joinedgroupmanager#m-ctor), [`JoinedGroups.JoinedGroups`](/game-api/types/assembly-api-client/joinedgroups#m-ctor), [`OfflineHighLevelApiClient.LowLevel`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-lowlevel), [`Outgoing.api`](/game-api/types/assembly-api-client/outgoing#m-api), [`Outgoing.Outgoing`](/game-api/types/assembly-api-client/outgoing#m-ctor), [`OutgoingGroupInvite.OutgoingGroupInvite`](/game-api/types/assembly-api-client/outgoinggroupinvite#m-ctor), [`OutgoingGroupJoinRequest.OutgoingGroupJoinRequest`](/game-api/types/assembly-api-client/outgoinggroupjoinrequest#m-ctor), [`OutgoingPrivateGroupJoinRequest.OutgoingPrivateGroupJoinRequest`](/game-api/types/assembly-api-client/outgoingprivategroupjoinrequest#m-ctor), [`PaginatedList<T>.api`](/game-api/types/assembly-api-client/paginatedlist-t#m-api), [`PaginatedList<T>.PaginatedList<T>`](/game-api/types/assembly-api-client/paginatedlist-t#m-ctor), [`PaginatedListWithAdd<T>.PaginatedListWithAdd<T>`](/game-api/types/assembly-api-client/paginatedlistwithadd-t#m-ctor), [`PersonalGroups.api`](/game-api/types/assembly-api-client/personalgroups#m-api), [`PersonalGroups.PersonalGroups`](/game-api/types/assembly-api-client/personalgroups#m-ctor), [`RequestedGroups.RequestedGroups`](/game-api/types/assembly-api-client/requestedgroups#m-ctor).
