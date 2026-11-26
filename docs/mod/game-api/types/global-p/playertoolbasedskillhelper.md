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
| <Link id="m-ctor" /><code>{"PlayerToolBasedSkillHelper()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeskills" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-p/pickupbasedskill">{"PickupBasedSkill"}</Link>{", HashSet<"}<Link to="/mod/game-api/types/global-p/pickupbasedskillmodifier">{"PickupBasedSkillModifier"}</Link>{">> activeSkills"}</code> | <span className="api-desc">Registered pickup-based skills, each with its set of registered modifiers.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Handle for the registered late-update, or null when not updating.</span> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | <span className="api-desc">Shared late-update module all instances register with.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-heldinteractables" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{", "}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{"> HeldInteractables { get; }"}</code> | <span className="api-desc">Held pickups that passed at least one active skill, mapped to their handler.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activateinput" /><code><Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" ActivateInput("}<Link to="/mod/game-api/types/global-i-l/iinputbasedskill">{"IInputBasedSkill"}</Link>{" skill, "}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Registers a skill on a held pickup's input method, hooks its active-state change and returns the input method.</span> |
| <Link id="m-deactivateothermodifiers" /><code>{"void DeactivateOtherModifiers("}<Link to="/mod/game-api/types/global-p/pickupbasedskillmodifier">{"PickupBasedSkillModifier"}</Link>{" modifierSkill, "}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Turns off every other modifier of the same skill on this held pickup, so only the given modifier stays active.</span> |
| <Link id="m-deregisterskill" /><code>{"void DeregisterSkill("}<Link to="/mod/game-api/types/global-p/pickupbasedskill">{"PickupBasedSkill"}</Link>{" skill)"}</code> | <span className="api-desc">Removes a skill and unregisters it from every held pickup.</span> |
| <Link id="m-deregisterskillmodifier" /><code>{"void DeregisterSkillModifier("}<Link to="/mod/game-api/types/global-p/pickupbasedskillmodifier">{"PickupBasedSkillModifier"}</Link>{" modifierSkill)"}</code> | <span className="api-desc">Removes a skill modifier and unhooks it from the matching input on every held pickup.</span> |
| <Link id="m-deregisterupdate" /><code>{"void DeregisterUpdate("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Stops the per-frame update once no held pickup handler still needs updating.</span> |
| <Link id="m-registerskill" /><code>{"void RegisterSkill("}<Link to="/mod/game-api/types/global-p/pickupbasedskill">{"PickupBasedSkill"}</Link>{" skill)"}</code> | <span className="api-desc">Adds a pickup-based skill and applies it to whatever the player already holds.</span> |
| <Link id="m-registerskillmodifier" /><code>{"void RegisterSkillModifier("}<Link to="/mod/game-api/types/global-p/pickupbasedskillmodifier">{"PickupBasedSkillModifier"}</Link>{" modifierSkill)"}</code> | <span className="api-desc">Adds a modifier to its skill's set, if that skill is registered.</span> |
| <Link id="m-registerupdate" /><code>{"void RegisterUpdate("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Starts the shared late-update that ticks every held pickup handler.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Subscribes to the player's interaction start and end events.</span> |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | <span className="api-desc">When the player lets go of a pickup (with no hand still on it), drops its handler and stops hit or update hooks if nothing is left.</span> |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | <span className="api-desc">When the player grabs a pickup, makes a handler for it and keeps it if any active skill accepts it.</span> |
| <Link id="m-newskilloninteractor" /><code>{"private void NewSkillOnInteractor("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Called for each hand when a skill is registered, so a pickup already in hand gets the new skill.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unsubscribes from the player's interaction events.</span> |
| <Link id="m-receivehit" /><code>{"private void ReceiveHit("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" hitPickup)"}</code> | <span className="api-desc">Passes a progression path hit made with a held tool to that tool's handler.</span> |
| <Link id="m-updatehandlers" /><code>{"private void UpdateHandlers()"}</code> | <span className="api-desc">Late-update tick: calls `Update` on every held pickup handler.</span> |
| <Link id="m-validatepickuphandler" /><code>{"private bool ValidatePickupHandler("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Checks each active skill against a held pickup; for each that accepts it, activates the input, hooks modifiers and registers the skill.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerToolBasedSkillHelper`:

<div className="api-used-in">

[`HeldPickupHandler.HeldPickupHandler`](/mod/game-api/types/global-e-h/heldpickuphandler#m-ctor), [`HeldPickupHandler.PlayerHelper`](/mod/game-api/types/global-e-h/heldpickuphandler#m-playerhelper).

</div>
