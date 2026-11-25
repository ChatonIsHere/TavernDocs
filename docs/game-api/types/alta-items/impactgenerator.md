---
title: "ImpactGenerator"
description: "abstract class ImpactGenerator in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactGenerator

An **abstract class** in `Root.Township`, `Alta.Impact`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`FixedImpactor`](/game-api/types/alta-items/fixedimpactor), [`Impactor`](/game-api/types/alta-items/impactor)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ImpactGenerator()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"protected Transform cachedTransform"}</code> |  |
| <Link id="m-impactorsettings" /><code>{"private "}<Link to="/game-api/types/alta-items/impactorsettings">{"ImpactorSettings"}</Link>{" impactorSettings"}</code> |  |
| <Link id="m-impactorvalues" /><code>{"private "}<Link to="/game-api/types/alta-items/impactorvalues">{"ImpactorValues"}</Link>{" impactorValues"}</code> |  |
| <Link id="m-overridehardnesslevel" /><code>{"private uint overrideHardnessLevel"}</code> |  |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channels" /><code>{"List<"}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"> Channels { get; }"}</code> |  |
| <Link id="m-crippledamagemodifier" /><code>{"float CrippleDamageModifier { get; }"}</code> |  |
| <Link id="m-effectonblock" /><code><Link to="/game-api/types/alta-items/impactdetectorsettings-impactsettings">{"ImpactDetectorSettings.ImpactSettings"}</Link>{" EffectOnBlock { get; }"}</code> |  |
| <Link id="m-effectondamage" /><code><Link to="/game-api/types/alta-items/impactdetectorsettings-impactsettings">{"ImpactDetectorSettings.ImpactSettings"}</Link>{" EffectOnDamage { get; }"}</code> |  |
| <Link id="m-effectsonreset" /><code>{"List<"}<Link to="/game-api/types/alta-items/iimpactorreseteffect">{"IImpactorResetEffect"}</Link>{"> EffectsOnReset { get; }"}</code> |  |
| <Link id="m-hardnesslevel" /><code>{"uint HardnessLevel { get; set; }"}</code> |  |
| <Link id="m-haslength" /><code>{"bool HasLength { get; }"}</code> |  |
| <Link id="m-hastool" /><code>{"bool HasTool { get; private set; }"}</code> |  |
| <Link id="m-healthdamagemodifier" /><code>{"float HealthDamageModifier { get; }"}</code> |  |
| <Link id="m-immunitygroups" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-items/impactimmunitygroup">{"ImpactImmunityGroup"}</Link>{"> ImmunityGroups { get; }"}</code> |  |
| <Link id="m-impactorsettings-2" /><code><Link to="/game-api/types/alta-items/impactorsettings">{"ImpactorSettings"}</Link>{" "}<Link to="/game-api/types/alta-items/impactorsettings">{"ImpactorSettings"}</Link>{" { get; }"}</code> |  |
| <Link id="m-impactorvalues-2" /><code><Link to="/game-api/types/alta-items/impactorvalues">{"ImpactorValues"}</Link>{" "}<Link to="/game-api/types/alta-items/impactorvalues">{"ImpactorValues"}</Link>{" { get; }"}</code> |  |
| <Link id="m-impacttype" /><code><Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" "}<Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" { get; }"}</code> |  |
| <Link id="m-multipliers" /><code>{"float Multipliers { get; set; }"}</code> |  |
| <Link id="m-normal" /><code>{"Vector3 Normal { get; }"}</code> |  |
| <Link id="m-pickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> |  |
| <Link id="m-registeredtool" /><code><Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" RegisteredTool { get; private set; }"}</code> |  |
| <Link id="m-updatesposition" /><code>{"virtual bool UpdatesPosition { get; }"}</code> |  |
| <Link id="m-fromtool" /><code>{"protected "}<Link to="/game-api/types/global-p/positionrecord">{"PositionRecord"}</Link>{" FromTool { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onhittingimpactdetector" /><code>{"event Action<"}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{"> OnHittingImpactDetector"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregistertool" /><code>{"void DeRegisterTool("}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" toolToDeregister)"}</code> |  |
| <Link id="m-getcurrentattack" /><code>{"abstract "}<Link to="/game-api/types/alta-intelligence/attackparameters">{"AttackParameters"}</Link>{" GetCurrentAttack()"}</code> |  |
| <Link id="m-getfollowandcurrent" /><code>{"abstract void GetFollowAndCurrent("}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contactPoint, out Vector3 follow, out Vector3 current, out float directionEffMod, out float generalEfficiency, out float directionMultiplier)"}</code> |  |
| <Link id="m-hitimpactdetector" /><code>{"void HitImpactDetector("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit)"}</code> |  |
| <Link id="m-registertool" /><code>{"void RegisterTool("}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" toolToRegister)"}</code> |  |
| <Link id="m-reset" /><code>{"abstract void Reset()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ImpactGenerator`:

[`ImpactHitWithTool.ImpactHitWithTool`](/game-api/types/alta-items/impacthitwithtool#m-ctor-2), [`ImpactHitWithTool.Impactor`](/game-api/types/alta-items/impacthitwithtool#m-impactor), [`ImpactorMap.map`](/game-api/types/alta-items/impactormap#m-map), [`ImpactorMap.Map`](/game-api/types/alta-items/impactormap#m-map-2), [`ImpactorMap.OrderedImpactors`](/game-api/types/alta-items/impactormap#m-orderedimpactors), [`ImpactorMap.MapElement.Add`](/game-api/types/alta-items/impactormap-mapelement#m-add), [`ImpactorMap.MapElement.impactors`](/game-api/types/alta-items/impactormap-mapelement#m-impactors), [`ImpactorMap.MapElement.Impactors`](/game-api/types/alta-items/impactormap-mapelement#m-impactors-2), [`ImpactorMap.MapElement.MapElement`](/game-api/types/alta-items/impactormap-mapelement#m-ctor), [`ImpactTool.GetImpactorIndex`](/game-api/types/alta-items/impacttool#m-getimpactorindex), [`ImpactTool.ImpactorsPerCollider`](/game-api/types/alta-items/impacttool#m-impactorspercollider), [`ImpactTool.indexedImpactors`](/game-api/types/alta-items/impacttool#m-indexedimpactors), [`ImpactTool.RegisterImpactorChannels`](/game-api/types/alta-items/impacttool#m-registerimpactorchannels), [`Wyrm.impactors`](/game-api/types/alta-intelligence/wyrm#m-impactors), [`PhysicalMaterialPart.impactors`](/game-api/types/global-p/physicalmaterialpart#m-impactors), [`TemperatureCheckInputStructure.ValidateColliderImpactors`](/game-api/types/global-t-x/temperaturecheckinputstructure#m-validatecolliderimpactors).
