---
title: "LinkedAccountInfo"
description: "An external account linked to a user, returned by the web API's Discord account endpoints."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LinkedAccountInfo

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

An external account linked to a user, returned by the web API's Discord account endpoints.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LinkedAccountInfo(string name, ulong identifier)"}</code> | <span className="api-desc">Creates a `LinkedAccountInfo` with default values.</span> |
| <Link id="m-ctor-2" /><code>{"LinkedAccountInfo()"}</code> | <span className="api-desc">Creates a `LinkedAccountInfo` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"ulong Identifier { get; set; }"}</code> | <span className="api-desc">The linked account's ID (a Discord snowflake for Discord).</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">The linked account's name.</span> |

## Used in

Members of other types that take, return or hold a `LinkedAccountInfo`:

<div className="api-used-in">

[`AccountClient.GetLinkedDiscordAccount`](/mod/game-api/types/assembly-api-client/accountclient#m-getlinkeddiscordaccount), [`IAccountClient.GetLinkedDiscordAccount`](/mod/game-api/types/assembly-api-client/iaccountclient#m-getlinkeddiscordaccount), [`LowLevelApiClient.GetDiscordAccount`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getdiscordaccount).

</div>
