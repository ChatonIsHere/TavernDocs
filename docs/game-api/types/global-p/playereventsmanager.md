---
title: "PlayerEventsManager"
description: "class PlayerEventsManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerEventsManager

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`PlayerComponent`](/game-api/types/global-p/playercomponent)
- **Nested types** [`OnPathHitGenerated`](/game-api/types/global-p/playereventsmanager-onpathhitgenerated)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerEventsManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-character" /><code>{"private "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-heldtools" /><code>{"Dictionary<"}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{", "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{"> HeldTools { get; }"}</code> |  |
| <Link id="m-isarmed" /><code>{"bool IsArmed { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-causedcombat" /><code>{"event "}<Link to="/game-api/types/global-c-d/combateventhandler">{"CombatEventHandler"}</Link>{" CausedCombat"}</code> |  |
| <Link id="m-downed" /><code>{"event Action<"}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{"> Downed"}</code> |  |
| <Link id="m-healthchanged" /><code>{"event "}<Link to="/game-api/types/global-e-h/healthobject-healthchangedhandler">{"HealthObject.HealthChangedHandler"}</Link>{" HealthChanged"}</code> |  |
| <Link id="m-interactionended" /><code>{"event "}<Link to="/game-api/types/global-i-l/interactionhandler">{"InteractionHandler"}</Link>{" InteractionEnded"}</code> |  |
| <Link id="m-interactionstarted" /><code>{"event "}<Link to="/game-api/types/global-i-l/interactionhandler">{"InteractionHandler"}</Link>{" InteractionStarted"}</code> |  |
| <Link id="m-killed" /><code>{"event Action<"}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{"> Killed"}</code> |  |
| <Link id="m-onarmedchanged" /><code>{"event Action<bool> OnArmedChanged"}</code> |  |
| <Link id="m-oncharacteradded" /><code>{"event Action<"}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{"> OnCharacterAdded"}</code> |  |
| <Link id="m-onhitwithtool" /><code>{"event "}<Link to="/game-api/types/alta-items/impacttool-ongeneratedhit">{"ImpactTool.OnGeneratedHit"}</Link>{" OnHitWithTool"}</code> |  |
| <Link id="m-pathhitgenerated" /><code>{"event "}<Link to="/game-api/types/global-p/playereventsmanager-onpathhitgenerated">{"PlayerEventsManager.OnPathHitGenerated"}</Link>{" PathHitGenerated"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-pathimpacthit" /><code>{"void PathImpactHit("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" hitPickup)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-checkarmed" /><code>{"private void CheckArmed()"}</code> |  |
| <Link id="m-hit" /><code>{"private void Hit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> |  |
| <Link id="m-oncausedcombat" /><code>{"private void OnCausedCombat("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" attacker, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" attackee, float distanceRatioBetweenCombatantsSquared, float damage)"}</code> |  |
| <Link id="m-ondowned" /><code>{"private void OnDowned("}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" hit)"}</code> |  |
| <Link id="m-onhealthchanged" /><code>{"private void OnHealthChanged("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthObject, float changeAmount, "}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" impact)"}</code> |  |
| <Link id="m-oninteractionended" /><code>{"private void OnInteractionEnded("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> |  |
| <Link id="m-oninteractionstarted" /><code>{"private void OnInteractionStarted("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> |  |
| <Link id="m-onkilled" /><code>{"private void OnKilled("}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" hit)"}</code> |  |
| <Link id="m-updateinitializedcontroller" /><code>{"private void UpdateInitializedController()"}</code> |  |
| <Link id="m-updateplayercontroller" /><code>{"private void Updateplayercontroller("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerEventsManager`:

[`IPlayer.PlayerEventsManager`](/game-api/types/alta-networking/iplayer#m-playereventsmanager), [`Player.eventsManager`](/game-api/types/global-p/player#m-eventsmanager), [`Player.PlayerEventsManager`](/game-api/types/global-p/player#m-playereventsmanager).
