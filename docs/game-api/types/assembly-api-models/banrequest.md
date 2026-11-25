---
title: "BanRequest"
description: "class BanRequest in Alta.Api.DataTransferModels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BanRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BanRequest()"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-banmethod" /><code><Link to="/game-api/types/assembly-api-models/banmethod">{"BanMethod"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/banmethod">{"BanMethod"}</Link>{" { get; set; }"}</code> |
| <Link id="m-bantype" /><code><Link to="/game-api/types/assembly-api-models/bantype">{"BanType"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/bantype">{"BanType"}</Link>{" { get; set; }"}</code> |
| <Link id="m-callinguseridentifier" /><code>{"int? CallingUserIdentifier { get; set; }"}</code> |
| <Link id="m-durationinhours" /><code>{"float DurationInHours { get; set; }"}</code> |
| <Link id="m-reason" /><code>{"string Reason { get; set; }"}</code> |
| <Link id="m-servers" /><code>{"List<int> Servers { get; set; }"}</code> |
| <Link id="m-useridentifier" /><code>{"int UserIdentifier { get; set; }"}</code> |

## Used in

Members of other types that take, return or hold a `BanRequest`:

[`LowLevelApiClient.BanUserAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-banuserasync).
