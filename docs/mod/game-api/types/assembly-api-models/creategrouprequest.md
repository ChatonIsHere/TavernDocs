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
| <Link id="m-ctor" /><code>{"CreateGroupRequest()"}</code> | <span className="api-desc">Creates a `CreateGroupRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-description" /><code>{"string Description { get; set; }"}</code> | <span className="api-desc">Group description.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">Group name. Sent as `Name` with a capital N, unlike the other fields.</span> |
| <Link id="m-type" /><code><Link to="/mod/game-api/types/assembly-api-models/grouptype">{"GroupType"}</Link>{" Type { get; set; }"}</code> | <span className="api-desc">Group type, which decides who can join.</span> |
