---
title: "IVoiceApiClient"
description: "Alta web API calls for Vivox voice chat tokens."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IVoiceApiClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Alta web API calls for Vivox voice chat tokens. `ApiAccess.ApiClient.VoiceClient`. Voice no longer works.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`OfflineVoiceClient`](/game-api/types/assembly-api-client/offlinevoiceclient), [`VoiceApiClient`](/game-api/types/assembly-api-client/voiceapiclient)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getjoinchanneltokenasync" /><code>{"Task<string> GetJoinChannelTokenAsync(int serverIdentifier)"}</code> | Gets a token to join a server's voice channel. |
| <Link id="m-getlogintokenasync" /><code>{"Task<string> GetLoginTokenAsync()"}</code> | Gets a token to log in to voice chat. |

## Used in

Members of other types that take, return or hold a `IVoiceApiClient`:

[`HighLevelApiClient.VoiceClient`](/game-api/types/assembly-api-client/highlevelapiclient#m-voiceclient), [`IHighLevelApiClient.VoiceClient`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-voiceclient), [`OfflineHighLevelApiClient.VoiceClient`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-voiceclient).
