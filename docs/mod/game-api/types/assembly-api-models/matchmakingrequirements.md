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
| <Link id="m-ctor" /><code>{"MatchMakingRequirements()"}</code> | <span className="api-desc">Creates a `MatchMakingRequirements` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-sceneindex" /><code>{"int? SceneIndex { get; set; }"}</code> | <span className="api-desc">Scene the server must run. `MatchMakingClient` sends 1.</span> |
| <Link id="m-target" /><code>{"int? Target { get; set; }"}</code> | <span className="api-desc">Optional target value for the match.</span> |

## Used in

Members of other types that take, return or hold a `MatchMakingRequirements`:

<div className="api-used-in">

[`LowLevelApiClient.GetBestServer`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getbestserver).

</div>
