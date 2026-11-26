---
title: "PickupContainer"
description: "Makes a dock act as a stack container players can grab from, such as a pouch or a fixed stack."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupContainer

A **class** in `Root.Township`, no namespace.

Makes a dock act as a stack container players can grab from, such as a pouch or a fixed stack. Handles a quick grab of one item, a held grab that takes the whole stack or half as a new pouch, moving items one at a time between two held containers, and pouches breaking when nearly empty. The server applies all quantity changes.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`Interactable`](/game-api/types/global-i-l/interactable)
- **Documented in** [Player inventory](/game-api/items/player-inventory#pouches-and-pickupcontainer), [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PickupContainer()"}</code> |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distancetriggersquared" /><code>{"private float distanceTriggerSquared"}</code> | Squared hand movement during a grip that counts as pulling a single item out. |
| <Link id="m-dock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> | The dock that holds the contents. |
| <Link id="m-isbreakable" /><code>{"private bool isBreakable"}</code> | If set, the pouch breaks when nearly empty and can't be emptied below 3 by moving. |
| <Link id="m-isgrabhalved" /><code>{"private bool isGrabHalved"}</code> | If set, a held grab takes half the stack instead of all of it. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-movequantity" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> moveQuantity"}</code> | Method sync that moves one item to another dock. |
| <Link id="m-movetodock" /><code>{"private "}<Link to="/game-api/types/global-m-o/memoizeone-tinput-toutput">{"MemoizeOne"}</Link>{"<uint, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> moveToDock"}</code> | Cached lookup of the target dock by entity id. |
| <Link id="m-moving" /><code>{"private Coroutine moving"}</code> | The running `CheckMove` coroutine. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | Backing field for `Pickup`. |
| <Link id="m-pickupduration" /><code>{"private float pickupDuration"}</code> | Seconds to hold a grab before it takes the stack (0.5 by default). |
| <Link id="m-sendspeed" /><code>{"private AnimationCurve sendSpeed"}</code> | Curve of items per second against how long the move button has been held. |
| <Link id="m-spawnpouch" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-q-r/requestpoucharguments">{"RequestPouchArguments"}</Link>{"> spawnPouch"}</code> | Method sync for client pouch requests. |
| <Link id="m-startactive" /><code>{"private bool startActive"}</code> | Whether the container starts active. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; private set; }"}</code> | True when the container's grab behaviour is on. Changed with `SetActive`. |
| <Link id="m-pickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | Optional pickup that carries this container, such as a pouch. Null for fixed containers. |
| <Link id="m-defaultmultipleblockedaction" /><code>{"protected override "}<Link to="/game-api/types/global-m-o/multiplenotallowedaction">{"MultipleNotAllowedAction"}</Link>{" DefaultMultipleBlockedAction { get; }"}</code> | Blocks extra interactions that aren't allowed. |
| <Link id="m-defaultmultipleinteractionallowance" /><code>{"protected override "}<Link to="/game-api/types/global-m-o/multipleinteractionallowance">{"MultipleInteractionAllowance"}</Link>{" DefaultMultipleInteractionAllowance { get; }"}</code> | Allows several hands and several players at once. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkforward" /><code>{"override "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" CheckForward("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out bool isForced)"}</code> | Decides what a grab really takes: an explicit forward target, the pouch pickup itself, the single item when only one is left, or this container. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the move quantity and spawn pouch method syncs. |
| <Link id="m-interact" /><code>{"override void Interact("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Local: starts the matching grip timer when an active container is grabbed, unless it sits in another player's inventory dock. |
| <Link id="m-setactive" /><code>{"void SetActive(bool isActive)"}</code> | Turns the container behaviour on or off, hooking or unhooking its events. |
| <Link id="m-undockall" /><code>{"void UndockAll("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Asks the server to give the player the whole stack as one pickup. |
| <Link id="m-awake" /><code>{"protected void Awake()"}</code> | Sets `IsActive` from `startActive`, hooks events if active and makes the dock forward to this. |

<details>
<summary>23 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkbreak" /><code>{"private void CheckBreak("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" takenOut, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Server: when a breakable pouch drops below 2 items, frees the last item (into the holder's hand if held) and destroys the pouch. |
| <Link id="m-checkcompatibility" /><code>{"private bool CheckCompatibility("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickupTemp, "}<Link to="/game-api/types/global-p/pickupcontainer">{"PickupContainer"}</Link>{" container)"}</code> | True if the item could go in the container's dock, counting a full dock as compatible. |
| <Link id="m-checkmove" /><code>{"private IEnumerator CheckMove("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" hand1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" hand2, IEnumerable<"}<Link to="/game-api/types/global-p/pickupcontainer">{"PickupContainer"}</Link>{"> inHand1, IEnumerable<"}<Link to="/game-api/types/global-p/pickupcontainer">{"PickupContainer"}</Link>{"> inHand2) (iterator)"}</code> | Local coroutine while holding two containers: blocks walking and moves one item per step in the direction the move-item buttons give, faster the longer they're held. |
| <Link id="m-destroypickup" /><code>{"private void DestroyPickup("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" droppedInto)"}</code> | When a pouch is docked into a stacking dock, moves its contents into that dock and removes the pouch. |
| <Link id="m-displaymovement" /><code>{"private void DisplayMovement("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Client: shows a ghost of the item flying into the target dock. |
| <Link id="m-dropcontainer" /><code>{"private void DropContainer("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Unblocks walking and unhooks the other hand when the pouch is let go. |
| <Link id="m-filterinteraction" /><code>{"private void FilterInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | For an unbreakable container: blocks grabbing from it while docked somewhere that doesn't allow container use. |
| <Link id="m-finalizegrab" /><code>{"private void FinalizeGrab("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | After a full hold: grabs the pouch if it's docked, otherwise asks the server for a pouch of the stack (or half), or grabs a single item. |
| <Link id="m-getdirection" /><code>{"private void GetDirection("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" hand, float speedTime, ref int direction)"}</code> | Reads the hand's move item right or left buttons as 1, -1 or 0. |
| <Link id="m-grab" /><code>{"private void Grab("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | Swaps the hand to the given interactable, skipping this container in its forward list. |
| <Link id="m-griptimer" /><code>{"private IEnumerator GripTimer("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" hardInteractProxy) (iterator)"}</code> | Local coroutine for a hard grab: a short grab or moving the hand takes one item; holding for `pickupDuration` runs `FinalizeGrab`. |
| <Link id="m-griptimerpouch" /><code>{"private IEnumerator GripTimerPouch("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" hardInteractProxy) (iterator)"}</code> | Local coroutine for a soft grab that then squeezes: holding the squeeze for `pickupDuration` runs `FinalizeGrab`, letting go early takes one item. |
| <Link id="m-handlepouchrequest" /><code>{"private void HandlePouchRequest("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller, bool isFull)"}</code> | Server: hands the player one item if the stack is small, otherwise splits off the full stack or half into a new pickup in their hand. |
| <Link id="m-movequantity-2" /><code>{"private void MoveQuantity("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint otherDockIdentifier)"}</code> | Moves one item from this dock to another dock by entity id. Server checks and applies it, then syncs. Clients show the movement. |
| <Link id="m-movequantity-3" /><code>{"private void MoveQuantity("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, uint otherDockIdentifier)"}</code> | Moves one item from this dock to another dock by entity id. Server checks and applies it, then syncs. Clients show the movement. |
| <Link id="m-networkspawnpouch" /><code>{"private void NetworkSpawnPouch("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-q-r/requestpoucharguments">{"RequestPouchArguments"}</Link>{" args)"}</code> | Server: handles a client's pouch request after checking the hand belongs to that player. |
| <Link id="m-otherhandpickup" /><code>{"private void OtherHandPickup("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | Re-runs the two-container check when the other hand grabs something. |
| <Link id="m-preventselfdock" /><code>{"private void PreventSelfDock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, ref bool result)"}</code> | Stops the pouch docking into its own dock. |
| <Link id="m-removeevents" /><code>{"private void RemoveEvents()"}</code> | Unhooks the events `SetupEvents` added. |
| <Link id="m-setupevents" /><code>{"private void SetupEvents()"}</code> | Hooks the pouch's dock, break, grab and release events, or just the self-dock filter for a fixed container. |
| <Link id="m-spillout" /><code>{"private void SpillOut("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Server: undocks everything when the pouch breaks. |
| <Link id="m-startcheckmove" /><code>{"private void StartCheckMove("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Local: if the other hand holds an active container, starts `CheckMove` between them. |
| <Link id="m-stopmoving" /><code>{"private void StopMoving("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | Stops `CheckMove` and unblocks walking on both hands. |

</details>
