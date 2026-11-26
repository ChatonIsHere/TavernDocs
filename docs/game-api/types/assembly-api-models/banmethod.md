---
title: "BanMethod"
description: "Flags for what a ban applies to: the user id, the IP address, the device id or any mix."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BanMethod

An **enum** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Shared`.

Flags for what a ban applies to: the user id, the IP address, the device id or any mix. Passed to `SecurityApiClient.BanUserAsync`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Attributes** `Flags`

## Values

| Member |
| --- |
| <Link id="m-deviceid" /><code>{"DeviceId = 4"}</code> |
| <Link id="m-ipaddress" /><code>{"IpAddress = 2"}</code> |
| <Link id="m-userid" /><code>{"UserId = 1"}</code> |

## Used in

Members of other types that take, return or hold a `BanMethod`:

[`ISecurityApiClient.BanUserAsync`](/game-api/types/assembly-api-client/isecurityapiclient#m-banuserasync), [`OfflineSecurityApiClient.BanUserAsync`](/game-api/types/assembly-api-client/offlinesecurityapiclient#m-banuserasync), [`SecurityApiClient.BanUserAsync`](/game-api/types/assembly-api-client/securityapiclient#m-banuserasync), [`BanRequest.BanMethod`](/game-api/types/assembly-api-models/banrequest#m-banmethod).
