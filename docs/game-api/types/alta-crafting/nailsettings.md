---
title: "NailSettings"
description: "class NailSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NailSettings

A **class** in `Root.Township`, `Alta.Crafting`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Documented in** [Crafting](/game-api/game-systems/crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NailSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-damageoverflowmultiplier" /><code>{"float damageOverflowMultiplier"}</code> |  |
| <Link id="m-damagesplitperdot" /><code>{"AnimationCurve damageSplitPerDot"}</code> |  |
| <Link id="m-deviancemultiplier" /><code>{"float devianceMultiplier"}</code> |  |
| <Link id="m-deviancetodamage" /><code>{"AnimationCurve devianceToDamage"}</code> |  |
| <Link id="m-maxdamageperhit" /><code>{"float maxDamagePerHit"}</code> |  |
| <Link id="m-maxdeviance" /><code>{"float maxDeviance"}</code> |  |
| <Link id="m-naildefinition" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" nailDefinition"}</code> |  |
| <Link id="m-nails" /><code><Link to="/game-api/types/alta-crafting/serializedtransform">{"SerializedTransform"}</Link>{"[] nails"}</code> |  |
| <Link id="m-nailtime" /><code>{"float nailTime"}</code> |  |
| <Link id="m-progresshealth" /><code>{"float progressHealth"}</code> |  |
| <Link id="m-progresstodeviancemultiplier" /><code>{"AnimationCurve progressToDevianceMultiplier"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculatenaildamage" /><code>{"bool CalculateNailDamage("}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, Vector3 impactDirection, float impactDamage, out float progressDamage, out float failureDamage, out Quaternion additionaDeviance)"}</code> |  |
| <Link id="m-calculatenaildamage-2" /><code>{"bool CalculateNailDamage("}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, Vector3 impactDirection, float impactDamage, float maxDamageMultiplier, float nailHealthMultiplier, out float progressDamage, out float failureDamage, out Quaternion additionaDeviance)"}</code> |  |
| <Link id="m-calculateprogressandoverflow" /><code>{"void CalculateProgressAndOverflow(Vector3 nailDirection, Vector3 impactDirection, float impactDamage, float maxDamageMultiplier, out float progressDamage, out float overflow)"}</code> |  |
| <Link id="m-getdeviancemultiplier" /><code>{"float GetDevianceMultiplier(float progress)"}</code> |  |
| <Link id="m-getnail" /><code>{"GameObject GetNail(Transform parent)"}</code> |  |
| <Link id="m-setupnails" /><code><Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{"[] SetupNails("}<Link to="/game-api/types/alta-crafting/inailable">{"INailable"}</Link>{" piece)"}</code> |  |

## Used in

Members of other types that take, return or hold a `NailSettings`:

[`ConfirmationCraftingPart.nailSettings`](/game-api/types/alta-crafting/confirmationcraftingpart#m-nailsettings), [`GenericCraftingPieceDefinition.nailSettings`](/game-api/types/alta-crafting/genericcraftingpiecedefinition#m-nailsettings).
