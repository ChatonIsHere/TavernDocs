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
| <Link id="m-ctor" /><code>{"Gatherer()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activegatherers" /><code>{"private HashSet<Rigidbody> activeGatherers"}</code> | <span className="api-desc">Pouches waiting to dock, so they don't gather each other.</span> |
| <Link id="m-cangathercraftedpickups" /><code>{"private bool canGatherCraftedPickups"}</code> | <span className="api-desc">Allows gathering crafted pickups.</span> |
| <Link id="m-cangatherkinematicpickups" /><code>{"private bool canGatherKinematicPickups"}</code> | <span className="api-desc">Allows gathering kinematic pickups.</span> |
| <Link id="m-dockdelay" /><code>{"private float dockDelay"}</code> | <span className="api-desc">Seconds between letting go and gathering.</span> |
| <Link id="m-dockedpickupsidentifiers" /><code>{"private List<uint> dockedPickupsIdentifiers"}</code> | <span className="api-desc">Entity IDs of the pickups gathered last time, sent to clients.</span> |
| <Link id="m-dockingrange" /><code>{"private float dockingRange"}</code> | <span className="api-desc">Radius gathered around the pouch.</span> |
| <Link id="m-trainingpouchitem" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" trainingPouchItem"}</code> | <span className="api-desc">Training pouch item that also counts as a pouch.</span> |
| <Link id="m-validitems" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{"[] validItems"}</code> | <span className="api-desc">Docked item types this skill works with.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"override void Deregister("}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | <span className="api-desc">When an active pouch is let go, starts `DockDelay` on the player.</span> |
| <Link id="m-movepickuptopouch" /><code>{"void MovePickupToPouch("}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Client visual: spawns a ghost of the pickup that moves into the pouch's dock.</span> |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> | <span className="api-desc">True for a pouch or training pouch whose docked type is in `validItems`.</span> |
| <Link id="m-effectsrequested" /><code>{"protected override void EffectsRequested("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" targetEntity, "}<Link to="/mod/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status, bool isLocalPlayer)"}</code> | <span className="api-desc">Client: plays the fly-in effect for each docked pickup once it has spawned.</span> |
| <Link id="m-requesttooleffect" /><code>{"protected override void RequestToolEffect("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Starts the skill effect on the pouch's renderers.</span> |
| <Link id="m-serializeinternal" /><code>{"protected override void SerializeInternal("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">When the skill was consumed, also syncs the IDs of the pickups that were docked (up to 63).</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dock" /><code>{"private void Dock("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Finds allowed pickups within `dockingRange` of the pouch, runs the skill and docks them into the pouch.</span> |
| <Link id="m-dockdelay-2" /><code>{"private IEnumerator DockDelay("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler) (iterator)"}</code> | <span className="api-desc">Coroutine: waits `dockDelay`, then docks if the skill is still unlocked; otherwise turns the effect off.</span> |
| <Link id="m-getpouchrenderers" /><code>{"private IEnumerable<MeshRenderer> GetPouchRenderers("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" pouchEntity)"}</code> | <span className="api-desc">Pouch renderers, without those of the item docked in it, for the skill effect.</span> |

</details>
