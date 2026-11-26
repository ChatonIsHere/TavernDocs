---
title: "SeedSpray"
description: "Fires a burst of pooled seed projectiles in a cone, used by plant creatures through SeedSprayManager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SeedSpray

A **class** in `Root.Township`, `Alta.Intelligence`.

Fires a burst of pooled seed projectiles in a cone, used by plant creatures through `SeedSprayManager`. The server shoots and decides hits; clients replay each burst from a synced random seed.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ITargetPointer`](/mod/game-api/types/alta-intelligence/itargetpointer)
- **Nested types** [`BasicImpactSyncArguments`](/mod/game-api/types/alta-intelligence/seedspray-basicimpactsyncarguments), [`Seed`](/mod/game-api/types/alta-intelligence/seedspray-seed)
- **Documented in** [Combat, damage and death](/mod/game-api/creatures/combat-and-damage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SeedSpray()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>24 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alivecutoff" /><code>{"private AnimationCurve aliveCutoff"}</code> | Curve over time of the share of seeds that should have expired by then. |
| <Link id="m-angle" /><code>{"private float angle"}</code> | Width of the spray cone in degrees (default 90). |
| <Link id="m-currentshots" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/seedspray-seed">{"SeedSpray.Seed"}</Link>{"[][] currentShots"}</code> | Seed arrays for up to 8 shots in flight. |
| <Link id="m-destroyed" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" destroyed"}</code> | Method sync for a destroyed seed. |
| <Link id="m-finished" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" finished"}</code> | Method sync for a finished shot. |
| <Link id="m-hitdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" hitDefinition"}</code> | Pooled effect played where a seed dies. |
| <Link id="m-maximumangularvelocity" /><code>{"private float maximumAngularVelocity"}</code> | Highest spin given to a seed. |
| <Link id="m-maximumcount" /><code>{"private int maximumCount"}</code> | Most seeds per shot (exclusive upper bound of the random count). |
| <Link id="m-maximumvelocity" /><code>{"private float maximumVelocity"}</code> | Highest launch speed of a seed. |
| <Link id="m-minimumangularvelocity" /><code>{"private float minimumAngularVelocity"}</code> | Lowest spin given to a seed. |
| <Link id="m-minimumcount" /><code>{"private int minimumCount"}</code> | Fewest seeds per shot. |
| <Link id="m-minimumvelocity" /><code>{"private float minimumVelocity"}</code> | Lowest launch speed of a seed. |
| <Link id="m-nextshot" /><code>{"private int nextShot"}</code> | Index of the next shot slot, wrapping at 8. |
| <Link id="m-planthandler" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionhandler">{"PositionHandler"}</Link>{" plantHandler"}</code> | Called with the hit point when a seed lands somewhere it can plant. |
| <Link id="m-plantlayer" /><code>{"private LayerMask plantLayer"}</code> | Layers a seed can plant on. |
| <Link id="m-plantnormalthreshold" /><code>{"private float plantNormalThreshold"}</code> | How upward the hit surface must face to plant (default 0.6). |
| <Link id="m-seeddefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" seedDefinition"}</code> | Pooled object for each seed projectile. |
| <Link id="m-shoot" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" shoot"}</code> | Method sync that starts a burst on clients. |
| <Link id="m-shootingcount" /><code>{"private int shootingCount"}</code> | Number of shots still in flight. |
| <Link id="m-syncbasicimpact" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/seedspray-basicimpactsyncarguments">{"SeedSpray.BasicImpactSyncArguments"}</Link>{"> syncBasicImpact"}</code> | Method sync for seed hits. |
| <Link id="m-syncparent" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncParent"}</code> | Method sync for the spray's parent. |
| <Link id="m-syncseed" /><code>{"private int syncSeed"}</code> | Random seed of the shot being synced. |
| <Link id="m-syncseedindex" /><code>{"private int syncSeedIndex"}</code> | Index of the seed being synced as destroyed. |
| <Link id="m-syncshotindex" /><code>{"private int syncShotIndex"}</code> | Index of the shot being synced. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-shooter" /><code><Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" Shooter { get; set; }"}</code> | The creature that fired the spray, set by `SeedSprayManager`. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-intelligence-itargetpointer-target" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" Alta.Intelligence.ITargetPointer.Target { get; }"}</code> | Returns `Shooter`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the method syncs for parent, shoot, destroyed, finished and impacts. |
| <Link id="m-initializespray" /><code>{"void InitializeSpray("}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthObject)"}</code> | Hooks the owner's health so the spray detaches when the owner dies mid-burst. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends a joining player the spray's parent. |
| <Link id="m-shoot-2" /><code>{"void Shoot()"}</code> | Server: starts a new burst with a random seed, syncs it to the chunk and fires it. The private overload spawns and launches the seeds. |
| <Link id="m-syncbasicimpact-2" /><code>{"void SyncBasicImpact("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-intelligence/seedspray-basicimpactsyncarguments">{"SeedSpray.BasicImpactSyncArguments"}</Link>{" hit)"}</code> | Method sync handler that rebuilds a seed's hit from its arguments and applies it to the struck detector on the receiving side. |

<details>
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkplant" /><code>{"private void CheckPlant("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit)"}</code> | If a seed hits an upward-facing surface on the plant layer, calls the plant handler at that point. |
| <Link id="m-destroy" /><code>{"private void Destroy("}<Link to="/mod/game-api/types/alta-intelligence/seedspray-seed">{"SeedSpray.Seed"}</Link>{" seed)"}</code> | Kills a live seed: plays the hit effect and releases it to the pool. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Releases every live seed and clears all shots. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws the spray cone. |
| <Link id="m-shoot-3" /><code>{"private void Shoot(int shotIndex, int seed, Vector3 position, Quaternion rotation)"}</code> | Server: starts a new burst with a random seed, syncs it to the chunk and fires it. The private overload spawns and launches the seeds. |
| <Link id="m-syncdestroyed" /><code>{"private void SyncDestroyed("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Method sync handler that destroys one seed of a shot on clients. |
| <Link id="m-syncfinished" /><code>{"private void SyncFinished("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Method sync handler that frees a finished shot's seed array on clients. |
| <Link id="m-syncparent-2" /><code>{"private void SyncParent("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Method sync handler for the spray's parent entity; clients reparent it, or move it to the spawned folder if none. |
| <Link id="m-syncshoot" /><code>{"private void SyncShoot("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Method sync handler that sends shot index, random seed, position and rotation; clients fire the same burst. |
| <Link id="m-timedshootitems" /><code>{"private IEnumerator TimedShootItems(int shotIndex, "}<Link to="/mod/game-api/types/alta-intelligence/seedspray-seed">{"SeedSpray.Seed"}</Link>{"[] seeds, int count) (iterator)"}</code> | Coroutine that arms the seeds after 0.3 s, handles their hits, and on the server expires them over time, then ends the shot. |
| <Link id="m-unchild" /><code>{"private void Unchild("}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthObject)"}</code> | When the owner dies while shooting, detaches the spray so it can finish; it destroys itself once the shots are done. |

</details>

## Used in

Members of other types that take, return or hold a `SeedSpray`:

[`SeedSprayManager.spray`](/mod/game-api/types/alta-intelligence/seedspraymanager#m-spray).
