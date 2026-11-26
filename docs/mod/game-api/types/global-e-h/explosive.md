---
title: "Explosive"
description: "Networked explosion: when triggered, the server damages health objects and impact detectors in range with linear falloff and can push rigidbodies; the..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Explosive

A **class** in `Root.Township`, the global namespace.

Networked explosion: when triggered, the server damages health objects and impact detectors in range with linear falloff and can push rigidbodies; the effect plays on every client.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`ColoredExplosive`](/mod/game-api/types/global-c-d/coloredexplosive)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Explosive()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>22 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basepickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" basePickup"}</code> | Pickup the explosive belongs to, used for the wielder. |
| <Link id="m-blastforce" /><code>{"private float blastForce"}</code> | Explosion force applied to rigidbodies in range. |
| <Link id="m-btntrigger" /><code>{"private bool btnTrigger"}</code> | Inspector button that calls `Trigger`. |
| <Link id="m-channels" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] channels"}</code> | Impact channels a detector needs to be hit. |
| <Link id="m-crippledamage" /><code>{"private float crippleDamage"}</code> | Cripple damage at full effectiveness. |
| <Link id="m-damagefalloff" /><code>{"private float damageFallOff"}</code> | Distance between `maxDamageRange` and `range`. |
| <Link id="m-detectors" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{"> detectors"}</code> | Impact detectors without a health target hit by this blast. |
| <Link id="m-effectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinitionbase">{"PooledObjectDefinitionBase"}</Link>{" effectDefinition"}</code> | Pooled effect played on explosion. |
| <Link id="m-getwielder" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/evaluatewielder">{"EvaluateWielder"}</Link>{" getWielder"}</code> | Delegate that returns the entity and player credited with the damage. |
| <Link id="m-hardnesslevel" /><code>{"private int hardnessLevel"}</code> | Highest detector hardness that can be hit; -1 skips the check. |
| <Link id="m-healthdamage" /><code>{"private float healthDamage"}</code> | Health damage at full effectiveness. |
| <Link id="m-healths" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{"> healths"}</code> | Health objects hit by this blast. |
| <Link id="m-impacttype" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" impactType"}</code> | Impact type of the hit, explosive by default. |
| <Link id="m-istriggered" /><code>{"private bool isTriggered"}</code> | Set once `Trigger` has run. |
| <Link id="m-layermask" /><code>{"private LayerMask layerMask"}</code> | Layers the overlap sphere checks. |
| <Link id="m-maxdamagerange" /><code>{"private float maxDamageRange"}</code> | Distance within which targets take full damage. |
| <Link id="m-maxdamagerangesquared" /><code>{"private float maxDamageRangeSquared"}</code> | Square of `maxDamageRange`. |
| <Link id="m-moveobjects" /><code>{"private bool moveObjects"}</code> | Inspector toggle that shows `blastForce`; the force is applied whenever it is above zero. |
| <Link id="m-playerdamagemultiplier" /><code>{"private float playerDamageMultiplier"}</code> | Multiplier on health damage dealt to players. |
| <Link id="m-range" /><code>{"private float range"}</code> | Furthest distance anything is affected. |
| <Link id="m-rangesquared" /><code>{"private float rangeSquared"}</code> | Square of `range`. |
| <Link id="m-synceffect" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncEffect"}</code> | Method sync that tells clients to play the effect. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the effect sync. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" data)"}</code> | Works out who gets credit for the damage: the parent pickup's last interactor, or the prefab root if there is no pickup. |
| <Link id="m-ondrawgizmosselected" /><code>{"void OnDrawGizmosSelected()"}</code> | Draws the full-damage and maximum ranges. |
| <Link id="m-trigger" /><code>{"void Trigger()"}</code> | Server: overlap-spheres the range, damages matching detectors and health objects once each, applies blast force, plays the effect and syncs it. |
| <Link id="m-geteffect" /><code>{"protected virtual "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" GetEffect(Vector3 position, Quaternion rotation)"}</code> | Spawns the pooled explosion effect at a position; override to change the effect. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-geteffectiveness" /><code>{"private bool GetEffectiveness(Vector3 position, Vector3 origin, out float effectiveness)"}</code> | Gives 1 inside `maxDamageRange`, falling linearly to 0 at `range`; false when out of range. |
| <Link id="m-rootchanged" /><code>{"private void RootChanged("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" newRoot)"}</code> | When crafted into a new root, moves the last player interactor to the new root's pickup and tracks that. |
| <Link id="m-synceffect-2" /><code>{"private void SyncEffect("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | On remote clients (not headless), plays the effect at the explosive's position. |

</details>
