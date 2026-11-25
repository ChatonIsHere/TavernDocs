---
title: "IUserApiClient"
description: "interface IUserApiClient in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IUserApiClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`OfflineUserApiClient`](/game-api/types/assembly-api-client/offlineuserapiclient), [`UserApiClient`](/game-api/types/assembly-api-client/userapiclient)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-loggedinuserinfo" /><code><Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" LoggedInUserInfo { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changeemail" /><code>{"Task ChangeEmail(string email)"}</code> |  |
| <Link id="m-changeusernameasync" /><code>{"Task ChangeUsernameAsync(string newUsername, string passwordHash)"}</code> |  |
| <Link id="m-createcosmeticspreset" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userpresetdatainfo">{"UserPresetDataInfo"}</Link>{"> CreateCosmeticsPreset(int presetId, uint[] data, int byteSize)"}</code> |  |
| <Link id="m-deletecosmeticpreset" /><code>{"Task DeleteCosmeticPreset(int presetId)"}</code> |  |
| <Link id="m-getallcosmeticspresets" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/userpresetdatainfo">{"UserPresetDataInfo"}</Link>{">> GetAllCosmeticsPresets()"}</code> |  |
| <Link id="m-getmembershipstatus" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/membershipstatusresponse">{"MembershipStatusResponse"}</Link>{"> GetMembershipStatus(int userIdentifer)"}</code> |  |
| <Link id="m-getpersonaluserinfo" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/personaluserinforesponse">{"PersonalUserInfoResponse"}</Link>{"> GetPersonalUserInfo(int userIdentifier)"}</code> |  |
| <Link id="m-getuserinfoasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> GetUserInfoAsync(int userId)"}</code> |  |
| <Link id="m-getuserinfoasync-2" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> GetUserInfoAsync(string username)"}</code> |  |
| <Link id="m-getuserinfowithpermissionsasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{"> GetUserInfoWithPermissionsAsync(int userId)"}</code> |  |
| <Link id="m-getuserstatisticsasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userstatistics">{"UserStatistics"}</Link>{"> GetUserStatisticsAsync(int userIdentifier)"}</code> |  |
| <Link id="m-giveuserroleasync" /><code>{"Task GiveUserRoleAsync(int userIdentifer, "}<Link to="/game-api/types/assembly-api-models/assignableroles">{"AssignableRoles"}</Link>{" role)"}</code> |  |
| <Link id="m-isuserverifiedasync" /><code>{"Task<bool> IsUserVerifiedAsync()"}</code> |  |
| <Link id="m-logout" /><code>{"void Logout()"}</code> |  |
| <Link id="m-refreshloginasync" /><code>{"Task RefreshLoginAsync()"}</code> |  |
| <Link id="m-requestuserverificationemailasync" /><code>{"Task RequestUserVerificationEmailAsync(string email)"}</code> |  |
| <Link id="m-updatepasswordasync" /><code>{"Task UpdatePasswordAsync(string oldPasswordHash, string newPasswordHash)"}</code> |  |
| <Link id="m-validateemail" /><code>{"Task ValidateEmail(string email)"}</code> |  |
| <Link id="m-validateusername" /><code>{"Task<string> ValidateUsername(string username)"}</code> |  |
| <Link id="m-verifyusersmembership" /><code>{"Task VerifyUsersMemberShip(int userId)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IUserApiClient`:

[`HighLevelApiClient.LoginAsync`](/game-api/types/assembly-api-client/highlevelapiclient#m-loginasync), [`HighLevelApiClient.LoginViaOauth`](/game-api/types/assembly-api-client/highlevelapiclient#m-loginviaoauth), [`HighLevelApiClient.LoginWithEmailAsync`](/game-api/types/assembly-api-client/highlevelapiclient#m-loginwithemailasync), [`HighLevelApiClient.LoginWithOculus`](/game-api/types/assembly-api-client/highlevelapiclient#m-loginwithoculus), [`HighLevelApiClient.LoginWithPico`](/game-api/types/assembly-api-client/highlevelapiclient#m-loginwithpico), [`HighLevelApiClient.LoginWithRefreshTokenAsync`](/game-api/types/assembly-api-client/highlevelapiclient#m-loginwithrefreshtokenasync), [`HighLevelApiClient.LoginWithTokens`](/game-api/types/assembly-api-client/highlevelapiclient#m-loginwithtokens), [`HighLevelApiClient.UserClient`](/game-api/types/assembly-api-client/highlevelapiclient#m-userclient), [`IHighLevelApiClient.LoginAsync`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-loginasync), [`IHighLevelApiClient.LoginViaOauth`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-loginviaoauth), [`IHighLevelApiClient.LoginWithEmailAsync`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-loginwithemailasync), [`IHighLevelApiClient.LoginWithOculus`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-loginwithoculus), [`IHighLevelApiClient.LoginWithPico`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-loginwithpico), [`IHighLevelApiClient.LoginWithRefreshTokenAsync`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-loginwithrefreshtokenasync), [`IHighLevelApiClient.LoginWithTokens`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-loginwithtokens), [`IHighLevelApiClient.UserClient`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-userclient), [`OfflineHighLevelApiClient.Login`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-login), [`OfflineHighLevelApiClient.LoginAsync`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-loginasync), [`OfflineHighLevelApiClient.LoginViaOauth`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-loginviaoauth), [`OfflineHighLevelApiClient.LoginWithEmailAsync`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-loginwithemailasync), [`OfflineHighLevelApiClient.LoginWithOculus`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-loginwithoculus), [`OfflineHighLevelApiClient.LoginWithPico`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-loginwithpico), [`OfflineHighLevelApiClient.LoginWithRefreshTokenAsync`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-loginwithrefreshtokenasync), [`OfflineHighLevelApiClient.LoginWithTokens`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-loginwithtokens), [`OfflineHighLevelApiClient.UserClient`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-userclient).
