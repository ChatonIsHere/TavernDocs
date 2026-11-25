---
title: "Projectile"
description: "A networked thrown or shot object (arrows and the like) that charges its impactors when fired and reports its first hit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Projectile

A **class** in `Root.Township`, no namespace.

A networked thrown or shot object (arrows and the like) that charges its impactors when fired and reports its first hit. The server decides hits and destruction; it is never saved and is destroyed 60 seconds after firing by default.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IToolHitDependant`](/game-api/types/alta-items/itoolhitdependant), [`IImpactorResetEffect`](/game-api/types/alta-items/iimpactorreseteffect), [`IShootable`](/game-api/types/global-i-l/ishootable), [`ITargetPointer`](/game-api/types/alta-intelligence/itargetpointer)
- **Derived types** [`ProjectileAltaEvent`](/game-api/types/global-p/projectilealtaevent), [`ProjectileUnityEvent`](/game-api/types/global-p/projectileunityevent)
- **Documented in** [Combat, damage and death](/game-api/creatures/combat-and-damage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Projectile()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-collidedsync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> collidedSync"}</code> |  |
| <Link id="m-colliders" /><code>{"private "}<Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" colliders"}</code> |  |
| <Link id="m-collidesonlyonce" /><code>{"private bool collidesOnlyOnce"}</code> |  |
| <Link id="m-destroyduration" /><code>{"private float destroyDuration"}</code> |  |
| <Link id="m-disabledagainst" /><code>{"private "}<Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" disabledAgainst"}</code> |  |
| <Link id="m-fired" /><code>{"private "}<Link to="/game-api/types/global-p/projectilealtaevent">{"ProjectileAltaEvent"}</Link>{" fired"}</code> |  |
| <Link id="m-impactors" /><code>{"private "}<Link to="/game-api/types/alta-items/fixedimpactor">{"FixedImpactor"}</Link>{"[] impactors"}</code> |  |
| <Link id="m-isdestroyedoncollision" /><code>{"private bool isDestroyedOnCollision"}</code> |  |
| <Link id="m-isfired" /><code>{"private bool isFired"}</code> |  |
| <Link id="m-layermaskfordestruction" /><code>{"private LayerMask layerMaskForDestruction"}</code> |  |
| <Link id="m-ondestroyed" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onDestroyed"}</code> |  |
| <Link id="m-rigidbody" /><code>{"private Rigidbody rigidbody"}</code> |  |
| <Link id="m-syncfired" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFired"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colliders-2" /><code><Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" Colliders { get; }"}</code> | The projectile's own colliders. |
| <Link id="m-hascollided" /><code>{"bool HasCollided { get; private set; }"}</code> | True after the first hit (if set to collide only once). |
| <Link id="m-rigidbody-2" /><code>{"Rigidbody Rigidbody { get; }"}</code> | The projectile's rigidbody. |
| <Link id="m-shooter" /><code><Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" Shooter { get; set; }"}</code> | The target that fired it, for AI. Shooting does not set it. |
| <Link id="m-surfacecollider" /><code>{"Collider SurfaceCollider { get; private set; }"}</code> | The collider it hit. Null on clients. |
| <Link id="m-surfacenormal" /><code>{"Vector3 SurfaceNormal { get; private set; }"}</code> | Surface normal at the hit point. |
| <Link id="m-surfacepoint" /><code>{"Vector3 SurfacePoint { get; private set; }"}</code> | World point where it hit. |
| <Link id="m-alta-intelligence-itargetpointer-target" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" Alta.Intelligence.ITargetPointer.Target { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-collided" /><code>{"event Action<"}<Link to="/game-api/types/global-p/projectile">{"Projectile"}</Link>{"> Collided"}</code> | Raised on the server when it hits something, and on clients when told. |
| <Link id="m-fired-2" /><code>{"event Action<"}<Link to="/game-api/types/global-p/projectile">{"Projectile"}</Link>{"> Fired"}</code> | Raised when the projectile is fired, on every side. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the fired and collided messages and marks the entity as not saved. |
| <Link id="m-setupdamagemultiplier" /><code>{"void SetupDamageMultiplier(float damageMultiplier)"}</code> | Multiplies the damage of all its impactors. |
| <Link id="m-shoot" /><code>{"void Shoot(Vector3 velocity, "}<Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" collidersToIgnore = null)"}</code> | Launches it with a velocity, optionally ignoring some colliders (such as the shooter). Server: schedules destruction and syncs the shot. |
| <Link id="m-shoot-2" /><code>{"void Shoot(Vector3 velocity)"}</code> | Launches it with a velocity, optionally ignoring some colliders (such as the shooter). Server: schedules destruction and syncs the shot. |
| <Link id="m-destroyafterduration" /><code>{"private IEnumerator DestroyAfterDuration() (iterator)"}</code> |  |
| <Link id="m-oncollided" /><code>{"private void Alta.Impact.IToolHitDependant.OnCollided(Collision collision, bool isHitting, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> |  |
| <Link id="m-oncollision" /><code>{"private void OnCollision(Vector3 point, Vector3 normal, Collider collider)"}</code> |  |
| <Link id="m-onhit" /><code>{"private void Alta.Impact.IToolHitDependant.OnHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> |  |
| <Link id="m-reseteffect" /><code>{"private void Alta.Impact.IImpactorResetEffect.ResetEffect()"}</code> |  |
| <Link id="m-synccollided" /><code>{"private void SyncCollided("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isDestroying)"}</code> |  |
| <Link id="m-syncfired-2" /><code>{"private void SyncFired("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Projectile`:

[`ProjectileShooter.projectilePrefab`](/game-api/types/alta-intelligence/projectileshooter#m-projectileprefab), [`ProjectileComponent.projectile`](/game-api/types/global-p/projectilecomponent#m-projectile), [`ProjectileComponent.Projectile`](/game-api/types/global-p/projectilecomponent#m-projectile-2), [`ProjectileComponent.ProjectileCollided`](/game-api/types/global-p/projectilecomponent#m-projectilecollided), [`ProjectileEffect.ProjectileCollided`](/game-api/types/global-p/projectileeffect#m-projectilecollided).
