---
title: "OfflineUserApiClient"
description: "Offline stand-in for the user client, created on offline login from the stored access token."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OfflineUserApiClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Offline stand-in for the user client, created on offline login from the stored access token. Simple calls succeed locally; account and preset calls throw `OfflineException`.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`IUserApiClient`](/mod/game-api/types/assembly-api-client/iuserapiclient)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal OfflineUserApiClient("}<Link to="/mod/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" loggedInUserInfo, "}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" highLevelClient)"}</code> | <span className="api-desc">Creates an `OfflineUserApiClient` from `loggedInUserInfo` and `highLevelClient`.</span> |

</details>

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-highlevelclient" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" highLevelClient"}</code> | <span className="api-desc">The offline client that owns this one, used by `Logout`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-loggedinuserinfo" /><code><Link to="/mod/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" LoggedInUserInfo { get; set; }"}</code> | <span className="api-desc">The user read from the stored access token.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changeemail" /><code>{"Task ChangeEmail(string email)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-changeusernameasync" /><code>{"Task ChangeUsernameAsync(string newUsername, string passwordHash)"}</code> | <span className="api-desc">Changes the username on `LoggedInUserInfo` only.</span> |
| <Link id="m-createcosmeticspreset" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/userpresetdatainfo">{"UserPresetDataInfo"}</Link>{"> CreateCosmeticsPreset(int presetId, uint[] data, int byteSize)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-deletecosmeticpreset" /><code>{"Task DeleteCosmeticPreset(int presetId)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-getallcosmeticspresets" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/userpresetdatainfo">{"UserPresetDataInfo"}</Link>{">> GetAllCosmeticsPresets()"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-getmembershipstatus" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/membershipstatusresponse">{"MembershipStatusResponse"}</Link>{"> GetMembershipStatus(int userIdentifer)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-getpersonaluserinfo" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/personaluserinforesponse">{"PersonalUserInfoResponse"}</Link>{"> GetPersonalUserInfo(int userId)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-getuserinfoasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> GetUserInfoAsync(int userId)"}</code> | <span className="api-desc">Makes up a user: by ID with the name `Offline`, or by name with ID -1.</span> |
| <Link id="m-getuserinfoasync-2" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> GetUserInfoAsync(string username)"}</code> | <span className="api-desc">Makes up a user: by ID with the name `Offline`, or by name with ID -1.</span> |
| <Link id="m-getuserinfowithpermissionsasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{"> GetUserInfoWithPermissionsAsync(int userId)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-getuserstatisticsasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/userstatistics">{"UserStatistics"}</Link>{"> GetUserStatisticsAsync(int userIdentifier)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-giveuserroleasync" /><code>{"Task GiveUserRoleAsync(int userIdentifer, "}<Link to="/mod/game-api/types/assembly-api-models/assignableroles">{"AssignableRoles"}</Link>{" role)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-isuserverifiedasync" /><code>{"Task<bool> IsUserVerifiedAsync()"}</code> | <span className="api-desc">Always true.</span> |
| <Link id="m-logout" /><code>{"void Logout()"}</code> | <span className="api-desc">Logs the offline client out.</span> |
| <Link id="m-refreshloginasync" /><code>{"Task RefreshLoginAsync()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-requestuserverificationemailasync" /><code>{"Task RequestUserVerificationEmailAsync(string email)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-updatepasswordasync" /><code>{"Task UpdatePasswordAsync(string oldPasswordHash, string newPasswordHash)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-validateemail" /><code>{"Task ValidateEmail(string email)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-validateusername" /><code>{"Task<string> ValidateUsername(string username)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-verifyusersmembership" /><code>{"Task VerifyUsersMemberShip(int userId)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
