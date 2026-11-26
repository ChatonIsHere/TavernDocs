---
title: "ItemSmelterRecipeUnlock"
description: "Component on an item that unlocks a smelter upgrade."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ItemSmelterRecipeUnlock

A **class** in `Root.Township`, the global namespace.

Component on an item that unlocks a smelter upgrade. `SmelterRecipeUnlock` reads it from the pickup put in.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ItemSmelterRecipeUnlock()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-unlockdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/smelterupgrades">{"SmelterUpgrades"}</Link>{" unlockDefinition"}</code> | <span className="api-desc">Backing field for `UnlockDefinition`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-unlockdefinition-2" /><code><Link to="/mod/game-api/types/alta-crafting/smelterupgrades">{"SmelterUpgrades"}</Link>{" UnlockDefinition { get; }"}</code> | <span className="api-desc">The smelter upgrade this item unlocks.</span> |

## Used in

Members of other types that take, return or hold a `ItemSmelterRecipeUnlock`:

<div className="api-used-in">

[`SmelterRecipeUnlock.unlock`](/mod/game-api/types/global-s/smelterrecipeunlock#m-unlock).

</div>
