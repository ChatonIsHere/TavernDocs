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
| <Link id="m-ctor" /><code>{"CombatState("}<Link to="/mod/game-api/types/alta-player/playingstate">{"PlayingState"}</Link>{" playingState)"}</code> | <span className="api-desc">Creates a `CombatState` from `playingState`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentoutofcombattimer" /><code>{"private float currentOutOfCombatTimer"}</code> | <span className="api-desc">Seconds left until the player leaves combat. Reset by hits and saved to disk.</span> |
| <Link id="m-getoutofcombatcoroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" getOutOfCombatCoroutine"}</code> | <span className="api-desc">The running `GetOutOfCombat` coroutine.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; set; }"}</code> | <span className="api-desc">"Combat State".</span> |
| <Link id="m-settings" /><code><Link to="/mod/game-api/types/alta-player/combatstatesettings">{"CombatStateSettings"}</Link>{" Settings { get; }"}</code> | <span className="api-desc">The combat state's settings (timer, distance curve, shell, cripple stat).</span> |
| <Link id="m-statetype" /><code>{"override "}<Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" StateType { get; }"}</code> | <span className="api-desc">`PlayerStateType.Combat`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resetcurrentcombattimer" /><code>{"void ResetCurrentCombatTimer(float distanceSquared)"}</code> | <span className="api-desc">Restarts the out of combat timer, scaled by a curve over how far apart the fighters are.</span> |
| <Link id="m-serializedisk" /><code>{"override void SerializeDisk("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Saves and loads the time left on the out of combat timer.</span> |
| <Link id="m-validatestateactivation" /><code>{"override bool ValidateStateActivation(bool isDuringLoading)"}</code> | <span className="api-desc">Refuses to start combat while the player is loading.</span> |
| <Link id="m-onactivate" /><code>{"protected override void OnActivate()"}</code> | <span className="api-desc">Server: allows combat to combat transitions and starts the out of combat timer.</span> |
| <Link id="m-onactivateremote" /><code>{"protected override void OnActivateRemote(bool isPlayerCharacterSpawned)"}</code> | <span className="api-desc">Client: shows the combat shell and, for the local player, plays the enter combat sound.</span> |
| <Link id="m-ondeactivate" /><code>{"protected override void OnDeactivate()"}</code> | <span className="api-desc">Server: clears the locomotion cooldown, refills the cripple stat and stops the timer.</span> |
| <Link id="m-ondeactivateremote" /><code>{"protected override void OnDeactivateRemote(bool isPlayerCharacterSpawned)"}</code> | <span className="api-desc">Client: hides the combat shell (if alive) and plays the wave effect.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getoutofcombat" /><code>{"private IEnumerator GetOutOfCombat() (iterator)"}</code> | <span className="api-desc">Coroutine that counts the out of combat timer down to zero, then ends the state.</span> |
| <Link id="m-playsound" /><code>{"private void PlaySound()"}</code> | <span className="api-desc">Starts `PlaySoundCoroutine`.</span> |
| <Link id="m-playsoundcoroutine" /><code>{"private IEnumerator PlaySoundCoroutine() (iterator)"}</code> | <span className="api-desc">Waits `DelayBetweenHitAndSound`, then plays the enter combat sound at the player's head.</span> |

</details>
