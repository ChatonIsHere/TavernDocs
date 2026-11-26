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
| <Link id="m-ctor" /><code>{"LinkedAccountInfo(string name, ulong identifier)"}</code> | Creates a `LinkedAccountInfo` with default values. |
| <Link id="m-ctor-2" /><code>{"LinkedAccountInfo()"}</code> | Creates a `LinkedAccountInfo` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"ulong Identifier { get; set; }"}</code> | The linked account's ID (a Discord snowflake for Discord). |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | The linked account's name. |

## Used in

Members of other types that take, return or hold a `LinkedAccountInfo`:

[`AccountClient.GetLinkedDiscordAccount`](/mod/game-api/types/assembly-api-client/accountclient#m-getlinkeddiscordaccount), [`IAccountClient.GetLinkedDiscordAccount`](/mod/game-api/types/assembly-api-client/iaccountclient#m-getlinkeddiscordaccount), [`LowLevelApiClient.GetDiscordAccount`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getdiscordaccount).
