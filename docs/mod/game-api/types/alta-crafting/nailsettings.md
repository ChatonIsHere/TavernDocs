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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Documented in** [Crafting](/mod/game-api/game-systems/crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NailSettings()"}</code> | <span className="api-desc">Creates a `NailSettings` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-damageoverflowmultiplier" /><code>{"float damageOverflowMultiplier"}</code> | <span className="api-desc">How much of a hit's overflow becomes failure damage.</span> |
| <Link id="m-damagesplitperdot" /><code>{"AnimationCurve damageSplitPerDot"}</code> | <span className="api-desc">Curve from hit alignment (dot product) to the share of damage that becomes progress.</span> |
| <Link id="m-deviancemultiplier" /><code>{"float devianceMultiplier"}</code> | <span className="api-desc">Base strength of the bend from off-angle hits.</span> |
| <Link id="m-deviancetodamage" /><code>{"AnimationCurve devianceToDamage"}</code> | <span className="api-desc">Curve from how bent a nail is to how much of each hit becomes failure damage.</span> |
| <Link id="m-maxdamageperhit" /><code>{"float maxDamagePerHit"}</code> | <span className="api-desc">Most progress one hit can give before the rest overflows.</span> |
| <Link id="m-maxdeviance" /><code>{"float maxDeviance"}</code> | <span className="api-desc">Largest bend angle a nail can take, in degrees.</span> |
| <Link id="m-naildefinition" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" nailDefinition"}</code> | <span className="api-desc">Pooled nail prefab. Falls back to the generic default.</span> |
| <Link id="m-nails" /><code><Link to="/mod/game-api/types/alta-crafting/serializedtransform">{"SerializedTransform"}</Link>{"[] nails"}</code> | <span className="api-desc">Local positions and rotations of the nails on the piece.</span> |
| <Link id="m-nailtime" /><code>{"float nailTime"}</code> | <span className="api-desc">Time allowed for nailing, 20 by default.</span> |
| <Link id="m-progresshealth" /><code>{"float progressHealth"}</code> | <span className="api-desc">How much progress a nail needs. Progress from each hit is divided by it.</span> |
| <Link id="m-progresstodeviancemultiplier" /><code>{"AnimationCurve progressToDevianceMultiplier"}</code> | <span className="api-desc">Curve from nail progress to how easily it bends.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculatenaildamage" /><code>{"bool CalculateNailDamage("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, Vector3 impactDirection, float impactDamage, out float progressDamage, out float failureDamage, out Quaternion additionaDeviance)"}</code> | <span className="api-desc">Works out a hammer hit's progress, failure damage and extra bend for a nail. Returns true if the hit was too hard.</span> |
| <Link id="m-calculatenaildamage-2" /><code>{"bool CalculateNailDamage("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, Vector3 impactDirection, float impactDamage, float maxDamageMultiplier, float nailHealthMultiplier, out float progressDamage, out float failureDamage, out Quaternion additionaDeviance)"}</code> | <span className="api-desc">Works out a hammer hit's progress, failure damage and extra bend for a nail. Returns true if the hit was too hard.</span> |
| <Link id="m-calculateprogressandoverflow" /><code>{"void CalculateProgressAndOverflow(Vector3 nailDirection, Vector3 impactDirection, float impactDamage, float maxDamageMultiplier, out float progressDamage, out float overflow)"}</code> | <span className="api-desc">Splits a hit into progress by how well it lines up with the nail, and how much it went over the per-hit limit.</span> |
| <Link id="m-getdeviancemultiplier" /><code>{"float GetDevianceMultiplier(float progress)"}</code> | <span className="api-desc">How strongly an off-angle hit bends the nail at a given progress.</span> |
| <Link id="m-getnail" /><code>{"GameObject GetNail(Transform parent)"}</code> | <span className="api-desc">Spawns a non-saved nail model under a parent, using the default nail if none is set.</span> |
| <Link id="m-setupnails" /><code><Link to="/mod/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{"[] SetupNails("}<Link to="/mod/game-api/types/alta-crafting/inailable">{"INailable"}</Link>{" piece)"}</code> | <span className="api-desc">Spawns and sets up a pooled nail at each nail position on a piece.</span> |

## Used in

Members of other types that take, return or hold a `NailSettings`:

<div className="api-used-in">

[`ConfirmationCraftingPart.nailSettings`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-nailsettings), [`GenericCraftingPieceDefinition.nailSettings`](/mod/game-api/types/alta-crafting/genericcraftingpiecedefinition#m-nailsettings).

</div>
