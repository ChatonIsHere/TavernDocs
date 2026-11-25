---
title: "ImpactHit"
description: "class ImpactHit in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactHit

A **class** in `Root.Township`, `Alta.Impact`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`DamageData`](/game-api/types/alta-items/damagedata)
- **Derived types** [`ImpactHitWithTool`](/game-api/types/alta-items/impacthitwithtool)
- **Documented in** [Impacts and hit detection](/game-api/items/impacts#impacthit-and-impacthitwithtool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor-3" /><code>{"ImpactHit(float baseHealthDamage, float baseCrippleDamage, float multipliers, float effectiveness, "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector, "}<Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" impactType, Vector3 point, Vector3 normal, Vector3 direction, Collider struckCollider, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" wielder, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerWielder)"}</code> |  |
| <Link id="m-ctor" /><code>{"private ImpactHit()"}</code> |  |
| <Link id="m-ctor-2" /><code>{"protected ImpactHit(float baseHealthDamage, float baseCrippleDamage, float multipliers, float effectiveness, "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector, "}<Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" impactType, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" wielder, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerWielder)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-debughit" /><code>{"static readonly "}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" DebugHit"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-basecrippledamage" /><code>{"float BaseCrippleDamage { get; private set; }"}</code> |  |
| <Link id="m-basehealthdamage" /><code>{"float BaseHealthDamage { get; private set; }"}</code> |  |
| <Link id="m-contactstructure" /><code><Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{"[] ContactStructure { get; set; }"}</code> |  |
| <Link id="m-crippledamage" /><code>{"float CrippleDamage { get; }"}</code> |  |
| <Link id="m-cripplingmultiplier" /><code>{"float CripplingMultiplier { get; set; }"}</code> |  |
| <Link id="m-damagemultiplier" /><code>{"static float DamageMultiplier { get; }"}</code> |  |
| <Link id="m-direction" /><code>{"Vector3 Direction { get; protected set; }"}</code> |  |
| <Link id="m-effectiveness" /><code>{"float Effectiveness { get; set; }"}</code> |  |
| <Link id="m-healthdamage" /><code>{"float HealthDamage { get; }"}</code> |  |
| <Link id="m-healthmultiplier" /><code>{"float HealthMultiplier { get; set; }"}</code> |  |
| <Link id="m-impactdetector" /><code><Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" { get; set; }"}</code> |  |
| <Link id="m-impacttype" /><code><Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" "}<Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" { get; private set; }"}</code> |  |
| <Link id="m-isdebughit" /><code>{"bool IsDebugHit { get; }"}</code> |  |
| <Link id="m-isvalid" /><code>{"bool IsValid { get; }"}</code> |  |
| <Link id="m-multipliers" /><code>{"float Multipliers { get; set; }"}</code> |  |
| <Link id="m-normal" /><code>{"virtual Vector3 Normal { get; private set; }"}</code> |  |
| <Link id="m-playerwielder" /><code><Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" PlayerWielder { get; }"}</code> |  |
| <Link id="m-point" /><code>{"virtual Vector3 Point { get; private set; }"}</code> |  |
| <Link id="m-relativevelocity" /><code>{"Vector3 RelativeVelocity { get; set; }"}</code> |  |
| <Link id="m-struck" /><code>{"Collider Struck { get; set; }"}</code> |  |
| <Link id="m-wielder" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Wielder { get; }"}</code> |  |

## Used in

Members of other types that take, return or hold a `ImpactHit`:

