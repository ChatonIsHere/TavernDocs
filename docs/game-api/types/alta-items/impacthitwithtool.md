---
title: "ImpactHitWithTool"
description: "An ImpactHit made by an ImpactTool (a weapon or tool swing, or a thrown or dropped item)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactHitWithTool

A **class** in `Root.Township`, `Alta.Impact`.

An `ImpactHit` made by an `ImpactTool` (a weapon or tool swing, or a thrown or dropped item). Adds the tool, the impactor, the contact point and who was holding it.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`ImpactHit`](/game-api/types/alta-items/impacthit)
- **Derived types** [`ImpactHitEvent`](/game-api/types/alta-items/impacthitevent), [`ImpactHitUnityevent`](/game-api/types/alta-items/impacthitunityevent)
- **Documented in** [Impacts and hit detection](/game-api/items/impacts#impacthit-and-impacthitwithtool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactHitWithTool("}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool, "}<Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" impactType, "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector, "}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contactPoint, float baseHealthDamage, float baseCrippleDamage, float multipliers, float effectiveness)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"ImpactHitWithTool("}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool, "}<Link to="/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{" impactor, "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector, float multipliers, float effectiveness, "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" channel, Vector3 point, Vector3 normal)"}</code> |  |
| <Link id="m-ctor-3" /><code>{"ImpactHitWithTool("}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool, "}<Link to="/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{" impactor, "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector, "}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contactPoint, Vector3 start, Vector3 end, float multipliers, float effectiveness, "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" channel)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-distance" /><code>{"float Distance { get; private set; }"}</code> | Length of the swept path from `Start` to `End`. 1 for a plain collision hit, 0 for a point hit. |
| <Link id="m-durabilitylostmultiplier" /><code>{"float DurabilityLostMultiplier { get; set; }"}</code> | Multiplier on durability the tool loses from this hit, 1 by default. |
| <Link id="m-end" /><code>{"Vector3 End { get; private set; }"}</code> | Where the impactor's swept path ended. |
| <Link id="m-firstchannel" /><code><Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" FirstChannel { get; private set; }"}</code> | The impact channel the hit came through, or null for plain collision hits. |
| <Link id="m-hittingplayer" /><code><Link to="/game-api/types/global-p/player">{"Player"}</Link>{" HittingPlayer { get; }"}</code> | The player responsible: the wielder, else the tool's owner. Null if neither. |
| <Link id="m-impactor" /><code><Link to="/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{" Impactor { get; private set; }"}</code> | The `ImpactGenerator` on the tool that made the hit, or null for plain collision hits. |
| <Link id="m-impactpoint" /><code><Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" ImpactPoint { get; private set; }"}</code> | The contact point (point, normal, colliders) of the hit. |
| <Link id="m-normal" /><code>{"override Vector3 Normal { get; }"}</code> | Surface normal at the contact point. |
| <Link id="m-point" /><code>{"override Vector3 Point { get; }"}</code> | World position of the contact point. |
| <Link id="m-start" /><code>{"Vector3 Start { get; private set; }"}</code> | Where the impactor's swept path started. |
| <Link id="m-tool" /><code><Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" Tool { get; private set; }"}</code> | The `ImpactTool` that made the hit. |
| <Link id="m-wasbyplayer" /><code>{"bool WasByPlayer { get; }"}</code> | True when the tool had a player wielder or owner when the hit was made (not set for plain collision hits). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-hit" /><code>{"void Hit()"}</code> | Runs the hit: tells the impactor and tool, then raises `ImpactDetector.OnToolHit`. |

## Used in

Members of other types that take, return or hold a `ImpactHitWithTool`:

