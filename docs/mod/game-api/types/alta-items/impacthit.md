---
title: "ImpactHit"
description: "Damage data for a physical hit (tool, particle and so on) on an ImpactDetector."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactHit

A **class** in `Root.Township`, `Alta.Impact`.

Damage data for a physical hit (tool, particle and so on) on an `ImpactDetector`. Holds base damage, effectiveness and multipliers, and works out final health and cripple damage, including the server's damage setting.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`DamageData`](/mod/game-api/types/alta-items/damagedata)
- **Derived types** [`ImpactHitWithTool`](/mod/game-api/types/alta-items/impacthitwithtool)
- **Documented in** [Impacts and hit detection](/mod/game-api/items/impacts#impacthit-and-impacthitwithtool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor-3" /><code>{"ImpactHit(float baseHealthDamage, float baseCrippleDamage, float multipliers, float effectiveness, "}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector, "}<Link to="/mod/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" impactType, Vector3 point, Vector3 normal, Vector3 direction, Collider struckCollider, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" wielder, "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerWielder)"}</code> | <span className="api-desc">Creates an `ImpactHit` from `baseHealthDamage`, `baseCrippleDamage`, `multipliers`, `effectiveness`, `detector`, `impactType`, `point`, `normal`, `direction`, `struckCollider`, `wielder` and `playerWielder`.</span> |
| <Link id="m-ctor-2" /><code>{"protected ImpactHit(float baseHealthDamage, float baseCrippleDamage, float multipliers, float effectiveness, "}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector, "}<Link to="/mod/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" impactType, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" wielder, "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerWielder)"}</code> | <span className="api-desc">Creates an `ImpactHit` from `baseHealthDamage`, `baseCrippleDamage`, `multipliers`, `effectiveness`, `detector`, `impactType`, `point`, `normal`, `direction`, `struckCollider`, `wielder` and `playerWielder`.</span> |

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private ImpactHit()"}</code> | <span className="api-desc">Creates an `ImpactHit` from `baseHealthDamage`, `baseCrippleDamage`, `multipliers`, `effectiveness`, `detector`, `impactType`, `point`, `normal`, `direction`, `struckCollider`, `wielder` and `playerWielder`.</span> |

</details>

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-debughit" /><code>{"static readonly "}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" DebugHit"}</code> | <span className="api-desc">Static shared hit marked as a debug hit, with no damage values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-basecrippledamage" /><code>{"float BaseCrippleDamage { get; private set; }"}</code> | <span className="api-desc">Cripple damage before effectiveness and multipliers.</span> |
| <Link id="m-basehealthdamage" /><code>{"float BaseHealthDamage { get; private set; }"}</code> | <span className="api-desc">Health damage before effectiveness and multipliers.</span> |
| <Link id="m-contactstructure" /><code><Link to="/mod/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{"[] ContactStructure { get; set; }"}</code> | <span className="api-desc">Contact points of the collision, when it came from one.</span> |
| <Link id="m-crippledamage" /><code>{"float CrippleDamage { get; }"}</code> | <span className="api-desc">Final cripple damage: base times effectiveness, server damage multiplier, `Multipliers` and `CripplingMultiplier`. 0 when the hit is not valid.</span> |
| <Link id="m-cripplingmultiplier" /><code>{"float CripplingMultiplier { get; set; }"}</code> | <span className="api-desc">Extra multiplier for cripple damage only.</span> |
| <Link id="m-damagemultiplier" /><code>{"static float DamageMultiplier { get; }"}</code> | <span className="api-desc">Static: the server config's `DamageX` setting on the server, 1 on clients.</span> |
| <Link id="m-direction" /><code>{"Vector3 Direction { get; protected set; }"}</code> | <span className="api-desc">Direction of travel of the hitting object.</span> |
| <Link id="m-effectiveness" /><code>{"float Effectiveness { get; set; }"}</code> | <span className="api-desc">How well the hit landed. The hit only counts when this is above 0.</span> |
| <Link id="m-healthdamage" /><code>{"float HealthDamage { get; }"}</code> | <span className="api-desc">Final health damage: base times effectiveness, server damage multiplier, `Multipliers` and `HealthMultiplier`. 0 when not valid.</span> |
| <Link id="m-healthmultiplier" /><code>{"float HealthMultiplier { get; set; }"}</code> | <span className="api-desc">Extra multiplier for health damage only.</span> |
| <Link id="m-impactdetector" /><code><Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" { get; set; }"}</code> | <span className="api-desc">The detector that was hit.</span> |
| <Link id="m-impacttype" /><code><Link to="/mod/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">The damage type of the hit, which health objects use to pick their damage multiplier.</span> |
| <Link id="m-isdebughit" /><code>{"bool IsDebugHit { get; }"}</code> | <span className="api-desc">True only for `DebugHit`.</span> |
| <Link id="m-isvalid" /><code>{"bool IsValid { get; }"}</code> | <span className="api-desc">True when `Effectiveness` is above 0.</span> |
| <Link id="m-multipliers" /><code>{"float Multipliers { get; set; }"}</code> | <span className="api-desc">Combined multiplier given when the hit is made, applied to both damage types. Damage popups show its share as bonus damage.</span> |
| <Link id="m-normal" /><code>{"virtual Vector3 Normal { get; private set; }"}</code> | <span className="api-desc">Surface normal at the hit point.</span> |
| <Link id="m-playerwielder" /><code><Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" PlayerWielder { get; }"}</code> | <span className="api-desc">The player controller wielding the tool, if a player made the hit.</span> |
| <Link id="m-point" /><code>{"virtual Vector3 Point { get; private set; }"}</code> | <span className="api-desc">World position of the hit.</span> |
| <Link id="m-relativevelocity" /><code>{"Vector3 RelativeVelocity { get; set; }"}</code> | <span className="api-desc">Relative velocity of the collision.</span> |
| <Link id="m-struck" /><code>{"Collider Struck { get; set; }"}</code> | <span className="api-desc">The collider that was hit.</span> |
| <Link id="m-wielder" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Wielder { get; }"}</code> | <span className="api-desc">The entity wielding the tool (a player or creature), if any.</span> |

