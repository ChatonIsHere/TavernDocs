---
title: "SeedSpray"
description: "class SeedSpray in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SeedSpray

A **class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ITargetPointer`](/game-api/types/alta-intelligence/itargetpointer)
- **Nested types** [`BasicImpactSyncArguments`](/game-api/types/alta-intelligence/seedspray-basicimpactsyncarguments), [`Seed`](/game-api/types/alta-intelligence/seedspray-seed)
- **Documented in** [Combat, damage and death](/game-api/creatures/combat-and-damage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SeedSpray()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-alivecutoff" /><code>{"private AnimationCurve aliveCutoff"}</code> |  |
| <Link id="m-angle" /><code>{"private float angle"}</code> |  |
| <Link id="m-currentshots" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/seedspray-seed">{"SeedSpray.Seed"}</Link>{"[][] currentShots"}</code> |  |
| <Link id="m-destroyed" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" destroyed"}</code> |  |
| <Link id="m-finished" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" finished"}</code> |  |
| <Link id="m-hitdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" hitDefinition"}</code> |  |
| <Link id="m-maximumangularvelocity" /><code>{"private float maximumAngularVelocity"}</code> |  |
| <Link id="m-maximumcount" /><code>{"private int maximumCount"}</code> |  |
| <Link id="m-maximumvelocity" /><code>{"private float maximumVelocity"}</code> |  |
| <Link id="m-minimumangularvelocity" /><code>{"private float minimumAngularVelocity"}</code> |  |
| <Link id="m-minimumcount" /><code>{"private int minimumCount"}</code> |  |
| <Link id="m-minimumvelocity" /><code>{"private float minimumVelocity"}</code> |  |
| <Link id="m-nextshot" /><code>{"private int nextShot"}</code> |  |
| <Link id="m-planthandler" /><code>{"private "}<Link to="/game-api/types/global-p/positionhandler">{"PositionHandler"}</Link>{" plantHandler"}</code> |  |
| <Link id="m-plantlayer" /><code>{"private LayerMask plantLayer"}</code> |  |
| <Link id="m-plantnormalthreshold" /><code>{"private float plantNormalThreshold"}</code> |  |
| <Link id="m-seeddefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" seedDefinition"}</code> |  |
| <Link id="m-shoot" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" shoot"}</code> |  |
| <Link id="m-shootingcount" /><code>{"private int shootingCount"}</code> |  |
| <Link id="m-syncbasicimpact" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/seedspray-basicimpactsyncarguments">{"SeedSpray.BasicImpactSyncArguments"}</Link>{"> syncBasicImpact"}</code> |  |
| <Link id="m-syncparent" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncParent"}</code> |  |
| <Link id="m-syncseed" /><code>{"private int syncSeed"}</code> |  |
| <Link id="m-syncseedindex" /><code>{"private int syncSeedIndex"}</code> |  |
| <Link id="m-syncshotindex" /><code>{"private int syncShotIndex"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-shooter" /><code><Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" Shooter { get; set; }"}</code> |  |
| <Link id="m-alta-intelligence-itargetpointer-target" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" Alta.Intelligence.ITargetPointer.Target { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializespray" /><code>{"void InitializeSpray("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthObject)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-shoot-2" /><code>{"void Shoot()"}</code> |  |
| <Link id="m-syncbasicimpact-2" /><code>{"void SyncBasicImpact("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-intelligence/seedspray-basicimpactsyncarguments">{"SeedSpray.BasicImpactSyncArguments"}</Link>{" hit)"}</code> |  |
| <Link id="m-checkplant" /><code>{"private void CheckPlant("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit)"}</code> |  |
| <Link id="m-destroy" /><code>{"private void Destroy("}<Link to="/game-api/types/alta-intelligence/seedspray-seed">{"SeedSpray.Seed"}</Link>{" seed)"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-shoot-3" /><code>{"private void Shoot(int shotIndex, int seed, Vector3 position, Quaternion rotation)"}</code> |  |
| <Link id="m-syncdestroyed" /><code>{"private void SyncDestroyed("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncfinished" /><code>{"private void SyncFinished("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncparent-2" /><code>{"private void SyncParent("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncshoot" /><code>{"private void SyncShoot("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-timedshootitems" /><code>{"private IEnumerator TimedShootItems(int shotIndex, "}<Link to="/game-api/types/alta-intelligence/seedspray-seed">{"SeedSpray.Seed"}</Link>{"[] seeds, int count) (iterator)"}</code> |  |
| <Link id="m-unchild" /><code>{"private void Unchild("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthObject)"}</code> |  |

## Used in

Members of other types that take, return or hold a `SeedSpray`:

[`SeedSprayManager.spray`](/game-api/types/alta-intelligence/seedspraymanager#m-spray).
