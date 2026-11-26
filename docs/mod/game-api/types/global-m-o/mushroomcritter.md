---
title: "MushroomCritter"
description: "Tuning values for a schmeechee (mushroom critter): floor checks, push and turn forces, flipping and planting."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MushroomCritter

A **class** in `Root.Township`, the global namespace.

Tuning values for a schmeechee (mushroom critter): floor checks, push and turn forces, flipping and planting. A component read by `Schmeechee` and its actions.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MushroomCritter()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-embedoffset" /><code>{"AnimationCurve embedOffset"}</code> | <span className="api-desc">Curve of the model's vertical offset while planting; its last key is how long planting takes.</span> |
| <Link id="m-floor" /><code>{"LayerMask floor"}</code> | <span className="api-desc">Layers counted as floor.</span> |
| <Link id="m-floorcheckdistance" /><code>{"float floorCheckDistance"}</code> | <span className="api-desc">Length of the downward ground check ray.</span> |
| <Link id="m-floorcheckoffset" /><code>{"float floorCheckOffset"}</code> | <span className="api-desc">Offset along up for where the ground check starts.</span> |
| <Link id="m-force" /><code>{"float force"}</code> | <span className="api-desc">Forward push while playing or fleeing.</span> |
| <Link id="m-headcheckdistance" /><code>{"float headCheckDistance"}</code> | <span className="api-desc">Length of the ray from the head to check for being upside down.</span> |
| <Link id="m-headcheckdownalignment" /><code>{"float headCheckDownAlignment"}</code> | <span className="api-desc">How far the critter must face down (dot with down) before it can count as upside down.</span> |
| <Link id="m-headcheckoffset" /><code>{"float headCheckOffset"}</code> | <span className="api-desc">Offset for where the head check ray starts.</span> |
| <Link id="m-headflipforcemax" /><code>{"float headFlipForceMax"}</code> | <span className="api-desc">Maximum impulse used to flip back over.</span> |
| <Link id="m-headflipforcemin" /><code>{"float headFlipForceMin"}</code> | <span className="api-desc">Minimum impulse used to flip back over.</span> |
| <Link id="m-headfliptimermax" /><code>{"float headFlipTimerMax"}</code> | <span className="api-desc">Maximum wait before a flip attempt.</span> |
| <Link id="m-headfliptimermin" /><code>{"float headFlipTimerMin"}</code> | <span className="api-desc">Minimum wait before a flip attempt.</span> |
| <Link id="m-headfliptorquemax" /><code>{"float headFlipTorqueMax"}</code> | <span className="api-desc">Maximum torque impulse used to flip back over.</span> |
| <Link id="m-headfliptorquemin" /><code>{"float headFlipTorqueMin"}</code> | <span className="api-desc">Minimum torque impulse used to flip back over.</span> |
| <Link id="m-hoverforce" /><code>{"float hoverForce"}</code> | <span className="api-desc">Upward force added while playing or fleeing.</span> |
| <Link id="m-kinematictime" /><code>{"float kinematicTime"}</code> | <span className="api-desc">Seconds into planting before the rigidbody goes kinematic.</span> |
| <Link id="m-maximumappliedturnforce" /><code>{"float maximumAppliedTurnForce"}</code> | <span className="api-desc">Largest turn torque applied in one step.</span> |
| <Link id="m-maximumstoredturnforce" /><code>{"float maximumStoredTurnForce"}</code> | <span className="api-desc">Largest turn force that can build up.</span> |
| <Link id="m-maxturnvelocity" /><code>{"float maxTurnVelocity"}</code> | <span className="api-desc">Turn speed limit setting (default 15). Not read anywhere in this code.</span> |
| <Link id="m-maxveloctiy" /><code>{"float maxVeloctiy"}</code> | <span className="api-desc">Speed cap while playing or fleeing.</span> |
| <Link id="m-popvelocity" /><code>{"float popVelocity"}</code> | <span className="api-desc">Upward speed it pops out of the ground with when planting ends.</span> |
| <Link id="m-turnjerkpersec" /><code>{"float turnJerkPerSec"}</code> | <span className="api-desc">How fast turn force builds up per second when steering.</span> |
| <Link id="m-uprighttorquelerp" /><code>{"float uprightTorqueLerp"}</code> | <span className="api-desc">Upright torque blend setting (default 0.5). Not read anywhere in this code.</span> |
| <Link id="m-uprighttorquemultiplier" /><code>{"float uprightTorqueMultiplier"}</code> | <span className="api-desc">Strength of the torque that keeps it upright.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hit" /><code><Link to="/mod/game-api/types/global-m-o/mushroomcritter">{"MushroomCritter"}</Link>{" Hit { get; set; }"}</code> | <span className="api-desc">The last other mushroom critter this one bumped into.</span> |

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-oncollisionenter" /><code>{"private void OnCollisionEnter(Collision collision)"}</code> | <span className="api-desc">Records another `MushroomCritter` it bumps into as `Hit`.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws the head check line used for flip detection.</span> |

</details>

## Used in

Members of other types that take, return or hold a `MushroomCritter`:

<div className="api-used-in">

[`Schmeechee.settings`](/mod/game-api/types/alta-intelligence/schmeechee#m-settings), [`Schmeechee.Settings`](/mod/game-api/types/alta-intelligence/schmeechee#m-settings-2).

</div>
