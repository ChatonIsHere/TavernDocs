---
title: "IInitializeAsLocalPlayer"
description: "Implemented by components on a player controller that need setup only on the local player's own copy, such as docks, impact detectors and LocomotionController."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IInitializeAsLocalPlayer

An **interface** in `Root.Township`, the global namespace.

Implemented by components on a player controller that need setup only on the local player's own copy, such as docks, impact detectors and `LocomotionController`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`AccessibleDocks`](/mod/game-api/types/alta-player/accessibledocks), [`ImpactDetector`](/mod/game-api/types/alta-items/impactdetector), [`PickupDock`](/mod/game-api/types/alta-items/pickupdock), [`NetworkEntityComponentController`](/mod/game-api/types/alta-networking/networkentitycomponentcontroller), [`NetworkTransform`](/mod/game-api/types/alta-networking/networktransform), [`PlayerComponentController`](/mod/game-api/types/alta-networking/playercomponentcontroller), [`PlayerStatBasedVisualEffect`](/mod/game-api/types/game-other-namespaces/playerstatbasedvisualeffect), [`CharacterIKController`](/mod/game-api/types/global-c-d/characterikcontroller), [`CullingController`](/mod/game-api/types/global-c-d/cullingcontroller), [`DarknessReader`](/mod/game-api/types/global-c-d/darknessreader), [`LocomotionController`](/mod/game-api/types/global-i-l/locomotioncontroller), [`NetworkedIKBody`](/mod/game-api/types/global-m-o/networkedikbody)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeaslocalplayer" /><code>{"void InitializeAsLocalPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | Called when the controller turns out to be the local player's. |
