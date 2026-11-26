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

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Derived types** [`OfflineVoiceClient`](/mod/game-api/types/assembly-api-client/offlinevoiceclient), [`VoiceApiClient`](/mod/game-api/types/assembly-api-client/voiceapiclient)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getjoinchanneltokenasync" /><code>{"Task<string> GetJoinChannelTokenAsync(int serverIdentifier)"}</code> | <span className="api-desc">Gets a token to join a server's voice channel.</span> |
| <Link id="m-getlogintokenasync" /><code>{"Task<string> GetLoginTokenAsync()"}</code> | <span className="api-desc">Gets a token to log in to voice chat.</span> |

## Used in

Members of other types that take, return or hold a `IVoiceApiClient`:

<div className="api-used-in">

[`HighLevelApiClient.VoiceClient`](/mod/game-api/types/assembly-api-client/highlevelapiclient#m-voiceclient), [`IHighLevelApiClient.VoiceClient`](/mod/game-api/types/assembly-api-client/ihighlevelapiclient#m-voiceclient), [`OfflineHighLevelApiClient.VoiceClient`](/mod/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-voiceclient).

</div>
