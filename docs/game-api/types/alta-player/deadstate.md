---
title: "DeadState"
description: "class DeadState in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeadState

A **class** in `Root.Township`, `Alta.PlayerStates`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`PlayerStateBase`](/game-api/types/alta-player/playerstatebase)
- **Derived types** [`DeadToPlayingTransition`](/game-api/types/alta-player/deadtoplayingtransition), [`DownedToDeadTransition`](/game-api/types/alta-player/downedtodeadtransition), [`PlayingToDeadTransition`](/game-api/types/alta-player/playingtodeadtransition)
- **Documented in** [Player states](/game-api/networking/player-states)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DeadState()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-animationcoroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" animationCoroutine"}</code> |  |
| <Link id="m-handledeathcoroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" handleDeathCoroutine"}</code> |  |
| <Link id="m-hands" /><code>{"private Transform[] hands"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-killingimpact" /><code><Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" KillingImpact { get; set; }"}</code> |  |
| <Link id="m-name" /><code>{"override string Name { get; set; }"}</code> |  |
| <Link id="m-statetype" /><code>{"override "}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" StateType { get; }"}</code> |  |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-player/deadstatesettings">{"DeadStateSettings"}</Link>{" Settings { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-validatestateactivation" /><code>{"override bool ValidateStateActivation(bool isDuringSaving)"}</code> |  |
| <Link id="m-animatebodywithkillingblow" /><code>{"private void AnimateBodyWithKillingBlow("}<Link to="/game-api/types/alta-player/bodycontroller">{"BodyController"}</Link>{" body)"}</code> |  |
| <Link id="m-destroypickups" /><code>{"private void DestroyPickups()"}</code> |  |
| <Link id="m-droppickups" /><code>{"private void DropPickups()"}</code> |  |
| <Link id="m-onactivate" /><code>{"protected override void OnActivate()"}</code> |  |
| <Link id="m-onactivateremote" /><code>{"protected override void OnActivateRemote(bool isPlayerCharacterSpawned)"}</code> |  |
| <Link id="m-ondeactivate" /><code>{"protected override void OnDeactivate()"}</code> |  |
| <Link id="m-ondeactivateremote" /><code>{"protected override void OnDeactivateRemote(bool isPlayerCharacterSpawned)"}</code> |  |
| <Link id="m-respawn" /><code>{"private void Respawn()"}</code> |  |
| <Link id="m-sync" /><code>{"protected override void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-waitforrespawnonserver" /><code>{"private IEnumerator WaitForRespawnOnServer() (iterator)"}</code> |  |
