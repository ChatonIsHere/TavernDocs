---
title: "DecraftingComponent"
description: "Base for a station that takes crafted items apart by hitting them with a chisel tool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DecraftingComponent

An **abstract class** in `Root.Township`, `Alta.Crafting`.

Base for a station that takes crafted items apart by hitting them with a chisel tool. Hits near a joint knock off the outermost part there. The hit runs on the server and the effect syncs to clients.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`DecraftingDeck`](/game-api/types/alta-crafting/decraftingdeck), [`GenericAssemblyStation`](/game-api/types/alta-crafting/genericassemblystation)
- **Nested types** [`HitTypePosition`](/game-api/types/alta-crafting/decraftingcomponent-hittypeposition)
- **Documented in** [Crafting](/game-api/game-systems/crafting)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected DecraftingComponent()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-availableslots" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{"> availableSlots"}</code> | Slots whose attached part can be knocked off now. |
| <Link id="m-currentchiseleable" /><code>{"private "}<Link to="/game-api/types/alta-crafting/chiselable">{"Chiselable"}</Link>{" currentChiseleable"}</code> | `Chiselable` added to the current part so it can be hit. |
| <Link id="m-currentpart" /><code>{"private "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" currentPart"}</code> | The crafting part being decrafted. |
| <Link id="m-decraftinghiteffect" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" decraftingHitEffect"}</code> | Effect for a hit that lands near a removable part. |
| <Link id="m-innefectivehiteffect" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" innefectiveHitEffect"}</code> | Effect for a hit that is too weak or misses every slot. |
| <Link id="m-maxdistancefrominsertsquared" /><code>{"private float maxDistanceFromInsertSquared"}</code> | Squared distance from a slot a hit must land within. |
| <Link id="m-minimumhittodecraft" /><code>{"private float minimumHitToDecraft"}</code> | Least damage a hit needs to knock a part off. |
| <Link id="m-syncdecraftinghit" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-crafting/decraftingcomponent-hittypeposition">{"DecraftingComponent.HitTypePosition"}</Link>{"> syncDecraftingHit"}</code> | Message sync for hit effects. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canpickupchangewhileadded" /><code>{"virtual bool CanPickupChangeWhileAdded { get; }"}</code> | Whether non-crafted items may be added. False by default. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addpickup" /><code>{"void AddPickup("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" newPickup)"}</code> | Starts tracking a crafted item: adds a `Chiselable` to it and maps its joint slots. Uncrafted items need the forced overload or `CanPickupChangeWhileAdded`. |
| <Link id="m-addpickup-2" /><code>{"void AddPickup("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" newPickup, bool isForced)"}</code> | Starts tracking a crafted item: adds a `Chiselable` to it and maps its joint slots. Uncrafted items need the forced overload or `CanPickupChangeWhileAdded`. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the synced hit effect message. |
| <Link id="m-removecurrentpickup" /><code>{"void RemoveCurrentPickup()"}</code> | Stops tracking the current item and removes its `Chiselable`. |
| <Link id="m-trydecraft" /><code>{"protected void TryDecraft(float damage, Vector3 position, Vector3 direction, "}<Link to="/game-api/types/alta-crafting/chiselingtool">{"ChiselingTool"}</Link>{" tool, Collider hitCollider)"}</code> | Server: handles a chisel hit. A strong enough hit near a joint of an outer part fully disconnects that part; otherwise plays the ineffective effect. |
| <Link id="m-validatecraftingpart" /><code>{"protected virtual bool ValidateCraftingPart("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part)"}</code> | Override to refuse removing a given part. Returns true by default. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addpartslots" /><code>{"private bool AddPartSlots("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part)"}</code> | Adds the slots holding outermost parts (ones with nothing attached) to `availableSlots`. Returns true if the part has nothing attached. |
| <Link id="m-getclosestslot" /><code>{"private bool GetClosestSlot(ref "}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" closestSlot, Vector3 position)"}</code> | Finds the available slot nearest the hit, within `maxDistanceFromInsertSquared`. |
| <Link id="m-mapslots" /><code>{"private void MapSlots()"}</code> | Rebuilds the list of slots that can be knocked off. |
| <Link id="m-remapslots" /><code>{"private void ReMapSlots("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part, bool isLoad)"}</code> | Handler for the part being crafted: rebuilds the slot list. |
| <Link id="m-syncdecraftinghit-2" /><code>{"private void SyncDecraftingHit("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-crafting/decraftingcomponent-hittypeposition">{"DecraftingComponent.HitTypePosition"}</Link>{" hitTypePosition)"}</code> | Network message that plays the effective or ineffective hit effect on clients. |

</details>
