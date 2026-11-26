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
| <Link id="m-ctor" /><code>{"SeedSpray()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>24 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alivecutoff" /><code>{"private AnimationCurve aliveCutoff"}</code> | <span className="api-desc">Curve over time of the share of seeds that should have expired by then.</span> |
| <Link id="m-angle" /><code>{"private float angle"}</code> | <span className="api-desc">Width of the spray cone in degrees (default 90).</span> |
| <Link id="m-currentshots" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/seedspray-seed">{"SeedSpray.Seed"}</Link>{"[][] currentShots"}</code> | <span className="api-desc">Seed arrays for up to 8 shots in flight.</span> |
| <Link id="m-destroyed" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" destroyed"}</code> | <span className="api-desc">Method sync for a destroyed seed.</span> |
| <Link id="m-finished" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" finished"}</code> | <span className="api-desc">Method sync for a finished shot.</span> |
| <Link id="m-hitdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" hitDefinition"}</code> | <span className="api-desc">Pooled effect played where a seed dies.</span> |
| <Link id="m-maximumangularvelocity" /><code>{"private float maximumAngularVelocity"}</code> | <span className="api-desc">Highest spin given to a seed.</span> |
| <Link id="m-maximumcount" /><code>{"private int maximumCount"}</code> | <span className="api-desc">Most seeds per shot (exclusive upper bound of the random count).</span> |
| <Link id="m-maximumvelocity" /><code>{"private float maximumVelocity"}</code> | <span className="api-desc">Highest launch speed of a seed.</span> |
| <Link id="m-minimumangularvelocity" /><code>{"private float minimumAngularVelocity"}</code> | <span className="api-desc">Lowest spin given to a seed.</span> |
| <Link id="m-minimumcount" /><code>{"private int minimumCount"}</code> | <span className="api-desc">Fewest seeds per shot.</span> |
| <Link id="m-minimumvelocity" /><code>{"private float minimumVelocity"}</code> | <span className="api-desc">Lowest launch speed of a seed.</span> |
| <Link id="m-nextshot" /><code>{"private int nextShot"}</code> | <span className="api-desc">Index of the next shot slot, wrapping at 8.</span> |
| <Link id="m-planthandler" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionhandler">{"PositionHandler"}</Link>{" plantHandler"}</code> | <span className="api-desc">Called with the hit point when a seed lands somewhere it can plant.</span> |
| <Link id="m-plantlayer" /><code>{"private LayerMask plantLayer"}</code> | <span className="api-desc">Layers a seed can plant on.</span> |
| <Link id="m-plantnormalthreshold" /><code>{"private float plantNormalThreshold"}</code> | <span className="api-desc">How upward the hit surface must face to plant (default 0.6).</span> |
| <Link id="m-seeddefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" seedDefinition"}</code> | <span className="api-desc">Pooled object for each seed projectile.</span> |
| <Link id="m-shoot" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" shoot"}</code> | <span className="api-desc">Method sync that starts a burst on clients.</span> |
| <Link id="m-shootingcount" /><code>{"private int shootingCount"}</code> | <span className="api-desc">Number of shots still in flight.</span> |
| <Link id="m-syncbasicimpact" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/seedspray-basicimpactsyncarguments">{"SeedSpray.BasicImpactSyncArguments"}</Link>{"> syncBasicImpact"}</code> | <span className="api-desc">Method sync for seed hits.</span> |
| <Link id="m-syncparent" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncParent"}</code> | <span className="api-desc">Method sync for the spray's parent.</span> |
| <Link id="m-syncseed" /><code>{"private int syncSeed"}</code> | <span className="api-desc">Random seed of the shot being synced.</span> |
| <Link id="m-syncseedindex" /><code>{"private int syncSeedIndex"}</code> | <span className="api-desc">Index of the seed being synced as destroyed.</span> |
| <Link id="m-syncshotindex" /><code>{"private int syncShotIndex"}</code> | <span className="api-desc">Index of the shot being synced.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-shooter" /><code><Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" Shooter { get; set; }"}</code> | <span className="api-desc">The creature that fired the spray, set by `SeedSprayManager`.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-intelligence-itargetpointer-target" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" Alta.Intelligence.ITargetPointer.Target { get; }"}</code> | <span className="api-desc">Returns `Shooter`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the method syncs for parent, shoot, destroyed, finished and impacts.</span> |
| <Link id="m-initializespray" /><code>{"void InitializeSpray("}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthObject)"}</code> | <span className="api-desc">Hooks the owner's health so the spray detaches when the owner dies mid-burst.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends a joining player the spray's parent.</span> |
| <Link id="m-shoot-2" /><code>{"void Shoot()"}</code> | <span className="api-desc">Server: starts a new burst with a random seed, syncs it to the chunk and fires it. The private overload spawns and launches the seeds.</span> |
| <Link id="m-syncbasicimpact-2" /><code>{"void SyncBasicImpact("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-intelligence/seedspray-basicimpactsyncarguments">{"SeedSpray.BasicImpactSyncArguments"}</Link>{" hit)"}</code> | <span className="api-desc">Method sync handler that rebuilds a seed's hit from its arguments and applies it to the struck detector on the receiving side.</span> |

<details className="api-private">
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkplant" /><code>{"private void CheckPlant("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit)"}</code> | <span className="api-desc">If a seed hits an upward-facing surface on the plant layer, calls the plant handler at that point.</span> |
| <Link id="m-destroy" /><code>{"private void Destroy("}<Link to="/mod/game-api/types/alta-intelligence/seedspray-seed">{"SeedSpray.Seed"}</Link>{" seed)"}</code> | <span className="api-desc">Kills a live seed: plays the hit effect and releases it to the pool.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Releases every live seed and clears all shots.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws the spray cone.</span> |
| <Link id="m-shoot-3" /><code>{"private void Shoot(int shotIndex, int seed, Vector3 position, Quaternion rotation)"}</code> | <span className="api-desc">Server: starts a new burst with a random seed, syncs it to the chunk and fires it. The private overload spawns and launches the seeds.</span> |
| <Link id="m-syncdestroyed" /><code>{"private void SyncDestroyed("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Method sync handler that destroys one seed of a shot on clients.</span> |
| <Link id="m-syncfinished" /><code>{"private void SyncFinished("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Method sync handler that frees a finished shot's seed array on clients.</span> |
| <Link id="m-syncparent-2" /><code>{"private void SyncParent("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Method sync handler for the spray's parent entity; clients reparent it, or move it to the spawned folder if none.</span> |
| <Link id="m-syncshoot" /><code>{"private void SyncShoot("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Method sync handler that sends shot index, random seed, position and rotation; clients fire the same burst.</span> |
| <Link id="m-timedshootitems" /><code>{"private IEnumerator TimedShootItems(int shotIndex, "}<Link to="/mod/game-api/types/alta-intelligence/seedspray-seed">{"SeedSpray.Seed"}</Link>{"[] seeds, int count) (iterator)"}</code> | <span className="api-desc">Coroutine that arms the seeds after 0.3 s, handles their hits, and on the server expires them over time, then ends the shot.</span> |
| <Link id="m-unchild" /><code>{"private void Unchild("}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthObject)"}</code> | <span className="api-desc">When the owner dies while shooting, detaches the spray so it can finish; it destroys itself once the shots are done.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SeedSpray`:

<div className="api-used-in">

[`SeedSprayManager.spray`](/mod/game-api/types/alta-intelligence/seedspraymanager#m-spray).

</div>
