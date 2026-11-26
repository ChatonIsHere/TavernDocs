---
title: "IInteractAgent"
description: "A creature that can grab things with an Interactor, so it can run ActiveEat."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IInteractAgent

An **interface** in `Root.Township`, `Alta.Intelligence`.

A creature that can grab things with an `Interactor`, so it can run `ActiveEat`.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`IAgent`](/mod/game-api/types/alta-intelligence/iagent), [`ITarget`](/mod/game-api/types/alta-intelligence/itarget), [`ITargetPointer`](/mod/game-api/types/alta-intelligence/itargetpointer), [`INetworkEntityBehaviour`](/mod/game-api/types/alta-networking/inetworkentitybehaviour)
- **Derived types** [`ActiveEat`](/mod/game-api/types/alta-intelligence/activeeat), [`Babu`](/mod/game-api/types/alta-intelligence/babu), [`Spriggull`](/mod/game-api/types/alta-intelligence/spriggull)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-interactor" /><code><Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" { get; }"}</code> | The creature's interactor, used to grab the item it eats. |
