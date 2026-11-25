---
title: "NailSettings"
description: "Per-piece settings for nailing in generic crafting: where the nails go and how hammer hits turn into progress, damage and bend."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NailSettings

A **class** in `Root.Township`, `Alta.Crafting`.

Per-piece settings for nailing in generic crafting: where the nails go and how hammer hits turn into progress, damage and bend.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Documented in** [Crafting](/game-api/game-systems/crafting)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NailSettings()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-damageoverflowmultiplier" /><code>{"float damageOverflowMultiplier"}</code> | How much of a hit's overflow becomes failure damage. |
| <Link id="m-damagesplitperdot" /><code>{"AnimationCurve damageSplitPerDot"}</code> | Curve from hit alignment (dot product) to the share of damage that becomes progress. |
| <Link id="m-deviancemultiplier" /><code>{"float devianceMultiplier"}</code> | Base strength of the bend from off-angle hits. |
| <Link id="m-deviancetodamage" /><code>{"AnimationCurve devianceToDamage"}</code> | Curve from how bent a nail is to how much of each hit becomes failure damage. |
| <Link id="m-maxdamageperhit" /><code>{"float maxDamagePerHit"}</code> | Most progress one hit can give before the rest overflows. |
| <Link id="m-maxdeviance" /><code>{"float maxDeviance"}</code> | Largest bend angle a nail can take, in degrees. |
| <Link id="m-naildefinition" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" nailDefinition"}</code> | Pooled nail prefab. Falls back to the generic default. |
| <Link id="m-nails" /><code><Link to="/game-api/types/alta-crafting/serializedtransform">{"SerializedTransform"}</Link>{"[] nails"}</code> | Local positions and rotations of the nails on the piece. |
| <Link id="m-nailtime" /><code>{"float nailTime"}</code> | Time allowed for nailing, 20 by default. |
| <Link id="m-progresshealth" /><code>{"float progressHealth"}</code> | How much progress a nail needs. Progress from each hit is divided by it. |
| <Link id="m-progresstodeviancemultiplier" /><code>{"AnimationCurve progressToDevianceMultiplier"}</code> | Curve from nail progress to how easily it bends. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculatenaildamage" /><code>{"bool CalculateNailDamage("}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, Vector3 impactDirection, float impactDamage, out float progressDamage, out float failureDamage, out Quaternion additionaDeviance)"}</code> | Works out a hammer hit's progress, failure damage and extra bend for a nail. Returns true if the hit was too hard. |
| <Link id="m-calculatenaildamage-2" /><code>{"bool CalculateNailDamage("}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, Vector3 impactDirection, float impactDamage, float maxDamageMultiplier, float nailHealthMultiplier, out float progressDamage, out float failureDamage, out Quaternion additionaDeviance)"}</code> | Works out a hammer hit's progress, failure damage and extra bend for a nail. Returns true if the hit was too hard. |
| <Link id="m-calculateprogressandoverflow" /><code>{"void CalculateProgressAndOverflow(Vector3 nailDirection, Vector3 impactDirection, float impactDamage, float maxDamageMultiplier, out float progressDamage, out float overflow)"}</code> | Splits a hit into progress by how well it lines up with the nail, and how much it went over the per-hit limit. |
| <Link id="m-getdeviancemultiplier" /><code>{"float GetDevianceMultiplier(float progress)"}</code> | How strongly an off-angle hit bends the nail at a given progress. |
| <Link id="m-getnail" /><code>{"GameObject GetNail(Transform parent)"}</code> | Spawns a non-saved nail model under a parent, using the default nail if none is set. |
| <Link id="m-setupnails" /><code><Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{"[] SetupNails("}<Link to="/game-api/types/alta-crafting/inailable">{"INailable"}</Link>{" piece)"}</code> | Spawns and sets up a pooled nail at each nail position on a piece. |

## Used in

Members of other types that take, return or hold a `NailSettings`:

[`ConfirmationCraftingPart.nailSettings`](/game-api/types/alta-crafting/confirmationcraftingpart#m-nailsettings), [`GenericCraftingPieceDefinition.nailSettings`](/game-api/types/alta-crafting/genericcraftingpiecedefinition#m-nailsettings).
