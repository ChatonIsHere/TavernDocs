---
title: "ValidateUsersJoinRequest"
description: "Request body for checking that a player may join a game server, probably sent by the server when someone connects."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ValidateUsersJoinRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Request body for checking that a player may join a game server, probably sent by the server when someone connects.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ValidateUsersJoinRequest()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-deviceidentifier" /><code>{"string DeviceIdentifier { get; set; }"}</code> | The player's device id. |
| <Link id="m-identitytoken" /><code>{"string IdentityToken { get; set; }"}</code> | The player's identity token, encoded. |
| <Link id="m-ipaddress" /><code>{"IPAddress IpAddress { get; set; }"}</code> | The player's IP address. |
| <Link id="m-serveridentifier" /><code>{"int ServerIdentifier { get; set; }"}</code> | Id of the server being joined. |
