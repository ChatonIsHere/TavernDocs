---
title: "Gatherer"
description: "class Gatherer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Gatherer

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`PickupBasedSkill`](/game-api/types/global-p/pickupbasedskill)
- **Derived types** [`Gatherer.Create`](/game-api/types/global-e-h/gatherer-create)
- **Nested types** [`Create`](/game-api/types/global-e-h/gatherer-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Gatherer()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-activegatherers" /><code>{"private HashSet<Rigidbody> activeGatherers"}</code> |
| <Link id="m-cangathercraftedpickups" /><code>{"private bool canGatherCraftedPickups"}</code> |
| <Link id="m-cangatherkinematicpickups" /><code>{"private bool canGatherKinematicPickups"}</code> |
| <Link id="m-dockdelay" /><code>{"private float dockDelay"}</code> |
| <Link id="m-dockedpickupsidentifiers" /><code>{"private List<uint> dockedPickupsIdentifiers"}</code> |
| <Link id="m-dockingrange" /><code>{"private float dockingRange"}</code> |
| <Link id="m-trainingpouchitem" /><code>{"private "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" trainingPouchItem"}</code> |
| <Link id="m-validitems" /><code>{"private "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{"[] validItems"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-deregister" /><code>{"override void Deregister("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> |
| <Link id="m-movepickuptopouch" /><code>{"void MovePickupToPouch("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> |
| <Link id="m-effectsrequested" /><code>{"protected override void EffectsRequested("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" targetEntity, "}<Link to="/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status, bool isLocalPlayer)"}</code> |
| <Link id="m-requesttooleffect" /><code>{"protected override void RequestToolEffect("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |
| <Link id="m-serializeinternal" /><code>{"protected override void SerializeInternal("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-dock" /><code>{"private void Dock("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> |
| <Link id="m-dockdelay-2" /><code>{"private IEnumerator DockDelay("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler) (iterator)"}</code> |
| <Link id="m-getpouchrenderers" /><code>{"private IEnumerable<MeshRenderer> GetPouchRenderers("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" pouchEntity)"}</code> |

</details>
