---
title: "CombatState"
description: "class CombatState in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CombatState

A **class** in `Root.Township`, `Alta.PlayerStates`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`PlayerStateBase<PlayingState>`](/game-api/types/alta-player/playerstatebase-t)
- **Derived types** [`CombatToCombatTransition`](/game-api/types/alta-player/combattocombattransition), [`ToCombatTransition<TFrom>`](/game-api/types/alta-player/tocombattransition-tfrom)
- **Documented in** [Player states](/game-api/networking/player-states)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CombatState("}<Link to="/game-api/types/alta-player/playingstate">{"PlayingState"}</Link>{" playingState)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentoutofcombattimer" /><code>{"private float currentOutOfCombatTimer"}</code> |  |
| <Link id="m-getoutofcombatcoroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" getOutOfCombatCoroutine"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; set; }"}</code> |  |
| <Link id="m-settings" /><code><Link to="/game-api/types/alta-player/combatstatesettings">{"CombatStateSettings"}</Link>{" Settings { get; }"}</code> |  |
| <Link id="m-statetype" /><code>{"override "}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" StateType { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resetcurrentcombattimer" /><code>{"void ResetCurrentCombatTimer(float distanceSquared)"}</code> |  |
| <Link id="m-serializedisk" /><code>{"override void SerializeDisk("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-validatestateactivation" /><code>{"override bool ValidateStateActivation(bool isDuringLoading)"}</code> |  |
| <Link id="m-getoutofcombat" /><code>{"private IEnumerator GetOutOfCombat() (iterator)"}</code> |  |
| <Link id="m-onactivate" /><code>{"protected override void OnActivate()"}</code> |  |
| <Link id="m-onactivateremote" /><code>{"protected override void OnActivateRemote(bool isPlayerCharacterSpawned)"}</code> |  |
| <Link id="m-ondeactivate" /><code>{"protected override void OnDeactivate()"}</code> |  |
| <Link id="m-ondeactivateremote" /><code>{"protected override void OnDeactivateRemote(bool isPlayerCharacterSpawned)"}</code> |  |
| <Link id="m-playsound" /><code>{"private void PlaySound()"}</code> |  |
| <Link id="m-playsoundcoroutine" /><code>{"private IEnumerator PlaySoundCoroutine() (iterator)"}</code> |  |
