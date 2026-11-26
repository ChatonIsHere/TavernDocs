---
title: "Interactable"
description: "Anything a hand can grab or use: the base class for Pickup, levers, buttons, containers and more."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Interactable

A **class** in `Root.Township`, the global namespace.

Anything a hand can grab or use: the base class for `Pickup`, levers, buttons, containers and more. A `NetworkEntityBehaviour` on the item; interactions start on the client and are synced through the `Interactor`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IEntityReplaceHandler`](/mod/game-api/types/alta-networking/ientityreplacehandler)
- **Derived types** [`PickupDock`](/mod/game-api/types/alta-items/pickupdock), [`SimpleInteractPoint`](/mod/game-api/types/alta-menus/simpleinteractpoint), [`AssistGrabInteractable`](/mod/game-api/types/global-a-b/assistgrabinteractable), [`FakePickup`](/mod/game-api/types/global-e-h/fakepickup), [`InteractableEvent`](/mod/game-api/types/global-i-l/interactableevent), [`InteractableUnityEvent`](/mod/game-api/types/global-i-l/interactableunityevent), [`InteractionForwarder`](/mod/game-api/types/global-i-l/interactionforwarder), [`LongHoldInteractable`](/mod/game-api/types/global-i-l/longholdinteractable), [`PhysicalButton`](/mod/game-api/types/global-p/physicalbutton), [`Pickup`](/mod/game-api/types/global-p/pickup), [`PickupContainer`](/mod/game-api/types/global-p/pickupcontainer), [`PickupExtension`](/mod/game-api/types/global-p/pickupextension), [`ServerElement`](/mod/game-api/types/global-s/serverelement)
- **Documented in** [Interactable](/mod/game-api/items/interactable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Interactable()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isduringinteract" /><code>{"protected bool isDuringInteract"}</code> | <span className="api-desc">True while `CheckInteractAllowedAndReplace` is making other hands let go.</span> |

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-channels" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactionchannel">{"InteractionChannel"}</Link>{" channels"}</code> | <span className="api-desc">Backing field for `Channels`. Only interactors sharing a channel can use this.</span> |
| <Link id="m-isnetworked" /><code>{"private bool isNetworked"}</code> | <span className="api-desc">Backing field for `IsNetworked`. When false, networked start and stop messages are ignored.</span> |
| <Link id="m-lastplayerinteractor" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" lastPlayerInteractor"}</code> | <span className="api-desc">Backing field for `LastPlayerInteractor`.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-multipleallowance" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/multipleinteractionallowance">{"MultipleInteractionAllowance"}</Link>{" multipleAllowance"}</code> | <span className="api-desc">Backing field for `MultipleAllowance`: whether more than one hand, or more than one player, may hold this at once.</span> |
| <Link id="m-multiplenotallowedaction" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/multiplenotallowedaction">{"MultipleNotAllowedAction"}</Link>{" multipleNotAllowedAction"}</code> | <span className="api-desc">What happens when a disallowed extra interactor tries: block the new one, or make the old one let go.</span> |
| <Link id="m-overrideinteractionprioritymodifier" /><code>{"private float overrideInteractionPriorityModifier"}</code> | <span className="api-desc">Multiplies the distance score when picking what a hand grabs; lower wins. Zero means use the defaults (containers count double).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-basesavemode" /><code><Link to="/mod/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" BaseSaveMode { get; set; }"}</code> | <span className="api-desc">The save mode to go back to after being held. `Child` for embedded parts.</span> |
| <Link id="m-channels-2" /><code><Link to="/mod/game-api/types/global-i-l/interactionchannel">{"InteractionChannel"}</Link>{" Channels { get; set; }"}</code> | <span className="api-desc">Which interaction channels this listens on. A hand only sees it if their channels overlap.</span> |
| <Link id="m-forwardto" /><code>{"List<"}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{"> ForwardTo { get; }"}</code> | <span className="api-desc">Interactables to pass interactions on to. The last one added wins.</span> |
| <Link id="m-interactors" /><code>{"List<"}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> Interactors { get; }"}</code> | <span className="api-desc">The hands interacting with this now.</span> |
| <Link id="m-isinteractable" /><code>{"bool IsInteractable { get; set; }"}</code> | <span className="api-desc">Whether hands can find this. Same as the component being enabled.</span> |
| <Link id="m-isinteractedwith" /><code>{"bool IsInteractedWith { get; protected set; }"}</code> | <span className="api-desc">True while at least one hand is on it.</span> |
| <Link id="m-isnetworked-2" /><code>{"bool IsNetworked { get; set; }"}</code> | <span className="api-desc">When false, interactions on this are not started or stopped from network messages.</span> |
| <Link id="m-lastinteractorplayerid" /><code>{"int LastInteractorPlayerId { get; protected set; }"}</code> | <span className="api-desc">User id of the last player who interacted with this. 0 if none.</span> |
| <Link id="m-lastinteractorroot" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" LastInteractorRoot { get; private set; }"}</code> | <span className="api-desc">The body entity of the last player who interacted with this.</span> |
| <Link id="m-lastplayerinteractor-2" /><code><Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" LastPlayerInteractor { get; set; }"}</code> | <span className="api-desc">The body of the last player who interacted with this. Setting it updates the id and root.</span> |
| <Link id="m-multipleallowance-2" /><code><Link to="/mod/game-api/types/global-m-o/multipleinteractionallowance">{"MultipleInteractionAllowance"}</Link>{" MultipleAllowance { get; }"}</code> | <span className="api-desc">Flags for whether two hands of one player, or several players, can hold this at once.</span> |
| <Link id="m-defaultmultipleblockedaction" /><code>{"protected virtual "}<Link to="/mod/game-api/types/global-m-o/multiplenotallowedaction">{"MultipleNotAllowedAction"}</Link>{" DefaultMultipleBlockedAction { get; }"}</code> | <span className="api-desc">What a subclass does by default when a second hand isn't allowed. `Block` here.</span> |
| <Link id="m-defaultmultipleinteractionallowance" /><code>{"protected virtual "}<Link to="/mod/game-api/types/global-m-o/multipleinteractionallowance">{"MultipleInteractionAllowance"}</Link>{" DefaultMultipleInteractionAllowance { get; }"}</code> | <span className="api-desc">Which multiple interactions a subclass allows by default. None here.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-interactionended" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{", "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> InteractionEnded"}</code> | <span className="api-desc">Raised when a hand stops interacting with this.</span> |
| <Link id="m-interactionfilter" /><code>{"event "}<Link to="/mod/game-api/types/global-i-l/interactionfilter">{"InteractionFilter"}</Link>{" "}<Link to="/mod/game-api/types/global-i-l/interactionfilter">{"InteractionFilter"}</Link></code> | <span className="api-desc">Handlers can set the result to false to stop a hand picking this.</span> |
| <Link id="m-interactionstarted" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{", "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> InteractionStarted"}</code> | <span className="api-desc">Raised when a hand starts interacting with this.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-assessinteraction" /><code>{"virtual bool AssessInteraction("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out float score)"}</code> | <span className="api-desc">Runs the `InteractionFilter` handlers, then `AssessScore`. Returns false if a filter blocked it.</span> |
| <Link id="m-assessscore" /><code>{"virtual bool AssessScore("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out float score)"}</code> | <span className="api-desc">Scores this for a hand: squared distance from the grip point, times a per-prefab modifier. Lower wins; containers count double.</span> |
| <Link id="m-checkforward" /><code>{"virtual "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" CheckForward("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out bool isForced)"}</code> | <span className="api-desc">Returns the interactable an interaction should really go to: the last entry in `ForwardTo`, or itself.</span> |
| <Link id="m-checkinteractallowedandreplace" /><code>{"virtual bool CheckInteractAllowedAndReplace("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Checks multiple-hand and multiple-player rules. Depending on settings, either blocks the new hand or makes the old ones let go.</span> |
| <Link id="m-finishinteraction" /><code>{"virtual void FinishInteraction("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Removes the hand, clears `IsInteractedWith` when none are left and raises `InteractionEnded`.</span> |
| <Link id="m-forcedrop" /><code>{"void ForceDrop(bool isForcingClient = false)"}</code> | <span className="api-desc">Makes every hand on this let go.</span> |
| <Link id="m-forcelastinteractedplayerid" /><code>{"void ForceLastInteractedPlayerID(int id, "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" lastPayerInteractor)"}</code> | <span className="api-desc">Sets the last interacting player id and body directly.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Hooks the prefab's destroy so every hand lets go when it is destroyed. Embedded parts get `Child` save mode.</span> |
| <Link id="m-interact" /><code>{"virtual void Interact("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Adds the hand, sets `IsInteractedWith`, records the player and raises `InteractionStarted`.</span> |
| <Link id="m-networkstartinteraction" /><code>{"virtual void NetworkStartInteraction("}<Link to="/mod/game-api/types/global-i-l/inetworkinteractargument">{"INetworkInteractArgument"}</Link>{" message, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, Action<"}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{"> handleInteractionStart)"}</code> | <span className="api-desc">Starts an interaction that came over the network, logging if the hand wouldn't normally be allowed.</span> |
| <Link id="m-networkstopinteraction" /><code>{"virtual void NetworkStopInteraction("}<Link to="/mod/game-api/types/global-i-l/interactarguments">{"InteractArguments"}</Link>{" message, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, Action<"}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{"> handleInteractionEnd)"}</code> | <span className="api-desc">Ends an interaction that came over the network.</span> |
| <Link id="m-replacedwith" /><code>{"virtual void ReplacedWith("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/alta-networking/replaceavoidflags">{"ReplaceAvoidFlags"}</Link>{" replaceAvoidFlags)"}</code> | <span className="api-desc">Called when the entity is replaced: hands move to the new entity's interactable unless told not to.</span> |
| <Link id="m-replacewith" /><code>{"void ReplaceWith("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | <span className="api-desc">Moves every hand on this to another interactable, or to what a `Spawner` last spawned. Used when an item turns into another.</span> |
| <Link id="m-replacewith-2" /><code>{"virtual void ReplaceWith("}<Link to="/mod/game-api/types/global-s/spawner">{"Spawner"}</Link>{" spawner)"}</code> | <span className="api-desc">Moves every hand on this to another interactable, or to what a `Spawner` last spawned. Used when an item turns into another.</span> |
| <Link id="m-onlastinteractorplayerchanged" /><code>{"protected virtual void OnLastInteractorPlayerChanged()"}</code> | <span className="api-desc">Override hook, called when a different player interacts with this.</span> |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | <span className="api-desc">Editor: fills in the multiple-interaction defaults if they were never set.</span> |
| <Link id="m-start" /><code>{"protected virtual void Start()"}</code> | <span className="api-desc">Empty override hook.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-networkdestroyed" /><code>{"private void NetworkDestroyed("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | <span className="api-desc">Handler for the prefab's (or parent prefab's) `PreDestroyed` event: force stops every interactor holding this.</span> |
| <Link id="m-testlefthand" /><code>{"private void TestLeftHand()"}</code> | <span className="api-desc">Editor context menu: makes the local player's left hand start interacting with this.</span> |
| <Link id="m-testlefthandend" /><code>{"private void TestLeftHandEnd()"}</code> | <span className="api-desc">Editor context menu: makes the local player's left hand stop interacting.</span> |
| <Link id="m-testrighthand" /><code>{"private void TestRightHand()"}</code> | <span className="api-desc">Editor context menu: makes the local player's right hand start interacting with this.</span> |
| <Link id="m-testrighthandend" /><code>{"private void TestRightHandEnd()"}</code> | <span className="api-desc">Editor context menu: makes the local player's right hand stop interacting.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Interactable`:

