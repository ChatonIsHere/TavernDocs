---
title: "ISavableFull"
description: "A saved component that needs a setup step after its whole entity tree has loaded, such as a smelter or chiselling deck."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISavableFull

An **interface** in `Root.Township`, `Alta.Chunks`.

A saved component that needs a setup step after its whole entity tree has loaded, such as a smelter or chiselling deck.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Derived types** [`Smelter`](/mod/game-api/types/alta-crafting/smelter), [`ChisellingDeck`](/mod/game-api/types/alta-crafting/chisellingdeck), [`ISavableFull<T>`](/mod/game-api/types/alta-world/isavablefull-t), [`CookingPot`](/mod/game-api/types/alta-crafting/cookingpot), [`HeatSourceBase`](/mod/game-api/types/alta-stats-effects/heatsourcebase), [`LockableHinge`](/mod/game-api/types/alta-items/lockablehinge), [`PickupDock`](/mod/game-api/types/alta-items/pickupdock), [`NetworkRigidbody`](/mod/game-api/types/alta-networking/networkrigidbody), [`TradeVendor`](/mod/game-api/types/alta-crafting/tradevendor), [`RepairBox`](/mod/game-api/types/global-q-r/repairbox)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loadsetup" /><code>{"void LoadSetup()"}</code> | Called after loading, children first, by `StreamerHelper.LoadSetupRecursive`. |
