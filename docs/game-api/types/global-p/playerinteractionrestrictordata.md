---
title: "PlayerInteractionRestrictorData"
description: "Save data for a PlayerInteractionRestrictor: its id and its interaction limit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerInteractionRestrictorData

A **class** in `Root.Township`, no namespace.

Save data for a `PlayerInteractionRestrictor`: its id and its interaction limit.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NewSaveData<PlayerInteractionRestrictor, PlayerInteractionRestrictorData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`PlayerInteractionRestrictor`](/game-api/types/global-p/playerinteractionrestrictor), [`PlayerInteractionRestrictorData`](/game-api/types/global-p/playerinteractionrestrictordata)
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
