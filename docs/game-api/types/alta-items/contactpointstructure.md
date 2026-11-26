---
title: "ContactPointStructure"
description: "A copy of one collision contact (point, normal, colliders, separation) plus the impact detector that saw it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ContactPointStructure

A **struct** in `Root.Township`, `Alta.Impact`.

A copy of one collision contact (point, normal, colliders, separation) plus the impact detector that saw it. Passed around the impact system.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ContactPointStructure(Vector3 normal, Vector3 point, Collider thisCollider, Collider otherCollider, float separation, "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector = null)"}</code> |
| <Link id="m-ctor-2" /><code>{"ContactPointStructure(ContactPoint contactPoint, "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector = null)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-detector" /><code><Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" Detector { get; private set; }"}</code> | The impact detector that recorded the contact, or null. |
| <Link id="m-normal" /><code>{"Vector3 Normal { get; private set; }"}</code> | Contact normal. |
| <Link id="m-othercollider" /><code>{"Collider OtherCollider { get; private set; }"}</code> | The other collider in the contact. |
| <Link id="m-point" /><code>{"Vector3 Point { get; private set; }"}</code> | Contact point in world space. |
| <Link id="m-separation" /><code>{"float Separation { get; private set; }"}</code> | Distance between the colliders at the contact. |
| <Link id="m-thiscollider" /><code>{"Collider ThisCollider { get; private set; }"}</code> | This side's collider. |

## Used in

Members of other types that take, return or hold a `ContactPointStructure`:

[`ChiselingFilterSettings.CheckFilter`](/game-api/types/alta-crafting/chiselingfiltersettings#m-checkfilter), [`ChiselingFilterSettings.GetBestChiselingTool`](/game-api/types/alta-crafting/chiselingfiltersettings#m-getbestchiselingtool), [`ColliderModifierSettings.IsDamaging`](/game-api/types/alta-items/collidermodifiersettings#m-isdamaging), [`ColliderModifierSettings.ModifyHit`](/game-api/types/alta-items/collidermodifiersettings#m-modifyhit), [`CutableObject.HitEffect`](/game-api/types/alta-items/cutableobject#m-hiteffect), [`DamageMultiplierCollider.IsDamaging`](/game-api/types/alta-items/damagemultipliercollider#m-isdamaging), [`DamageMultiplierCollider.ModifyHit`](/game-api/types/alta-items/damagemultipliercollider#m-modifyhit), [`DelayedImpactResolver.ImpactDetectorHit.contactStructures`](/game-api/types/alta-items/delayedimpactresolver-impactdetectorhit#m-contactstructures), [`DirectionalMultiplierCollider.IsDamaging`](/game-api/types/alta-items/directionalmultipliercollider#m-isdamaging), [`DirectionalMultiplierCollider.ModifyHit`](/game-api/types/alta-items/directionalmultipliercollider#m-modifyhit), [`FixedImpactor.GetFollowAndCurrent`](/game-api/types/alta-items/fixedimpactor#m-getfollowandcurrent), [`ImpactDetectorColliderModifier.IsDamaging`](/game-api/types/alta-items/impactdetectorcollidermodifier#m-isdamaging), [`ImpactDetectorColliderModifier.ModifyHit`](/game-api/types/alta-items/impactdetectorcollidermodifier#m-modifyhit), [`ImpactGenerator.GetFollowAndCurrent`](/game-api/types/alta-items/impactgenerator#m-getfollowandcurrent), [`ImpactHit.ContactStructure`](/game-api/types/alta-items/impacthit#m-contactstructure), [`ImpactHitWithTool.ImpactHitWithTool`](/game-api/types/alta-items/impacthitwithtool#m-ctor), [`ImpactHitWithTool.ImpactPoint`](/game-api/types/alta-items/impacthitwithtool#m-impactpoint), [`Impactor.GetFollowAndCurrent`](/game-api/types/alta-items/impactor#m-getfollowandcurrent), [`ImpactorAreaFilter<T>.CheckFilter`](/game-api/types/alta-items/impactorareafilter-t#m-checkfilter), [`ImpactorFilter.CheckFilter`](/game-api/types/alta-items/impactorfilter#m-checkfilter), [`ImpactTool.GenerateHit`](/game-api/types/alta-items/impacttool#m-generatehit), [`ImpactTool.GetFullTriggerHit`](/game-api/types/alta-items/impacttool#m-getfulltriggerhit), [`ImpactTool.GetTriggerHit`](/game-api/types/alta-items/impacttool#m-gettriggerhit), [`ImpactTool.singleContact`](/game-api/types/alta-items/impacttool#m-singlecontact), [`NonDamagingCollider.IsDamaging`](/game-api/types/alta-items/nondamagingcollider#m-isdamaging), [`NonDamagingCollider.ModifyHit`](/game-api/types/alta-items/nondamagingcollider#m-modifyhit), [`TriggerImpactDetectorBase.HitEffect`](/game-api/types/alta-items/triggerimpactdetectorbase#m-hiteffect), [`Embeddable.GetBestHitAngle`](/game-api/types/global-e-h/embeddable#m-getbesthitangle), [`Embeddable.HandleStruckCollider`](/game-api/types/global-e-h/embeddable#m-handlestruckcollider), [`Embeddable.IsValidSurface`](/game-api/types/global-e-h/embeddable#m-isvalidsurface).
