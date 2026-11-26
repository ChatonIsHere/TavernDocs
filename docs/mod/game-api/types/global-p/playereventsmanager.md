---
title: "PlayerEventsManager"
description: "Gameplay events about one player gathered in one place: interactions, tool hits, health, downed, killed, combat and whether they are armed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerEventsManager

A **class** in `Root.Township`, the global namespace.

Gameplay events about one player gathered in one place: interactions, tool hits, health, downed, killed, combat and whether they are armed. A component on the player template; get it from `Player.PlayerEventsManager`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`PlayerComponent`](/mod/game-api/types/global-p/playercomponent)
- **Nested types** [`OnPathHitGenerated`](/mod/game-api/types/global-p/playereventsmanager-onpathhitgenerated)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerEventsManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-character" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character"}</code> | <span className="api-desc">The player's current `PlayerCharacter`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-heldtools" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{", "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{"> HeldTools { get; }"}</code> | <span className="api-desc">Impact tools the player is holding, by the interactable they hold.</span> |
| <Link id="m-isarmed" /><code>{"bool IsArmed { get; private set; }"}</code> | <span className="api-desc">True while the player holds a tool that has impactors (a weapon or other hitting tool).</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-causedcombat" /><code>{"event "}<Link to="/mod/game-api/types/global-c-d/combateventhandler">{"CombatEventHandler"}</Link>{" CausedCombat"}</code> | <span className="api-desc">Raised when the player's character causes combat with another entity.</span> |
| <Link id="m-downed" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{"> Downed"}</code> | <span className="api-desc">Raised when the player's character is downed.</span> |
| <Link id="m-healthchanged" /><code>{"event "}<Link to="/mod/game-api/types/global-e-h/healthobject-healthchangedhandler">{"HealthObject.HealthChangedHandler"}</Link>{" HealthChanged"}</code> | <span className="api-desc">Raised when the player's character health changes.</span> |
| <Link id="m-interactionended" /><code>{"event "}<Link to="/mod/game-api/types/global-i-l/interactionhandler">{"InteractionHandler"}</Link>{" InteractionEnded"}</code> | <span className="api-desc">Raised when either hand ends an interaction.</span> |
| <Link id="m-interactionstarted" /><code>{"event "}<Link to="/mod/game-api/types/global-i-l/interactionhandler">{"InteractionHandler"}</Link>{" InteractionStarted"}</code> | <span className="api-desc">Raised when either hand starts an interaction.</span> |
| <Link id="m-killed" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{"> Killed"}</code> | <span className="api-desc">Raised when the player's character is killed.</span> |
| <Link id="m-onarmedchanged" /><code>{"event Action<bool> OnArmedChanged"}</code> | <span className="api-desc">Raised when `IsArmed` changes.</span> |
| <Link id="m-oncharacteradded" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{"> OnCharacterAdded"}</code> | <span className="api-desc">Raised when a new player character is linked and its events are hooked up.</span> |
| <Link id="m-onhitwithtool" /><code>{"event "}<Link to="/mod/game-api/types/alta-items/impacttool-ongeneratedhit">{"ImpactTool.OnGeneratedHit"}</Link>{" OnHitWithTool"}</code> | <span className="api-desc">Raised when a held impact tool generates a hit.</span> |
| <Link id="m-pathhitgenerated" /><code>{"event "}<Link to="/mod/game-api/types/global-p/playereventsmanager-onpathhitgenerated">{"PlayerEventsManager.OnPathHitGenerated"}</Link>{" PathHitGenerated"}</code> | <span className="api-desc">Raised by `PathImpactHit` when a hit counts toward a progression path (forging and so on).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-pathimpacthit" /><code>{"void PathImpactHit("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" hitPickup)"}</code> | <span className="api-desc">Raises `PathHitGenerated`. Called by impact detectors and forged models.</span> |

<details className="api-private">
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Listens for the player's controller being set.</span> |
| <Link id="m-checkarmed" /><code>{"private void CheckArmed()"}</code> | <span className="api-desc">Sets `IsArmed` to whether any held tool has impactors, and raises `OnArmedChanged` if it changed.</span> |
| <Link id="m-hit" /><code>{"private void Hit("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | <span className="api-desc">Passes a held tool's hit on as `OnHitWithTool`.</span> |
| <Link id="m-oncausedcombat" /><code>{"private void OnCausedCombat("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" attacker, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" attackee, float distanceRatioBetweenCombatantsSquared, float damage)"}</code> | <span className="api-desc">Passes the character's `CausedCombat` event on.</span> |
| <Link id="m-ondowned" /><code>{"private void OnDowned("}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" hit)"}</code> | <span className="api-desc">Passes the character's downed event on as `Downed`.</span> |
| <Link id="m-onhealthchanged" /><code>{"private void OnHealthChanged("}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthObject, float changeAmount, "}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" impact)"}</code> | <span className="api-desc">Passes the character's health change on as `HealthChanged`.</span> |
| <Link id="m-oninteractionended" /><code>{"private void OnInteractionEnded("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | <span className="api-desc">Stops tracking a tool once no hand of this player holds it, then raises `InteractionEnded`.</span> |
| <Link id="m-oninteractionstarted" /><code>{"private void OnInteractionStarted("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | <span className="api-desc">Starts tracking a picked-up `ImpactTool` in `HeldTools`, then raises `InteractionStarted`.</span> |
| <Link id="m-onkilled" /><code>{"private void OnKilled("}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" hit)"}</code> | <span className="api-desc">Passes the character's killed event on as `Killed`.</span> |
| <Link id="m-updateinitializedcontroller" /><code>{"private void UpdateInitializedController()"}</code> | <span className="api-desc">Once the character is linked, hooks both hands' interaction events and the health and combat events, then raises `OnCharacterAdded`.</span> |
| <Link id="m-updateplayercontroller" /><code>{"private void Updateplayercontroller("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | <span className="api-desc">When the player's controller is a `PlayerCharacter`, stores it and waits for it to be linked.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerEventsManager`:

<div className="api-used-in">

[`IPlayer.PlayerEventsManager`](/mod/game-api/types/alta-networking/iplayer#m-playereventsmanager), [`Player.eventsManager`](/mod/game-api/types/global-p/player#m-eventsmanager), [`Player.PlayerEventsManager`](/mod/game-api/types/global-p/player#m-playereventsmanager).

</div>
