---
title: "CustomClaimTypes"
description: "Names of the claims and policies found in Alta API JWT tokens."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomClaimTypes

A **static class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Constants`.

Names of the claims and policies found in Alta API JWT tokens.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-createserverpolicy" /><code>{"const string CreateServerPolicy"}</code> | Policy value `create_server`. |
| <Link id="m-developerpolicy" /><code>{"const string DeveloperPolicy"}</code> | Policy value `dev` for developers. |
| <Link id="m-email" /><code>{"const string Email"}</code> | Claim name `email`. |
| <Link id="m-isverified" /><code>{"const string IsVerified"}</code> | Claim name `is_verified`, set when the account's email is verified. |
| <Link id="m-loginsession" /><code>{"const string LoginSession"}</code> | Claim name `login_session`. |
| <Link id="m-moderatorpolicy" /><code>{"const string ModeratorPolicy"}</code> | Policy value `mod` for moderators. |
| <Link id="m-policy" /><code>{"const string Policy"}</code> | Claim name `Policy`, which holds the policies a token grants. |
| <Link id="m-role" /><code>{"const string Role"}</code> | Claim name `role`. |
| <Link id="m-serverid" /><code>{"const string ServerId"}</code> | Claim name `server_id`, for tokens tied to a game server. |
| <Link id="m-supporterpolicy" /><code>{"const string SupporterPolicy"}</code> | Policy value `supporter` for paying supporters. |
| <Link id="m-userdata" /><code>{"const string UserData"}</code> | Claim name `user_data`. |
| <Link id="m-userid" /><code>{"const string UserId"}</code> | Claim name `UserId`. |
| <Link id="m-username" /><code>{"const string Username"}</code> | Claim name `Username`. |
