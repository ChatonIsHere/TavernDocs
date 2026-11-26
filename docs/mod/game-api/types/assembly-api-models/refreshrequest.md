---
title: "RefreshRequest"
description: "Request body for refreshing login tokens, and the base of the login requests."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RefreshRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Request body for refreshing login tokens, and the base of the login requests.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Derived types** [`LoginRequestBase`](/mod/game-api/types/assembly-api-models/loginrequestbase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RefreshRequest()"}</code> | <span className="api-desc">Creates a `RefreshRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-deviceidentifier" /><code>{"string DeviceIdentifier { get; set; }"}</code> | <span className="api-desc">This device's id; the game fills it from `Device.Identifier`.</span> |
| <Link id="m-target" /><code>{"int? Target { get; set; }"}</code> | <span className="api-desc">Platform target; the game fills it from `Device.PlatformTarget`.</span> |
