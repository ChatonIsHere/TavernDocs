---
title: "IUserApiClient"
description: "The user account part of Alta's web API: user lookups, verification, roles and cosmetic presets."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IUserApiClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

The user account part of Alta's web API: user lookups, verification, roles and cosmetic presets. Reached through `ApiAccess.ApiClient.UserClient`. Every method except `Logout` makes a web request.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`OfflineUserApiClient`](/game-api/types/assembly-api-client/offlineuserapiclient), [`UserApiClient`](/game-api/types/assembly-api-client/userapiclient)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-loggedinuserinfo" /><code><Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" LoggedInUserInfo { get; set; }"}</code> | The logged-in user's info and permissions. Set on login, null when logged out. No request. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changeemail" /><code>{"Task ChangeEmail(string email)"}</code> | Requests an email change for the logged-in user. |
| <Link id="m-changeusernameasync" /><code>{"Task ChangeUsernameAsync(string newUsername, string passwordHash)"}</code> | Requests a username change, confirmed with the password hash. |
| <Link id="m-createcosmeticspreset" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userpresetdatainfo">{"UserPresetDataInfo"}</Link>{"> CreateCosmeticsPreset(int presetId, uint[] data, int byteSize)"}</code> | Saves a cosmetic preset (packed data and its byte size) under a preset id. |
| <Link id="m-deletecosmeticpreset" /><code>{"Task DeleteCosmeticPreset(int presetId)"}</code> | Deletes a saved cosmetic preset by id. |
| <Link id="m-getallcosmeticspresets" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/userpresetdatainfo">{"UserPresetDataInfo"}</Link>{">> GetAllCosmeticsPresets()"}</code> | Fetches the logged-in user's saved cosmetic presets. |
| <Link id="m-getmembershipstatus" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/membershipstatusresponse">{"MembershipStatusResponse"}</Link>{"> GetMembershipStatus(int userIdentifer)"}</code> | Fetches a user's membership (subscription) status. |
| <Link id="m-getpersonaluserinfo" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/personaluserinforesponse">{"PersonalUserInfoResponse"}</Link>{"> GetPersonalUserInfo(int userIdentifier)"}</code> | Fetches a user's personal info response by user id. |
| <Link id="m-getuserinfoasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> GetUserInfoAsync(int userId)"}</code> | Fetches a user's public info, by user id or by username. |
| <Link id="m-getuserinfoasync-2" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> GetUserInfoAsync(string username)"}</code> | Fetches a user's public info, by user id or by username. |
| <Link id="m-getuserinfowithpermissionsasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{"> GetUserInfoWithPermissionsAsync(int userId)"}</code> | Fetches a user's info along with their permissions. |
| <Link id="m-getuserstatisticsasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userstatistics">{"UserStatistics"}</Link>{"> GetUserStatisticsAsync(int userIdentifier)"}</code> | Fetches a user's statistics. |
| <Link id="m-giveuserroleasync" /><code>{"Task GiveUserRoleAsync(int userIdentifer, "}<Link to="/game-api/types/assembly-api-models/assignableroles">{"AssignableRoles"}</Link>{" role)"}</code> | Assigns one of the assignable roles to a user. |
| <Link id="m-isuserverifiedasync" /><code>{"Task<bool> IsUserVerifiedAsync()"}</code> | Asks whether the logged-in user's email is verified, and marks the local info verified if so. |
| <Link id="m-logout" /><code>{"void Logout()"}</code> | Clears the low-level login tokens. |
| <Link id="m-refreshloginasync" /><code>{"Task RefreshLoginAsync()"}</code> | Refreshes the login tokens. |
| <Link id="m-requestuserverificationemailasync" /><code>{"Task RequestUserVerificationEmailAsync(string email)"}</code> | Asks for a verification email to be sent to the given address. |
| <Link id="m-updatepasswordasync" /><code>{"Task UpdatePasswordAsync(string oldPasswordHash, string newPasswordHash)"}</code> | Changes the password, from the old hash to the new hash. |
| <Link id="m-validateemail" /><code>{"Task ValidateEmail(string email)"}</code> | Asks the API whether an email address is acceptable. |
| <Link id="m-validateusername" /><code>{"Task<string> ValidateUsername(string username)"}</code> | Asks the API whether a username is acceptable, returning its answer as a string. |
| <Link id="m-verifyusersmembership" /><code>{"Task VerifyUsersMemberShip(int userId)"}</code> | Asks the API to verify a user's membership. |

## Used in

Members of other types that take, return or hold a `IUserApiClient`:

[`HighLevelApiClient.LoginAsync`](/game-api/types/assembly-api-client/highlevelapiclient#m-loginasync), [`HighLevelApiClient.LoginViaOauth`](/game-api/types/assembly-api-client/highlevelapiclient#m-loginviaoauth), [`HighLevelApiClient.LoginWithEmailAsync`](/game-api/types/assembly-api-client/highlevelapiclient#m-loginwithemailasync), [`HighLevelApiClient.LoginWithOculus`](/game-api/types/assembly-api-client/highlevelapiclient#m-loginwithoculus), [`HighLevelApiClient.LoginWithPico`](/game-api/types/assembly-api-client/highlevelapiclient#m-loginwithpico), [`HighLevelApiClient.LoginWithRefreshTokenAsync`](/game-api/types/assembly-api-client/highlevelapiclient#m-loginwithrefreshtokenasync), [`HighLevelApiClient.LoginWithTokens`](/game-api/types/assembly-api-client/highlevelapiclient#m-loginwithtokens), [`HighLevelApiClient.UserClient`](/game-api/types/assembly-api-client/highlevelapiclient#m-userclient), [`IHighLevelApiClient.LoginAsync`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-loginasync), [`IHighLevelApiClient.LoginViaOauth`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-loginviaoauth), [`IHighLevelApiClient.LoginWithEmailAsync`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-loginwithemailasync), [`IHighLevelApiClient.LoginWithOculus`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-loginwithoculus), [`IHighLevelApiClient.LoginWithPico`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-loginwithpico), [`IHighLevelApiClient.LoginWithRefreshTokenAsync`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-loginwithrefreshtokenasync), [`IHighLevelApiClient.LoginWithTokens`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-loginwithtokens), [`IHighLevelApiClient.UserClient`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-userclient), [`OfflineHighLevelApiClient.Login`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-login), [`OfflineHighLevelApiClient.LoginAsync`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-loginasync), [`OfflineHighLevelApiClient.LoginViaOauth`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-loginviaoauth), [`OfflineHighLevelApiClient.LoginWithEmailAsync`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-loginwithemailasync), [`OfflineHighLevelApiClient.LoginWithOculus`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-loginwithoculus), [`OfflineHighLevelApiClient.LoginWithPico`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-loginwithpico), [`OfflineHighLevelApiClient.LoginWithRefreshTokenAsync`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-loginwithrefreshtokenasync), [`OfflineHighLevelApiClient.LoginWithTokens`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-loginwithtokens), [`OfflineHighLevelApiClient.UserClient`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-userclient).
