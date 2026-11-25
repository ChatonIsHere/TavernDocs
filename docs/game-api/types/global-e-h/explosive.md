---
title: "Explosive"
description: "class Explosive in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Explosive

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`ColoredExplosive`](/game-api/types/global-c-d/coloredexplosive)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Explosive()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-basepickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" basePickup"}</code> |  |
| <Link id="m-blastforce" /><code>{"private float blastForce"}</code> |  |
| <Link id="m-btntrigger" /><code>{"private bool btnTrigger"}</code> |  |
| <Link id="m-channels" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] channels"}</code> |  |
| <Link id="m-crippledamage" /><code>{"private float crippleDamage"}</code> |  |
| <Link id="m-damagefalloff" /><code>{"private float damageFallOff"}</code> |  |
| <Link id="m-detectors" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{"> detectors"}</code> |  |
| <Link id="m-effectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinitionbase">{"PooledObjectDefinitionBase"}</Link>{" effectDefinition"}</code> |  |
| <Link id="m-getwielder" /><code>{"private "}<Link to="/game-api/types/global-e-h/evaluatewielder">{"EvaluateWielder"}</Link>{" getWielder"}</code> |  |
| <Link id="m-hardnesslevel" /><code>{"private int hardnessLevel"}</code> |  |
| <Link id="m-healthdamage" /><code>{"private float healthDamage"}</code> |  |
| <Link id="m-healths" /><code>{"private HashSet<"}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{"> healths"}</code> |  |
| <Link id="m-impacttype" /><code>{"private "}<Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" impactType"}</code> |  |
| <Link id="m-istriggered" /><code>{"private bool isTriggered"}</code> |  |
| <Link id="m-layermask" /><code>{"private LayerMask layerMask"}</code> |  |
| <Link id="m-maxdamagerange" /><code>{"private float maxDamageRange"}</code> |  |
| <Link id="m-maxdamagerangesquared" /><code>{"private float maxDamageRangeSquared"}</code> |  |
| <Link id="m-moveobjects" /><code>{"private bool moveObjects"}</code> |  |
| <Link id="m-playerdamagemultiplier" /><code>{"private float playerDamageMultiplier"}</code> |  |
| <Link id="m-range" /><code>{"private float range"}</code> |  |
| <Link id="m-rangesquared" /><code>{"private float rangeSquared"}</code> |  |
| <Link id="m-synceffect" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncEffect"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" data)"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-trigger" /><code>{"void Trigger()"}</code> |  |
| <Link id="m-geteffect" /><code>{"protected virtual "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" GetEffect(Vector3 position, Quaternion rotation)"}</code> |  |
| <Link id="m-geteffectiveness" /><code>{"private bool GetEffectiveness(Vector3 position, Vector3 origin, out float effectiveness)"}</code> |  |
| <Link id="m-rootchanged" /><code>{"private void RootChanged("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" newRoot)"}</code> |  |
| <Link id="m-synceffect-2" /><code>{"private void SyncEffect("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
