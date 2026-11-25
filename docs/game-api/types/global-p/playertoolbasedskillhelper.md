---
title: "PlayerToolBasedSkillHelper"
description: "class PlayerToolBasedSkillHelper in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerToolBasedSkillHelper

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`PlayerComponent`](/game-api/types/global-p/playercomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerToolBasedSkillHelper()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activeskills" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-p/pickupbasedskill">{"PickupBasedSkill"}</Link>{", HashSet<"}<Link to="/game-api/types/global-p/pickupbasedskillmodifier">{"PickupBasedSkillModifier"}</Link>{">> activeSkills"}</code> |  |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |  |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-heldinteractables" /><code>{"Dictionary<"}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{", "}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{"> HeldInteractables { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activateinput" /><code><Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" ActivateInput("}<Link to="/game-api/types/global-i-l/iinputbasedskill">{"IInputBasedSkill"}</Link>{" skill, "}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> |  |
| <Link id="m-deactivateothermodifiers" /><code>{"void DeactivateOtherModifiers("}<Link to="/game-api/types/global-p/pickupbasedskillmodifier">{"PickupBasedSkillModifier"}</Link>{" modifierSkill, "}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> |  |
| <Link id="m-deregisterskill" /><code>{"void DeregisterSkill("}<Link to="/game-api/types/global-p/pickupbasedskill">{"PickupBasedSkill"}</Link>{" skill)"}</code> |  |
| <Link id="m-deregisterskillmodifier" /><code>{"void DeregisterSkillModifier("}<Link to="/game-api/types/global-p/pickupbasedskillmodifier">{"PickupBasedSkillModifier"}</Link>{" modifierSkill)"}</code> |  |
| <Link id="m-deregisterupdate" /><code>{"void DeregisterUpdate("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> |  |
| <Link id="m-registerskill" /><code>{"void RegisterSkill("}<Link to="/game-api/types/global-p/pickupbasedskill">{"PickupBasedSkill"}</Link>{" skill)"}</code> |  |
| <Link id="m-registerskillmodifier" /><code>{"void RegisterSkillModifier("}<Link to="/game-api/types/global-p/pickupbasedskillmodifier">{"PickupBasedSkillModifier"}</Link>{" modifierSkill)"}</code> |  |
| <Link id="m-registerupdate" /><code>{"void RegisterUpdate("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> |  |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> |  |
| <Link id="m-newskilloninteractor" /><code>{"private void NewSkillOnInteractor("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-receivehit" /><code>{"private void ReceiveHit("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" hitPickup)"}</code> |  |
| <Link id="m-updatehandlers" /><code>{"private void UpdateHandlers()"}</code> |  |
| <Link id="m-validatepickuphandler" /><code>{"private bool ValidatePickupHandler("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerToolBasedSkillHelper`:

[`HeldPickupHandler.HeldPickupHandler`](/game-api/types/global-e-h/heldpickuphandler#m-ctor), [`HeldPickupHandler.PlayerHelper`](/game-api/types/global-e-h/heldpickuphandler#m-playerhelper).
