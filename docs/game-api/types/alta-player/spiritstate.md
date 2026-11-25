---
title: "SpiritState"
description: "class SpiritState in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpiritState

A **class** in `Root.Township`, `Alta.PlayerStates`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`PlayerStateBase<PlayingState>`](/game-api/types/alta-player/playerstatebase-t)
- **Derived types** [`PlayingToSpiritTransition`](/game-api/types/alta-player/playingtospirittransition), [`SpiritToPlayingTransition`](/game-api/types/alta-player/spirittoplayingtransition)
- **Documented in** [Player states](/game-api/networking/player-states)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpiritState("}<Link to="/game-api/types/alta-player/playingstate">{"PlayingState"}</Link>{" playingState)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-beltorbs" /><code>{"private Dictionary<uint, GameObject> beltOrbs"}</code> |  |
| <Link id="m-locomotion" /><code>{"private "}<Link to="/game-api/types/global-i-l/locomotioncontroller">{"LocomotionController"}</Link>{" locomotion"}</code> |  |
| <Link id="m-playerhealth" /><code>{"private "}<Link to="/game-api/types/global-p/playerhealth">{"PlayerHealth"}</Link>{" playerHealth"}</code> |  |
| <Link id="m-weight" /><code>{"private "}<Link to="/game-api/types/global-p/playerweight">{"PlayerWeight"}</Link>{" weight"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; set; }"}</code> |  |
| <Link id="m-settings" /><code><Link to="/game-api/types/alta-player/spiritstatesettings">{"SpiritStateSettings"}</Link>{" Settings { get; }"}</code> |  |
| <Link id="m-statetype" /><code>{"override "}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" StateType { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canplaysfx" /><code>{"private bool CanPlaySfx("}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" spiritModeStateSfx)"}</code> |  |
| <Link id="m-handledamage" /><code>{"private void HandleDamage("}<Link to="/game-api/types/alta-player/damagestate">{"DamageState"}</Link>{" damageState)"}</code> |  |
| <Link id="m-movedoutofbounds" /><code>{"private void MovedOutOfBounds("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> |  |
| <Link id="m-onactivate" /><code>{"protected override void OnActivate()"}</code> |  |
| <Link id="m-onactivateremote" /><code>{"protected override void OnActivateRemote(bool isPlayerCharacterSpawned)"}</code> |  |
| <Link id="m-ondeactivateremote" /><code>{"protected override void OnDeactivateRemote(bool isPlayerCharacterSpawned)"}</code> |  |
| <Link id="m-onplayercontrollerfound" /><code>{"protected override void OnPlayerControllerFound("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, bool isFromOnActivate)"}</code> |  |
| <Link id="m-onplayercontrollerlost" /><code>{"protected override void OnPlayerControllerLost(bool isFromOnDeactivate)"}</code> |  |
| <Link id="m-playsoundeffectforplayer" /><code>{"private void PlaySoundEffectForPlayer("}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" spiritModeStateSfx)"}</code> |  |
| <Link id="m-playspiritmodeglow" /><code>{"private void PlaySpiritModeGlow(bool isEnteringSpiritMode)"}</code> |  |
| <Link id="m-removespiritmode" /><code>{"private void RemoveSpiritMode("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> |  |
| <Link id="m-resetplayertolastcheckpoint" /><code>{"private void ResetPlayerToLastCheckpoint()"}</code> |  |
| <Link id="m-unlocksmodified" /><code>{"private void UnlocksModified()"}</code> |  |
