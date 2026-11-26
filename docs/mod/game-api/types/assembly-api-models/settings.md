---
title: "Settings"
description: "Alta web API response model for a stored settings entry: an id and its content as a string."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Settings

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Alta web API response model for a stored settings entry: an id and its content as a string.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Documented in** [Settings and files](/mod/game-api/console-and-utilities/settings-and-files)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Settings()"}</code> | Creates a `Settings` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-content" /><code>{"string Content { get; set; }"}</code> | The settings content as a string (JSON field `content`). |
| <Link id="m-identifier" /><code>{"string Identifier { get; set; }"}</code> | The settings entry's id (JSON field `id`). |

## Used in

Members of other types that take, return or hold a `Settings`:

[`LowLevelApiClient.GetSettings`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getsettings).
