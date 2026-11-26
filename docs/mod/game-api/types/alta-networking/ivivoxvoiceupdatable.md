---
title: "IVivoxVoiceUpdatable"
description: "Positional voice that VivoxClient updates each frame."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IVivoxVoiceUpdatable

An **interface** in `Root.Township`, `Alta.Voice`.

Positional voice that `VivoxClient` updates each frame. `VivoxVoice` implements it.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Derived types** [`VivoxVoice`](/mod/game-api/types/alta-networking/vivoxvoice)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update3dposition" /><code>{"void Update3DPosition()"}</code> | Sends the voice position and facing to Vivox. `VivoxVoice` does it at most every 0.3 seconds while connected. |

## Used in

Members of other types that take, return or hold a `IVivoxVoiceUpdatable`:

[`VivoxClient.positionalChat`](/mod/game-api/types/alta-networking/vivoxclient#m-positionalchat).
