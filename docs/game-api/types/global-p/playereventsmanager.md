---
title: "PlayerEventsManager"
description: "Gameplay events about one player gathered in one place: interactions, tool hits, health, downed, killed, combat and whether they are armed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerEventsManager

A **class** in `Root.Township`, no namespace.

Gameplay events about one player gathered in one place: interactions, tool hits, health, downed, killed, combat and whether they are armed. A component on the player template; get it from `Player.PlayerEventsManager`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`PlayerComponent`](/game-api/types/global-p/playercomponent)
- **Nested types** [`OnPathHitGenerated`](/game-api/types/global-p/playereventsmanager-onpathhitgenerated)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerEventsManager()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-character" /><code>{"private "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character"}</code> | The player's current `PlayerCharacter`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-heldtools" /><code>{"Dictionary<"}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{", "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{"> HeldTools { get; }"}</code> | Impact tools the player is holding, by the interactable they hold. |
| <Link id="m-isarmed" /><code>{"bool IsArmed { get; private set; }"}</code> | True while the player holds a tool that has impactors (a weapon or other hitting tool). |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-causedcombat" /><code>{"event "}<Link to="/game-api/types/global-c-d/combateventhandler">{"CombatEventHandler"}</Link>{" CausedCombat"}</code> | Raised when the player's character causes combat with another entity. |
| <Link id="m-downed" /><code>{"event Action<"}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{"> Downed"}</code> | Raised when the player's character is downed. |
| <Link id="m-healthchanged" /><code>{"event "}<Link to="/game-api/types/global-e-h/healthobject-healthchangedhandler">{"HealthObject.HealthChangedHandler"}</Link>{" HealthChanged"}</code> | Raised when the player's character health changes. |
| <Link id="m-interactionended" /><code>{"event "}<Link to="/game-api/types/global-i-l/interactionhandler">{"InteractionHandler"}</Link>{" InteractionEnded"}</code> | Raised when either hand ends an interaction. |
| <Link id="m-interactionstarted" /><code>{"event "}<Link to="/game-api/types/global-i-l/interactionhandler">{"InteractionHandler"}</Link>{" InteractionStarted"}</code> | Raised when either hand starts an interaction. |
| <Link id="m-killed" /><code>{"event Action<"}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{"> Killed"}</code> | Raised when the player's character is killed. |
| <Link id="m-onarmedchanged" /><code>{"event Action<bool> OnArmedChanged"}</code> | Raised when `IsArmed` changes. |
| <Link id="m-oncharacteradded" /><code>{"event Action<"}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{"> OnCharacterAdded"}</code> | Raised when a new player character is linked and its events are hooked up. |
| <Link id="m-onhitwithtool" /><code>{"event "}<Link to="/game-api/types/alta-items/impacttool-ongeneratedhit">{"ImpactTool.OnGeneratedHit"}</Link>{" OnHitWithTool"}</code> | Raised when a held impact tool generates a hit. |
| <Link id="m-pathhitgenerated" /><code>{"event "}<Link to="/game-api/types/global-p/playereventsmanager-onpathhitgenerated">{"PlayerEventsManager.OnPathHitGenerated"}</Link>{" PathHitGenerated"}</code> | Raised by `PathImpactHit` when a hit counts toward a progression path (forging and so on). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-pathimpacthit" /><code>{"void PathImpactHit("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" hitPickup)"}</code> | Raises `PathHitGenerated`. Called by impact detectors and forged models. |

<details>
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Listens for the player's controller being set. |
| <Link id="m-checkarmed" /><code>{"private void CheckArmed()"}</code> | Sets `IsArmed` to whether any held tool has impactors, and raises `OnArmedChanged` if it changed. |
| <Link id="m-hit" /><code>{"private void Hit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | Passes a held tool's hit on as `OnHitWithTool`. |
| <Link id="m-oncausedcombat" /><code>{"private void OnCausedCombat("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" attacker, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" attackee, float distanceRatioBetweenCombatantsSquared, float damage)"}</code> | Passes the character's `CausedCombat` event on. |
| <Link id="m-ondowned" /><code>{"private void OnDowned("}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" hit)"}</code> | Passes the character's downed event on as `Downed`. |
| <Link id="m-onhealthchanged" /><code>{"private void OnHealthChanged("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthObject, float changeAmount, "}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" impact)"}</code> | Passes the character's health change on as `HealthChanged`. |
| <Link id="m-oninteractionended" /><code>{"private void OnInteractionEnded("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | Stops tracking a tool once no hand of this player holds it, then raises `InteractionEnded`. |
| <Link id="m-oninteractionstarted" /><code>{"private void OnInteractionStarted("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | Starts tracking a picked-up `ImpactTool` in `HeldTools`, then raises `InteractionStarted`. |
| <Link id="m-onkilled" /><code>{"private void OnKilled("}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" hit)"}</code> | Passes the character's killed event on as `Killed`. |
| <Link id="m-updateinitializedcontroller" /><code>{"private void UpdateInitializedController()"}</code> | Once the character is linked, hooks both hands' interaction events and the health and combat events, then raises `OnCharacterAdded`. |
| <Link id="m-updateplayercontroller" /><code>{"private void Updateplayercontroller("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | When the player's controller is a `PlayerCharacter`, stores it and waits for it to be linked. |

</details>

## Used in

Members of other types that take, return or hold a `PlayerEventsManager`:

[`IPlayer.PlayerEventsManager`](/game-api/types/alta-networking/iplayer#m-playereventsmanager), [`Player.eventsManager`](/game-api/types/global-p/player#m-eventsmanager), [`Player.PlayerEventsManager`](/game-api/types/global-p/player#m-playereventsmanager).
