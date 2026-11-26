---
title: "CreateGroupRequest"
description: "Request body for creating a group."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CreateGroupRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Request body for creating a group.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CreateGroupRequest()"}</code> | Creates a `CreateGroupRequest` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-description" /><code>{"string Description { get; set; }"}</code> | Group description. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | Group name. Sent as `Name` with a capital N, unlike the other fields. |
| <Link id="m-type" /><code><Link to="/mod/game-api/types/assembly-api-models/grouptype">{"GroupType"}</Link>{" Type { get; set; }"}</code> | Group type, which decides who can join. |
