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

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`IUserApiClient`](/game-api/types/assembly-api-client/iuserapiclient)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal OfflineUserApiClient("}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" loggedInUserInfo, "}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" highLevelClient)"}</code> | Creates an `OfflineUserApiClient` from `loggedInUserInfo` and `highLevelClient`. |

</details>

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-highlevelclient" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" highLevelClient"}</code> | The offline client that owns this one, used by `Logout`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-loggedinuserinfo" /><code><Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" LoggedInUserInfo { get; set; }"}</code> | The user read from the stored access token. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changeemail" /><code>{"Task ChangeEmail(string email)"}</code> | Throws `OfflineException`. |
| <Link id="m-changeusernameasync" /><code>{"Task ChangeUsernameAsync(string newUsername, string passwordHash)"}</code> | Changes the username on `LoggedInUserInfo` only. |
| <Link id="m-createcosmeticspreset" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userpresetdatainfo">{"UserPresetDataInfo"}</Link>{"> CreateCosmeticsPreset(int presetId, uint[] data, int byteSize)"}</code> | Throws `OfflineException`. |
| <Link id="m-deletecosmeticpreset" /><code>{"Task DeleteCosmeticPreset(int presetId)"}</code> | Throws `OfflineException`. |
| <Link id="m-getallcosmeticspresets" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/userpresetdatainfo">{"UserPresetDataInfo"}</Link>{">> GetAllCosmeticsPresets()"}</code> | Throws `OfflineException`. |
| <Link id="m-getmembershipstatus" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/membershipstatusresponse">{"MembershipStatusResponse"}</Link>{"> GetMembershipStatus(int userIdentifer)"}</code> | Throws `OfflineException`. |
| <Link id="m-getpersonaluserinfo" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/personaluserinforesponse">{"PersonalUserInfoResponse"}</Link>{"> GetPersonalUserInfo(int userId)"}</code> | Throws `OfflineException`. |
| <Link id="m-getuserinfoasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> GetUserInfoAsync(int userId)"}</code> | Makes up a user: by ID with the name `Offline`, or by name with ID -1. |
| <Link id="m-getuserinfoasync-2" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> GetUserInfoAsync(string username)"}</code> | Makes up a user: by ID with the name `Offline`, or by name with ID -1. |
| <Link id="m-getuserinfowithpermissionsasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{"> GetUserInfoWithPermissionsAsync(int userId)"}</code> | Throws `OfflineException`. |
| <Link id="m-getuserstatisticsasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userstatistics">{"UserStatistics"}</Link>{"> GetUserStatisticsAsync(int userIdentifier)"}</code> | Throws `OfflineException`. |
| <Link id="m-giveuserroleasync" /><code>{"Task GiveUserRoleAsync(int userIdentifer, "}<Link to="/game-api/types/assembly-api-models/assignableroles">{"AssignableRoles"}</Link>{" role)"}</code> | Does nothing. |
| <Link id="m-isuserverifiedasync" /><code>{"Task<bool> IsUserVerifiedAsync()"}</code> | Always true. |
| <Link id="m-logout" /><code>{"void Logout()"}</code> | Logs the offline client out. |
| <Link id="m-refreshloginasync" /><code>{"Task RefreshLoginAsync()"}</code> | Does nothing. |
| <Link id="m-requestuserverificationemailasync" /><code>{"Task RequestUserVerificationEmailAsync(string email)"}</code> | Does nothing. |
| <Link id="m-updatepasswordasync" /><code>{"Task UpdatePasswordAsync(string oldPasswordHash, string newPasswordHash)"}</code> | Does nothing. |
| <Link id="m-validateemail" /><code>{"Task ValidateEmail(string email)"}</code> | Throws `OfflineException`. |
| <Link id="m-validateusername" /><code>{"Task<string> ValidateUsername(string username)"}</code> | Throws `OfflineException`. |
| <Link id="m-verifyusersmembership" /><code>{"Task VerifyUsersMemberShip(int userId)"}</code> | Throws `OfflineException`. |
