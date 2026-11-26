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
| <Link id="m-ctor" /><code>{"OculusFriendsList()"}</code> | Creates an `OculusFriendsList` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-oculusfriends" /><code>{"IEnumerable<ulong> OculusFriends { get; set; }"}</code> | Oculus user ids of the user's friends. |

## Used in

Members of other types that take, return or hold a `OculusFriendsList`:

[`LowLevelApiClient.GetOculusFriendships`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getoculusfriendships).
