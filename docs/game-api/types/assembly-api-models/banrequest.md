---
title: "BanRequest"
description: "Body of an Alta web API request to ban a user."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BanRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body of an Alta web API request to ban a user.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BanRequest()"}</code> | Creates a `BanRequest` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-banmethod" /><code><Link to="/game-api/types/assembly-api-models/banmethod">{"BanMethod"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/banmethod">{"BanMethod"}</Link>{" { get; set; }"}</code> | How the ban is applied. |
| <Link id="m-bantype" /><code><Link to="/game-api/types/assembly-api-models/bantype">{"BanType"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/bantype">{"BanType"}</Link>{" { get; set; }"}</code> | Kind of ban. |
| <Link id="m-callinguseridentifier" /><code>{"int? CallingUserIdentifier { get; set; }"}</code> | Id of the user issuing the ban, if given. |
| <Link id="m-durationinhours" /><code>{"float DurationInHours { get; set; }"}</code> | How long the ban lasts, in hours. |
| <Link id="m-reason" /><code>{"string Reason { get; set; }"}</code> | Reason given for the ban. |
| <Link id="m-servers" /><code>{"List<int> Servers { get; set; }"}</code> | Ids of the servers the ban covers. |
| <Link id="m-useridentifier" /><code>{"int UserIdentifier { get; set; }"}</code> | Id of the user to ban. |

## Used in

Members of other types that take, return or hold a `BanRequest`:

[`LowLevelApiClient.BanUserAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-banuserasync).
