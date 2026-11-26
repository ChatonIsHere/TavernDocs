---
title: "IInitializeAsRemotePlayer"
description: "Component on a player prefab that PlayerController calls when the player is set up as someone else's (remote) player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IInitializeAsRemotePlayer

An **interface** in `Root.Township`, no namespace.

Component on a player prefab that `PlayerController` calls when the player is set up as someone else's (remote) player.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`ImpactDetector`](/game-api/types/alta-items/impactdetector), [`PickupDock`](/game-api/types/alta-items/pickupdock), [`NetworkEntityComponentController`](/game-api/types/alta-networking/networkentitycomponentcontroller)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasremoteplayer" /><code>{"void InitializeAsRemotePlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | Sets the component up for a remote player. |
