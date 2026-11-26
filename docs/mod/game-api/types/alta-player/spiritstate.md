---
title: "SpiritState"
description: "Player state for spirit mode during a climbing challenge (a PlayerUnlock with orbs to collect)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpiritState

A **class** in `Root.Township`, `Alta.PlayerStates`.

Player state for spirit mode during a climbing challenge (a `PlayerUnlock` with orbs to collect). Hunger and docks are off, weight comes from the orbs, and falls send you back to the checkpoint. Sits on `PlayingState`.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`PlayerStateBase<PlayingState>`](/mod/game-api/types/alta-player/playerstatebase-t)
- **Derived types** [`PlayingToSpiritTransition`](/mod/game-api/types/alta-player/playingtospirittransition), [`SpiritToPlayingTransition`](/mod/game-api/types/alta-player/spirittoplayingtransition)
- **Documented in** [Player states](/mod/game-api/networking/player-states)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpiritState("}<Link to="/mod/game-api/types/alta-player/playingstate">{"PlayingState"}</Link>{" playingState)"}</code> | <span className="api-desc">Creates a `SpiritState` from `playingState`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-beltorbs" /><code>{"private Dictionary<uint, GameObject> beltOrbs"}</code> | <span className="api-desc">Orb objects shown on the player's body, by orb index.</span> |
| <Link id="m-locomotion" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/locomotioncontroller">{"LocomotionController"}</Link>{" locomotion"}</code> | <span className="api-desc">The controller's locomotion, watched for position changes on the server.</span> |
| <Link id="m-playerhealth" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerhealth">{"PlayerHealth"}</Link>{" playerHealth"}</code> | <span className="api-desc">The player's health, whose damage is handled by this state.</span> |
| <Link id="m-weight" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerweight">{"PlayerWeight"}</Link>{" weight"}</code> | <span className="api-desc">The player's `PlayerWeight`. Its weight is overridden and its docks hidden while in spirit mode.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; set; }"}</code> | <span className="api-desc">"Spirit State".</span> |
| <Link id="m-settings" /><code><Link to="/mod/game-api/types/alta-player/spiritstatesettings">{"SpiritStateSettings"}</Link>{" Settings { get; }"}</code> | <span className="api-desc">The `SpiritStateSettings` asset (hunger stat, snap distance, sounds, fall damage threshold).</span> |
| <Link id="m-statetype" /><code>{"override "}<Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" StateType { get; }"}</code> | <span className="api-desc">`PlayerStateType.Spirit`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onactivate" /><code>{"protected override void OnActivate()"}</code> | <span className="api-desc">Server: adds the spirit-to-playing transition.</span> |
| <Link id="m-onactivateremote" /><code>{"protected override void OnActivateRemote(bool isPlayerCharacterSpawned)"}</code> | <span className="api-desc">Client: plays the enter-spirit sound and glow on the player.</span> |
| <Link id="m-ondeactivateremote" /><code>{"protected override void OnDeactivateRemote(bool isPlayerCharacterSpawned)"}</code> | <span className="api-desc">Client: plays the exit-spirit sound and glow.</span> |
| <Link id="m-onplayercontrollerfound" /><code>{"protected override void OnPlayerControllerFound("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, bool isFromOnActivate)"}</code> | <span className="api-desc">Marks the character as a spirit, turns off hunger and docks, hooks damage and unlock changes. On the server, moving too far from the checkpoint cancels the unlock.</span> |
| <Link id="m-onplayercontrollerlost" /><code>{"protected override void OnPlayerControllerLost(bool isFromOnDeactivate)"}</code> | <span className="api-desc">Undoes the spirit setup: hunger, docks and weight back to normal, belt orbs removed.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canplaysfx" /><code>{"private bool CanPlaySfx("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" spiritModeStateSfx)"}</code> | <span className="api-desc">True when the sound set exists and the player has a controller.</span> |
| <Link id="m-handledamage" /><code>{"private void HandleDamage("}<Link to="/mod/game-api/types/alta-player/damagestate">{"DamageState"}</Link>{" damageState)"}</code> | <span className="api-desc">Swallows all damage. Big command or fall damage ends the state if no unlock is running, or teleports to the checkpoint.</span> |
| <Link id="m-movedoutofbounds" /><code>{"private void MovedOutOfBounds("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | <span className="api-desc">Server: cancels the unlock when the player moves further than `SnapDistance` from the unlock checkpoint.</span> |
| <Link id="m-playsoundeffectforplayer" /><code>{"private void PlaySoundEffectForPlayer("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" spiritModeStateSfx)"}</code> | <span className="api-desc">Plays a sound on the player's head.</span> |
| <Link id="m-playspiritmodeglow" /><code>{"private void PlaySpiritModeGlow(bool isEnteringSpiritMode)"}</code> | <span className="api-desc">Plays the enter or exit spirit mode effect, except on headless builds.</span> |
| <Link id="m-removespiritmode" /><code>{"private void RemoveSpiritMode("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Cancels the player's current unlock, which ends spirit mode.</span> |
| <Link id="m-resetplayertolastcheckpoint" /><code>{"private void ResetPlayerToLastCheckpoint()"}</code> | <span className="api-desc">Teleports the player back to the unlock's checkpoint.</span> |
| <Link id="m-unlocksmodified" /><code>{"private void UnlocksModified()"}</code> | <span className="api-desc">Spawns and removes the orbs on the player's belt and sets carried weight from them. Server ends the state when no unlock is active.</span> |

</details>
