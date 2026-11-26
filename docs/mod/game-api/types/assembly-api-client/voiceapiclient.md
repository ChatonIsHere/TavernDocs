---
title: "VoiceApiClient"
description: "High-level Alta API calls that get voice chat tokens."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VoiceApiClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

High-level Alta API calls that get voice chat tokens.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/mod/game-api/types/assembly-api-client/highlevelapiclientbase), [`IVoiceApiClient`](/mod/game-api/types/assembly-api-client/ivoiceapiclient)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal VoiceApiClient("}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> | <span className="api-desc">Creates a `VoiceApiClient` from `clientManager`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getjoinchanneltokenasync" /><code>{"async Task<string> GetJoinChannelTokenAsync(int serverIdentifier)"}</code> | <span className="api-desc">Gets a voice token for joining the voice channel of the given server.</span> |
| <Link id="m-getlogintokenasync" /><code>{"async Task<string> GetLoginTokenAsync()"}</code> | <span className="api-desc">Gets a voice token for logging in to the voice service.</span> |
