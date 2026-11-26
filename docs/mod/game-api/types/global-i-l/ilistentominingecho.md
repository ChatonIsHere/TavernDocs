---
title: "IListenToMiningEcho"
description: "Something that reacts to a mining echo spreading out."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IListenToMiningEcho

An **interface** in `Root.Township`, the global namespace.

Something that reacts to a mining echo spreading out. Register with `MiningEcho.StartListening`; `Phantom` uses it to crack.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`Phantom`](/mod/game-api/types/alta-intelligence/phantom)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"void Update(Vector3 center, float radius)"}</code> | Called each frame an echo is active with its centre and current radius. |

## Used in

Members of other types that take, return or hold a `IListenToMiningEcho`:

[`MiningEcho.listeners`](/mod/game-api/types/global-m-o/miningecho#m-listeners), [`MiningEcho.StartListening`](/mod/game-api/types/global-m-o/miningecho#m-startlistening), [`MiningEcho.StopListening`](/mod/game-api/types/global-m-o/miningecho#m-stoplistening).
