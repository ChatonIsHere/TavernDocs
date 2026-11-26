---
title: "ImpactType"
description: "Kind of damage an impact does: pierce, slash, blunt, caustic, poison, explosive or spiritual."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactType

An **enum** in `Root.Township`, `Alta.Impact`.

Kind of damage an impact does: pierce, slash, blunt, caustic, poison, explosive or spiritual.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)

## Values

| Member |
| --- |
| <Link id="m-blunt" /><code>{"Blunt = 2"}</code> |
| <Link id="m-caustic" /><code>{"Caustic = 3"}</code> |
| <Link id="m-explosive" /><code>{"Explosive = 5"}</code> |
| <Link id="m-pierce" /><code>{"Pierce = 0"}</code> |
| <Link id="m-poison" /><code>{"Poison = 4"}</code> |
| <Link id="m-slash" /><code>{"Slash = 1"}</code> |
| <Link id="m-spiritual" /><code>{"Spiritual = 6"}</code> |

## Used in

Members of other types that take, return or hold a `ImpactType`:

[`ArmorDefinition.GetMultiplier`](/mod/game-api/types/alta-items/armordefinition#m-getmultiplier), [`DamageMultiplierCollider.GetMultiplier`](/mod/game-api/types/alta-items/damagemultipliercollider#m-getmultiplier), [`ImpactGenerator.ImpactType`](/mod/game-api/types/alta-items/impactgenerator#m-impacttype), [`ImpactHit.ImpactHit`](/mod/game-api/types/alta-items/impacthit#m-ctor-2), [`ImpactHit.ImpactType`](/mod/game-api/types/alta-items/impacthit#m-impacttype), [`ImpactHitWithTool.ImpactHitWithTool`](/mod/game-api/types/alta-items/impacthitwithtool#m-ctor), [`ImpactorValues.type`](/mod/game-api/types/alta-items/impactorvalues#m-type), [`ImpactorValues.Type`](/mod/game-api/types/alta-items/impactorvalues#m-type-2), [`ImpactTool.GetTriggerHit`](/mod/game-api/types/alta-items/impacttool#m-gettriggerhit), [`ImpactTypeFilter.IsValid`](/mod/game-api/types/alta-items/impacttypefilter#m-isvalid), [`ImpactTypeFilter.types`](/mod/game-api/types/alta-items/impacttypefilter#m-types), [`ParticleImpactor.damageType`](/mod/game-api/types/alta-items/particleimpactor#m-damagetype), [`ParticleImpactor.DamageType`](/mod/game-api/types/alta-items/particleimpactor#m-damagetype-2), [`TriggerImpactDetectorBase.impactType`](/mod/game-api/types/alta-items/triggerimpactdetectorbase#m-impacttype), [`DestroyableStaticObject.impactTypeMultipliers`](/mod/game-api/types/alta-networking/destroyablestaticobject#m-impacttypemultipliers), [`AOEDamage.damageType`](/mod/game-api/types/global-a-b/aoedamage#m-damagetype), [`AttackTypeMultiplier.type`](/mod/game-api/types/global-a-b/attacktypemultiplier#m-type), [`AttackTypeMultiplier.Type`](/mod/game-api/types/global-a-b/attacktypemultiplier#m-type-2), [`DamageDebugDisplay.AddAttack`](/mod/game-api/types/global-c-d/damagedebugdisplay#m-addattack), [`Explosive.impactType`](/mod/game-api/types/global-e-h/explosive#m-impacttype), [`HealthObject.impactTypeMultipliers`](/mod/game-api/types/global-e-h/healthobject#m-impacttypemultipliers), [`SerializedImpactHit.impactType`](/mod/game-api/types/global-s/serializedimpacthit#m-impacttype), [`TargetBasedSkill.ClientHitInput.ImpactType`](/mod/game-api/types/global-t-x/targetbasedskill-clienthitinput#m-impacttype).
