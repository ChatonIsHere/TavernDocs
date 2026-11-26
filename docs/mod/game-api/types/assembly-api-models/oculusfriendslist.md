---
title: "OculusFriendsList"
description: "Body of an Alta web API request that sends the user's Oculus friends."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OculusFriendsList

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body of an Alta web API request that sends the user's Oculus friends.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OculusFriendsList()"}</code> | <span className="api-desc">Creates an `OculusFriendsList` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-oculusfriends" /><code>{"IEnumerable<ulong> OculusFriends { get; set; }"}</code> | <span className="api-desc">Oculus user ids of the user's friends.</span> |

## Used in

Members of other types that take, return or hold a `OculusFriendsList`:

<div className="api-used-in">

[`LowLevelApiClient.GetOculusFriendships`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getoculusfriendships).

</div>
