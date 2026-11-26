---
title: "UserApiClient"
description: "High-level Alta API calls about user accounts: user info, verification, username and password changes, roles and cosmetic presets."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserApiClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

High-level Alta API calls about user accounts: user info, verification, username and password changes, roles and cosmetic presets. Thin wrapper over the low-level API client.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/game-api/types/assembly-api-client/highlevelapiclientbase), [`IUserApiClient`](/game-api/types/assembly-api-client/iuserapiclient)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal UserApiClient("}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> | Creates an `UserApiClient` from `clientManager`. |

</details>

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-loggedinuserinfo" /><code><Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" LoggedInUserInfo { get; set; }"}</code> | Info and permissions of the user this client is logged in as. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changeemail" /><code>{"async Task ChangeEmail(string email)"}</code> | Asks the API to change the logged-in user's email address. |
| <Link id="m-changeusernameasync" /><code>{"async Task ChangeUsernameAsync(string newUsername, string passwordHash)"}</code> | Changes the logged-in user's username. Needs the password hash to confirm. |
| <Link id="m-createcosmeticspreset" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userpresetdatainfo">{"UserPresetDataInfo"}</Link>{"> CreateCosmeticsPreset(int presetId, uint[] data, int byteSize)"}</code> | Saves a cosmetics preset (packed `uint` data plus its byte size) under a preset id. |
| <Link id="m-deletecosmeticpreset" /><code>{"Task DeleteCosmeticPreset(int presetId)"}</code> | Deletes the logged-in user's cosmetics preset with the given id. |
| <Link id="m-getallcosmeticspresets" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/userpresetdatainfo">{"UserPresetDataInfo"}</Link>{">> GetAllCosmeticsPresets()"}</code> | Fetches all of the logged-in user's saved cosmetics presets. |
| <Link id="m-getmembershipstatus" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/membershipstatusresponse">{"MembershipStatusResponse"}</Link>{"> GetMembershipStatus(int userIdentifer)"}</code> | Fetches a user's membership (subscription) status. |
| <Link id="m-getpersonaluserinfo" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/personaluserinforesponse">{"PersonalUserInfoResponse"}</Link>{"> GetPersonalUserInfo(int userIdentifier)"}</code> | Fetches a user's private account info as a `PersonalUserInfoResponse`. |
| <Link id="m-getuserinfoasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> GetUserInfoAsync(int userId)"}</code> | Fetches a user's public info, either by user id or by username. |
| <Link id="m-getuserinfoasync-2" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> GetUserInfoAsync(string username)"}</code> | Fetches a user's public info, either by user id or by username. |
| <Link id="m-getuserinfowithpermissionsasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{"> GetUserInfoWithPermissionsAsync(int userId)"}</code> | Fetches a user's info together with their permissions. |
| <Link id="m-getuserstatisticsasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userstatistics">{"UserStatistics"}</Link>{"> GetUserStatisticsAsync(int userIdentifier)"}</code> | Fetches a user's play statistics. |
| <Link id="m-giveuserroleasync" /><code>{"async Task GiveUserRoleAsync(int userIdentifer, "}<Link to="/game-api/types/assembly-api-models/assignableroles">{"AssignableRoles"}</Link>{" role)"}</code> | Gives a user one of the `AssignableRoles` roles. |
| <Link id="m-isuserverifiedasync" /><code>{"async Task<bool> IsUserVerifiedAsync()"}</code> | Asks whether the logged-in user has verified their email, and marks `LoggedInUserInfo` verified if so. |
| <Link id="m-logout" /><code>{"void Logout()"}</code> | Logs the low-level client out. |
| <Link id="m-refreshloginasync" /><code>{"async Task RefreshLoginAsync()"}</code> | Refreshes the login tokens. |
| <Link id="m-requestuserverificationemailasync" /><code>{"async Task RequestUserVerificationEmailAsync(string email)"}</code> | Asks the API to send a verification email for the logged-in user to the given address. |
| <Link id="m-updatepasswordasync" /><code>{"async Task UpdatePasswordAsync(string oldPasswordHash, string newPasswordHash)"}</code> | Changes the logged-in user's password, from old hash to new hash. |
| <Link id="m-validateemail" /><code>{"async Task ValidateEmail(string email)"}</code> | Checks an email address with the API before sign-up; throws if it isn't accepted. |
| <Link id="m-validateusername" /><code>{"async Task<string> ValidateUsername(string username)"}</code> | Checks a username with the API before sign-up and returns the API's answer. |
| <Link id="m-verifyusersmembership" /><code>{"async Task VerifyUsersMemberShip(int userId)"}</code> | Asks the API to recheck a user's membership. |
