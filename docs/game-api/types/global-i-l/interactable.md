---
title: "Interactable"
description: "Anything a hand can grab or use: the base class for Pickup, levers, buttons, containers and more."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Interactable

A **class** in `Root.Township`, no namespace.

Anything a hand can grab or use: the base class for `Pickup`, levers, buttons, containers and more. A `NetworkEntityBehaviour` on the item; interactions start on the client and are synced through the `Interactor`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IEntityReplaceHandler`](/game-api/types/alta-networking/ientityreplacehandler)
- **Derived types** [`PickupDock`](/game-api/types/alta-items/pickupdock), [`SimpleInteractPoint`](/game-api/types/alta-menus/simpleinteractpoint), [`AssistGrabInteractable`](/game-api/types/global-a-b/assistgrabinteractable), [`FakePickup`](/game-api/types/global-e-h/fakepickup), [`InteractableEvent`](/game-api/types/global-i-l/interactableevent), [`InteractableUnityEvent`](/game-api/types/global-i-l/interactableunityevent), [`InteractionForwarder`](/game-api/types/global-i-l/interactionforwarder), [`LongHoldInteractable`](/game-api/types/global-i-l/longholdinteractable), [`PhysicalButton`](/game-api/types/global-p/physicalbutton), [`Pickup`](/game-api/types/global-p/pickup), [`PickupContainer`](/game-api/types/global-p/pickupcontainer), [`PickupExtension`](/game-api/types/global-p/pickupextension), [`ServerElement`](/game-api/types/global-s/serverelement)
- **Documented in** [Interactable](/game-api/items/interactable)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Interactable()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isduringinteract" /><code>{"protected bool isDuringInteract"}</code> | True while `CheckInteractAllowedAndReplace` is making other hands let go. |

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-channels" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactionchannel">{"InteractionChannel"}</Link>{" channels"}</code> |
| <Link id="m-isnetworked" /><code>{"private bool isNetworked"}</code> |
| <Link id="m-lastplayerinteractor" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" lastPlayerInteractor"}</code> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |
| <Link id="m-multipleallowance" /><code>{"private "}<Link to="/game-api/types/global-m-o/multipleinteractionallowance">{"MultipleInteractionAllowance"}</Link>{" multipleAllowance"}</code> |
| <Link id="m-multiplenotallowedaction" /><code>{"private "}<Link to="/game-api/types/global-m-o/multiplenotallowedaction">{"MultipleNotAllowedAction"}</Link>{" multipleNotAllowedAction"}</code> |
| <Link id="m-overrideinteractionprioritymodifier" /><code>{"private float overrideInteractionPriorityModifier"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-basesavemode" /><code><Link to="/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" BaseSaveMode { get; set; }"}</code> | The save mode to go back to after being held. `Child` for embedded parts. |
| <Link id="m-channels-2" /><code><Link to="/game-api/types/global-i-l/interactionchannel">{"InteractionChannel"}</Link>{" Channels { get; set; }"}</code> | Which interaction channels this listens on. A hand only sees it if their channels overlap. |
| <Link id="m-forwardto" /><code>{"List<"}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{"> ForwardTo { get; }"}</code> | Interactables to pass interactions on to. The last one added wins. |
| <Link id="m-interactors" /><code>{"List<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> Interactors { get; }"}</code> | The hands interacting with this now. |
| <Link id="m-isinteractable" /><code>{"bool IsInteractable { get; set; }"}</code> | Whether hands can find this. Same as the component being enabled. |
| <Link id="m-isinteractedwith" /><code>{"bool IsInteractedWith { get; protected set; }"}</code> | True while at least one hand is on it. |
| <Link id="m-isnetworked-2" /><code>{"bool IsNetworked { get; set; }"}</code> | When false, interactions on this are not started or stopped from network messages. |
| <Link id="m-lastinteractorplayerid" /><code>{"int LastInteractorPlayerId { get; protected set; }"}</code> | User id of the last player who interacted with this. 0 if none. |
| <Link id="m-lastinteractorroot" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" LastInteractorRoot { get; private set; }"}</code> | The body entity of the last player who interacted with this. |
| <Link id="m-lastplayerinteractor-2" /><code><Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" LastPlayerInteractor { get; set; }"}</code> | The body of the last player who interacted with this. Setting it updates the id and root. |
| <Link id="m-multipleallowance-2" /><code><Link to="/game-api/types/global-m-o/multipleinteractionallowance">{"MultipleInteractionAllowance"}</Link>{" MultipleAllowance { get; }"}</code> | Flags for whether two hands of one player, or several players, can hold this at once. |
| <Link id="m-defaultmultipleblockedaction" /><code>{"protected virtual "}<Link to="/game-api/types/global-m-o/multiplenotallowedaction">{"MultipleNotAllowedAction"}</Link>{" DefaultMultipleBlockedAction { get; }"}</code> | What a subclass does by default when a second hand isn't allowed. `Block` here. |
| <Link id="m-defaultmultipleinteractionallowance" /><code>{"protected virtual "}<Link to="/game-api/types/global-m-o/multipleinteractionallowance">{"MultipleInteractionAllowance"}</Link>{" DefaultMultipleInteractionAllowance { get; }"}</code> | Which multiple interactions a subclass allows by default. None here. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-interactionended" /><code>{"event Action<"}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{", "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> InteractionEnded"}</code> | Raised when a hand stops interacting with this. |
| <Link id="m-interactionfilter" /><code>{"event "}<Link to="/game-api/types/global-i-l/interactionfilter">{"InteractionFilter"}</Link>{" "}<Link to="/game-api/types/global-i-l/interactionfilter">{"InteractionFilter"}</Link></code> | Handlers can set the result to false to stop a hand picking this. |
| <Link id="m-interactionstarted" /><code>{"event Action<"}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{", "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> InteractionStarted"}</code> | Raised when a hand starts interacting with this. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-assessinteraction" /><code>{"virtual bool AssessInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out float score)"}</code> | Runs the `InteractionFilter` handlers, then `AssessScore`. Returns false if a filter blocked it. |
| <Link id="m-assessscore" /><code>{"virtual bool AssessScore("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out float score)"}</code> | Scores this for a hand: squared distance from the grip point, times a per-prefab modifier. Lower wins; containers count double. |
| <Link id="m-checkforward" /><code>{"virtual "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" CheckForward("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out bool isForced)"}</code> | Returns the interactable an interaction should really go to: the last entry in `ForwardTo`, or itself. |
| <Link id="m-checkinteractallowedandreplace" /><code>{"virtual bool CheckInteractAllowedAndReplace("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Checks multiple-hand and multiple-player rules. Depending on settings, either blocks the new hand or makes the old ones let go. |
| <Link id="m-finishinteraction" /><code>{"virtual void FinishInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Removes the hand, clears `IsInteractedWith` when none are left and raises `InteractionEnded`. |
| <Link id="m-forcedrop" /><code>{"void ForceDrop(bool isForcingClient = false)"}</code> | Makes every hand on this let go. |
| <Link id="m-forcelastinteractedplayerid" /><code>{"void ForceLastInteractedPlayerID(int id, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" lastPayerInteractor)"}</code> | Sets the last interacting player id and body directly. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Hooks the prefab's destroy so every hand lets go when it is destroyed. Embedded parts get `Child` save mode. |
| <Link id="m-interact" /><code>{"virtual void Interact("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Adds the hand, sets `IsInteractedWith`, records the player and raises `InteractionStarted`. |
| <Link id="m-networkstartinteraction" /><code>{"virtual void NetworkStartInteraction("}<Link to="/game-api/types/global-i-l/inetworkinteractargument">{"INetworkInteractArgument"}</Link>{" message, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, Action<"}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{"> handleInteractionStart)"}</code> | Starts an interaction that came over the network, logging if the hand wouldn't normally be allowed. |
| <Link id="m-networkstopinteraction" /><code>{"virtual void NetworkStopInteraction("}<Link to="/game-api/types/global-i-l/interactarguments">{"InteractArguments"}</Link>{" message, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, Action<"}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{"> handleInteractionEnd)"}</code> | Ends an interaction that came over the network. |
| <Link id="m-replacedwith" /><code>{"virtual void ReplacedWith("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/replaceavoidflags">{"ReplaceAvoidFlags"}</Link>{" replaceAvoidFlags)"}</code> | Called when the entity is replaced: hands move to the new entity's interactable unless told not to. |
| <Link id="m-replacewith" /><code>{"void ReplaceWith("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | Moves every hand on this to another interactable, or to what a `Spawner` last spawned. Used when an item turns into another. |
| <Link id="m-replacewith-2" /><code>{"virtual void ReplaceWith("}<Link to="/game-api/types/global-s/spawner">{"Spawner"}</Link>{" spawner)"}</code> | Moves every hand on this to another interactable, or to what a `Spawner` last spawned. Used when an item turns into another. |
| <Link id="m-onlastinteractorplayerchanged" /><code>{"protected virtual void OnLastInteractorPlayerChanged()"}</code> | Override hook, called when a different player interacts with this. |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | Editor: fills in the multiple-interaction defaults if they were never set. |
| <Link id="m-start" /><code>{"protected virtual void Start()"}</code> | Empty override hook. |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-networkdestroyed" /><code>{"private void NetworkDestroyed("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> |
| <Link id="m-testlefthand" /><code>{"private void TestLeftHand()"}</code> |
| <Link id="m-testlefthandend" /><code>{"private void TestLeftHandEnd()"}</code> |
| <Link id="m-testrighthand" /><code>{"private void TestRightHand()"}</code> |
| <Link id="m-testrighthandend" /><code>{"private void TestRightHandEnd()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `Interactable`:

[`ActionOrb.HandleGrabbed`](/game-api/types/global-a-b/actionorb#m-handlegrabbed), [`ActionOrb.StartMovingBack`](/game-api/types/global-a-b/actionorb#m-startmovingback), [`ChiselingTool.StartCheckHaptic`](/game-api/types/alta-crafting/chiselingtool#m-startcheckhaptic), [`ChiselingTool.StopCheckHaptic`](/game-api/types/alta-crafting/chiselingtool#m-stopcheckhaptic), [`TimberBlockSpawner.handles`](/game-api/types/alta-crafting/timberblockspawner#m-handles), [`TimberBlockSpawner.SnapPoint`](/game-api/types/alta-crafting/timberblockspawner#m-snappoint), [`TimberBlockSpawner.StartCheckingPosition`](/game-api/types/alta-crafting/timberblockspawner#m-startcheckingposition), [`CaveTeleporter.HandFilter`](/game-api/types/alta-world-generation/caveteleporter#m-handfilter), [`CaveTeleporter.handTrigger`](/game-api/types/alta-world-generation/caveteleporter#m-handtrigger), [`CharacterCollisionController.DisableColliders`](/game-api/types/alta-player/charactercollisioncontroller#m-disablecolliders), [`CharacterCollisionController.EnableColliders`](/game-api/types/alta-player/charactercollisioncontroller#m-enablecolliders), [`Hand.Detach`](/game-api/types/alta-player/hand#m-detach), [`Hand.MoveCenterOfMassToGripPoint`](/game-api/types/alta-player/hand#m-movecenterofmasstogrippoint), [`Hand.ResetCenterOfMass`](/game-api/types/alta-player/hand#m-resetcenterofmass), [`InteractionCollisionController.InteractionEnded`](/game-api/types/alta-player/interactioncollisioncontroller#m-interactionended), [`InteractionCollisionController.InteractionStarted`](/game-api/types/alta-player/interactioncollisioncontroller#m-interactionstarted), [`AdditionalOwnedDock.CheckInteractionFilter`](/game-api/types/alta-crafting/additionalowneddock#m-checkinteractionfilter), [`ConfirmationCraftingPart.InteractionPopout`](/game-api/types/alta-crafting/confirmationcraftingpart#m-interactionpopout), [`CraftingOptions.AttemptCraft`](/game-api/types/alta-crafting/craftingoptions#m-attemptcraft), [`CraftingOptions.Cancel`](/game-api/types/alta-crafting/craftingoptions#m-cancel), [`CraftingOptions.RequestCraft`](/game-api/types/alta-crafting/craftingoptions#m-requestcraft), [`CraftingPart.CheckPossibleConnections`](/game-api/types/alta-crafting/craftingpart#m-checkpossibleconnections), [`GenericCraftingPiece.FilterPop`](/game-api/types/alta-crafting/genericcraftingpiece#m-filterpop), [`GenericCraftingPiece.Grab`](/game-api/types/alta-crafting/genericcraftingpiece#m-grab), [`GenericCraftingPiece.popInteractable`](/game-api/types/alta-crafting/genericcraftingpiece#m-popinteractable), [`GenericCraftingStation.ComponentReleased`](/game-api/types/alta-crafting/genericcraftingstation#m-componentreleased), [`GenericCraftingStation.fakeInteractable`](/game-api/types/alta-crafting/genericcraftingstation#m-fakeinteractable), [`GenericCraftingStation.GrabResult`](/game-api/types/alta-crafting/genericcraftingstation#m-grabresult), [`GenericCraftingStation.GrabResultFilter`](/game-api/types/alta-crafting/genericcraftingstation#m-grabresultfilter), [`CosmeticPresetTrophy.DisableGhostHands`](/game-api/types/alta-customization/cosmeticpresettrophy#m-disableghosthands), [`CosmeticPresetTrophy.EnableGhostHands`](/game-api/types/alta-customization/cosmeticpresettrophy#m-enableghosthands), [`CosmeticPresetTrophyTrigger.TrophyGrabbed`](/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-trophygrabbed), [`CosmeticPresetTrophyTrigger.TrophyReleased`](/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-trophyreleased), [`CosmeticScrollElement.FilterInteractionAfterRelease`](/game-api/types/alta-customization/cosmeticscrollelement#m-filterinteractionafterrelease), [`CustomizationPickup.DestroyOnInteractEnd`](/game-api/types/alta-customization/customizationpickup#m-destroyoninteractend), [`EditableSlot.AttemptPlace`](/game-api/types/alta-customization/editableslot#m-attemptplace), [`EditableSlot.Filter`](/game-api/types/alta-customization/editableslot#m-filter), [`EditableSlot.InteractedWith`](/game-api/types/alta-customization/editableslot#m-interactedwith), [`EditableSlot.remover`](/game-api/types/alta-customization/editableslot#m-remover), [`MainMenuShopInterface.throttleInteractable`](/game-api/types/alta-customization/mainmenushopinterface#m-throttleinteractable), [`ImpactTool.Grabbed`](/game-api/types/alta-items/impacttool#m-grabbed), [`ImpactTool.Released`](/game-api/types/alta-items/impacttool#m-released), [`PickupBreakOnImpact.DisableBreak`](/game-api/types/alta-items/pickupbreakonimpact#m-disablebreak), [`ActiveEat.Cancel`](/game-api/types/alta-intelligence/activeeat#m-cancel), [`ITarget.Interactable`](/game-api/types/alta-intelligence/itarget#m-interactable), [`PickupAgent.InteractionChanged`](/game-api/types/alta-intelligence/pickupagent#m-interactionchanged), [`Schmeechee.Dropped`](/game-api/types/alta-intelligence/schmeechee#m-dropped), [`Schmeechee.PickedUp`](/game-api/types/alta-intelligence/schmeechee#m-pickedup), [`Target.interactable`](/game-api/types/alta-intelligence/target#m-interactable), [`Target.Interactable`](/game-api/types/alta-intelligence/target#m-interactable-2), [`Chest.HandleInteracted`](/game-api/types/alta-items/chest#m-handleinteracted), [`CommunalStorage.FilterInteraction`](/game-api/types/alta-items/communalstorage#m-filterinteraction), [`KeyItem.DeRegisterIK`](/game-api/types/alta-items/keyitem#m-deregisterik), [`KeyItem.RegisterIK`](/game-api/types/alta-items/keyitem#m-registerik), [`Lock.RecentGrab`](/game-api/types/alta-items/lock#m-recentgrab), [`PickupDock.CheckForward`](/game-api/types/alta-items/pickupdock#m-checkforward), [`PlayerDocks.Filter`](/game-api/types/alta-items/playerdocks#m-filter), [`StabilizeJointContainer.StartHandlingToPositionChanges`](/game-api/types/alta-items/stabilizejointcontainer#m-starthandlingtopositionchanges), [`StabilizeJointContainer.StopHandlingToPositionChanges`](/game-api/types/alta-items/stabilizejointcontainer#m-stophandlingtopositionchanges), [`StabilizePickupJoint.StartHandlingToPositionChanges`](/game-api/types/alta-items/stabilizepickupjoint#m-starthandlingtopositionchanges) and 308 more.
