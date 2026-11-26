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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`FixedImpactor`](/game-api/types/alta-items/fixedimpactor), [`Impactor`](/game-api/types/alta-items/impactor)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ImpactGenerator()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"protected Transform cachedTransform"}</code> | Cached transform of this component. |

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-impactorsettings" /><code>{"private "}<Link to="/game-api/types/alta-items/impactorsettings">{"ImpactorSettings"}</Link>{" impactorSettings"}</code> | Backing field for `ImpactorSettings`: hardness, immunity groups and damage or block effects. |
| <Link id="m-impactorvalues" /><code>{"private "}<Link to="/game-api/types/alta-items/impactorvalues">{"ImpactorValues"}</Link>{" impactorValues"}</code> | Backing field for `ImpactorValues`: impact type, channels, damage modifiers and edge length. |
| <Link id="m-overridehardnesslevel" /><code>{"private uint overrideHardnessLevel"}</code> | Hardness set through `HardnessLevel`. When 0, the settings' hardness is used. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | Backing field for `Pickup`, the pickup this impactor is on (found in parents). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channels" /><code>{"List<"}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"> Channels { get; }"}</code> | Damage channels from the `ImpactorValues` asset. |
| <Link id="m-crippledamagemodifier" /><code>{"float CrippleDamageModifier { get; }"}</code> | Cripple damage modifier from the values asset, times `Multipliers`. |
| <Link id="m-effectonblock" /><code><Link to="/game-api/types/alta-items/impactdetectorsettings-impactsettings">{"ImpactDetectorSettings.ImpactSettings"}</Link>{" EffectOnBlock { get; }"}</code> | Impact effect settings used when the hit is blocked. |
| <Link id="m-effectondamage" /><code><Link to="/game-api/types/alta-items/impactdetectorsettings-impactsettings">{"ImpactDetectorSettings.ImpactSettings"}</Link>{" EffectOnDamage { get; }"}</code> | Impact effect settings used when the hit deals damage. |
| <Link id="m-effectsonreset" /><code>{"List<"}<Link to="/game-api/types/alta-items/iimpactorreseteffect">{"IImpactorResetEffect"}</Link>{"> EffectsOnReset { get; }"}</code> | Effects run when the impactor resets. |
| <Link id="m-hardnesslevel" /><code>{"uint HardnessLevel { get; set; }"}</code> | Hardness of this impactor, probably compared against what it hits. A non-zero set value overrides the settings asset. |
| <Link id="m-haslength" /><code>{"bool HasLength { get; }"}</code> | True if the impactor has an edge length (a blade edge rather than a point). |
| <Link id="m-hastool" /><code>{"bool HasTool { get; private set; }"}</code> | True while an `ImpactTool` is registered. |
| <Link id="m-healthdamagemodifier" /><code>{"float HealthDamageModifier { get; }"}</code> | Health damage modifier from the values asset, times `Multipliers`. |
| <Link id="m-immunitygroups" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-items/impactimmunitygroup">{"ImpactImmunityGroup"}</Link>{"> ImmunityGroups { get; }"}</code> | Immunity groups from the settings asset. |
| <Link id="m-impactorsettings-2" /><code><Link to="/game-api/types/alta-items/impactorsettings">{"ImpactorSettings"}</Link>{" "}<Link to="/game-api/types/alta-items/impactorsettings">{"ImpactorSettings"}</Link>{" { get; }"}</code> | Settings asset: hardness, immunity groups and hit effects. |
| <Link id="m-impactorvalues-2" /><code><Link to="/game-api/types/alta-items/impactorvalues">{"ImpactorValues"}</Link>{" "}<Link to="/game-api/types/alta-items/impactorvalues">{"ImpactorValues"}</Link>{" { get; }"}</code> | Values asset: damage modifiers, channels, type and edge length. |
| <Link id="m-impacttype" /><code><Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" "}<Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" { get; }"}</code> | Kind of impact (from the values asset). |
| <Link id="m-multipliers" /><code>{"float Multipliers { get; set; }"}</code> | Extra multiplier on health and cripple damage. Defaults to 1. |
| <Link id="m-normal" /><code>{"Vector3 Normal { get; }"}</code> | The transform's forward direction. |
| <Link id="m-pickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | The pickup this impactor belongs to, found in its parents. |
| <Link id="m-registeredtool" /><code><Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" RegisteredTool { get; private set; }"}</code> | The tool currently linked to this impactor, or null. |
| <Link id="m-updatesposition" /><code>{"virtual bool UpdatesPosition { get; }"}</code> | Whether this impactor moves and needs position tracking. True by default; `FixedImpactor` returns false. |
| <Link id="m-fromtool" /><code>{"protected "}<Link to="/game-api/types/global-p/positionrecord">{"PositionRecord"}</Link>{" FromTool { get; private set; }"}</code> | Position record of this impactor relative to the registered tool's transform. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onhittingimpactdetector" /><code>{"event Action<"}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{"> OnHittingImpactDetector"}</code> | Raised when this impactor hits an impact detector. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregistertool" /><code>{"void DeRegisterTool("}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" toolToDeregister)"}</code> | Unlinks the given tool if it is the registered one and disables the component. |
| <Link id="m-getcurrentattack" /><code>{"abstract "}<Link to="/game-api/types/alta-intelligence/attackparameters">{"AttackParameters"}</Link>{" GetCurrentAttack()"}</code> | Returns the attack parameters for this impactor right now. AI uses it to read creature attacks. |
| <Link id="m-getfollowandcurrent" /><code>{"abstract void GetFollowAndCurrent("}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contactPoint, out Vector3 follow, out Vector3 current, out float directionEffMod, out float generalEfficiency, out float directionMultiplier)"}</code> | Works out the previous and current hit positions and the direction and efficiency factors for a contact point. |
| <Link id="m-hitimpactdetector" /><code>{"void HitImpactDetector("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit)"}</code> | Raises `OnHittingImpactDetector` with the given hit. |
| <Link id="m-registertool" /><code>{"void RegisterTool("}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" toolToRegister)"}</code> | Links an `ImpactTool` to this impactor, enables it and resets it when the tool resets. |
| <Link id="m-reset" /><code>{"abstract void Reset()"}</code> | Resets the impactor's tracked state. Called when the registered tool resets. |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> | Deregisters the tool if one is still registered. |

