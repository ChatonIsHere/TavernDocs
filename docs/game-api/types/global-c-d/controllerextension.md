---
title: "ControllerExtension"
description: "abstract class ControllerExtension in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerExtension

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`QuickAccessMenuController`](/game-api/types/alta-player/quickaccessmenucontroller), [`ControllerExtensionGroup`](/game-api/types/global-c-d/controllerextensiongroup), [`FlyCamHands`](/game-api/types/global-e-h/flycamhands), [`HandGestureController`](/game-api/types/global-e-h/handgesturecontroller), [`Interactor`](/game-api/types/global-i-l/interactor), [`LightHands`](/game-api/types/global-i-l/lighthands), [`ModHands`](/game-api/types/global-m-o/modhands), [`Pointer`](/game-api/types/global-p/pointer), [`RoomRotator`](/game-api/types/global-q-r/roomrotator), [`ScreenShotExtension`](/game-api/types/global-s/screenshotextension), [`Teleporter`](/game-api/types/global-t-x/teleporter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ControllerExtension()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activefor" /><code>{"private "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" activeFor"}</code> |  |
| <Link id="m-controller" /><code>{"private "}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller"}</code> |  |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> |  |
| <Link id="m-isaddedtoikhand" /><code>{"private bool isAddedToIKHand"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actions" /><code><Link to="/game-api/types/global-c-d/controlleractionsmanagerproxy">{"ControllerActionsManagerProxy"}</Link>{" Actions { get; }"}</code> |  |
| <Link id="m-characterinfo" /><code><Link to="/game-api/types/global-c-d/characterinfo">{"CharacterInfo"}</Link>{" "}<Link to="/game-api/types/global-c-d/characterinfo">{"CharacterInfo"}</Link>{" { get; private set; }"}</code> |  |
| <Link id="m-controller-2" /><code><Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" "}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" { get; set; }"}</code> |  |
| <Link id="m-entity-2" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> |  |
| <Link id="m-input" /><code><Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" Input { get; }"}</code> |  |
| <Link id="m-isaddedtoikhand-2" /><code>{"bool IsAddedToIKHand { get; }"}</code> |  |
| <Link id="m-islocal" /><code>{"bool IsLocal { get; private set; }"}</code> |  |
| <Link id="m-isinteractfree" /><code>{"protected bool IsInteractFree { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializecontrollerextension" /><code>{"virtual void InitializeControllerExtension()"}</code> |  |
| <Link id="m-onconnectedtoplayer" /><code>{"virtual void OnConnectedToPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ControllerExtension`:

[`EditableSlot.Add`](/game-api/types/alta-customization/editableslot#m-add), [`EditableSlot.Hover`](/game-api/types/alta-customization/editableslot#m-hover), [`Controller.allExtensions`](/game-api/types/global-c-d/controller#m-allextensions), [`Controller.AllExtensions`](/game-api/types/global-c-d/controller#m-allextensions-2), [`Controller.existingExtensions`](/game-api/types/global-c-d/controller#m-existingextensions).