[`AfkTimer.ResetWithHit`](/game-api/types/global-a-b/afktimer#m-resetwithhit), [`ConfirmationCraftingPart.SyncHit`](/game-api/types/alta-crafting/confirmationcraftingpart#m-synchit), [`ConfirmationCraftingPart.ClientSideNailHitSync.ClientSideNailHitSync`](/game-api/types/alta-crafting/confirmationcraftingpart-clientsidenailhitsync#m-ctor), [`GenericCraftingNail.IcClientSideImpact`](/game-api/types/alta-crafting/genericcraftingnail#m-icclientsideimpact), [`GenericCraftingPiece.SyncHit`](/game-api/types/alta-crafting/genericcraftingpiece#m-synchit), [`GenericCraftingStation.RequestClientNailHit`](/game-api/types/alta-crafting/genericcraftingstation#m-requestclientnailhit), [`GenericCraftingStation.ClientSideNailHitSync.ClientSideNailHitSync`](/game-api/types/alta-crafting/genericcraftingstation-clientsidenailhitsync#m-ctor), [`INailable.SyncHit`](/game-api/types/alta-crafting/inailable#m-synchit), [`QuickDrawApplication.Proc`](/game-api/types/alta-crafting/quickdrawapplication#m-proc), [`QuickDrawApplication.ValidateHit`](/game-api/types/alta-crafting/quickdrawapplication#m-validatehit), [`BlockedTrigger.Blocked`](/game-api/types/alta-items/blockedtrigger#m-blocked), [`ColliderModifierSettings.ModifyHit`](/game-api/types/alta-items/collidermodifiersettings#m-modifyhit), [`ContactProjectile.OnHit`](/game-api/types/alta-items/contactprojectile#m-onhit), [`DamageMultiplierCollider.ModifyHit`](/game-api/types/alta-items/damagemultipliercollider#m-modifyhit), [`DelayedImpactResolver.ProcessImmediate`](/game-api/types/alta-items/delayedimpactresolver#m-processimmediate), [`DelayedImpactResolver.ImpactDetectorHit.Process`](/game-api/types/alta-items/delayedimpactresolver-impactdetectorhit#m-process), [`DirectionalMultiplierCollider.ModifyHit`](/game-api/types/alta-items/directionalmultipliercollider#m-modifyhit), [`EmbeddableSurface.CheckBreak`](/game-api/types/alta-items/embeddablesurface#m-checkbreak), [`HitModifierEffect.PlayEffects`](/game-api/types/alta-items/hitmodifiereffect#m-playeffects), [`ImpactDetector.IsLocalPlayerBeingHit`](/game-api/types/alta-items/impactdetector#m-islocalplayerbeinghit), [`ImpactDetector.IsLocalPlayerHittingNonPlayer`](/game-api/types/alta-items/impactdetector#m-islocalplayerhittingnonplayer), [`ImpactDetector.OnToolHit`](/game-api/types/alta-items/impactdetector#m-ontoolhit), [`ImpactDetector.RenderDamagePopup`](/game-api/types/alta-items/impactdetector#m-renderdamagepopup), [`ImpactDetector.RunPlayerEvents`](/game-api/types/alta-items/impactdetector#m-runplayerevents), [`ImpactDetector.UpdateDebugDamageDisplayer`](/game-api/types/alta-items/impactdetector#m-updatedebugdamagedisplayer), [`ImpactDetector.ImpactSyncArguments.ImpactSyncArguments`](/game-api/types/alta-items/impactdetector-impactsyncarguments#m-ctor), [`ImpactDetectorColliderModifier.ModifyHit`](/game-api/types/alta-items/impactdetectorcollidermodifier#m-modifyhit), [`ImpactGenerator.HitImpactDetector`](/game-api/types/alta-items/impactgenerator#m-hitimpactdetector), [`ImpactGenerator.OnHittingImpactDetector`](/game-api/types/alta-items/impactgenerator#m-onhittingimpactdetector), [`ImpactModifier.ModifyHit`](/game-api/types/alta-items/impactmodifier#m-modifyhit), [`ImpactModifier.OnModifiedHit`](/game-api/types/alta-items/impactmodifier#m-onmodifiedhit), [`ImpactModifierComponent.ModifyHit`](/game-api/types/alta-items/impactmodifiercomponent#m-modifyhit), [`ImpactModifierMultiplier.ModifyHit`](/game-api/types/alta-items/impactmodifiermultiplier#m-modifyhit), [`ImpactModifierStatAffect.ModifyHit`](/game-api/types/alta-items/impactmodifierstataffect#m-modifyhit), [`ImpactTool.GenerateHit`](/game-api/types/alta-items/impacttool#m-generatehit), [`ImpactTool.GenerateImpactOnDetector`](/game-api/types/alta-items/impacttool#m-generateimpactondetector), [`ImpactTool.GetFullTriggerHit`](/game-api/types/alta-items/impacttool#m-getfulltriggerhit), [`ImpactTool.Hit`](/game-api/types/alta-items/impacttool#m-hit-2), [`ImpactTool.HitImpactDetector`](/game-api/types/alta-items/impacttool#m-hitimpactdetector), [`ImpactTool.OnHittingImpactDetector`](/game-api/types/alta-items/impacttool#m-onhittingimpactdetector), [`ImpactTool.OnGeneratedHit.BeginInvoke`](/game-api/types/alta-items/impacttool-ongeneratedhit#m-begininvoke), [`ImpactTool.OnGeneratedHit.Invoke`](/game-api/types/alta-items/impacttool-ongeneratedhit#m-invoke), [`IToolHitDependant.OnHit`](/game-api/types/alta-items/itoolhitdependant#m-onhit), [`NonDamagingCollider.ModifyHit`](/game-api/types/alta-items/nondamagingcollider#m-modifyhit), [`TriggerImpactTool.DelayedHit.DelayedHit`](/game-api/types/alta-items/triggerimpacttool-delayedhit#m-ctor), [`TriggerImpactTool.DelayedHit.impactHit`](/game-api/types/alta-items/triggerimpacttool-delayedhit#m-impacthit), [`Phantom.KnockBack`](/game-api/types/alta-intelligence/phantom#m-knockback), [`SeedSpray.CheckPlant`](/game-api/types/alta-intelligence/seedspray#m-checkplant), [`SeedSpray.BasicImpactSyncArguments.BasicImpactSyncArguments`](/game-api/types/alta-intelligence/seedspray-basicimpactsyncarguments#m-ctor), [`AreaAttackSkill.DealDamage`](/game-api/types/global-a-b/areaattackskill#m-dealdamage), [`AreaAttackSkill.ExecuteWithHit`](/game-api/types/global-a-b/areaattackskill#m-executewithhit), [`AreaAttackSkill.ValidateExecutionHit`](/game-api/types/global-a-b/areaattackskill#m-validateexecutionhit), [`Arrow.OnHit`](/game-api/types/global-a-b/arrow#m-onhit), [`BaseImpactChannelProgressionFilter.ApplyImpact`](/game-api/types/global-a-b/baseimpactchannelprogressionfilter#m-applyimpact), [`BaseImpactChannelProgressionFilter.GainExperience`](/game-api/types/global-a-b/baseimpactchannelprogressionfilter#m-gainexperience), [`BlockingCharge.ApplyCharge`](/game-api/types/global-a-b/blockingcharge#m-applycharge), [`BowStringPullbackInputMethod.ReceiveHit`](/game-api/types/global-a-b/bowstringpullbackinputmethod#m-receivehit), [`BreakOnImpact.OnHit`](/game-api/types/global-a-b/breakonimpact#m-onhit-2), [`CombatImpactProgressionFilter.ApplyImpact`](/game-api/types/global-c-d/combatimpactprogressionfilter#m-applyimpact), [`CylinderImpactCollector.CollectColliders`](/game-api/types/global-c-d/cylinderimpactcollector#m-collectcolliders) and 51 more.
