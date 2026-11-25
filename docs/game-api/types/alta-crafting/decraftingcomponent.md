---
title: "DecraftingComponent"
description: "abstract class DecraftingComponent in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DecraftingComponent

An **abstract class** in `Root.Township`, `Alta.Crafting`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`DecraftingDeck`](/game-api/types/alta-crafting/decraftingdeck), [`GenericAssemblyStation`](/game-api/types/alta-crafting/genericassemblystation)
- **Nested types** [`HitTypePosition`](/game-api/types/alta-crafting/decraftingcomponent-hittypeposition)
- **Documented in** [Crafting](/game-api/game-systems/crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected DecraftingComponent()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-availableslots" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{"> availableSlots"}</code> |  |
| <Link id="m-currentchiseleable" /><code>{"private "}<Link to="/game-api/types/alta-crafting/chiselable">{"Chiselable"}</Link>{" currentChiseleable"}</code> |  |
| <Link id="m-currentpart" /><code>{"private "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" currentPart"}</code> |  |
| <Link id="m-decraftinghiteffect" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" decraftingHitEffect"}</code> |  |
| <Link id="m-innefectivehiteffect" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" innefectiveHitEffect"}</code> |  |
| <Link id="m-maxdistancefrominsertsquared" /><code>{"private float maxDistanceFromInsertSquared"}</code> |  |
| <Link id="m-minimumhittodecraft" /><code>{"private float minimumHitToDecraft"}</code> |  |
| <Link id="m-syncdecraftinghit" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-crafting/decraftingcomponent-hittypeposition">{"DecraftingComponent.HitTypePosition"}</Link>{"> syncDecraftingHit"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canpickupchangewhileadded" /><code>{"virtual bool CanPickupChangeWhileAdded { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addpickup" /><code>{"void AddPickup("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" newPickup)"}</code> |  |
| <Link id="m-addpickup-2" /><code>{"void AddPickup("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" newPickup, bool isForced)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-removecurrentpickup" /><code>{"void RemoveCurrentPickup()"}</code> |  |
| <Link id="m-addpartslots" /><code>{"private bool AddPartSlots("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part)"}</code> |  |
| <Link id="m-getclosestslot" /><code>{"private bool GetClosestSlot(ref "}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" closestSlot, Vector3 position)"}</code> |  |
| <Link id="m-mapslots" /><code>{"private void MapSlots()"}</code> |  |
| <Link id="m-remapslots" /><code>{"private void ReMapSlots("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part, bool isLoad)"}</code> |  |
| <Link id="m-syncdecraftinghit-2" /><code>{"private void SyncDecraftingHit("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-crafting/decraftingcomponent-hittypeposition">{"DecraftingComponent.HitTypePosition"}</Link>{" hitTypePosition)"}</code> |  |
| <Link id="m-trydecraft" /><code>{"protected void TryDecraft(float damage, Vector3 position, Vector3 direction, "}<Link to="/game-api/types/alta-crafting/chiselingtool">{"ChiselingTool"}</Link>{" tool, Collider hitCollider)"}</code> |  |
| <Link id="m-validatecraftingpart" /><code>{"protected virtual bool ValidateCraftingPart("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part)"}</code> |  |
