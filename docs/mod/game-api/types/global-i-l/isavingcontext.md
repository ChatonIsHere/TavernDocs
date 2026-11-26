---
title: "ISavingContext"
description: "A savable component that must be active while its prefab's children are saved or loaded."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISavingContext

An **interface** in `Root.Township`, the global namespace.

A savable component that must be active while its prefab's children are saved or loaded. `NetworkPrefab` pushes every one it finds before handling children and pops them after. `GlobalLogicManager` uses it.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`GlobalLogicManager`](/mod/game-api/types/alta-items/globallogicmanager)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-popcontext" /><code>{"void PopContext()"}</code> | <span className="api-desc">Called after the prefab's children are done; leaves the context.</span> |
| <Link id="m-pushcontext" /><code>{"void PushContext()"}</code> | <span className="api-desc">Called before the prefab's children are serialized; enters the context.</span> |

## Used in

Members of other types that take, return or hold a `ISavingContext`:

<div className="api-used-in">

[`SavingSystem.Load`](/mod/game-api/types/alta-world/savingsystem#m-load), [`SavingSystem.Serialize`](/mod/game-api/types/alta-world/savingsystem#m-serialize).

</div>
