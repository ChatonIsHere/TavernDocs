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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`ImpactGenerator`](/game-api/types/alta-items/impactgenerator), [`INetworkEntityBehaviour`](/game-api/types/alta-networking/inetworkentitybehaviour)
- **Derived types** [`FixedImpactorGroup`](/game-api/types/alta-items/fixedimpactorgroup), [`PooledFixedImpactor`](/game-api/types/alta-items/pooledfixedimpactor)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FixedImpactor()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chargeonenable" /><code>{"protected bool chargeOnEnable"}</code> | If true, charges itself each time it's enabled. |
| <Link id="m-ischargedonstart" /><code>{"protected bool isChargedOnStart"}</code> | Whether it starts charged. |

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-damagemanager" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" damageManager"}</code> |
| <Link id="m-damagestat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" damageStat"}</code> |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> |
| <Link id="m-hasdamagestat" /><code>{"private bool hasDamageStat"}</code> |
| <Link id="m-hasinitialized" /><code>{"private bool hasInitialized"}</code> |
| <Link id="m-onchargedupdate" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onChargedUpdate"}</code> |
| <Link id="m-synccharged" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncCharged"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity-2" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | The network entity it belongs to. |
| <Link id="m-ischarged" /><code>{"bool IsCharged { get; private set; }"}</code> | Whether it currently deals damage. |
| <Link id="m-updatesposition" /><code>{"override bool UpdatesPosition { get; }"}</code> | Always false; it doesn't track its own movement. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-charge" /><code>{"void Charge()"}</code> | Turns it on. Server: also syncs to clients. |
| <Link id="m-getcurrentattack" /><code>{"override "}<Link to="/game-api/types/alta-intelligence/attackparameters">{"AttackParameters"}</Link>{" GetCurrentAttack()"}</code> | The attack it deals when charged, or an empty attack when not. |
| <Link id="m-getfollowandcurrent" /><code>{"override void GetFollowAndCurrent("}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contactPoint, out Vector3 follow, out Vector3 current, out float directionEffMod, out float generalEfficiency, out float directionMultiplier)"}</code> | Builds the hit direction from the contact point when charged; gives -1 values when not charged. |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | Applies the starting charge, creates the sync and looks up the damage stat if a stat manager is set. |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Does nothing. |
| <Link id="m-onconnected" /><code>{"void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the current charge state to a joining player. |
| <Link id="m-ondisconnected" /><code>{"void OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Does nothing. |
| <Link id="m-reset" /><code>{"override void Reset()"}</code> | Turns it off. Server: also syncs to clients. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Applies the starting charge state. |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |
| <Link id="m-sync" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `FixedImpactor`:

[`Spriggull.beak`](/game-api/types/alta-intelligence/spriggull#m-beak), [`Projectile.impactors`](/game-api/types/global-p/projectile#m-impactors), [`TrainingHittingTool.fixedImpactor`](/game-api/types/global-t-x/traininghittingtool#m-fixedimpactor).
