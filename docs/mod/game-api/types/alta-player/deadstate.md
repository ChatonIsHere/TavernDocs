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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`PlayerStateBase`](/mod/game-api/types/alta-player/playerstatebase)
- **Derived types** [`DeadToPlayingTransition`](/mod/game-api/types/alta-player/deadtoplayingtransition), [`DownedToDeadTransition`](/mod/game-api/types/alta-player/downedtodeadtransition), [`PlayingToDeadTransition`](/mod/game-api/types/alta-player/playingtodeadtransition)
- **Documented in** [Player states](/mod/game-api/networking/player-states)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DeadState()"}</code> | <span className="api-desc">Creates a `DeadState` with default values.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationcoroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" animationCoroutine"}</code> | <span className="api-desc">Client: the running death animation, stopped when the state ends.</span> |
| <Link id="m-handledeathcoroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" handleDeathCoroutine"}</code> | <span className="api-desc">Server: the running `WaitForRespawnOnServer` coroutine.</span> |
| <Link id="m-hands" /><code>{"private Transform[] hands"}</code> | <span className="api-desc">The two hand transforms freed from IK when the body falls.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-killingimpact" /><code><Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" KillingImpact { get; set; }"}</code> | <span className="api-desc">The damage that killed the player. Its direction pushes the body in the death animation.</span> |
| <Link id="m-name" /><code>{"override string Name { get; set; }"}</code> | <span className="api-desc">"Dead State".</span> |
| <Link id="m-statetype" /><code>{"override "}<Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" StateType { get; }"}</code> | <span className="api-desc">`PlayerStateType.Dead`.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/deadstatesettings">{"DeadStateSettings"}</Link>{" Settings { get; }"}</code> | <span className="api-desc">The state's `DeadStateSettings` (timings, stats to reset, drag).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-validatestateactivation" /><code>{"override bool ValidateStateActivation(bool isDuringSaving)"}</code> | <span className="api-desc">Refuses the state while saving, and moves the player back to playing instead.</span> |
| <Link id="m-onactivate" /><code>{"protected override void OnActivate()"}</code> | <span className="api-desc">Server: logs the kill, fires `PlayerKilled`, drops or destroys carried items, resets stats, saves and starts the respawn timer.</span> |
| <Link id="m-onactivateremote" /><code>{"protected override void OnActivateRemote(bool isPlayerCharacterSpawned)"}</code> | <span className="api-desc">Clients: stops interacting, turns off IK, plays the death animation and sound, and adds to the local player's `deaths` stat.</span> |
| <Link id="m-ondeactivate" /><code>{"protected override void OnDeactivate()"}</code> | <span className="api-desc">Server: stops the respawn timer.</span> |
| <Link id="m-ondeactivateremote" /><code>{"protected override void OnDeactivateRemote(bool isPlayerCharacterSpawned)"}</code> | <span className="api-desc">Clients: stops the death animation.</span> |
| <Link id="m-sync" /><code>{"protected override void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Tells the dead player's client to fade to black before respawn.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatebodywithkillingblow" /><code>{"private void AnimateBodyWithKillingBlow("}<Link to="/mod/game-api/types/alta-player/bodycontroller">{"BodyController"}</Link>{" body)"}</code> | <span className="api-desc">Adds rigidbodies to the body and hands and pushes them along the killing hit's direction (or head forward).</span> |
| <Link id="m-destroypickups" /><code>{"private void DestroyPickups()"}</code> | <span className="api-desc">Server: when drop on death is off, destroys items in the player's docks and held items that would be saved.</span> |
| <Link id="m-droppickups" /><code>{"private void DropPickups()"}</code> | <span className="api-desc">Server: when `DropAllOnDeath` is on, forces both hands to let go and undocks everything above the player's head.</span> |
| <Link id="m-respawn" /><code>{"private void Respawn()"}</code> | <span className="api-desc">Server: destroys the old player controller and entities, then transitions to the playing state.</span> |
| <Link id="m-waitforrespawnonserver" /><code>{"private IEnumerator WaitForRespawnOnServer() (iterator)"}</code> | <span className="api-desc">Server coroutine: waits the fog and respawn time, tells the client to fade, waits the fade, then respawns.</span> |

</details>