## Used in

Members of other types that take, return or hold a `ImpactGenerator`:

[`ImpactHitWithTool.ImpactHitWithTool`](/game-api/types/alta-items/impacthitwithtool#m-ctor-2), [`ImpactHitWithTool.Impactor`](/game-api/types/alta-items/impacthitwithtool#m-impactor), [`ImpactorMap.map`](/game-api/types/alta-items/impactormap#m-map), [`ImpactorMap.Map`](/game-api/types/alta-items/impactormap#m-map-2), [`ImpactorMap.OrderedImpactors`](/game-api/types/alta-items/impactormap#m-orderedimpactors), [`ImpactorMap.MapElement.Add`](/game-api/types/alta-items/impactormap-mapelement#m-add), [`ImpactorMap.MapElement.impactors`](/game-api/types/alta-items/impactormap-mapelement#m-impactors), [`ImpactorMap.MapElement.Impactors`](/game-api/types/alta-items/impactormap-mapelement#m-impactors-2), [`ImpactorMap.MapElement.MapElement`](/game-api/types/alta-items/impactormap-mapelement#m-ctor), [`ImpactTool.GetImpactorIndex`](/game-api/types/alta-items/impacttool#m-getimpactorindex), [`ImpactTool.ImpactorsPerCollider`](/game-api/types/alta-items/impacttool#m-impactorspercollider), [`ImpactTool.indexedImpactors`](/game-api/types/alta-items/impacttool#m-indexedimpactors), [`ImpactTool.RegisterImpactorChannels`](/game-api/types/alta-items/impacttool#m-registerimpactorchannels), [`Wyrm.impactors`](/game-api/types/alta-intelligence/wyrm#m-impactors), [`PhysicalMaterialPart.impactors`](/game-api/types/global-p/physicalmaterialpart#m-impactors), [`TemperatureCheckInputStructure.ValidateColliderImpactors`](/game-api/types/global-t-x/temperaturecheckinputstructure#m-validatecolliderimpactors).