[`ForgedModel<TB, TA>.HandleHit`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-handlehit), [`ChiselingTool.HitPiece`](/game-api/types/alta-crafting/chiselingtool#m-hitpiece-2), [`ChiselingTool.LastHit`](/game-api/types/alta-crafting/chiselingtool#m-lasthit), [`ConfirmationCraftingPart.HasOverflow`](/game-api/types/alta-crafting/confirmationcraftingpart#m-hasoverflow), [`GenericCraftingNail.IcClientSideImpact`](/game-api/types/alta-crafting/genericcraftingnail#m-icclientsideimpact), [`GenericCraftingNail.ReceiveHit`](/game-api/types/alta-crafting/genericcraftingnail#m-receivehit), [`GenericCraftingPiece.HasOverflow`](/game-api/types/alta-crafting/genericcraftingpiece#m-hasoverflow), [`INailable.HasOverflow`](/game-api/types/alta-crafting/inailable#m-hasoverflow), [`EmbeddableSurface.Hit`](/game-api/types/alta-items/embeddablesurface#m-hit), [`IImpactEffect.Trigger`](/game-api/types/alta-items/iimpacteffect#m-trigger), [`ImpactDetector.OnImpactHit`](/game-api/types/alta-items/impactdetector#m-onimpacthit), [`ImpactDetectorSettings.PlayEffects`](/game-api/types/alta-items/impactdetectorsettings#m-playeffects), [`ImpactHitThresholdTrigger.OnHit`](/game-api/types/alta-items/impacthitthresholdtrigger#m-onhit), [`ImpactHitTrigger.CheckForValidHit`](/game-api/types/alta-items/impacthittrigger#m-checkforvalidhit), [`SparkImpactDetector.Spark`](/game-api/types/alta-items/sparkimpactdetector#m-spark), [`SparkSecondaryDetector.ClientSpark`](/game-api/types/alta-items/sparksecondarydetector#m-clientspark), [`SparkSecondaryDetector.ServerSpark`](/game-api/types/alta-items/sparksecondarydetector#m-serverspark), [`SparkSecondaryDetector.ValidateHit`](/game-api/types/alta-items/sparksecondarydetector#m-validatehit), [`Phantom.OnImpactReceived`](/game-api/types/alta-intelligence/phantom#m-onimpactreceived), [`DestroyableStaticObject.Hit`](/game-api/types/alta-networking/destroyablestaticobject#m-hit), [`WoodcutTreeModel.HandleHit`](/game-api/types/alta-crafting/woodcuttreemodel#m-handlehit), [`BuildupPickup.CutChild`](/game-api/types/global-a-b/builduppickup#m-cutchild), [`BuildupPickup.ValidateHit`](/game-api/types/global-a-b/builduppickup#m-validatehit), [`FlintSpark.Trigger`](/game-api/types/global-e-h/flintspark#m-trigger), [`Fuse.OnHit`](/game-api/types/global-e-h/fuse#m-onhit), [`HealthObject.DetectImpact`](/game-api/types/global-e-h/healthobject#m-detectimpact), [`HealthObject.OnHealthChanged`](/game-api/types/global-e-h/healthobject#m-onhealthchanged), [`HitSpawnData.Hit`](/game-api/types/global-e-h/hitspawndata#m-hit), [`HitSpawnData.HitSpawnData`](/game-api/types/global-e-h/hitspawndata#m-ctor), [`ImpactDetectionLogic.WasHit`](/game-api/types/global-i-l/impactdetectionlogic#m-washit), [`ImpactHandler.BeginInvoke`](/game-api/types/global-i-l/impacthandler#m-begininvoke), [`ImpactHandler.Invoke`](/game-api/types/global-i-l/impacthandler#m-invoke), [`MultiSpawner.Spawn`](/game-api/types/global-m-o/multispawner#m-spawn-2), [`PlayerHealth.HandleLocalPlayerHit`](/game-api/types/global-p/playerhealth#m-handlelocalplayerhit), [`PooledObjectDefinitionBase.SpawnAlignedHit`](/game-api/types/global-p/pooledobjectdefinitionbase#m-spawnalignedhit), [`Rock.RegisterHit`](/game-api/types/global-q-r/rock#m-registerhit), [`SteelSong.CheckHitCount`](/game-api/types/global-s/steelsong#m-checkhitcount), [`SteelSong.CheckHitDamage`](/game-api/types/global-s/steelsong#m-checkhitdamage), [`SteelSong.MaxHitCountSoundEffect`](/game-api/types/global-s/steelsong#m-maxhitcountsoundeffect).
