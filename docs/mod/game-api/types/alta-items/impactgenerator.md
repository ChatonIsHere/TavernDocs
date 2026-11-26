---
title: "ImpactGenerator"
description: "Base component for the part of an item or creature that deals hits (a blade edge, a point, a creature attack)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactGenerator

An **abstract class** in `Root.Township`, `Alta.Impact`.

Base component for the part of an item or creature that deals hits (a blade edge, a point, a creature attack). It holds the damage values and settings that impact detectors read when hit.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`FixedImpactor`](/mod/game-api/types/alta-items/fixedimpactor), [`Impactor`](/mod/game-api/types/alta-items/impactor)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ImpactGenerator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"protected Transform cachedTransform"}</code> | <span className="api-desc">Cached transform of this component.</span> |

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-impactorsettings" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactorsettings">{"ImpactorSettings"}</Link>{" impactorSettings"}</code> | <span className="api-desc">Backing field for `ImpactorSettings`: hardness, immunity groups and damage or block effects.</span> |
| <Link id="m-impactorvalues" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactorvalues">{"ImpactorValues"}</Link>{" impactorValues"}</code> | <span className="api-desc">Backing field for `ImpactorValues`: impact type, channels, damage modifiers and edge length.</span> |
| <Link id="m-overridehardnesslevel" /><code>{"private uint overrideHardnessLevel"}</code> | <span className="api-desc">Hardness set through `HardnessLevel`. When 0, the settings' hardness is used.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">Backing field for `Pickup`, the pickup this impactor is on (found in parents).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channels" /><code>{"List<"}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"> Channels { get; }"}</code> | <span className="api-desc">Damage channels from the `ImpactorValues` asset.</span> |
| <Link id="m-crippledamagemodifier" /><code>{"float CrippleDamageModifier { get; }"}</code> | <span className="api-desc">Cripple damage modifier from the values asset, times `Multipliers`.</span> |
| <Link id="m-effectonblock" /><code><Link to="/mod/game-api/types/alta-items/impactdetectorsettings-impactsettings">{"ImpactDetectorSettings.ImpactSettings"}</Link>{" EffectOnBlock { get; }"}</code> | <span className="api-desc">Impact effect settings used when the hit is blocked.</span> |
| <Link id="m-effectondamage" /><code><Link to="/mod/game-api/types/alta-items/impactdetectorsettings-impactsettings">{"ImpactDetectorSettings.ImpactSettings"}</Link>{" EffectOnDamage { get; }"}</code> | <span className="api-desc">Impact effect settings used when the hit deals damage.</span> |
| <Link id="m-effectsonreset" /><code>{"List<"}<Link to="/mod/game-api/types/alta-items/iimpactorreseteffect">{"IImpactorResetEffect"}</Link>{"> EffectsOnReset { get; }"}</code> | <span className="api-desc">Effects run when the impactor resets.</span> |
| <Link id="m-hardnesslevel" /><code>{"uint HardnessLevel { get; set; }"}</code> | <span className="api-desc">Hardness of this impactor, probably compared against what it hits. A non-zero set value overrides the settings asset.</span> |
| <Link id="m-haslength" /><code>{"bool HasLength { get; }"}</code> | <span className="api-desc">True if the impactor has an edge length (a blade edge rather than a point).</span> |
| <Link id="m-hastool" /><code>{"bool HasTool { get; private set; }"}</code> | <span className="api-desc">True while an `ImpactTool` is registered.</span> |
| <Link id="m-healthdamagemodifier" /><code>{"float HealthDamageModifier { get; }"}</code> | <span className="api-desc">Health damage modifier from the values asset, times `Multipliers`.</span> |
| <Link id="m-immunitygroups" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-items/impactimmunitygroup">{"ImpactImmunityGroup"}</Link>{"> ImmunityGroups { get; }"}</code> | <span className="api-desc">Immunity groups from the settings asset.</span> |
| <Link id="m-impactorsettings-2" /><code><Link to="/mod/game-api/types/alta-items/impactorsettings">{"ImpactorSettings"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/impactorsettings">{"ImpactorSettings"}</Link>{" { get; }"}</code> | <span className="api-desc">Settings asset: hardness, immunity groups and hit effects.</span> |
| <Link id="m-impactorvalues-2" /><code><Link to="/mod/game-api/types/alta-items/impactorvalues">{"ImpactorValues"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/impactorvalues">{"ImpactorValues"}</Link>{" { get; }"}</code> | <span className="api-desc">Values asset: damage modifiers, channels, type and edge length.</span> |
| <Link id="m-impacttype" /><code><Link to="/mod/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" { get; }"}</code> | <span className="api-desc">Kind of impact (from the values asset).</span> |
| <Link id="m-multipliers" /><code>{"float Multipliers { get; set; }"}</code> | <span className="api-desc">Extra multiplier on health and cripple damage. Defaults to 1.</span> |
| <Link id="m-normal" /><code>{"Vector3 Normal { get; }"}</code> | <span className="api-desc">The transform's forward direction.</span> |
| <Link id="m-pickup-2" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | <span className="api-desc">The pickup this impactor belongs to, found in its parents.</span> |
| <Link id="m-registeredtool" /><code><Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" RegisteredTool { get; private set; }"}</code> | <span className="api-desc">The tool currently linked to this impactor, or null.</span> |
| <Link id="m-updatesposition" /><code>{"virtual bool UpdatesPosition { get; }"}</code> | <span className="api-desc">Whether this impactor moves and needs position tracking. True by default; `FixedImpactor` returns false.</span> |
| <Link id="m-fromtool" /><code>{"protected "}<Link to="/mod/game-api/types/global-p/positionrecord">{"PositionRecord"}</Link>{" FromTool { get; private set; }"}</code> | <span className="api-desc">Position record of this impactor relative to the registered tool's transform.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onhittingimpactdetector" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{"> OnHittingImpactDetector"}</code> | <span className="api-desc">Raised when this impactor hits an impact detector.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregistertool" /><code>{"void DeRegisterTool("}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" toolToDeregister)"}</code> | <span className="api-desc">Unlinks the given tool if it is the registered one and disables the component.</span> |
| <Link id="m-getcurrentattack" /><code>{"abstract "}<Link to="/mod/game-api/types/alta-intelligence/attackparameters">{"AttackParameters"}</Link>{" GetCurrentAttack()"}</code> | <span className="api-desc">Returns the attack parameters for this impactor right now. AI uses it to read creature attacks.</span> |
| <Link id="m-getfollowandcurrent" /><code>{"abstract void GetFollowAndCurrent("}<Link to="/mod/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contactPoint, out Vector3 follow, out Vector3 current, out float directionEffMod, out float generalEfficiency, out float directionMultiplier)"}</code> | <span className="api-desc">Works out the previous and current hit positions and the direction and efficiency factors for a contact point.</span> |
| <Link id="m-hitimpactdetector" /><code>{"void HitImpactDetector("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit)"}</code> | <span className="api-desc">Raises `OnHittingImpactDetector` with the given hit.</span> |
| <Link id="m-registertool" /><code>{"void RegisterTool("}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" toolToRegister)"}</code> | <span className="api-desc">Links an `ImpactTool` to this impactor, enables it and resets it when the tool resets.</span> |
| <Link id="m-reset" /><code>{"abstract void Reset()"}</code> | <span className="api-desc">Resets the impactor's tracked state. Called when the registered tool resets.</span> |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> | <span className="api-desc">Deregisters the tool if one is still registered.</span> |

