---
title: "BufferChangeRequest"
description: "Request body for LowLevelApiClient.RequestBufferChange, which asked Alta's API to change the number of spare servers kept for a fleet and region."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BufferChangeRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Request body for `LowLevelApiClient.RequestBufferChange`, which asked Alta's API to change the number of spare servers kept for a fleet and region.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BufferChangeRequest()"}</code> | <span className="api-desc">Creates a `BufferChangeRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-fleet" /><code>{"string Fleet { get; set; }"}</code> | <span className="api-desc">The server fleet name.</span> |
| <Link id="m-increase" /><code>{"int Increase { get; set; }"}</code> | <span className="api-desc">How much to change the buffer by.</span> |
| <Link id="m-region" /><code>{"string Region { get; set; }"}</code> | <span className="api-desc">The hosting region.</span> |

## Used in

Members of other types that take, return or hold a `BufferChangeRequest`:

<div className="api-used-in">

[`IServerApiClient.RequestBufferIncrease`](/mod/game-api/types/assembly-api-client/iserverapiclient#m-requestbufferincrease), [`OfflineServerApiClient.RequestBufferIncrease`](/mod/game-api/types/assembly-api-client/offlineserverapiclient#m-requestbufferincrease), [`ServerApiClient.RequestBufferIncrease`](/mod/game-api/types/assembly-api-client/serverapiclient#m-requestbufferincrease), [`LowLevelApiClient.RequestBufferChange`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-requestbufferchange).

</div>
