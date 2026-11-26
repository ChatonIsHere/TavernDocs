---
title: "IVivoxMutedPlayerStore"
description: "Internal store of user IDs the local player has muted."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IVivoxMutedPlayerStore

An **internal interface** in `Root.Township`, `Alta.Voice`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal store of user IDs the local player has muted. `VoiceChat` uses the PlayerPrefs version, which saves on every change.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Derived types** [`VivoxPlayerPrefsMutedPlayerStore`](/mod/game-api/types/alta-networking/vivoxplayerprefsmutedplayerstore)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"bool Add(int userId)"}</code> | <span className="api-desc">Adds a user ID. False if it was already there.</span> |
| <Link id="m-contains" /><code>{"bool Contains(int userId)"}</code> | <span className="api-desc">True if the user ID is muted.</span> |
| <Link id="m-remove" /><code>{"bool Remove(int userId)"}</code> | <span className="api-desc">Removes a user ID. False if it wasn't there.</span> |

## Used in

Members of other types that take, return or hold a `IVivoxMutedPlayerStore`:

<div className="api-used-in">

[`VoiceChat.mutedStore`](/mod/game-api/types/alta-networking/voicechat#m-mutedstore).

</div>
