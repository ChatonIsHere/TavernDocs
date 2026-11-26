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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`DecraftingDeck`](/mod/game-api/types/alta-crafting/decraftingdeck), [`GenericAssemblyStation`](/mod/game-api/types/alta-crafting/genericassemblystation)
- **Nested types** [`HitTypePosition`](/mod/game-api/types/alta-crafting/decraftingcomponent-hittypeposition)
- **Documented in** [Crafting](/mod/game-api/game-systems/crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected DecraftingComponent()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-availableslots" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{"> availableSlots"}</code> | <span className="api-desc">Slots whose attached part can be knocked off now.</span> |
| <Link id="m-currentchiseleable" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/chiselable">{"Chiselable"}</Link>{" currentChiseleable"}</code> | <span className="api-desc">`Chiselable` added to the current part so it can be hit.</span> |
| <Link id="m-currentpart" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" currentPart"}</code> | <span className="api-desc">The crafting part being decrafted.</span> |
| <Link id="m-decraftinghiteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" decraftingHitEffect"}</code> | <span className="api-desc">Effect for a hit that lands near a removable part.</span> |
| <Link id="m-innefectivehiteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" innefectiveHitEffect"}</code> | <span className="api-desc">Effect for a hit that is too weak or misses every slot.</span> |
| <Link id="m-maxdistancefrominsertsquared" /><code>{"private float maxDistanceFromInsertSquared"}</code> | <span className="api-desc">Squared distance from a slot a hit must land within.</span> |
| <Link id="m-minimumhittodecraft" /><code>{"private float minimumHitToDecraft"}</code> | <span className="api-desc">Least damage a hit needs to knock a part off.</span> |
| <Link id="m-syncdecraftinghit" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/alta-crafting/decraftingcomponent-hittypeposition">{"DecraftingComponent.HitTypePosition"}</Link>{"> syncDecraftingHit"}</code> | <span className="api-desc">Message sync for hit effects.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canpickupchangewhileadded" /><code>{"virtual bool CanPickupChangeWhileAdded { get; }"}</code> | <span className="api-desc">Whether non-crafted items may be added. False by default.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addpickup" /><code>{"void AddPickup("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" newPickup)"}</code> | <span className="api-desc">Starts tracking a crafted item: adds a `Chiselable` to it and maps its joint slots. Uncrafted items need the forced overload or `CanPickupChangeWhileAdded`.</span> |
| <Link id="m-addpickup-2" /><code>{"void AddPickup("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" newPickup, bool isForced)"}</code> | <span className="api-desc">Starts tracking a crafted item: adds a `Chiselable` to it and maps its joint slots. Uncrafted items need the forced overload or `CanPickupChangeWhileAdded`.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the synced hit effect message.</span> |
| <Link id="m-removecurrentpickup" /><code>{"void RemoveCurrentPickup()"}</code> | <span className="api-desc">Stops tracking the current item and removes its `Chiselable`.</span> |
| <Link id="m-trydecraft" /><code>{"protected void TryDecraft(float damage, Vector3 position, Vector3 direction, "}<Link to="/mod/game-api/types/alta-crafting/chiselingtool">{"ChiselingTool"}</Link>{" tool, Collider hitCollider)"}</code> | <span className="api-desc">Server: handles a chisel hit. A strong enough hit near a joint of an outer part fully disconnects that part; otherwise plays the ineffective effect.</span> |
| <Link id="m-validatecraftingpart" /><code>{"protected virtual bool ValidateCraftingPart("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part)"}</code> | <span className="api-desc">Override to refuse removing a given part. Returns true by default.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addpartslots" /><code>{"private bool AddPartSlots("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part)"}</code> | <span className="api-desc">Adds the slots holding outermost parts (ones with nothing attached) to `availableSlots`. Returns true if the part has nothing attached.</span> |
| <Link id="m-getclosestslot" /><code>{"private bool GetClosestSlot(ref "}<Link to="/mod/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" closestSlot, Vector3 position)"}</code> | <span className="api-desc">Finds the available slot nearest the hit, within `maxDistanceFromInsertSquared`.</span> |
| <Link id="m-mapslots" /><code>{"private void MapSlots()"}</code> | <span className="api-desc">Rebuilds the list of slots that can be knocked off.</span> |
| <Link id="m-remapslots" /><code>{"private void ReMapSlots("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part, bool isLoad)"}</code> | <span className="api-desc">Handler for the part being crafted: rebuilds the slot list.</span> |
| <Link id="m-syncdecraftinghit-2" /><code>{"private void SyncDecraftingHit("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-crafting/decraftingcomponent-hittypeposition">{"DecraftingComponent.HitTypePosition"}</Link>{" hitTypePosition)"}</code> | <span className="api-desc">Network message that plays the effective or ineffective hit effect on clients.</span> |

</details>
