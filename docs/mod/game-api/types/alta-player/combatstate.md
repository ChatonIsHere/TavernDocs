---
title: "CombatState"
description: "The player state while fighting, a sub-state of playing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CombatState

A **class** in `Root.Township`, `Alta.PlayerStates`.

The player state while fighting, a sub-state of playing. Ends by itself after a timer that resets whenever the player is in combat again; shows a combat shell on clients.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`PlayerStateBase<PlayingState>`](/mod/game-api/types/alta-player/playerstatebase-t)
- **Derived types** [`CombatToCombatTransition`](/mod/game-api/types/alta-player/combattocombattransition), [`ToCombatTransition<TFrom>`](/mod/game-api/types/alta-player/tocombattransition-tfrom)
- **Documented in** [Player states](/mod/game-api/networking/player-states)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CombatState("}<Link to="/mod/game-api/types/alta-player/playingstate">{"PlayingState"}</Link>{" playingState)"}</code> | Creates a `CombatState` from `playingState`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentoutofcombattimer" /><code>{"private float currentOutOfCombatTimer"}</code> | Seconds left until the player leaves combat. Reset by hits and saved to disk. |
| <Link id="m-getoutofcombatcoroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" getOutOfCombatCoroutine"}</code> | The running `GetOutOfCombat` coroutine. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; set; }"}</code> | "Combat State". |
| <Link id="m-settings" /><code><Link to="/mod/game-api/types/alta-player/combatstatesettings">{"CombatStateSettings"}</Link>{" Settings { get; }"}</code> | The combat state's settings (timer, distance curve, shell, cripple stat). |
| <Link id="m-statetype" /><code>{"override "}<Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" StateType { get; }"}</code> | `PlayerStateType.Combat`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resetcurrentcombattimer" /><code>{"void ResetCurrentCombatTimer(float distanceSquared)"}</code> | Restarts the out of combat timer, scaled by a curve over how far apart the fighters are. |
| <Link id="m-serializedisk" /><code>{"override void SerializeDisk("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Saves and loads the time left on the out of combat timer. |
| <Link id="m-validatestateactivation" /><code>{"override bool ValidateStateActivation(bool isDuringLoading)"}</code> | Refuses to start combat while the player is loading. |
| <Link id="m-onactivate" /><code>{"protected override void OnActivate()"}</code> | Server: allows combat to combat transitions and starts the out of combat timer. |
| <Link id="m-onactivateremote" /><code>{"protected override void OnActivateRemote(bool isPlayerCharacterSpawned)"}</code> | Client: shows the combat shell and, for the local player, plays the enter combat sound. |
| <Link id="m-ondeactivate" /><code>{"protected override void OnDeactivate()"}</code> | Server: clears the locomotion cooldown, refills the cripple stat and stops the timer. |
| <Link id="m-ondeactivateremote" /><code>{"protected override void OnDeactivateRemote(bool isPlayerCharacterSpawned)"}</code> | Client: hides the combat shell (if alive) and plays the wave effect. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getoutofcombat" /><code>{"private IEnumerator GetOutOfCombat() (iterator)"}</code> | Coroutine that counts the out of combat timer down to zero, then ends the state. |
| <Link id="m-playsound" /><code>{"private void PlaySound()"}</code> | Starts `PlaySoundCoroutine`. |
| <Link id="m-playsoundcoroutine" /><code>{"private IEnumerator PlaySoundCoroutine() (iterator)"}</code> | Waits `DelayBetweenHitAndSound`, then plays the enter combat sound at the player's head. |

</details>
