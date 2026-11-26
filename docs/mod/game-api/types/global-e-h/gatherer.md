---
title: "Gatherer"
description: "Skill that, when a pouch is thrown, pulls nearby loose pickups of the pouch's docked type into it after a delay."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Gatherer

A **class** in `Root.Township`, the global namespace.

Skill that, when a pouch is thrown, pulls nearby loose pickups of the pouch's docked type into it after a delay. The server docks them; clients show them flying in.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`PickupBasedSkill`](/mod/game-api/types/global-p/pickupbasedskill)
- **Derived types** [`Gatherer.Create`](/mod/game-api/types/global-e-h/gatherer-create)
- **Nested types** [`Create`](/mod/game-api/types/global-e-h/gatherer-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Gatherer()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activegatherers" /><code>{"private HashSet<Rigidbody> activeGatherers"}</code> | Pouches waiting to dock, so they don't gather each other. |
| <Link id="m-cangathercraftedpickups" /><code>{"private bool canGatherCraftedPickups"}</code> | Allows gathering crafted pickups. |
| <Link id="m-cangatherkinematicpickups" /><code>{"private bool canGatherKinematicPickups"}</code> | Allows gathering kinematic pickups. |
| <Link id="m-dockdelay" /><code>{"private float dockDelay"}</code> | Seconds between letting go and gathering. |
| <Link id="m-dockedpickupsidentifiers" /><code>{"private List<uint> dockedPickupsIdentifiers"}</code> | Entity IDs of the pickups gathered last time, sent to clients. |
| <Link id="m-dockingrange" /><code>{"private float dockingRange"}</code> | Radius gathered around the pouch. |
| <Link id="m-trainingpouchitem" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" trainingPouchItem"}</code> | Training pouch item that also counts as a pouch. |
| <Link id="m-validitems" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{"[] validItems"}</code> | Docked item types this skill works with. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"override void Deregister("}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | When an active pouch is let go, starts `DockDelay` on the player. |
| <Link id="m-movepickuptopouch" /><code>{"void MovePickupToPouch("}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Client visual: spawns a ghost of the pickup that moves into the pouch's dock. |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> | True for a pouch or training pouch whose docked type is in `validItems`. |
| <Link id="m-effectsrequested" /><code>{"protected override void EffectsRequested("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" targetEntity, "}<Link to="/mod/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status, bool isLocalPlayer)"}</code> | Client: plays the fly-in effect for each docked pickup once it has spawned. |
| <Link id="m-requesttooleffect" /><code>{"protected override void RequestToolEffect("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Starts the skill effect on the pouch's renderers. |
| <Link id="m-serializeinternal" /><code>{"protected override void SerializeInternal("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | When the skill was consumed, also syncs the IDs of the pickups that were docked (up to 63). |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dock" /><code>{"private void Dock("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> | Finds allowed pickups within `dockingRange` of the pouch, runs the skill and docks them into the pouch. |
| <Link id="m-dockdelay-2" /><code>{"private IEnumerator DockDelay("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler) (iterator)"}</code> | Coroutine: waits `dockDelay`, then docks if the skill is still unlocked; otherwise turns the effect off. |
| <Link id="m-getpouchrenderers" /><code>{"private IEnumerable<MeshRenderer> GetPouchRenderers("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" pouchEntity)"}</code> | Pouch renderers, without those of the item docked in it, for the skill effect. |

</details>
