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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`JointPoint`](/mod/game-api/types/alta-crafting/jointpoint), [`IJointSlotComponent`](/mod/game-api/types/alta-crafting/ijointslotcomponent)
- **Documented in** [Crafting](/mod/game-api/game-systems/crafting#jointslot)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JointSlot()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isflipweighting" /><code>{"private bool isFlipWeighting"}</code> | <span className="api-desc">Backing field for `IsFlipWeighting`. On double-sided weapons, asks to flip when docked if this side is heavier.</span> |
| <Link id="m-syncinsert" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncInsert"}</code> | <span className="api-desc">Method sync the server uses to send connects and disconnects, and the current state to joining players.</span> |
| <Link id="m-types" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-crafting/jointslottype">{"JointSlotType"}</Link>{"> types"}</code> | <span className="api-desc">Backing field for `Types`: slot types that decide which inserts fit.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectedpart" /><code><Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" ConnectedPart { get; private set; }"}</code> | <span className="api-desc">The part joined into this slot, or null.</span> |
| <Link id="m-generaltypes" /><code>{"override IEnumerable<"}<Link to="/mod/game-api/types/alta-crafting/jointpointtype">{"JointPointType"}</Link>{"> GeneralTypes { get; }"}</code> | <span className="api-desc">The slot types, as general joint point types.</span> |
| <Link id="m-isflipweighting-2" /><code>{"bool IsFlipWeighting { get; }"}</code> | <span className="api-desc">For double-sided weapons: asks to flip when docked if this side is heavier.</span> |
| <Link id="m-isused" /><code>{"bool IsUsed { get; }"}</code> | <span className="api-desc">True if a part is joined here.</span> |
| <Link id="m-types-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-crafting/jointslottype">{"JointSlotType"}</Link>{"> Types { get; }"}</code> | <span className="api-desc">Slot types that say which inserts fit.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-crafting-ijointslotcomponent-isdestroyed" /><code>{"private bool Alta.Crafting.IJointSlotComponent.IsDestroyed { get; }"}</code> | <span className="api-desc">True once the Unity object has been destroyed.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-usedchanged" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-crafting/ijointslotcomponent">{"IJointSlotComponent"}</Link>{"> UsedChanged"}</code> | <span className="api-desc">Raised when a part is joined or removed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-alignandchild" /><code>{"void AlignAndChild("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" insertPart)"}</code> | <span className="api-desc">Rotates the inserted part and parents it so its insert sits on this slot.</span> |
| <Link id="m-alignandchild-2" /><code>{"void AlignAndChild("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" insertPart, Quaternion rotation)"}</code> | <span className="api-desc">Rotates the inserted part and parents it so its insert sits on this slot.</span> |
| <Link id="m-calculateconnectedrotation" /><code>{"Quaternion CalculateConnectedRotation("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" insertPart)"}</code> | <span className="api-desc">Rotation the inserted part needs so its insert lines up with this slot.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the message that syncs joins.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: joins any part already placed under the slot in the prefab, marking its forging as done.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends a joining player what is in the slot.</span> |
| <Link id="m-onjointconnected" /><code>{"override void OnJointConnected(bool isPlayingEffects)"}</code> | <span className="api-desc">Plays the attach effect (when effects are on) and raises `UsedChanged`.</span> |
| <Link id="m-onjointdisconnected" /><code>{"override void OnJointDisconnected(bool isPlayingEffects)"}</code> | <span className="api-desc">Raises `UsedChanged`.</span> |
| <Link id="m-supports" /><code>{"bool Supports("}<Link to="/mod/game-api/types/alta-crafting/jointinserttype">{"JointInsertType"}</Link>{" type)"}</code> | <span className="api-desc">True if any of the slot's types allows the given insert type.</span> |
| <Link id="m-tryconnect" /><code>{"bool TryConnect("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" insertPart, bool isPlayingEffects)"}</code> | <span className="api-desc">Joins a part here: parents it, attaches durability, raises the crafted events, reports a craft task and syncs. False if either side is taken.</span> |
| <Link id="m-trydisconnect" /><code>{"bool TryDisconnect(bool isPlayingEffects)"}</code> | <span className="api-desc">Splits the joined part out and syncs. False if the slot is empty.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Names the object after its slot type in the editor.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-findexisting" /><code>{"private void FindExisting()"}</code> | <span className="api-desc">Server: on spawn, connects a crafting part already under the slot and marks its forged points fully done.</span> |
| <Link id="m-syncinsert-2" /><code>{"private async void SyncInsert("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isPlayingEffects)"}</code> | <span className="api-desc">Method sync handler: sends whether a part is connected and which one; receivers connect or disconnect to match.</span> |

</details>

## Used in

Members of other types that take, return or hold a `JointSlot`:

<div className="api-used-in">

[`ConfirmationCraftingPart.AttemptCraft`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-attemptcraft), [`ConfirmationCraftingPart.SetupNailing`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-setupnailing), [`ConfirmationCraftingPart.targetSlot`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-targetslot), [`CraftingOptions.bestMatch`](/mod/game-api/types/alta-crafting/craftingoptions#m-bestmatch), [`CraftingOptions.possibleSlotPools`](/mod/game-api/types/alta-crafting/craftingoptions#m-possibleslotpools), [`CraftingOptions.possibleSlots`](/mod/game-api/types/alta-crafting/craftingoptions#m-possibleslots), [`CraftingPart.AttemptCraft`](/mod/game-api/types/alta-crafting/craftingpart#m-attemptcraft-2), [`CraftingPart.CraftWithSlot`](/mod/game-api/types/alta-crafting/craftingpart#m-craftwithslot), [`CraftingPart.LostChildAsTopLevel`](/mod/game-api/types/alta-crafting/craftingpart#m-lostchildastoplevel), [`CraftingPart.ReceivedChildAsTopLevel`](/mod/game-api/types/alta-crafting/craftingpart#m-receivedchildastoplevel), [`CraftingPart.slots`](/mod/game-api/types/alta-crafting/craftingpart#m-slots), [`CraftingPart.Slots`](/mod/game-api/types/alta-crafting/craftingpart#m-slots-2), [`DecraftingComponent.availableSlots`](/mod/game-api/types/alta-crafting/decraftingcomponent#m-availableslots), [`DecraftingComponent.GetClosestSlot`](/mod/game-api/types/alta-crafting/decraftingcomponent#m-getclosestslot), [`JointInsert.ConnectedSlot`](/mod/game-api/types/alta-crafting/jointinsert#m-connectedslot), [`JointInsert.particlesPool`](/mod/game-api/types/alta-crafting/jointinsert#m-particlespool), [`JointInsert.ShowLines`](/mod/game-api/types/alta-crafting/jointinsert#m-showlines), [`JointInsert.SwapLines`](/mod/game-api/types/alta-crafting/jointinsert#m-swaplines), [`Arrow.craftedParts`](/mod/game-api/types/global-a-b/arrow#m-craftedparts), [`MainMenuCraft.slot`](/mod/game-api/types/global-m-o/mainmenucraft#m-slot).

</div>
