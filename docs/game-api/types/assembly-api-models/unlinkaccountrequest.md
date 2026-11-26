---
title: "UnlinkAccountRequest"
description: "Body of an Alta web API request to unlink an outside account."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UnlinkAccountRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body of an Alta web API request to unlink an outside account.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"UnlinkAccountRequest()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-useridentifier" /><code>{"int? UserIdentifier { get; set; }"}</code> | Id of the Alta user to unlink, if given. |

## Used in

Members of other types that take, return or hold a `UnlinkAccountRequest`:

[`LowLevelApiClient.UnLinkDiscordAccount`](/game-api/types/assembly-api-client/lowlevelapiclient#m-unlinkdiscordaccount).
