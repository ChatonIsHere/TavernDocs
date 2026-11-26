---
title: "PlayerInteractionRestrictorData"
description: "Save data for a PlayerInteractionRestrictor: its id and its interaction limit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerInteractionRestrictorData

A **class** in `Root.Township`, the global namespace.

Save data for a `PlayerInteractionRestrictor`: its id and its interaction limit.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NewSaveData<PlayerInteractionRestrictor, PlayerInteractionRestrictorData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`PlayerInteractionRestrictor`](/mod/game-api/types/global-p/playerinteractionrestrictor), [`PlayerInteractionRestrictorData`](/mod/game-api/types/global-p/playerinteractionrestrictordata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerInteractionRestrictorData()"}</code> | Creates a `PlayerInteractionRestrictorData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-id" /><code>{"int id"}</code> | The restrictor's id in `PlayerInteractionManager`. |
| <Link id="m-interactionspercharge" /><code>{"int interactionsPerCharge"}</code> | How many interactions a player gets per charge. |
