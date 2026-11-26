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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ValidateUsersJoinRequest()"}</code> | <span className="api-desc">Creates a `ValidateUsersJoinRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-deviceidentifier" /><code>{"string DeviceIdentifier { get; set; }"}</code> | <span className="api-desc">The player's device id.</span> |
| <Link id="m-identitytoken" /><code>{"string IdentityToken { get; set; }"}</code> | <span className="api-desc">The player's identity token, encoded.</span> |
| <Link id="m-ipaddress" /><code>{"IPAddress IpAddress { get; set; }"}</code> | <span className="api-desc">The player's IP address.</span> |
| <Link id="m-serveridentifier" /><code>{"int ServerIdentifier { get; set; }"}</code> | <span className="api-desc">Id of the server being joined.</span> |
