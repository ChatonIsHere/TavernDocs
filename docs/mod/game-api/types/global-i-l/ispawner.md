---
title: "ISpawner"
description: "A spawner that remembers what it last spawned."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISpawner

An **interface** in `Root.Township`, the global namespace.

A spawner that remembers what it last spawned.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`SpawnerBase`](/mod/game-api/types/global-s/spawnerbase), [`SpawnerPart`](/mod/game-api/types/global-s/spawnerpart)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-lastspawned" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" LastSpawned { get; }"}</code> | The entity it spawned most recently. |