## Used in

Members of other types that take, return or hold a `ImpactHit`:

<div className="api-used-in">

[`ForgedModel<TB, TA>.HandleHit`](/mod/game-api/types/alta-crafting/forgedmodel-tb-ta#m-handlehit), [`ChiselingTool.HitPiece`](/mod/game-api/types/alta-crafting/chiselingtool#m-hitpiece-2), [`ChiselingTool.LastHit`](/mod/game-api/types/alta-crafting/chiselingtool#m-lasthit), [`ConfirmationCraftingPart.HasOverflow`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-hasoverflow), [`GenericCraftingNail.IcClientSideImpact`](/mod/game-api/types/alta-crafting/genericcraftingnail#m-icclientsideimpact), [`GenericCraftingNail.ReceiveHit`](/mod/game-api/types/alta-crafting/genericcraftingnail#m-receivehit), [`GenericCraftingPiece.HasOverflow`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-hasoverflow), [`INailable.HasOverflow`](/mod/game-api/types/alta-crafting/inailable#m-hasoverflow), [`EmbeddableSurface.Hit`](/mod/game-api/types/alta-items/embeddablesurface#m-hit), [`IImpactEffect.Trigger`](/mod/game-api/types/alta-items/iimpacteffect#m-trigger), [`ImpactDetector.OnImpactHit`](/mod/game-api/types/alta-items/impactdetector#m-onimpacthit), [`ImpactDetectorSettings.PlayEffects`](/mod/game-api/types/alta-items/impactdetectorsettings#m-playeffects), [`ImpactHitThresholdTrigger.OnHit`](/mod/game-api/types/alta-items/impacthitthresholdtrigger#m-onhit), [`ImpactHitTrigger.CheckForValidHit`](/mod/game-api/types/alta-items/impacthittrigger#m-checkforvalidhit), [`SparkImpactDetector.Spark`](/mod/game-api/types/alta-items/sparkimpactdetector#m-spark), [`SparkSecondaryDetector.ClientSpark`](/mod/game-api/types/alta-items/sparksecondarydetector#m-clientspark), [`SparkSecondaryDetector.ServerSpark`](/mod/game-api/types/alta-items/sparksecondarydetector#m-serverspark), [`SparkSecondaryDetector.ValidateHit`](/mod/game-api/types/alta-items/sparksecondarydetector#m-validatehit), [`Phantom.OnImpactReceived`](/mod/game-api/types/alta-intelligence/phantom#m-onimpactreceived), [`DestroyableStaticObject.Hit`](/mod/game-api/types/alta-networking/destroyablestaticobject#m-hit), [`WoodcutTreeModel.HandleHit`](/mod/game-api/types/alta-crafting/woodcuttreemodel#m-handlehit), [`BuildupPickup.CutChild`](/mod/game-api/types/global-a-b/builduppickup#m-cutchild), [`BuildupPickup.ValidateHit`](/mod/game-api/types/global-a-b/builduppickup#m-validatehit), [`FlintSpark.Trigger`](/mod/game-api/types/global-e-h/flintspark#m-trigger), [`Fuse.OnHit`](/mod/game-api/types/global-e-h/fuse#m-onhit), [`HealthObject.DetectImpact`](/mod/game-api/types/global-e-h/healthobject#m-detectimpact), [`HealthObject.OnHealthChanged`](/mod/game-api/types/global-e-h/healthobject#m-onhealthchanged), [`HitSpawnData.Hit`](/mod/game-api/types/global-e-h/hitspawndata#m-hit), [`HitSpawnData.HitSpawnData`](/mod/game-api/types/global-e-h/hitspawndata#m-ctor), [`ImpactDetectionLogic.WasHit`](/mod/game-api/types/global-i-l/impactdetectionlogic#m-washit), [`ImpactHandler.BeginInvoke`](/mod/game-api/types/global-i-l/impacthandler#m-begininvoke), [`ImpactHandler.Invoke`](/mod/game-api/types/global-i-l/impacthandler#m-invoke), [`MultiSpawner.Spawn`](/mod/game-api/types/global-m-o/multispawner#m-spawn-2), [`PlayerHealth.HandleLocalPlayerHit`](/mod/game-api/types/global-p/playerhealth#m-handlelocalplayerhit), [`PooledObjectDefinitionBase.SpawnAlignedHit`](/mod/game-api/types/global-p/pooledobjectdefinitionbase#m-spawnalignedhit), [`Rock.RegisterHit`](/mod/game-api/types/global-q-r/rock#m-registerhit), [`SteelSong.CheckHitCount`](/mod/game-api/types/global-s/steelsong#m-checkhitcount), [`SteelSong.CheckHitDamage`](/mod/game-api/types/global-s/steelsong#m-checkhitdamage), [`SteelSong.MaxHitCountSoundEffect`](/mod/game-api/types/global-s/steelsong#m-maxhitcountsoundeffect).

</div>
