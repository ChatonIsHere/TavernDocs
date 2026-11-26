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

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DeadState()"}</code> | Creates a `DeadState` with default values. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationcoroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" animationCoroutine"}</code> | Client: the running death animation, stopped when the state ends. |
| <Link id="m-handledeathcoroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" handleDeathCoroutine"}</code> | Server: the running `WaitForRespawnOnServer` coroutine. |
| <Link id="m-hands" /><code>{"private Transform[] hands"}</code> | The two hand transforms freed from IK when the body falls. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-killingimpact" /><code><Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" KillingImpact { get; set; }"}</code> | The damage that killed the player. Its direction pushes the body in the death animation. |
| <Link id="m-name" /><code>{"override string Name { get; set; }"}</code> | "Dead State". |
| <Link id="m-statetype" /><code>{"override "}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" StateType { get; }"}</code> | `PlayerStateType.Dead`. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-player/deadstatesettings">{"DeadStateSettings"}</Link>{" Settings { get; }"}</code> | The state's `DeadStateSettings` (timings, stats to reset, drag). |

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

| Member | What it is |
| --- | --- |
| <Link id="m-animatebodywithkillingblow" /><code>{"private void AnimateBodyWithKillingBlow("}<Link to="/game-api/types/alta-player/bodycontroller">{"BodyController"}</Link>{" body)"}</code> | Adds rigidbodies to the body and hands and pushes them along the killing hit's direction (or head forward). |
| <Link id="m-destroypickups" /><code>{"private void DestroyPickups()"}</code> | Server: when drop on death is off, destroys items in the player's docks and held items that would be saved. |
| <Link id="m-droppickups" /><code>{"private void DropPickups()"}</code> | Server: when `DropAllOnDeath` is on, forces both hands to let go and undocks everything above the player's head. |
| <Link id="m-respawn" /><code>{"private void Respawn()"}</code> | Server: destroys the old player controller and entities, then transitions to the playing state. |
| <Link id="m-waitforrespawnonserver" /><code>{"private IEnumerator WaitForRespawnOnServer() (iterator)"}</code> | Server coroutine: waits the fog and respawn time, tells the client to fade, waits the fade, then respawns. |

</details>
