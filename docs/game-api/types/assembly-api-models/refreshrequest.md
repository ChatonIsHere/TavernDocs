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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Derived types** [`LoginRequestBase`](/game-api/types/assembly-api-models/loginrequestbase)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RefreshRequest()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-deviceidentifier" /><code>{"string DeviceIdentifier { get; set; }"}</code> | This device's id; the game fills it from `Device.Identifier`. |
| <Link id="m-target" /><code>{"int? Target { get; set; }"}</code> | Platform target; the game fills it from `Device.PlatformTarget`. |
