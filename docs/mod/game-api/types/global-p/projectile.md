---
title: "Projectile"
description: "A networked thrown or shot object (arrows and the like) that charges its impactors when fired and reports its first hit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Projectile

A **class** in `Root.Township`, the global namespace.

A networked thrown or shot object (arrows and the like) that charges its impactors when fired and reports its first hit. The server decides hits and destruction; it is never saved and is destroyed 60 seconds after firing by default.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IToolHitDependant`](/mod/game-api/types/alta-items/itoolhitdependant), [`IImpactorResetEffect`](/mod/game-api/types/alta-items/iimpactorreseteffect), [`IShootable`](/mod/game-api/types/global-i-l/ishootable), [`ITargetPointer`](/mod/game-api/types/alta-intelligence/itargetpointer)
- **Derived types** [`ProjectileAltaEvent`](/mod/game-api/types/global-p/projectilealtaevent), [`ProjectileUnityEvent`](/mod/game-api/types/global-p/projectileunityevent)
- **Documented in** [Combat, damage and death](/mod/game-api/creatures/combat-and-damage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Projectile()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-collidedsync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> collidedSync"}</code> | <span className="api-desc">Method sync for the collided message.</span> |
| <Link id="m-colliders" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" colliders"}</code> | <span className="api-desc">Backing field for `Colliders`.</span> |
| <Link id="m-collidesonlyonce" /><code>{"private bool collidesOnlyOnce"}</code> | <span className="api-desc">If true, only the first collision counts.</span> |
| <Link id="m-destroyduration" /><code>{"private float destroyDuration"}</code> | <span className="api-desc">Seconds after firing before the server destroys the projectile. Default 60.</span> |
| <Link id="m-disabledagainst" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" disabledAgainst"}</code> | <span className="api-desc">Collider group the projectile ignores, usually the shooter's.</span> |
| <Link id="m-fired" /><code>{"private "}<Link to="/mod/game-api/types/global-p/projectilealtaevent">{"ProjectileAltaEvent"}</Link>{" fired"}</code> | <span className="api-desc">Event behind `Fired`.</span> |
| <Link id="m-impactors" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/fixedimpactor">{"FixedImpactor"}</Link>{"[] impactors"}</code> | <span className="api-desc">Impactors charged when fired; `SetupDamageMultiplier` scales them.</span> |
| <Link id="m-isdestroyedoncollision" /><code>{"private bool isDestroyedOnCollision"}</code> | <span className="api-desc">If true, the projectile is destroyed when it hits something on `layerMaskForDestruction`.</span> |
| <Link id="m-isfired" /><code>{"private bool isFired"}</code> | <span className="api-desc">True once shot; collisions before that are ignored.</span> |
| <Link id="m-layermaskfordestruction" /><code>{"private LayerMask layerMaskForDestruction"}</code> | <span className="api-desc">Layers that destroy the projectile on hit. Empty means all layers.</span> |
| <Link id="m-ondestroyed" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onDestroyed"}</code> | <span className="api-desc">Event played when a collision destroys the projectile.</span> |
| <Link id="m-rigidbody" /><code>{"private Rigidbody rigidbody"}</code> | <span className="api-desc">Backing field for `Rigidbody`.</span> |
| <Link id="m-syncfired" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFired"}</code> | <span className="api-desc">Method sync for the fired message.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colliders-2" /><code><Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" Colliders { get; }"}</code> | <span className="api-desc">The projectile's own colliders.</span> |
| <Link id="m-hascollided" /><code>{"bool HasCollided { get; private set; }"}</code> | <span className="api-desc">True after the first hit (if set to collide only once).</span> |
| <Link id="m-rigidbody-2" /><code>{"Rigidbody Rigidbody { get; }"}</code> | <span className="api-desc">The projectile's rigidbody.</span> |
| <Link id="m-shooter" /><code><Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" Shooter { get; set; }"}</code> | <span className="api-desc">The target that fired it, for AI. Shooting does not set it.</span> |
| <Link id="m-surfacecollider" /><code>{"Collider SurfaceCollider { get; private set; }"}</code> | <span className="api-desc">The collider it hit. Null on clients.</span> |
| <Link id="m-surfacenormal" /><code>{"Vector3 SurfaceNormal { get; private set; }"}</code> | <span className="api-desc">Surface normal at the hit point.</span> |
| <Link id="m-surfacepoint" /><code>{"Vector3 SurfacePoint { get; private set; }"}</code> | <span className="api-desc">World point where it hit.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-intelligence-itargetpointer-target" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" Alta.Intelligence.ITargetPointer.Target { get; }"}</code> | <span className="api-desc">The target pointed at is the `Shooter`, so hits can be traced back to who fired.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-collided" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-p/projectile">{"Projectile"}</Link>{"> Collided"}</code> | <span className="api-desc">Raised on the server when it hits something, and on clients when told.</span> |
| <Link id="m-fired-2" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-p/projectile">{"Projectile"}</Link>{"> Fired"}</code> | <span className="api-desc">Raised when the projectile is fired, on every side.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the fired and collided messages and marks the entity as not saved.</span> |
| <Link id="m-setupdamagemultiplier" /><code>{"void SetupDamageMultiplier(float damageMultiplier)"}</code> | <span className="api-desc">Multiplies the damage of all its impactors.</span> |
| <Link id="m-shoot" /><code>{"void Shoot(Vector3 velocity, "}<Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" collidersToIgnore = null)"}</code> | <span className="api-desc">Launches it with a velocity, optionally ignoring some colliders (such as the shooter). Server: schedules destruction and syncs the shot.</span> |
| <Link id="m-shoot-2" /><code>{"void Shoot(Vector3 velocity)"}</code> | <span className="api-desc">Launches it with a velocity, optionally ignoring some colliders (such as the shooter). Server: schedules destruction and syncs the shot.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroyafterduration" /><code>{"private IEnumerator DestroyAfterDuration() (iterator)"}</code> | <span className="api-desc">Server coroutine that destroys the projectile `destroyDuration` seconds after it is fired.</span> |
| <Link id="m-oncollided" /><code>{"private void Alta.Impact.IToolHitDependant.OnCollided(Collision collision, bool isHitting, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | <span className="api-desc">Tool collision callback: once fired, records the first contact as a collision.</span> |
| <Link id="m-oncollision" /><code>{"private void OnCollision(Vector3 point, Vector3 normal, Collider collider)"}</code> | <span className="api-desc">Server: records where it hit, tells clients, fires `Collided` and destroys the projectile if the hit layer allows.</span> |
| <Link id="m-onhit" /><code>{"private void Alta.Impact.IToolHitDependant.OnHit("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | <span className="api-desc">Tool hit callback: once fired, records the hit as a collision.</span> |
| <Link id="m-reseteffect" /><code>{"private void Alta.Impact.IImpactorResetEffect.ResetEffect()"}</code> | <span className="api-desc">Impactor reset callback; does nothing.</span> |
| <Link id="m-synccollided" /><code>{"private void SyncCollided("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isDestroying)"}</code> | <span className="api-desc">Client handler for the collided message: sets the hit point and normal, fires `Collided` and plays the destroyed event.</span> |
| <Link id="m-syncfired-2" /><code>{"private void SyncFired("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Fired message: sends velocity and the ignored collider group; clients launch the projectile the same way.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Projectile`:

<div className="api-used-in">

[`ProjectileShooter.projectilePrefab`](/mod/game-api/types/alta-intelligence/projectileshooter#m-projectileprefab), [`ProjectileComponent.projectile`](/mod/game-api/types/global-p/projectilecomponent#m-projectile), [`ProjectileComponent.Projectile`](/mod/game-api/types/global-p/projectilecomponent#m-projectile-2), [`ProjectileComponent.ProjectileCollided`](/mod/game-api/types/global-p/projectilecomponent#m-projectilecollided), [`ProjectileEffect.ProjectileCollided`](/mod/game-api/types/global-p/projectileeffect#m-projectilecollided).

</div>
