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
| <Link id="m-ctor" /><code>{"ItemSmelterRecipeUnlock()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-unlockdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/smelterupgrades">{"SmelterUpgrades"}</Link>{" unlockDefinition"}</code> | Backing field for `UnlockDefinition`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-unlockdefinition-2" /><code><Link to="/mod/game-api/types/alta-crafting/smelterupgrades">{"SmelterUpgrades"}</Link>{" UnlockDefinition { get; }"}</code> | The smelter upgrade this item unlocks. |

## Used in

Members of other types that take, return or hold a `ItemSmelterRecipeUnlock`:

[`SmelterRecipeUnlock.unlock`](/mod/game-api/types/global-s/smelterrecipeunlock#m-unlock).
