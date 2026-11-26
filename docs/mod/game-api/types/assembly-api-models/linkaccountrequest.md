---
title: "LinkAccountRequest"
description: "Body of an Alta web API request to link an outside account to an Alta user."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LinkAccountRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body of an Alta web API request to link an outside account to an Alta user.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** [`AccountRequestBase`](/mod/game-api/types/assembly-api-models/accountrequestbase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LinkAccountRequest()"}</code> | <span className="api-desc">Creates a `LinkAccountRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-source" /><code>{"string Source { get; set; }"}</code> | <span className="api-desc">Name of the account source being linked.</span> |
| <Link id="m-useridentifier" /><code>{"int? UserIdentifier { get; set; }"}</code> | <span className="api-desc">Id of the Alta user to link, if given.</span> |

## Used in

Members of other types that take, return or hold a `LinkAccountRequest`:

<div className="api-used-in">

[`LowLevelApiClient.LinkDiscordAccount`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-linkdiscordaccount).

</div>
