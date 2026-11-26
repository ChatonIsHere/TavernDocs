---
title: "ControllerExtension"
description: "Base for a component that adds behaviour to a player's hand controller, placed under the ghost hand or the IK hand."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerExtension

An **abstract class** in `Root.Township`, the global namespace.

Base for a component that adds behaviour to a player's hand controller, placed under the ghost hand or the IK hand. Runs on every copy of the player; `IsLocal` tells you if it's yours.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`QuickAccessMenuController`](/mod/game-api/types/alta-player/quickaccessmenucontroller), [`ControllerExtensionGroup`](/mod/game-api/types/global-c-d/controllerextensiongroup), [`FlyCamHands`](/mod/game-api/types/global-e-h/flycamhands), [`HandGestureController`](/mod/game-api/types/global-e-h/handgesturecontroller), [`Interactor`](/mod/game-api/types/global-i-l/interactor), [`LightHands`](/mod/game-api/types/global-i-l/lighthands), [`ModHands`](/mod/game-api/types/global-m-o/modhands), [`Pointer`](/mod/game-api/types/global-p/pointer), [`RoomRotator`](/mod/game-api/types/global-q-r/roomrotator), [`ScreenShotExtension`](/mod/game-api/types/global-s/screenshotextension), [`Teleporter`](/mod/game-api/types/global-t-x/teleporter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ControllerExtension()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activefor" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" activeFor"}</code> | <span className="api-desc">Player modes (VR runtimes such as OpenVR, Oculus or OpenXR, or fly and auto cam) this extension runs in; it destroys itself otherwise.</span> |
| <Link id="m-controller" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller"}</code> | <span className="api-desc">The controller this extension is on, found in the parents. Backing field for `Controller`.</span> |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">The player entity; set from the controller on initialize. Backing field for `Entity`.</span> |
| <Link id="m-isaddedtoikhand" /><code>{"private bool isAddedToIKHand"}</code> | <span className="api-desc">Whether the extension goes under the IK hand instead of the ghost hand. Backing field for `IsAddedToIKHand`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actions" /><code><Link to="/mod/game-api/types/global-c-d/controlleractionsmanagerproxy">{"ControllerActionsManagerProxy"}</Link>{" Actions { get; }"}</code> | <span className="api-desc">The controller's action manager, for reading input actions such as interact.</span> |
| <Link id="m-characterinfo" /><code><Link to="/mod/game-api/types/global-c-d/characterinfo">{"CharacterInfo"}</Link>{" "}<Link to="/mod/game-api/types/global-c-d/characterinfo">{"CharacterInfo"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">The character info of the controller's player, set in `InitializeControllerExtension`.</span> |
| <Link id="m-controller-2" /><code><Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" "}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" { get; set; }"}</code> | <span className="api-desc">The hand controller this extends. Found in parents on first use; can only be set once.</span> |
| <Link id="m-entity-2" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | <span className="api-desc">The player's network entity, taken from the controller on init.</span> |
| <Link id="m-input" /><code><Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" Input { get; }"}</code> | <span className="api-desc">The controller's `PlayerInput`.</span> |
| <Link id="m-isaddedtoikhand-2" /><code>{"bool IsAddedToIKHand { get; }"}</code> | <span className="api-desc">True if the extension belongs under the IK hand instead of the ghost hand.</span> |
| <Link id="m-islocal" /><code>{"bool IsLocal { get; private set; }"}</code> | <span className="api-desc">True if the controller belongs to the local player.</span> |
| <Link id="m-isinteractfree" /><code>{"protected bool IsInteractFree { get; }"}</code> | <span className="api-desc">True if the hand can interact now: locomotion is not blocked and it is not busy with an interaction.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializecontrollerextension" /><code>{"virtual void InitializeControllerExtension()"}</code> | <span className="api-desc">Copies the character info, entity and local-player flag from the controller.</span> |
| <Link id="m-onconnectedtoplayer" /><code>{"virtual void OnConnectedToPlayer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Hook called when the extension is connected to a player. Does nothing by default.</span> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Destroys the component if the current XR mode is not in its `activeFor` flags.</span> |

## Used in

Members of other types that take, return or hold a `ControllerExtension`:

<div className="api-used-in">

[`EditableSlot.Add`](/mod/game-api/types/alta-customization/editableslot#m-add), [`EditableSlot.Hover`](/mod/game-api/types/alta-customization/editableslot#m-hover), [`Controller.allExtensions`](/mod/game-api/types/global-c-d/controller#m-allextensions), [`Controller.AllExtensions`](/mod/game-api/types/global-c-d/controller#m-allextensions-2), [`Controller.existingExtensions`](/mod/game-api/types/global-c-d/controller#m-existingextensions).

</div>
