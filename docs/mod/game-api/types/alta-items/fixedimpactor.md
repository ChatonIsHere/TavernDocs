---
title: "FixedImpactor"
description: "An impact source that only hurts while charged, such as a creature's beak or a seed projectile."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FixedImpactor

A **class** in `Root.Township`, `Alta.Impact`.

An impact source that only hurts while charged, such as a creature's beak or a seed projectile. The charged state syncs from server to clients.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`ImpactGenerator`](/mod/game-api/types/alta-items/impactgenerator), [`INetworkEntityBehaviour`](/mod/game-api/types/alta-networking/inetworkentitybehaviour)
- **Derived types** [`FixedImpactorGroup`](/mod/game-api/types/alta-items/fixedimpactorgroup), [`PooledFixedImpactor`](/mod/game-api/types/alta-items/pooledfixedimpactor)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FixedImpactor()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chargeonenable" /><code>{"protected bool chargeOnEnable"}</code> | <span className="api-desc">If true, charges itself each time it's enabled.</span> |
| <Link id="m-ischargedonstart" /><code>{"protected bool isChargedOnStart"}</code> | <span className="api-desc">Whether it starts charged.</span> |

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-damagemanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" damageManager"}</code> | <span className="api-desc">Optional stat manager. If it has the damage stat, that stat's base value sets the hit multipliers.</span> |
| <Link id="m-damagestat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" damageStat"}</code> | <span className="api-desc">The damage stat found on `damageManager` in `Initialize`.</span> |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">The network entity this impactor syncs through.</span> |
| <Link id="m-hasdamagestat" /><code>{"private bool hasDamageStat"}</code> | <span className="api-desc">Whether `damageStat` was found.</span> |
| <Link id="m-hasinitialized" /><code>{"private bool hasInitialized"}</code> | <span className="api-desc">True after `Initialize`. Charge changes are only sent to clients after this.</span> |
| <Link id="m-onchargedupdate" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onChargedUpdate"}</code> | <span className="api-desc">Unity event run with the new charged state whenever it changes.</span> |
| <Link id="m-synccharged" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncCharged"}</code> | <span className="api-desc">Method sync the server uses to send the charged state to chunks or a joining player.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity-2" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | <span className="api-desc">The network entity it belongs to.</span> |
| <Link id="m-ischarged" /><code>{"bool IsCharged { get; private set; }"}</code> | <span className="api-desc">Whether it currently deals damage.</span> |
| <Link id="m-updatesposition" /><code>{"override bool UpdatesPosition { get; }"}</code> | <span className="api-desc">Always false; it doesn't track its own movement.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-charge" /><code>{"void Charge()"}</code> | <span className="api-desc">Turns it on. Server: also syncs to clients.</span> |
| <Link id="m-getcurrentattack" /><code>{"override "}<Link to="/mod/game-api/types/alta-intelligence/attackparameters">{"AttackParameters"}</Link>{" GetCurrentAttack()"}</code> | <span className="api-desc">The attack it deals when charged, or an empty attack when not.</span> |
| <Link id="m-getfollowandcurrent" /><code>{"override void GetFollowAndCurrent("}<Link to="/mod/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contactPoint, out Vector3 follow, out Vector3 current, out float directionEffMod, out float generalEfficiency, out float directionMultiplier)"}</code> | <span className="api-desc">Builds the hit direction from the contact point when charged; gives -1 values when not charged.</span> |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | <span className="api-desc">Applies the starting charge, creates the sync and looks up the damage stat if a stat manager is set.</span> |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-onconnected" /><code>{"void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the current charge state to a joining player.</span> |
| <Link id="m-ondisconnected" /><code>{"void OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-reset" /><code>{"override void Reset()"}</code> | <span className="api-desc">Turns it off. Server: also syncs to clients.</span> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Applies the starting charge state.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Charges the impactor if `chargeOnEnable` is set.</span> |
| <Link id="m-sync" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes the charged state, and on remote clients applies it and runs `onChargedUpdate`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `FixedImpactor`:

<div className="api-used-in">

[`Spriggull.beak`](/mod/game-api/types/alta-intelligence/spriggull#m-beak), [`Projectile.impactors`](/mod/game-api/types/global-p/projectile#m-impactors), [`TrainingHittingTool.fixedImpactor`](/mod/game-api/types/global-t-x/traininghittingtool#m-fixedimpactor).

</div>
