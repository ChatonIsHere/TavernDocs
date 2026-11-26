---
title: "VoiceChatTokenRequest"
description: "Body of an Alta web API request for a voice chat token, to log in or to join a server's channel."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VoiceChatTokenRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body of an Alta web API request for a voice chat token, to log in or to join a server's channel.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VoiceChatTokenRequest()"}</code> | Creates a `VoiceChatTokenRequest` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-serveridentifier" /><code>{"int? ServerIdentifier { get; set; }"}</code> | Id of the server whose channel to join, if joining. |
| <Link id="m-type" /><code><Link to="/mod/game-api/types/assembly-api-models/voicechattokenrequesttype">{"VoiceChatTokenRequestType"}</Link>{" Type { get; set; }"}</code> | Whether the token is for logging in or joining a channel. |

## Used in

Members of other types that take, return or hold a `VoiceChatTokenRequest`:

[`LowLevelApiClient.GetVoiceTokenAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getvoicetokenasync).
