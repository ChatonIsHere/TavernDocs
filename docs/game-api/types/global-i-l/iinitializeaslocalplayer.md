---
title: "IInitializeAsLocalPlayer"
description: "Implemented by components on a player controller that need setup only on the local player's own copy, such as docks, impact detectors and LocomotionController."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IInitializeAsLocalPlayer

An **interface** in `Root.Township`, no namespace.

Implemented by components on a player controller that need setup only on the local player's own copy, such as docks, impact detectors and `LocomotionController`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`AccessibleDocks`](/game-api/types/alta-player/accessibledocks), [`ImpactDetector`](/game-api/types/alta-items/impactdetector), [`PickupDock`](/game-api/types/alta-items/pickupdock), [`NetworkEntityComponentController`](/game-api/types/alta-networking/networkentitycomponentcontroller), [`NetworkTransform`](/game-api/types/alta-networking/networktransform), [`PlayerComponentController`](/game-api/types/alta-networking/playercomponentcontroller), [`PlayerStatBasedVisualEffect`](/game-api/types/game-other-namespaces/playerstatbasedvisualeffect), [`CharacterIKController`](/game-api/types/global-c-d/characterikcontroller), [`CullingController`](/game-api/types/global-c-d/cullingcontroller), [`DarknessReader`](/game-api/types/global-c-d/darknessreader), [`LocomotionController`](/game-api/types/global-i-l/locomotioncontroller), [`NetworkedIKBody`](/game-api/types/global-m-o/networkedikbody)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeaslocalplayer" /><code>{"void InitializeAsLocalPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | Called when the controller turns out to be the local player's. |
