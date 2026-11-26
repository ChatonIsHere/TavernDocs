---
title: "UserRolesUtility"
description: "Reads a user's roles from the policy claims in their identity token."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserRolesUtility

A **static class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Utility`.

Reads a user's roles from the policy claims in their identity token.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrolesfromidentitytoken" /><code>{"static "}<Link to="/mod/game-api/types/assembly-api-models/userroles">{"UserRoles"}</Link>{" GetRolesFromIdentityToken(string identityToken)"}</code> | <span className="api-desc">Returns the roles in a token (string or parsed): `dev` sets developer, `supporter` sets member, `mod` sets moderator. No signature check.</span> |
| <Link id="m-getrolesfromidentitytoken-2" /><code>{"static "}<Link to="/mod/game-api/types/assembly-api-models/userroles">{"UserRoles"}</Link>{" GetRolesFromIdentityToken(JwtSecurityToken identityToken)"}</code> | <span className="api-desc">Returns the roles in a token (string or parsed): `dev` sets developer, `supporter` sets member, `mod` sets moderator. No signature check.</span> |
