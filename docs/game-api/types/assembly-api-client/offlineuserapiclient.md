---
title: "OfflineUserApiClient"
description: "class OfflineUserApiClient in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OfflineUserApiClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`IUserApiClient`](/game-api/types/assembly-api-client/iuserapiclient)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member |
| --- |
| <Link id="m-ctor" /><code>{"internal OfflineUserApiClient("}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" loggedInUserInfo, "}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" highLevelClient)"}</code> |

</details>

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-highlevelclient" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" highLevelClient"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-loggedinuserinfo" /><code><Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" LoggedInUserInfo { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-changeemail" /><code>{"Task ChangeEmail(string email)"}</code> |
| <Link id="m-changeusernameasync" /><code>{"Task ChangeUsernameAsync(string newUsername, string passwordHash)"}</code> |
| <Link id="m-createcosmeticspreset" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userpresetdatainfo">{"UserPresetDataInfo"}</Link>{"> CreateCosmeticsPreset(int presetId, uint[] data, int byteSize)"}</code> |
| <Link id="m-deletecosmeticpreset" /><code>{"Task DeleteCosmeticPreset(int presetId)"}</code> |
| <Link id="m-getallcosmeticspresets" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/userpresetdatainfo">{"UserPresetDataInfo"}</Link>{">> GetAllCosmeticsPresets()"}</code> |
| <Link id="m-getmembershipstatus" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/membershipstatusresponse">{"MembershipStatusResponse"}</Link>{"> GetMembershipStatus(int userIdentifer)"}</code> |
| <Link id="m-getpersonaluserinfo" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/personaluserinforesponse">{"PersonalUserInfoResponse"}</Link>{"> GetPersonalUserInfo(int userId)"}</code> |
| <Link id="m-getuserinfoasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> GetUserInfoAsync(int userId)"}</code> |
| <Link id="m-getuserinfoasync-2" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> GetUserInfoAsync(string username)"}</code> |
| <Link id="m-getuserinfowithpermissionsasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{"> GetUserInfoWithPermissionsAsync(int userId)"}</code> |
| <Link id="m-getuserstatisticsasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userstatistics">{"UserStatistics"}</Link>{"> GetUserStatisticsAsync(int userIdentifier)"}</code> |
| <Link id="m-giveuserroleasync" /><code>{"Task GiveUserRoleAsync(int userIdentifer, "}<Link to="/game-api/types/assembly-api-models/assignableroles">{"AssignableRoles"}</Link>{" role)"}</code> |
| <Link id="m-isuserverifiedasync" /><code>{"Task<bool> IsUserVerifiedAsync()"}</code> |
| <Link id="m-logout" /><code>{"void Logout()"}</code> |
| <Link id="m-refreshloginasync" /><code>{"Task RefreshLoginAsync()"}</code> |
| <Link id="m-requestuserverificationemailasync" /><code>{"Task RequestUserVerificationEmailAsync(string email)"}</code> |
| <Link id="m-updatepasswordasync" /><code>{"Task UpdatePasswordAsync(string oldPasswordHash, string newPasswordHash)"}</code> |
| <Link id="m-validateemail" /><code>{"Task ValidateEmail(string email)"}</code> |
| <Link id="m-validateusername" /><code>{"Task<string> ValidateUsername(string username)"}</code> |
| <Link id="m-verifyusersmembership" /><code>{"Task VerifyUsersMemberShip(int userId)"}</code> |
