---
title: "HighLevelApiClient"
description: "The online client for Alta's web API, one sub-client per area."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HighLevelApiClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

The online client for Alta's web API, one sub-client per area. Made by `HighLevelApiClientFactory` and reached through `ApiAccess.ApiClient`. Both sides; most calls now time out because the services are gone.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`IHighLevelApiClientManager`](/mod/game-api/types/assembly-api-client/ihighlevelapiclientmanager), [`IHighLevelApiClient`](/mod/game-api/types/assembly-api-client/ihighlevelapiclient)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal HighLevelApiClient(string endpointUri, string websocketUri, string userAgent = null, int timeout = 40)"}</code> | <span className="api-desc">Creates a `HighLevelApiClient` from `endpointUri`, `websocketUri`, `userAgent` and `timeout`.</span> |

</details>

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> | <span className="api-desc">Logger for this class.</span> |
| <Link id="m-websocketuri" /><code>{"private string websocketUri"}</code> | <span className="api-desc">Websocket address passed in by the factory. Stored but not read by this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-account" /><code><Link to="/mod/game-api/types/assembly-api-client/iaccountclient">{"IAccountClient"}</Link>{" Account { get; private set; }"}</code> | <span className="api-desc">Account client. Made at login, null before.</span> |
| <Link id="m-achievementclient" /><code><Link to="/mod/game-api/types/assembly-api-client/iachievementclient">{"IAchievementClient"}</Link>{" AchievementClient { get; private set; }"}</code> | <span className="api-desc">Achievements client. Made at login, null before.</span> |
| <Link id="m-analytics" /><code><Link to="/mod/game-api/types/assembly-api-client/ianalyticsclient">{"IAnalyticsClient"}</Link>{" Analytics { get; }"}</code> | <span className="api-desc">Analytics client. Made in the constructor, so it exists before login.</span> |
| <Link id="m-futureuseractions" /><code><Link to="/mod/game-api/types/assembly-api-client/ifutureuseractions">{"IFutureUserActions"}</Link>{" FutureUserActions { get; private set; }"}</code> | <span className="api-desc">Future user actions client. Made at login, null before.</span> |
| <Link id="m-groups" /><code><Link to="/mod/game-api/types/assembly-api-client/igroupsclient">{"IGroupsClient"}</Link>{" Groups { get; private set; }"}</code> | <span className="api-desc">Groups client. Made at login, null before.</span> |
| <Link id="m-instances" /><code><Link to="/mod/game-api/types/assembly-api-client/iinstancesclient">{"IInstancesClient"}</Link>{" Instances { get; private set; }"}</code> | <span className="api-desc">Instances client. Made at login, null before.</span> |
| <Link id="m-isloggedin" /><code>{"bool IsLoggedIn { get; }"}</code> | <span className="api-desc">True when `UserClient.LoggedInUserInfo` is set.</span> |
| <Link id="m-launcherclient" /><code><Link to="/mod/game-api/types/assembly-api-client/ilauncherapiclient">{"ILauncherApiClient"}</Link>{" LauncherClient { get; private set; }"}</code> | <span className="api-desc">Launcher client. Made at login, null before.</span> |
| <Link id="m-lowlevel" /><code><Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" LowLevel { get; }"}</code> | <span className="api-desc">The `LowLevelApiClient` that makes the HTTP requests and holds the tokens.</span> |
| <Link id="m-matchmaking" /><code><Link to="/mod/game-api/types/assembly-api-client/imatchmakingclient">{"IMatchMakingClient"}</Link>{" MatchMaking { get; private set; }"}</code> | <span className="api-desc">Matchmaking client. Made at login, null before.</span> |
| <Link id="m-oculus" /><code><Link to="/mod/game-api/types/assembly-api-client/ioculusclient">{"IOculusClient"}</Link>{" Oculus { get; }"}</code> | <span className="api-desc">Oculus client. Made in the constructor.</span> |
| <Link id="m-pico" /><code><Link to="/mod/game-api/types/assembly-api-client/ipicoclient">{"IPicoClient"}</Link>{" Pico { get; }"}</code> | <span className="api-desc">Pico client. Made in the constructor.</span> |
| <Link id="m-playerreports" /><code><Link to="/mod/game-api/types/assembly-api-client/iplayerreportsclient">{"IPlayerReportsClient"}</Link>{" PlayerReports { get; private set; }"}</code> | <span className="api-desc">Player reports client. Made at login, null before.</span> |
| <Link id="m-recentplayers" /><code><Link to="/mod/game-api/types/assembly-api-client/irecentplayersclient">{"IRecentPlayersClient"}</Link>{" RecentPlayers { get; private set; }"}</code> | <span className="api-desc">Recent players client. Made at login, null before.</span> |
| <Link id="m-securityclient" /><code><Link to="/mod/game-api/types/assembly-api-client/isecurityapiclient">{"ISecurityApiClient"}</Link>{" SecurityClient { get; private set; }"}</code> | <span className="api-desc">Security client (bans and similar). Made at login, null before.</span> |
| <Link id="m-serverclient" /><code><Link to="/mod/game-api/types/assembly-api-client/iserverapiclient">{"IServerApiClient"}</Link>{" ServerClient { get; private set; }"}</code> | <span className="api-desc">Server client (server lists, permissions, joining). Made at login, null before.</span> |
| <Link id="m-servicesclient" /><code><Link to="/mod/game-api/types/assembly-api-client/iservicesapiclient">{"IServicesApiClient"}</Link>{" ServicesClient { get; }"}</code> | <span className="api-desc">Services client (public IP lookup, token checks). Made in the constructor.</span> |
| <Link id="m-settingsclient" /><code><Link to="/mod/game-api/types/assembly-api-client/isettingsclient">{"ISettingsClient"}</Link>{" SettingsClient { get; private set; }"}</code> | <span className="api-desc">Settings client. Made at login, null before.</span> |
| <Link id="m-shopclient" /><code><Link to="/mod/game-api/types/assembly-api-client/ishopapiclient">{"IShopApiClient"}</Link>{" ShopClient { get; private set; }"}</code> | <span className="api-desc">Shop client. Made at login, null before.</span> |
| <Link id="m-socialclient" /><code><Link to="/mod/game-api/types/assembly-api-client/isocialclient">{"ISocialClient"}</Link>{" SocialClient { get; private set; }"}</code> | <span className="api-desc">Social client (friends). Made at login, null before.</span> |
| <Link id="m-userclient" /><code><Link to="/mod/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{" UserClient { get; }"}</code> | <span className="api-desc">User client; its `LoggedInUserInfo` is the current login. Made in the constructor.</span> |
| <Link id="m-usercredentials" /><code><Link to="/mod/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" UserCredentials { get; }"}</code> | <span className="api-desc">The current login tokens, from `LowLevel.Credentials`.</span> |
| <Link id="m-voiceclient" /><code><Link to="/mod/game-api/types/assembly-api-client/ivoiceapiclient">{"IVoiceApiClient"}</Link>{" VoiceClient { get; private set; }"}</code> | <span className="api-desc">Voice client. Made at login, null before.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-api-client-highlevel-ihighlevelapiclientmanager-apiclient" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" Alta.Api.Client.HighLevel.IHighLevelApiClientManager.ApiClient { get; }"}</code> | <span className="api-desc">Gives the sub-clients the shared `LowLevel` client.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-credentialschanged" /><code>{"event "}<Link to="/mod/game-api/types/assembly-api-client/logincredentialschangedhandler">{"LoginCredentialsChangedHandler"}</Link>{" CredentialsChanged"}</code> | <span className="api-desc">Raised by the low level client when the login tokens change, with the old and new credentials.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loginasync" /><code>{"async Task<"}<Link to="/mod/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginAsync(string username, string passwordHash)"}</code> | <span className="api-desc">Logs in with a username and password hash, sending the device id. Throws if already logged in.</span> |
| <Link id="m-loginviaoauth" /><code>{"async Task<"}<Link to="/mod/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginViaOauth(string clientId, string clientSecret, string scope)"}</code> | <span className="api-desc">Logs in with an OAuth client id, secret and scope; `AuthenticationUtility` uses it. Throws if already logged in.</span> |
| <Link id="m-loginwithemailasync" /><code>{"async Task<"}<Link to="/mod/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginWithEmailAsync(string email, string passwordHash)"}</code> | <span className="api-desc">Logs in with an email and password hash. Throws if already logged in.</span> |
| <Link id="m-loginwithoculus" /><code>{"async Task<"}<Link to="/mod/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginWithOculus(string userNonce, ulong userIdentifier)"}</code> | <span className="api-desc">Logs in with a linked Oculus account's nonce and user id. Throws if already logged in.</span> |
| <Link id="m-loginwithpico" /><code>{"async Task<"}<Link to="/mod/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginWithPico(string userToken, ulong userIdentifier)"}</code> | <span className="api-desc">Logs in with a linked Pico account's token and user id. Throws if already logged in.</span> |
| <Link id="m-loginwithrefreshtokenasync" /><code>{"async Task<"}<Link to="/mod/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginWithRefreshTokenAsync(string refreshToken)"}</code> | <span className="api-desc">Logs in by exchanging a refresh token. Throws if already logged in.</span> |
| <Link id="m-loginwithtokens" /><code><Link to="/mod/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{" LoginWithTokens(string accessToken, string refreshToken, string identityToken)"}</code> | <span className="api-desc">Logs in from access, refresh and identity tokens without a request, reading the user from their claims. How `/access_token` and TavernLib log in.</span> |
| <Link id="m-logout" /><code>{"void Logout()"}</code> | <span className="api-desc">Clears the low level login and the logged-in user. The logged-in sub-clients are left in place.</span> |
| <Link id="m-registeroculususerasync" /><code>{"async Task<"}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> RegisterOculusUserAsync(string username, string passwordHash, string email, string referral, "}<Link to="/mod/game-api/types/assembly-api-models/accountlinkdata">{"AccountLinkData"}</Link>{" accountLink = null)"}</code> | <span className="api-desc">Registers a new account linked to an Oculus account.</span> |
| <Link id="m-registerpicouserasync" /><code>{"async Task<"}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> RegisterPicoUserAsync(string username, string passwordHash, string email, string referral, "}<Link to="/mod/game-api/types/assembly-api-models/accountlinkdata">{"AccountLinkData"}</Link>{" accountLink = null)"}</code> | <span className="api-desc">Registers a new account linked to a Pico account.</span> |
| <Link id="m-registeruserasync" /><code>{"async Task<"}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> RegisterUserAsync(string username, string passwordHash, string email, string referral)"}</code> | <span className="api-desc">Registers a new account with a username, password hash, email and referral.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createloggedinapiclients" /><code>{"private void CreateLoggedInApiClients("}<Link to="/mod/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" loggedInUser)"}</code> | <span className="api-desc">Stores the logged-in user and creates every sub-client that needs a login. Called by each login method.</span> |

</details>

## Used in

Members of other types that take, return or hold a `HighLevelApiClient`:

<div className="api-used-in">

[`AccountClient.AccountClient`](/mod/game-api/types/assembly-api-client/accountclient#m-ctor), [`GroupsClient.GroupsClient`](/mod/game-api/types/assembly-api-client/groupsclient#m-ctor), [`PicoClient.PicoClient`](/mod/game-api/types/assembly-api-client/picoclient#m-ctor), [`ShopApiClient.ShopApiClient`](/mod/game-api/types/assembly-api-client/shopapiclient#m-ctor).

</div>