## Used in

Members of other types that take, return or hold a `ImpactGenerator`:

<div className="api-used-in">

[`ImpactHitWithTool.ImpactHitWithTool`](/mod/game-api/types/alta-items/impacthitwithtool#m-ctor-2), [`ImpactHitWithTool.Impactor`](/mod/game-api/types/alta-items/impacthitwithtool#m-impactor), [`ImpactorMap.map`](/mod/game-api/types/alta-items/impactormap#m-map), [`ImpactorMap.Map`](/mod/game-api/types/alta-items/impactormap#m-map-2), [`ImpactorMap.OrderedImpactors`](/mod/game-api/types/alta-items/impactormap#m-orderedimpactors), [`ImpactorMap.MapElement.Add`](/mod/game-api/types/alta-items/impactormap-mapelement#m-add), [`ImpactorMap.MapElement.impactors`](/mod/game-api/types/alta-items/impactormap-mapelement#m-impactors), [`ImpactorMap.MapElement.Impactors`](/mod/game-api/types/alta-items/impactormap-mapelement#m-impactors-2), [`ImpactorMap.MapElement.MapElement`](/mod/game-api/types/alta-items/impactormap-mapelement#m-ctor), [`ImpactTool.GetImpactorIndex`](/mod/game-api/types/alta-items/impacttool#m-getimpactorindex), [`ImpactTool.ImpactorsPerCollider`](/mod/game-api/types/alta-items/impacttool#m-impactorspercollider), [`ImpactTool.indexedImpactors`](/mod/game-api/types/alta-items/impacttool#m-indexedimpactors), [`ImpactTool.RegisterImpactorChannels`](/mod/game-api/types/alta-items/impacttool#m-registerimpactorchannels), [`Wyrm.impactors`](/mod/game-api/types/alta-intelligence/wyrm#m-impactors), [`PhysicalMaterialPart.impactors`](/mod/game-api/types/global-p/physicalmaterialpart#m-impactors), [`TemperatureCheckInputStructure.ValidateColliderImpactors`](/mod/game-api/types/global-t-x/temperaturecheckinputstructure#m-validatecolliderimpactors).

</div>
