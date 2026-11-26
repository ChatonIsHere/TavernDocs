---
title: "MushroomCritter"
description: "Tuning values for a schmeechee (mushroom critter): floor checks, push and turn forces, flipping and planting."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MushroomCritter

A **class** in `Root.Township`, no namespace.

Tuning values for a schmeechee (mushroom critter): floor checks, push and turn forces, flipping and planting. A component read by `Schmeechee` and its actions.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MushroomCritter()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-embedoffset" /><code>{"AnimationCurve embedOffset"}</code> | Curve of the model's vertical offset while planting; its last key is how long planting takes. |
| <Link id="m-floor" /><code>{"LayerMask floor"}</code> | Layers counted as floor. |
| <Link id="m-floorcheckdistance" /><code>{"float floorCheckDistance"}</code> | Length of the downward ground check ray. |
| <Link id="m-floorcheckoffset" /><code>{"float floorCheckOffset"}</code> | Offset along up for where the ground check starts. |
| <Link id="m-force" /><code>{"float force"}</code> | Forward push while playing or fleeing. |
| <Link id="m-headcheckdistance" /><code>{"float headCheckDistance"}</code> | Length of the ray from the head to check for being upside down. |
| <Link id="m-headcheckdownalignment" /><code>{"float headCheckDownAlignment"}</code> | How far the critter must face down (dot with down) before it can count as upside down. |
| <Link id="m-headcheckoffset" /><code>{"float headCheckOffset"}</code> | Offset for where the head check ray starts. |
| <Link id="m-headflipforcemax" /><code>{"float headFlipForceMax"}</code> | Maximum impulse used to flip back over. |
| <Link id="m-headflipforcemin" /><code>{"float headFlipForceMin"}</code> | Minimum impulse used to flip back over. |
| <Link id="m-headfliptimermax" /><code>{"float headFlipTimerMax"}</code> | Maximum wait before a flip attempt. |
| <Link id="m-headfliptimermin" /><code>{"float headFlipTimerMin"}</code> | Minimum wait before a flip attempt. |
| <Link id="m-headfliptorquemax" /><code>{"float headFlipTorqueMax"}</code> | Maximum torque impulse used to flip back over. |
| <Link id="m-headfliptorquemin" /><code>{"float headFlipTorqueMin"}</code> | Minimum torque impulse used to flip back over. |
| <Link id="m-hoverforce" /><code>{"float hoverForce"}</code> | Upward force added while playing or fleeing. |
| <Link id="m-kinematictime" /><code>{"float kinematicTime"}</code> | Seconds into planting before the rigidbody goes kinematic. |
| <Link id="m-maximumappliedturnforce" /><code>{"float maximumAppliedTurnForce"}</code> | Largest turn torque applied in one step. |
| <Link id="m-maximumstoredturnforce" /><code>{"float maximumStoredTurnForce"}</code> | Largest turn force that can build up. |
| <Link id="m-maxturnvelocity" /><code>{"float maxTurnVelocity"}</code> | Turn speed limit setting (default 15). Not read anywhere in this code. |
| <Link id="m-maxveloctiy" /><code>{"float maxVeloctiy"}</code> | Speed cap while playing or fleeing. |
| <Link id="m-popvelocity" /><code>{"float popVelocity"}</code> | Upward speed it pops out of the ground with when planting ends. |
| <Link id="m-turnjerkpersec" /><code>{"float turnJerkPerSec"}</code> | How fast turn force builds up per second when steering. |
| <Link id="m-uprighttorquelerp" /><code>{"float uprightTorqueLerp"}</code> | Upright torque blend setting (default 0.5). Not read anywhere in this code. |
| <Link id="m-uprighttorquemultiplier" /><code>{"float uprightTorqueMultiplier"}</code> | Strength of the torque that keeps it upright. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hit" /><code><Link to="/game-api/types/global-m-o/mushroomcritter">{"MushroomCritter"}</Link>{" Hit { get; set; }"}</code> | The last other mushroom critter this one bumped into. |

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-oncollisionenter" /><code>{"private void OnCollisionEnter(Collision collision)"}</code> | Records another `MushroomCritter` it bumps into as `Hit`. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws the head check line used for flip detection. |

</details>

## Used in

Members of other types that take, return or hold a `MushroomCritter`:

[`Schmeechee.settings`](/game-api/types/alta-intelligence/schmeechee#m-settings), [`Schmeechee.Settings`](/game-api/types/alta-intelligence/schmeechee#m-settings-2).
