---
title: "JointSlot"
description: "A place on a CraftingPart where another part's insert can join (a blade onto a handle)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JointSlot

A **class** in `Root.Township`, `Alta.Crafting`.

A place on a `CraftingPart` where another part's insert can join (a blade onto a handle). The server joins parts and syncs the join; clients replay it from the sync.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`JointPoint`](/game-api/types/alta-crafting/jointpoint), [`IJointSlotComponent`](/game-api/types/alta-crafting/ijointslotcomponent)
- **Documented in** [Crafting](/game-api/game-systems/crafting#jointslot)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"JointSlot()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-isflipweighting" /><code>{"private bool isFlipWeighting"}</code> |
| <Link id="m-syncinsert" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncInsert"}</code> |
| <Link id="m-types" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/jointslottype">{"JointSlotType"}</Link>{"> types"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectedpart" /><code><Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" ConnectedPart { get; private set; }"}</code> | The part joined into this slot, or null. |
| <Link id="m-generaltypes" /><code>{"override IEnumerable<"}<Link to="/game-api/types/alta-crafting/jointpointtype">{"JointPointType"}</Link>{"> GeneralTypes { get; }"}</code> | The slot types, as general joint point types. |
| <Link id="m-isflipweighting-2" /><code>{"bool IsFlipWeighting { get; }"}</code> | For double-sided weapons: asks to flip when docked if this side is heavier. |
| <Link id="m-isused" /><code>{"bool IsUsed { get; }"}</code> | True if a part is joined here. |
| <Link id="m-types-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-crafting/jointslottype">{"JointSlotType"}</Link>{"> Types { get; }"}</code> | Slot types that say which inserts fit. |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-alta-crafting-ijointslotcomponent-isdestroyed" /><code>{"private bool Alta.Crafting.IJointSlotComponent.IsDestroyed { get; }"}</code> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-usedchanged" /><code>{"event Action<"}<Link to="/game-api/types/alta-crafting/ijointslotcomponent">{"IJointSlotComponent"}</Link>{"> UsedChanged"}</code> | Raised when a part is joined or removed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-alignandchild" /><code>{"void AlignAndChild("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" insertPart)"}</code> | Rotates the inserted part and parents it so its insert sits on this slot. |
| <Link id="m-alignandchild-2" /><code>{"void AlignAndChild("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" insertPart, Quaternion rotation)"}</code> | Rotates the inserted part and parents it so its insert sits on this slot. |
| <Link id="m-calculateconnectedrotation" /><code>{"Quaternion CalculateConnectedRotation("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" insertPart)"}</code> | Rotation the inserted part needs so its insert lines up with this slot. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the message that syncs joins. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: joins any part already placed under the slot in the prefab, marking its forging as done. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends a joining player what is in the slot. |
| <Link id="m-onjointconnected" /><code>{"override void OnJointConnected(bool isPlayingEffects)"}</code> | Plays the attach effect (when effects are on) and raises `UsedChanged`. |
| <Link id="m-onjointdisconnected" /><code>{"override void OnJointDisconnected(bool isPlayingEffects)"}</code> | Raises `UsedChanged`. |
| <Link id="m-supports" /><code>{"bool Supports("}<Link to="/game-api/types/alta-crafting/jointinserttype">{"JointInsertType"}</Link>{" type)"}</code> | True if any of the slot's types allows the given insert type. |
| <Link id="m-tryconnect" /><code>{"bool TryConnect("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" insertPart, bool isPlayingEffects)"}</code> | Joins a part here: parents it, attaches durability, raises the crafted events, reports a craft task and syncs. False if either side is taken. |
| <Link id="m-trydisconnect" /><code>{"bool TryDisconnect(bool isPlayingEffects)"}</code> | Splits the joined part out and syncs. False if the slot is empty. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Names the object after its slot type in the editor. |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-findexisting" /><code>{"private void FindExisting()"}</code> |
| <Link id="m-syncinsert-2" /><code>{"private async void SyncInsert("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isPlayingEffects)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `JointSlot`:

[`ConfirmationCraftingPart.AttemptCraft`](/game-api/types/alta-crafting/confirmationcraftingpart#m-attemptcraft), [`ConfirmationCraftingPart.SetupNailing`](/game-api/types/alta-crafting/confirmationcraftingpart#m-setupnailing), [`ConfirmationCraftingPart.targetSlot`](/game-api/types/alta-crafting/confirmationcraftingpart#m-targetslot), [`CraftingOptions.bestMatch`](/game-api/types/alta-crafting/craftingoptions#m-bestmatch), [`CraftingOptions.possibleSlotPools`](/game-api/types/alta-crafting/craftingoptions#m-possibleslotpools), [`CraftingOptions.possibleSlots`](/game-api/types/alta-crafting/craftingoptions#m-possibleslots), [`CraftingPart.AttemptCraft`](/game-api/types/alta-crafting/craftingpart#m-attemptcraft-2), [`CraftingPart.CraftWithSlot`](/game-api/types/alta-crafting/craftingpart#m-craftwithslot), [`CraftingPart.LostChildAsTopLevel`](/game-api/types/alta-crafting/craftingpart#m-lostchildastoplevel), [`CraftingPart.ReceivedChildAsTopLevel`](/game-api/types/alta-crafting/craftingpart#m-receivedchildastoplevel), [`CraftingPart.slots`](/game-api/types/alta-crafting/craftingpart#m-slots), [`CraftingPart.Slots`](/game-api/types/alta-crafting/craftingpart#m-slots-2), [`DecraftingComponent.availableSlots`](/game-api/types/alta-crafting/decraftingcomponent#m-availableslots), [`DecraftingComponent.GetClosestSlot`](/game-api/types/alta-crafting/decraftingcomponent#m-getclosestslot), [`JointInsert.ConnectedSlot`](/game-api/types/alta-crafting/jointinsert#m-connectedslot), [`JointInsert.particlesPool`](/game-api/types/alta-crafting/jointinsert#m-particlespool), [`JointInsert.ShowLines`](/game-api/types/alta-crafting/jointinsert#m-showlines), [`JointInsert.SwapLines`](/game-api/types/alta-crafting/jointinsert#m-swaplines), [`Arrow.craftedParts`](/game-api/types/global-a-b/arrow#m-craftedparts), [`MainMenuCraft.slot`](/game-api/types/global-m-o/mainmenucraft#m-slot).
