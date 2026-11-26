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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Derived types** [`VivoxPlayerPrefsMutedPlayerStore`](/game-api/types/alta-networking/vivoxplayerprefsmutedplayerstore)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"bool Add(int userId)"}</code> | Adds a user ID. False if it was already there. |
| <Link id="m-contains" /><code>{"bool Contains(int userId)"}</code> | True if the user ID is muted. |
| <Link id="m-remove" /><code>{"bool Remove(int userId)"}</code> | Removes a user ID. False if it wasn't there. |

## Used in

Members of other types that take, return or hold a `IVivoxMutedPlayerStore`:

[`VoiceChat.mutedStore`](/game-api/types/alta-networking/voicechat#m-mutedstore).
