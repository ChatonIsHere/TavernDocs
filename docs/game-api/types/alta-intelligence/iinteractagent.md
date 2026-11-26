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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`IAgent`](/game-api/types/alta-intelligence/iagent), [`ITarget`](/game-api/types/alta-intelligence/itarget), [`ITargetPointer`](/game-api/types/alta-intelligence/itargetpointer), [`INetworkEntityBehaviour`](/game-api/types/alta-networking/inetworkentitybehaviour)
- **Derived types** [`ActiveEat`](/game-api/types/alta-intelligence/activeeat), [`Babu`](/game-api/types/alta-intelligence/babu), [`Spriggull`](/game-api/types/alta-intelligence/spriggull)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-interactor" /><code><Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" { get; }"}</code> | The creature's interactor, used to grab the item it eats. |
