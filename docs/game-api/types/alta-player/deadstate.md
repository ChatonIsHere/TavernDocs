---
title: "DeadState"
description: "The player state while dead."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeadState

A **class** in `Root.Township`, `Alta.PlayerStates`.

The player state while dead. The server logs the killer, drops or destroys held and docked items, saves, then respawns the player after a delay. Clients play the death animation.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`PlayerStateBase`](/game-api/types/alta-player/playerstatebase)
- **Derived types** [`DeadToPlayingTransition`](/game-api/types/alta-player/deadtoplayingtransition), [`DownedToDeadTransition`](/game-api/types/alta-player/downedtodeadtransition), [`PlayingToDeadTransition`](/game-api/types/alta-player/playingtodeadtransition)
- **Documented in** [Player states](/game-api/networking/player-states)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DeadState()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-animationcoroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" animationCoroutine"}</code> |
| <Link id="m-handledeathcoroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" handleDeathCoroutine"}</code> |
| <Link id="m-hands" /><code>{"private Transform[] hands"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-killingimpact" /><code><Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" KillingImpact { get; set; }"}</code> | The damage that killed the player. Its direction pushes the body in the death animation. |
| <Link id="m-name" /><code>{"override string Name { get; set; }"}</code> | "Dead State". |
| <Link id="m-statetype" /><code>{"override "}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" StateType { get; }"}</code> | `PlayerStateType.Dead`. |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-player/deadstatesettings">{"DeadStateSettings"}</Link>{" Settings { get; }"}</code> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-validatestateactivation" /><code>{"override bool ValidateStateActivation(bool isDuringSaving)"}</code> | Refuses the state while saving, and moves the player back to playing instead. |
| <Link id="m-onactivate" /><code>{"protected override void OnActivate()"}</code> | Server: logs the kill, fires `PlayerKilled`, drops or destroys carried items, resets stats, saves and starts the respawn timer. |
| <Link id="m-onactivateremote" /><code>{"protected override void OnActivateRemote(bool isPlayerCharacterSpawned)"}</code> | Clients: stops interacting, turns off IK, plays the death animation and sound, and adds to the local player's `deaths` stat. |
| <Link id="m-ondeactivate" /><code>{"protected override void OnDeactivate()"}</code> | Server: stops the respawn timer. |
| <Link id="m-ondeactivateremote" /><code>{"protected override void OnDeactivateRemote(bool isPlayerCharacterSpawned)"}</code> | Clients: stops the death animation. |
| <Link id="m-sync" /><code>{"protected override void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Tells the dead player's client to fade to black before respawn. |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-animatebodywithkillingblow" /><code>{"private void AnimateBodyWithKillingBlow("}<Link to="/game-api/types/alta-player/bodycontroller">{"BodyController"}</Link>{" body)"}</code> |
| <Link id="m-destroypickups" /><code>{"private void DestroyPickups()"}</code> |
| <Link id="m-droppickups" /><code>{"private void DropPickups()"}</code> |
| <Link id="m-respawn" /><code>{"private void Respawn()"}</code> |
| <Link id="m-waitforrespawnonserver" /><code>{"private IEnumerator WaitForRespawnOnServer() (iterator)"}</code> |

</details>
