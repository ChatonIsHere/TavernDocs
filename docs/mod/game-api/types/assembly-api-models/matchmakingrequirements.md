---
title: "MatchMakingRequirements"
description: "Body of the Alta web API call that picks the best server to join (GetBestServer)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MatchMakingRequirements

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body of the Alta web API call that picks the best server to join (`GetBestServer`).

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MatchMakingRequirements()"}</code> | Creates a `MatchMakingRequirements` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-sceneindex" /><code>{"int? SceneIndex { get; set; }"}</code> | Scene the server must run. `MatchMakingClient` sends 1. |
| <Link id="m-target" /><code>{"int? Target { get; set; }"}</code> | Optional target value for the match. |

## Used in

Members of other types that take, return or hold a `MatchMakingRequirements`:

[`LowLevelApiClient.GetBestServer`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getbestserver).
