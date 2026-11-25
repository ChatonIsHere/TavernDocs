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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)

## Values

| Member | What it is |
| --- | --- |
| <Link id="m-blunt" /><code>{"Blunt = 2"}</code> |  |
| <Link id="m-caustic" /><code>{"Caustic = 3"}</code> |  |
| <Link id="m-explosive" /><code>{"Explosive = 5"}</code> |  |
| <Link id="m-pierce" /><code>{"Pierce = 0"}</code> |  |
| <Link id="m-poison" /><code>{"Poison = 4"}</code> |  |
| <Link id="m-slash" /><code>{"Slash = 1"}</code> |  |
| <Link id="m-spiritual" /><code>{"Spiritual = 6"}</code> |  |

## Used in

Members of other types that take, return or hold a `ImpactType`:

[`ArmorDefinition.GetMultiplier`](/game-api/types/alta-items/armordefinition#m-getmultiplier), [`DamageMultiplierCollider.GetMultiplier`](/game-api/types/alta-items/damagemultipliercollider#m-getmultiplier), [`ImpactGenerator.ImpactType`](/game-api/types/alta-items/impactgenerator#m-impacttype), [`ImpactHit.ImpactHit`](/game-api/types/alta-items/impacthit#m-ctor-2), [`ImpactHit.ImpactType`](/game-api/types/alta-items/impacthit#m-impacttype), [`ImpactHitWithTool.ImpactHitWithTool`](/game-api/types/alta-items/impacthitwithtool#m-ctor), [`ImpactorValues.type`](/game-api/types/alta-items/impactorvalues#m-type), [`ImpactorValues.Type`](/game-api/types/alta-items/impactorvalues#m-type-2), [`ImpactTool.GetTriggerHit`](/game-api/types/alta-items/impacttool#m-gettriggerhit), [`ImpactTypeFilter.IsValid`](/game-api/types/alta-items/impacttypefilter#m-isvalid), [`ImpactTypeFilter.types`](/game-api/types/alta-items/impacttypefilter#m-types), [`ParticleImpactor.damageType`](/game-api/types/alta-items/particleimpactor#m-damagetype), [`ParticleImpactor.DamageType`](/game-api/types/alta-items/particleimpactor#m-damagetype-2), [`TriggerImpactDetectorBase.impactType`](/game-api/types/alta-items/triggerimpactdetectorbase#m-impacttype), [`DestroyableStaticObject.impactTypeMultipliers`](/game-api/types/alta-networking/destroyablestaticobject#m-impacttypemultipliers), [`AOEDamage.damageType`](/game-api/types/global-a-b/aoedamage#m-damagetype), [`AttackTypeMultiplier.type`](/game-api/types/global-a-b/attacktypemultiplier#m-type), [`AttackTypeMultiplier.Type`](/game-api/types/global-a-b/attacktypemultiplier#m-type-2), [`DamageDebugDisplay.AddAttack`](/game-api/types/global-c-d/damagedebugdisplay#m-addattack), [`Explosive.impactType`](/game-api/types/global-e-h/explosive#m-impacttype), [`HealthObject.impactTypeMultipliers`](/game-api/types/global-e-h/healthobject#m-impacttypemultipliers), [`SerializedImpactHit.impactType`](/game-api/types/global-s/serializedimpacthit#m-impacttype), [`TargetBasedSkill.ClientHitInput.ImpactType`](/game-api/types/global-t-x/targetbasedskill-clienthitinput#m-impacttype).