<div className="api-used-in">

[`ActionOrb.HandleGrabbed`](/mod/game-api/types/global-a-b/actionorb#m-handlegrabbed), [`ActionOrb.StartMovingBack`](/mod/game-api/types/global-a-b/actionorb#m-startmovingback), [`ChiselingTool.StartCheckHaptic`](/mod/game-api/types/alta-crafting/chiselingtool#m-startcheckhaptic), [`ChiselingTool.StopCheckHaptic`](/mod/game-api/types/alta-crafting/chiselingtool#m-stopcheckhaptic), [`TimberBlockSpawner.handles`](/mod/game-api/types/alta-crafting/timberblockspawner#m-handles), [`TimberBlockSpawner.SnapPoint`](/mod/game-api/types/alta-crafting/timberblockspawner#m-snappoint), [`TimberBlockSpawner.StartCheckingPosition`](/mod/game-api/types/alta-crafting/timberblockspawner#m-startcheckingposition), [`CaveTeleporter.HandFilter`](/mod/game-api/types/alta-world-generation/caveteleporter#m-handfilter), [`CaveTeleporter.handTrigger`](/mod/game-api/types/alta-world-generation/caveteleporter#m-handtrigger), [`CharacterCollisionController.DisableColliders`](/mod/game-api/types/alta-player/charactercollisioncontroller#m-disablecolliders), [`CharacterCollisionController.EnableColliders`](/mod/game-api/types/alta-player/charactercollisioncontroller#m-enablecolliders), [`Hand.Detach`](/mod/game-api/types/alta-player/hand#m-detach), [`Hand.MoveCenterOfMassToGripPoint`](/mod/game-api/types/alta-player/hand#m-movecenterofmasstogrippoint), [`Hand.ResetCenterOfMass`](/mod/game-api/types/alta-player/hand#m-resetcenterofmass), [`InteractionCollisionController.InteractionEnded`](/mod/game-api/types/alta-player/interactioncollisioncontroller#m-interactionended), [`InteractionCollisionController.InteractionStarted`](/mod/game-api/types/alta-player/interactioncollisioncontroller#m-interactionstarted), [`AdditionalOwnedDock.CheckInteractionFilter`](/mod/game-api/types/alta-crafting/additionalowneddock#m-checkinteractionfilter), [`ConfirmationCraftingPart.InteractionPopout`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-interactionpopout), [`CraftingOptions.AttemptCraft`](/mod/game-api/types/alta-crafting/craftingoptions#m-attemptcraft), [`CraftingOptions.Cancel`](/mod/game-api/types/alta-crafting/craftingoptions#m-cancel), [`CraftingOptions.RequestCraft`](/mod/game-api/types/alta-crafting/craftingoptions#m-requestcraft), [`CraftingPart.CheckPossibleConnections`](/mod/game-api/types/alta-crafting/craftingpart#m-checkpossibleconnections), [`GenericCraftingPiece.FilterPop`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-filterpop), [`GenericCraftingPiece.Grab`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-grab), [`GenericCraftingPiece.popInteractable`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-popinteractable), [`GenericCraftingStation.ComponentReleased`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-componentreleased), [`GenericCraftingStation.fakeInteractable`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-fakeinteractable), [`GenericCraftingStation.GrabResult`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-grabresult), [`GenericCraftingStation.GrabResultFilter`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-grabresultfilter), [`CosmeticPresetTrophy.DisableGhostHands`](/mod/game-api/types/alta-customization/cosmeticpresettrophy#m-disableghosthands), [`CosmeticPresetTrophy.EnableGhostHands`](/mod/game-api/types/alta-customization/cosmeticpresettrophy#m-enableghosthands), [`CosmeticPresetTrophyTrigger.TrophyGrabbed`](/mod/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-trophygrabbed), [`CosmeticPresetTrophyTrigger.TrophyReleased`](/mod/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-trophyreleased), [`CosmeticScrollElement.FilterInteractionAfterRelease`](/mod/game-api/types/alta-customization/cosmeticscrollelement#m-filterinteractionafterrelease), [`CustomizationPickup.DestroyOnInteractEnd`](/mod/game-api/types/alta-customization/customizationpickup#m-destroyoninteractend), [`EditableSlot.AttemptPlace`](/mod/game-api/types/alta-customization/editableslot#m-attemptplace), [`EditableSlot.Filter`](/mod/game-api/types/alta-customization/editableslot#m-filter), [`EditableSlot.InteractedWith`](/mod/game-api/types/alta-customization/editableslot#m-interactedwith), [`EditableSlot.remover`](/mod/game-api/types/alta-customization/editableslot#m-remover), [`MainMenuShopInterface.throttleInteractable`](/mod/game-api/types/alta-customization/mainmenushopinterface#m-throttleinteractable), [`ImpactTool.Grabbed`](/mod/game-api/types/alta-items/impacttool#m-grabbed), [`ImpactTool.Released`](/mod/game-api/types/alta-items/impacttool#m-released), [`PickupBreakOnImpact.DisableBreak`](/mod/game-api/types/alta-items/pickupbreakonimpact#m-disablebreak), [`ActiveEat.Cancel`](/mod/game-api/types/alta-intelligence/activeeat#m-cancel), [`ITarget.Interactable`](/mod/game-api/types/alta-intelligence/itarget#m-interactable), [`PickupAgent.InteractionChanged`](/mod/game-api/types/alta-intelligence/pickupagent#m-interactionchanged), [`Schmeechee.Dropped`](/mod/game-api/types/alta-intelligence/schmeechee#m-dropped), [`Schmeechee.PickedUp`](/mod/game-api/types/alta-intelligence/schmeechee#m-pickedup), [`Target.interactable`](/mod/game-api/types/alta-intelligence/target#m-interactable), [`Target.Interactable`](/mod/game-api/types/alta-intelligence/target#m-interactable-2), [`Chest.HandleInteracted`](/mod/game-api/types/alta-items/chest#m-handleinteracted), [`CommunalStorage.FilterInteraction`](/mod/game-api/types/alta-items/communalstorage#m-filterinteraction), [`KeyItem.DeRegisterIK`](/mod/game-api/types/alta-items/keyitem#m-deregisterik), [`KeyItem.RegisterIK`](/mod/game-api/types/alta-items/keyitem#m-registerik), [`Lock.RecentGrab`](/mod/game-api/types/alta-items/lock#m-recentgrab), [`PickupDock.CheckForward`](/mod/game-api/types/alta-items/pickupdock#m-checkforward), [`PlayerDocks.Filter`](/mod/game-api/types/alta-items/playerdocks#m-filter), [`StabilizeJointContainer.StartHandlingToPositionChanges`](/mod/game-api/types/alta-items/stabilizejointcontainer#m-starthandlingtopositionchanges), [`StabilizeJointContainer.StopHandlingToPositionChanges`](/mod/game-api/types/alta-items/stabilizejointcontainer#m-stophandlingtopositionchanges), [`StabilizePickupJoint.StartHandlingToPositionChanges`](/mod/game-api/types/alta-items/stabilizepickupjoint#m-starthandlingtopositionchanges) and 308 more.

</div>
