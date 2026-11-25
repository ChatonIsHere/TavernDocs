---
title: "Controller"
description: "class Controller in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Controller

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Attributes** `HasMethodApply`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Controller()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-allextensions" /><code>{"private List<"}<Link to="/game-api/types/global-c-d/controllerextension">{"ControllerExtension"}</Link>{"> allExtensions"}</code> |  |
| <Link id="m-existingextensions" /><code>{"private List<"}<Link to="/game-api/types/global-c-d/controllerextension">{"ControllerExtension"}</Link>{"> existingExtensions"}</code> |  |
| <Link id="m-extensionsgroup" /><code>{"private "}<Link to="/game-api/types/global-c-d/controllerextensiongroup">{"ControllerExtensionGroup"}</Link>{" extensionsGroup"}</code> |  |
| <Link id="m-extensionsonikhand" /><code>{"private Transform extensionsOnIKHand"}</code> |  |
| <Link id="m-grippoint" /><code>{"private Transform gripPoint"}</code> |  |
| <Link id="m-hand" /><code>{"private "}<Link to="/game-api/types/alta-player/hand">{"Hand"}</Link>{" hand"}</code> |  |
| <Link id="m-interactor" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor"}</code> |  |
| <Link id="m-localextensionsgroup" /><code>{"private "}<Link to="/game-api/types/global-c-d/controllerextensiongroup">{"ControllerExtensionGroup"}</Link>{" localExtensionsGroup"}</code> |  |
| <Link id="m-networktransform" /><code>{"private "}<Link to="/game-api/types/alta-networking/networktransform">{"NetworkTransform"}</Link>{" networkTransform"}</code> |  |
| <Link id="m-ownedextensionsonikhand" /><code>{"private Transform ownedExtensionsOnIKHand"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actionsmanager" /><code><Link to="/game-api/types/global-c-d/controlleractionsmanagerproxy">{"ControllerActionsManagerProxy"}</Link>{" ActionsManager { get; }"}</code> |  |
| <Link id="m-allextensions-2" /><code>{"List<"}<Link to="/game-api/types/global-c-d/controllerextension">{"ControllerExtension"}</Link>{"> AllExtensions { get; }"}</code> |  |
| <Link id="m-characterinfo" /><code><Link to="/game-api/types/global-c-d/characterinfo">{"CharacterInfo"}</Link>{" "}<Link to="/game-api/types/global-c-d/characterinfo">{"CharacterInfo"}</Link>{" { get; private set; }"}</code> |  |
| <Link id="m-grippoint-2" /><code>{"Transform GripPoint { get; set; }"}</code> |  |
| <Link id="m-hand-2" /><code><Link to="/game-api/types/alta-player/hand">{"Hand"}</Link>{" "}<Link to="/game-api/types/alta-player/hand">{"Hand"}</Link>{" { get; }"}</code> |  |
| <Link id="m-interactor-2" /><code><Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" { get; }"}</code> |  |
| <Link id="m-islocomotingblocked" /><code>{"bool IsLocomotingBlocked { get; set; }"}</code> |  |
| <Link id="m-networktransform-2" /><code><Link to="/game-api/types/alta-networking/networktransform">{"NetworkTransform"}</Link>{" "}<Link to="/game-api/types/alta-networking/networktransform">{"NetworkTransform"}</Link>{" { get; }"}</code> |  |
| <Link id="m-playercontroller" /><code><Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" { get; private set; }"}</code> |  |
| <Link id="m-playerinput" /><code><Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcontrollerextension" /><code>{"T GetControllerExtension<T>()"}</code> |  |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller, "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" input)"}</code> |  |
| <Link id="m-moveextensionsobjects" /><code>{"void MoveExtensionsObjects(bool isToMasterHand)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-triggerhaptic" /><code>{"void TriggerHaptic(float strength, float duration, float frequency = 80)"}</code> |  |
| <Link id="m-triggerhaptic-2" /><code>{"void TriggerHaptic(AnimationCurve curve, float strength = 1, float frequency = 80)"}</code> |  |
| <Link id="m-trygetheldpickup" /><code>{"bool TryGetHeldPickup(out "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-addextension" /><code>{"private void AddExtension("}<Link to="/game-api/types/global-c-d/controllerextensiongroup">{"ControllerExtensionGroup"}</Link>{" group)"}</code> |  |
| <Link id="m-createextensionobject" /><code>{"private void CreateExtensionObject("}<Link to="/game-api/types/global-c-d/controllerextensiongroup">{"ControllerExtensionGroup"}</Link>{" group, bool isIKHand)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-setupgrippointrigidbody" /><code>{"private bool SetupGripPointRigidbody()"}</code> |  |

## Used in

Members of other types that take, return or hold a `Controller`:

[`CharacterCollisionController.CollidersToDisableWhenInteracting.controller`](/game-api/types/alta-player/charactercollisioncontroller-colliderstodisablewheninteracting#m-controller), [`CharacterCollisionController.CollidersToDisableWhenInteracting.Controller`](/game-api/types/alta-player/charactercollisioncontroller-colliderstodisablewheninteracting#m-controller-2), [`GhostHandController.controller`](/game-api/types/alta-player/ghosthandcontroller#m-controller), [`GhostHandController.Controller`](/game-api/types/alta-player/ghosthandcontroller#m-controller-2), [`Hand.controller`](/game-api/types/alta-player/hand#m-controller), [`Hand.Controller`](/game-api/types/alta-player/hand#m-controller-2), [`Hand.SetupWithController`](/game-api/types/alta-player/hand#m-setupwithcontroller), [`HandStore.HandStore`](/game-api/types/alta-player/handstore#m-ctor), [`HandStore.sourceController`](/game-api/types/alta-player/handstore#m-sourcecontroller), [`LandmarkDebugger.Run`](/game-api/types/alta-world/landmarkdebugger#m-run), [`SceneWidgetsAction.Run`](/game-api/types/alta-world/scenewidgetsaction#m-run), [`Inventory.AddHandItem`](/game-api/types/alta-console/inventory#m-addhanditem), [`PickupDock.TriggerHaptic`](/game-api/types/alta-items/pickupdock#m-triggerhaptic), [`PickupDock.TriggerHoverHaptic`](/game-api/types/alta-items/pickupdock#m-triggerhoverhaptic), [`QamOptionAsButtonCommand.GetControllerHack`](/game-api/types/alta-menus/qamoptionasbuttoncommand#m-getcontrollerhack), [`BoneWeightTestsMenuAction.Run`](/game-api/types/alta-player/boneweighttestsmenuaction#m-run), [`DebugLightMenuAction.Run`](/game-api/types/alta-player/debuglightmenuaction#m-run), [`DecreaseHeightMenuAction.Run`](/game-api/types/alta-player/decreaseheightmenuaction#m-run), [`EmptyMenu.Run`](/game-api/types/alta-player/emptymenu#m-run), [`EquipmentModeQuickAccess.Run`](/game-api/types/alta-player/equipmentmodequickaccess#m-run), [`MemoryDumpMenuAction.Run`](/game-api/types/alta-player/memorydumpmenuaction#m-run), [`MicMuteQuickAccessAction.Run`](/game-api/types/alta-player/micmutequickaccessaction#m-run), [`MODSMicMuteQuickAccessAction.Run`](/game-api/types/alta-player/modsmicmutequickaccessaction#m-run), [`MuteNonFriendsQuickAccessAction.Run`](/game-api/types/alta-player/mutenonfriendsquickaccessaction#m-run), [`NestingMenuAction.Run`](/game-api/types/alta-player/nestingmenuaction#m-run), [`PhysicsFPSMenuAction.Run`](/game-api/types/alta-player/physicsfpsmenuaction#m-run), [`QuickAccessMenuAction.Run`](/game-api/types/alta-player/quickaccessmenuaction#m-run), [`QuickAccessMenuBubble.Run`](/game-api/types/alta-player/quickaccessmenububble#m-run), [`ReturnToMainMenuAction.Run`](/game-api/types/alta-player/returntomainmenuaction#m-run), [`SettingsQuickAccessMenu.Run`](/game-api/types/alta-player/settingsquickaccessmenu#m-run), [`ShowNames.Run`](/game-api/types/alta-player/shownames#m-run), [`SummonActionItemQuickAccess.Run`](/game-api/types/alta-player/summonactionitemquickaccess#m-run), [`ToggleAccessibleDockMenuAction.Run`](/game-api/types/alta-player/toggleaccessibledockmenuaction#m-run), [`ToggleDebugMovementMenuAction.Run`](/game-api/types/alta-player/toggledebugmovementmenuaction#m-run), [`ToggleEnemyHealthBars.Run`](/game-api/types/alta-player/toggleenemyhealthbars#m-run), [`ToggleLiveDataDisplayMenuAction.Run`](/game-api/types/alta-player/togglelivedatadisplaymenuaction#m-run), [`ToggleLocalSpeedMenuAction.Run`](/game-api/types/alta-player/togglelocalspeedmenuaction#m-run), [`ToggleRuntimeConsole.Run`](/game-api/types/alta-player/toggleruntimeconsole#m-run), [`ToggleRuntimeConsole.UpdateConsolePosition`](/game-api/types/alta-player/toggleruntimeconsole#m-updateconsoleposition), [`TriggerDebugSetSpawnMenuAction.Run`](/game-api/types/alta-player/triggerdebugsetspawnmenuaction#m-run), [`UpdateFarClipMenuAction.Run`](/game-api/types/alta-player/updatefarclipmenuaction#m-run), [`UpdateHeightMenuAction.Run`](/game-api/types/alta-player/updateheightmenuaction#m-run), [`VivoxConnectionQuickAccessAction.Run`](/game-api/types/alta-player/vivoxconnectionquickaccessaction#m-run), [`SummonCameraQuickAccess.Run`](/game-api/types/alta-customization/summoncameraquickaccess#m-run), [`CharacterInfo.LeftController`](/game-api/types/global-c-d/characterinfo#m-leftcontroller), [`CharacterInfo.RightController`](/game-api/types/global-c-d/characterinfo#m-rightcontroller), [`ClimberSettings.GetHapticOverUpwardAlignment`](/game-api/types/global-c-d/climbersettings#m-gethapticoverupwardalignment), [`ClimberSettings.GetHapticStrengthOverDistance`](/game-api/types/global-c-d/climbersettings#m-gethapticstrengthoverdistance), [`ControllerExtension.controller`](/game-api/types/global-c-d/controllerextension#m-controller), [`ControllerExtension.Controller`](/game-api/types/global-c-d/controllerextension#m-controller-2), [`ControllerInputButtonPressed.controller`](/game-api/types/global-c-d/controllerinputbuttonpressed#m-controller), [`ControllerMod.RunMod`](/game-api/types/global-c-d/controllermod#m-runmod), [`CustomFixedJoint.Controller`](/game-api/types/global-c-d/customfixedjoint#m-controller), [`CustomizationPlayerController.SetupController`](/game-api/types/global-c-d/customizationplayercontroller#m-setupcontroller), [`EmptyJoint.Controller`](/game-api/types/global-e-h/emptyjoint#m-controller), [`ClimbingHand.ClimbingHand`](/game-api/types/game-other-namespaces/climbinghand#m-ctor), [`ClimbingHand.Controller`](/game-api/types/game-other-namespaces/climbinghand#m-controller), [`HandGestureTrigger.CleanController`](/game-api/types/global-e-h/handgesturetrigger#m-cleancontroller), [`HandGestureTrigger.TrackController`](/game-api/types/global-e-h/handgesturetrigger#m-trackcontroller), [`HandHandler.Controller`](/game-api/types/global-e-h/handhandler#m-controller) and 13 more.
