---
title: "PlayerToolBasedSkillHelper"
description: "Player component that tracks the pickups a player holds and wires active pickup-based skills and their modifiers to them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerToolBasedSkillHelper

A **class** in `Root.Township`, the global namespace.

Player component that tracks the pickups a player holds and wires active pickup-based skills and their modifiers to them. Feeds tool hits and per-frame updates to each held pickup's handler.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`PlayerComponent`](/mod/game-api/types/global-p/playercomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerToolBasedSkillHelper()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeskills" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-p/pickupbasedskill">{"PickupBasedSkill"}</Link>{", HashSet<"}<Link to="/mod/game-api/types/global-p/pickupbasedskillmodifier">{"PickupBasedSkillModifier"}</Link>{">> activeSkills"}</code> | Registered pickup-based skills, each with its set of registered modifiers. |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Handle for the registered late-update, or null when not updating. |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | Shared late-update module all instances register with. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-heldinteractables" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{", "}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{"> HeldInteractables { get; }"}</code> | Held pickups that passed at least one active skill, mapped to their handler. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activateinput" /><code><Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" ActivateInput("}<Link to="/mod/game-api/types/global-i-l/iinputbasedskill">{"IInputBasedSkill"}</Link>{" skill, "}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> | Registers a skill on a held pickup's input method, hooks its active-state change and returns the input method. |
| <Link id="m-deactivateothermodifiers" /><code>{"void DeactivateOtherModifiers("}<Link to="/mod/game-api/types/global-p/pickupbasedskillmodifier">{"PickupBasedSkillModifier"}</Link>{" modifierSkill, "}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> | Turns off every other modifier of the same skill on this held pickup, so only the given modifier stays active. |
| <Link id="m-deregisterskill" /><code>{"void DeregisterSkill("}<Link to="/mod/game-api/types/global-p/pickupbasedskill">{"PickupBasedSkill"}</Link>{" skill)"}</code> | Removes a skill and unregisters it from every held pickup. |
| <Link id="m-deregisterskillmodifier" /><code>{"void DeregisterSkillModifier("}<Link to="/mod/game-api/types/global-p/pickupbasedskillmodifier">{"PickupBasedSkillModifier"}</Link>{" modifierSkill)"}</code> | Removes a skill modifier and unhooks it from the matching input on every held pickup. |
| <Link id="m-deregisterupdate" /><code>{"void DeregisterUpdate("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> | Stops the per-frame update once no held pickup handler still needs updating. |
| <Link id="m-registerskill" /><code>{"void RegisterSkill("}<Link to="/mod/game-api/types/global-p/pickupbasedskill">{"PickupBasedSkill"}</Link>{" skill)"}</code> | Adds a pickup-based skill and applies it to whatever the player already holds. |
| <Link id="m-registerskillmodifier" /><code>{"void RegisterSkillModifier("}<Link to="/mod/game-api/types/global-p/pickupbasedskillmodifier">{"PickupBasedSkillModifier"}</Link>{" modifierSkill)"}</code> | Adds a modifier to its skill's set, if that skill is registered. |
| <Link id="m-registerupdate" /><code>{"void RegisterUpdate("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> | Starts the shared late-update that ticks every held pickup handler. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Subscribes to the player's interaction start and end events. |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | When the player lets go of a pickup (with no hand still on it), drops its handler and stops hit or update hooks if nothing is left. |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | When the player grabs a pickup, makes a handler for it and keeps it if any active skill accepts it. |
| <Link id="m-newskilloninteractor" /><code>{"private void NewSkillOnInteractor("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Called for each hand when a skill is registered, so a pickup already in hand gets the new skill. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unsubscribes from the player's interaction events. |
| <Link id="m-receivehit" /><code>{"private void ReceiveHit("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" hitPickup)"}</code> | Passes a progression path hit made with a held tool to that tool's handler. |
| <Link id="m-updatehandlers" /><code>{"private void UpdateHandlers()"}</code> | Late-update tick: calls `Update` on every held pickup handler. |
| <Link id="m-validatepickuphandler" /><code>{"private bool ValidatePickupHandler("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> | Checks each active skill against a held pickup; for each that accepts it, activates the input, hooks modifiers and registers the skill. |

</details>

## Used in

Members of other types that take, return or hold a `PlayerToolBasedSkillHelper`:

[`HeldPickupHandler.HeldPickupHandler`](/mod/game-api/types/global-e-h/heldpickuphandler#m-ctor), [`HeldPickupHandler.PlayerHelper`](/mod/game-api/types/global-e-h/heldpickuphandler#m-playerhelper).
