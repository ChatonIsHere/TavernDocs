---
title: "PickupContainer"
description: "class PickupContainer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupContainer

A **class** in `Root.Township`, no namespace.

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

| Member |
| --- |
| <Link id="m-distancetriggersquared" /><code>{"private float distanceTriggerSquared"}</code> |
| <Link id="m-dock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> |
| <Link id="m-isbreakable" /><code>{"private bool isBreakable"}</code> |
| <Link id="m-isgrabhalved" /><code>{"private bool isGrabHalved"}</code> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |
| <Link id="m-movequantity" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> moveQuantity"}</code> |
| <Link id="m-movetodock" /><code>{"private "}<Link to="/game-api/types/global-m-o/memoizeone-tinput-toutput">{"MemoizeOne"}</Link>{"<uint, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> moveToDock"}</code> |
| <Link id="m-moving" /><code>{"private Coroutine moving"}</code> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |
| <Link id="m-pickupduration" /><code>{"private float pickupDuration"}</code> |
| <Link id="m-sendspeed" /><code>{"private AnimationCurve sendSpeed"}</code> |
| <Link id="m-spawnpouch" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-q-r/requestpoucharguments">{"RequestPouchArguments"}</Link>{"> spawnPouch"}</code> |
| <Link id="m-startactive" /><code>{"private bool startActive"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; private set; }"}</code> |
| <Link id="m-pickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> |
| <Link id="m-defaultmultipleblockedaction" /><code>{"protected override "}<Link to="/game-api/types/global-m-o/multiplenotallowedaction">{"MultipleNotAllowedAction"}</Link>{" DefaultMultipleBlockedAction { get; }"}</code> |
| <Link id="m-defaultmultipleinteractionallowance" /><code>{"protected override "}<Link to="/game-api/types/global-m-o/multipleinteractionallowance">{"MultipleInteractionAllowance"}</Link>{" DefaultMultipleInteractionAllowance { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-checkforward" /><code>{"override "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" CheckForward("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out bool isForced)"}</code> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-interact" /><code>{"override void Interact("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-setactive" /><code>{"void SetActive(bool isActive)"}</code> |
| <Link id="m-undockall" /><code>{"void UndockAll("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-awake" /><code>{"protected void Awake()"}</code> |

<details>
<summary>23 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-checkbreak" /><code>{"private void CheckBreak("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" takenOut, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |
| <Link id="m-checkcompatibility" /><code>{"private bool CheckCompatibility("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickupTemp, "}<Link to="/game-api/types/global-p/pickupcontainer">{"PickupContainer"}</Link>{" container)"}</code> |
| <Link id="m-checkmove" /><code>{"private IEnumerator CheckMove("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" hand1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" hand2, IEnumerable<"}<Link to="/game-api/types/global-p/pickupcontainer">{"PickupContainer"}</Link>{"> inHand1, IEnumerable<"}<Link to="/game-api/types/global-p/pickupcontainer">{"PickupContainer"}</Link>{"> inHand2) (iterator)"}</code> |
| <Link id="m-destroypickup" /><code>{"private void DestroyPickup("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" droppedInto)"}</code> |
| <Link id="m-displaymovement" /><code>{"private void DisplayMovement("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |
| <Link id="m-dropcontainer" /><code>{"private void DropContainer("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-filterinteraction" /><code>{"private void FilterInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |
| <Link id="m-finalizegrab" /><code>{"private void FinalizeGrab("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-getdirection" /><code>{"private void GetDirection("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" hand, float speedTime, ref int direction)"}</code> |
| <Link id="m-grab" /><code>{"private void Grab("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> |
| <Link id="m-griptimer" /><code>{"private IEnumerator GripTimer("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" hardInteractProxy) (iterator)"}</code> |
| <Link id="m-griptimerpouch" /><code>{"private IEnumerator GripTimerPouch("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" hardInteractProxy) (iterator)"}</code> |
| <Link id="m-handlepouchrequest" /><code>{"private void HandlePouchRequest("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller, bool isFull)"}</code> |
| <Link id="m-movequantity-2" /><code>{"private void MoveQuantity("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint otherDockIdentifier)"}</code> |
| <Link id="m-movequantity-3" /><code>{"private void MoveQuantity("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, uint otherDockIdentifier)"}</code> |
| <Link id="m-networkspawnpouch" /><code>{"private void NetworkSpawnPouch("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-q-r/requestpoucharguments">{"RequestPouchArguments"}</Link>{" args)"}</code> |
| <Link id="m-otherhandpickup" /><code>{"private void OtherHandPickup("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> |
| <Link id="m-preventselfdock" /><code>{"private void PreventSelfDock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, ref bool result)"}</code> |
| <Link id="m-removeevents" /><code>{"private void RemoveEvents()"}</code> |
| <Link id="m-setupevents" /><code>{"private void SetupEvents()"}</code> |
| <Link id="m-spillout" /><code>{"private void SpillOut("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |
| <Link id="m-startcheckmove" /><code>{"private void StartCheckMove("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-stopmoving" /><code>{"private void StopMoving("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> |

</details>
