---
title: "JointSlot"
description: "On the server, a join also broadcasts an ItemCraftedEvent (part hashes and player) on the game's event bus, for the micro tutorials."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JointSlot

A **class** in `Root.Township`, `Alta.Crafting`.

On the server, a join also broadcasts an `ItemCraftedEvent` (part hashes and player) on the game's event bus, for the micro tutorials.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`JointPoint`](/game-api/types/alta-crafting/jointpoint), [`IJointSlotComponent`](/game-api/types/alta-crafting/ijointslotcomponent)
- **Documented in** [Crafting](/game-api/game-systems/crafting#jointslot)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JointSlot()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isflipweighting" /><code>{"private bool isFlipWeighting"}</code> |  |
| <Link id="m-syncinsert" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncInsert"}</code> |  |
| <Link id="m-types" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/jointslottype">{"JointSlotType"}</Link>{"> types"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectedpart" /><code><Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" ConnectedPart { get; private set; }"}</code> |  |
| <Link id="m-generaltypes" /><code>{"override IEnumerable<"}<Link to="/game-api/types/alta-crafting/jointpointtype">{"JointPointType"}</Link>{"> GeneralTypes { get; }"}</code> |  |
| <Link id="m-isflipweighting-2" /><code>{"bool IsFlipWeighting { get; }"}</code> |  |
| <Link id="m-isused" /><code>{"bool IsUsed { get; }"}</code> |  |
| <Link id="m-types-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-crafting/jointslottype">{"JointSlotType"}</Link>{"> Types { get; }"}</code> |  |
| <Link id="m-alta-crafting-ijointslotcomponent-isdestroyed" /><code>{"private bool Alta.Crafting.IJointSlotComponent.IsDestroyed { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-usedchanged" /><code>{"event Action<"}<Link to="/game-api/types/alta-crafting/ijointslotcomponent">{"IJointSlotComponent"}</Link>{"> UsedChanged"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-alignandchild" /><code>{"void AlignAndChild("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" insertPart)"}</code> |  |
| <Link id="m-alignandchild-2" /><code>{"void AlignAndChild("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" insertPart, Quaternion rotation)"}</code> |  |
| <Link id="m-calculateconnectedrotation" /><code>{"Quaternion CalculateConnectedRotation("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" insertPart)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-onjointconnected" /><code>{"override void OnJointConnected(bool isPlayingEffects)"}</code> |  |
| <Link id="m-onjointdisconnected" /><code>{"override void OnJointDisconnected(bool isPlayingEffects)"}</code> |  |
| <Link id="m-supports" /><code>{"bool Supports("}<Link to="/game-api/types/alta-crafting/jointinserttype">{"JointInsertType"}</Link>{" type)"}</code> |  |
| <Link id="m-tryconnect" /><code>{"bool TryConnect("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" insertPart, bool isPlayingEffects)"}</code> |  |
| <Link id="m-trydisconnect" /><code>{"bool TryDisconnect(bool isPlayingEffects)"}</code> |  |
| <Link id="m-findexisting" /><code>{"private void FindExisting()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> |  |
| <Link id="m-syncinsert-2" /><code>{"private async void SyncInsert("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isPlayingEffects)"}</code> |  |

## Used in

Members of other types that take, return or hold a `JointSlot`:

[`ConfirmationCraftingPart.AttemptCraft`](/game-api/types/alta-crafting/confirmationcraftingpart#m-attemptcraft), [`ConfirmationCraftingPart.SetupNailing`](/game-api/types/alta-crafting/confirmationcraftingpart#m-setupnailing), [`ConfirmationCraftingPart.targetSlot`](/game-api/types/alta-crafting/confirmationcraftingpart#m-targetslot), [`CraftingOptions.bestMatch`](/game-api/types/alta-crafting/craftingoptions#m-bestmatch), [`CraftingOptions.possibleSlotPools`](/game-api/types/alta-crafting/craftingoptions#m-possibleslotpools), [`CraftingOptions.possibleSlots`](/game-api/types/alta-crafting/craftingoptions#m-possibleslots), [`CraftingPart.AttemptCraft`](/game-api/types/alta-crafting/craftingpart#m-attemptcraft-2), [`CraftingPart.CraftWithSlot`](/game-api/types/alta-crafting/craftingpart#m-craftwithslot), [`CraftingPart.LostChildAsTopLevel`](/game-api/types/alta-crafting/craftingpart#m-lostchildastoplevel), [`CraftingPart.ReceivedChildAsTopLevel`](/game-api/types/alta-crafting/craftingpart#m-receivedchildastoplevel), [`CraftingPart.slots`](/game-api/types/alta-crafting/craftingpart#m-slots), [`CraftingPart.Slots`](/game-api/types/alta-crafting/craftingpart#m-slots-2), [`DecraftingComponent.availableSlots`](/game-api/types/alta-crafting/decraftingcomponent#m-availableslots), [`DecraftingComponent.GetClosestSlot`](/game-api/types/alta-crafting/decraftingcomponent#m-getclosestslot), [`JointInsert.ConnectedSlot`](/game-api/types/alta-crafting/jointinsert#m-connectedslot), [`JointInsert.particlesPool`](/game-api/types/alta-crafting/jointinsert#m-particlespool), [`JointInsert.ShowLines`](/game-api/types/alta-crafting/jointinsert#m-showlines), [`JointInsert.SwapLines`](/game-api/types/alta-crafting/jointinsert#m-swaplines), [`Arrow.craftedParts`](/game-api/types/global-a-b/arrow#m-craftedparts), [`MainMenuCraft.slot`](/game-api/types/global-m-o/mainmenucraft#m-slot).
