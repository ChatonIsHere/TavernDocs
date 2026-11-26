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
| <Link id="m-ctor" /><code>{"Explosive()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>22 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basepickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" basePickup"}</code> | <span className="api-desc">Pickup the explosive belongs to, used for the wielder.</span> |
| <Link id="m-blastforce" /><code>{"private float blastForce"}</code> | <span className="api-desc">Explosion force applied to rigidbodies in range.</span> |
| <Link id="m-btntrigger" /><code>{"private bool btnTrigger"}</code> | <span className="api-desc">Inspector button that calls `Trigger`.</span> |
| <Link id="m-channels" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] channels"}</code> | <span className="api-desc">Impact channels a detector needs to be hit.</span> |
| <Link id="m-crippledamage" /><code>{"private float crippleDamage"}</code> | <span className="api-desc">Cripple damage at full effectiveness.</span> |
| <Link id="m-damagefalloff" /><code>{"private float damageFallOff"}</code> | <span className="api-desc">Distance between `maxDamageRange` and `range`.</span> |
| <Link id="m-detectors" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{"> detectors"}</code> | <span className="api-desc">Impact detectors without a health target hit by this blast.</span> |
| <Link id="m-effectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinitionbase">{"PooledObjectDefinitionBase"}</Link>{" effectDefinition"}</code> | <span className="api-desc">Pooled effect played on explosion.</span> |
| <Link id="m-getwielder" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/evaluatewielder">{"EvaluateWielder"}</Link>{" getWielder"}</code> | <span className="api-desc">Delegate that returns the entity and player credited with the damage.</span> |
| <Link id="m-hardnesslevel" /><code>{"private int hardnessLevel"}</code> | <span className="api-desc">Highest detector hardness that can be hit; -1 skips the check.</span> |
| <Link id="m-healthdamage" /><code>{"private float healthDamage"}</code> | <span className="api-desc">Health damage at full effectiveness.</span> |
| <Link id="m-healths" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{"> healths"}</code> | <span className="api-desc">Health objects hit by this blast.</span> |
| <Link id="m-impacttype" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" impactType"}</code> | <span className="api-desc">Impact type of the hit, explosive by default.</span> |
| <Link id="m-istriggered" /><code>{"private bool isTriggered"}</code> | <span className="api-desc">Set once `Trigger` has run.</span> |
| <Link id="m-layermask" /><code>{"private LayerMask layerMask"}</code> | <span className="api-desc">Layers the overlap sphere checks.</span> |
| <Link id="m-maxdamagerange" /><code>{"private float maxDamageRange"}</code> | <span className="api-desc">Distance within which targets take full damage.</span> |
| <Link id="m-maxdamagerangesquared" /><code>{"private float maxDamageRangeSquared"}</code> | <span className="api-desc">Square of `maxDamageRange`.</span> |
| <Link id="m-moveobjects" /><code>{"private bool moveObjects"}</code> | <span className="api-desc">Inspector toggle that shows `blastForce`; the force is applied whenever it is above zero.</span> |
| <Link id="m-playerdamagemultiplier" /><code>{"private float playerDamageMultiplier"}</code> | <span className="api-desc">Multiplier on health damage dealt to players.</span> |
| <Link id="m-range" /><code>{"private float range"}</code> | <span className="api-desc">Furthest distance anything is affected.</span> |
| <Link id="m-rangesquared" /><code>{"private float rangeSquared"}</code> | <span className="api-desc">Square of `range`.</span> |
| <Link id="m-synceffect" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncEffect"}</code> | <span className="api-desc">Method sync that tells clients to play the effect.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the effect sync.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" data)"}</code> | <span className="api-desc">Works out who gets credit for the damage: the parent pickup's last interactor, or the prefab root if there is no pickup.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the full-damage and maximum ranges.</span> |
| <Link id="m-trigger" /><code>{"void Trigger()"}</code> | <span className="api-desc">Server: overlap-spheres the range, damages matching detectors and health objects once each, applies blast force, plays the effect and syncs it.</span> |
| <Link id="m-geteffect" /><code>{"protected virtual "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" GetEffect(Vector3 position, Quaternion rotation)"}</code> | <span className="api-desc">Spawns the pooled explosion effect at a position; override to change the effect.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-geteffectiveness" /><code>{"private bool GetEffectiveness(Vector3 position, Vector3 origin, out float effectiveness)"}</code> | <span className="api-desc">Gives 1 inside `maxDamageRange`, falling linearly to 0 at `range`; false when out of range.</span> |
| <Link id="m-rootchanged" /><code>{"private void RootChanged("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" newRoot)"}</code> | <span className="api-desc">When crafted into a new root, moves the last player interactor to the new root's pickup and tracks that.</span> |
| <Link id="m-synceffect-2" /><code>{"private void SyncEffect("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">On remote clients (not headless), plays the effect at the explosive's position.</span> |

</details>
