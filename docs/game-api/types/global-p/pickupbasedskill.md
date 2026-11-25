---
title: "PickupBasedSkill"
description: "abstract class PickupBasedSkill in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupBasedSkill

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`ProfessionSkill`](/game-api/types/global-p/professionskill), [`IInputBasedSkill`](/game-api/types/global-i-l/iinputbasedskill), [`IChargeableProfessionSkill`](/game-api/types/global-i-l/ichargeableprofessionskill)
- **Derived types** [`SpecificPickupBasedSkill`](/game-api/types/alta-player/specificpickupbasedskill), [`AreaAttackSkill`](/game-api/types/global-a-b/areaattackskill), [`EmberComposer`](/game-api/types/global-e-h/embercomposer), [`Gatherer`](/game-api/types/global-e-h/gatherer), [`HeartCall`](/game-api/types/global-e-h/heartcall), [`HebiosEnchant`](/game-api/types/global-e-h/hebiosenchant), [`MiningEcho`](/game-api/types/global-m-o/miningecho), [`PowerHit`](/game-api/types/global-p/powerhit), [`PowerStrike`](/game-api/types/global-p/powerstrike), [`SteelSong`](/game-api/types/global-s/steelsong), [`TargetBasedSkill`](/game-api/types/global-t-x/targetbasedskill)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PickupBasedSkill()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"protected "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> |  |
| <Link id="m-hashitinformation" /><code>{"protected bool hasHitInformation"}</code> |  |
| <Link id="m-hitposition" /><code>{"protected Vector3 hitPosition"}</code> |  |
| <Link id="m-hitpositionandbladealignedeffect" /><code>{"private "}<Link to="/game-api/types/global-p/positionrotationevent">{"PositionRotationEvent"}</Link>{" hitPositionAndBladeAlignedEffect"}</code> |  |
| <Link id="m-hitpositioneffect" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" hitPositionEffect"}</code> |  |
| <Link id="m-hitrotation" /><code>{"protected Quaternion hitRotation"}</code> |  |
| <Link id="m-inputstructure" /><code>{"private "}<Link to="/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" inputStructure"}</code> |  |
| <Link id="m-localplayercanceledtransform" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" localPlayerCanceledTransform"}</code> |  |
| <Link id="m-localplayerchargedtransform" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" localPlayerChargedTransform"}</code> |  |
| <Link id="m-localplayerexecutedtransform" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" localPlayerExecutedTransform"}</code> |  |
| <Link id="m-localplayerhitpositionandbladealignedeffect" /><code>{"private "}<Link to="/game-api/types/global-p/positionrotationevent">{"PositionRotationEvent"}</Link>{" localPlayerHitPositionAndBladeAlignedEffect"}</code> |  |
| <Link id="m-localplayerhitpositioneffect" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" localPlayerHitPositionEffect"}</code> |  |
| <Link id="m-pickupidentifier" /><code>{"protected uint pickupIdentifier"}</code> |  |
| <Link id="m-requireshitinformation" /><code>{"private bool requiresHitInformation"}</code> |  |
| <Link id="m-requireslocalplayeronlyeffect" /><code>{"private bool requiresLocalPlayerOnlyEffect"}</code> |  |
| <Link id="m-skillcanceledtransform" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" SkillCanceledTransform"}</code> |  |
| <Link id="m-skillchargedtransform" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" SkillChargedTransform"}</code> |  |
| <Link id="m-skillchargingstartedtransform" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" SkillChargingStartedTransform"}</code> |  |
| <Link id="m-skillexecutedtransform" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" SkillExecutedTransform"}</code> |  |
| <Link id="m-status" /><code>{"protected "}<Link to="/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-inputstructure-2" /><code><Link to="/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" InputStructure { get; }"}</code> |  |
| <Link id="m-iinputbasedskill-skill" /><code>{"private "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" IInputBasedSkill.Skill { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"virtual void Deregister("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> |  |
| <Link id="m-executewithhit" /><code>{"virtual void ExecuteWithHit("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, bool hasHit = true)"}</code> |  |
| <Link id="m-inputchangedstate" /><code>{"virtual void InputChangedState(bool isEnabled, "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> |  |
| <Link id="m-lock" /><code>{"override void Lock("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" targetPlayer)"}</code> |  |
| <Link id="m-register" /><code>{"virtual void Register("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> |  |
| <Link id="m-register-2" /><code>{"virtual void Register("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> |  |
| <Link id="m-sendcancelled" /><code>{"void SendCancelled("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-sendchargingstarted" /><code>{"void SendChargingStarted("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" effectParentEntity, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-sendconsumed" /><code>{"void SendConsumed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-sendserializedmessage" /><code>{"override void SendSerializedMessage("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-seteffectactive" /><code>{"virtual void SetEffectActive("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isEffectActive)"}</code> |  |
| <Link id="m-unlock" /><code>{"override void Unlock("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" targetPlayer)"}</code> |  |
| <Link id="m-validateexecutionhit" /><code>{"virtual bool ValidateExecutionHit("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> |  |
| <Link id="m-validatepickup" /><code>{"virtual bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> |  |
| <Link id="m-effectsrequested" /><code>{"protected virtual void EffectsRequested("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" targetEntity, "}<Link to="/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status, bool isReadingForCastingPlayer)"}</code> |  |
| <Link id="m-gettransformtocallat" /><code>{"protected virtual Transform GetTransformToCallAt("}<Link to="/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-serializeinternal" /><code>{"protected virtual void SerializeInternal("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PickupBasedSkill`:

[`BlockingCharge.IStrikeSuccessionModifier.TargetSkill`](/game-api/types/global-a-b/blockingcharge#m-istrikesuccessionmodifier-targetskill), [`BlockingCharge.modifiedSkill`](/game-api/types/global-a-b/blockingcharge#m-modifiedskill), [`IStrikeSuccessionModifier.TargetSkill`](/game-api/types/global-i-l/istrikesuccessionmodifier#m-targetskill), [`PickupBasedSkillModifier.modifiedSkill`](/game-api/types/global-p/pickupbasedskillmodifier#m-modifiedskill), [`PickupBasedSkillModifier.ModifiedSkill`](/game-api/types/global-p/pickupbasedskillmodifier#m-modifiedskill-2), [`PlayerToolBasedSkillHelper.activeSkills`](/game-api/types/global-p/playertoolbasedskillhelper#m-activeskills), [`PlayerToolBasedSkillHelper.DeregisterSkill`](/game-api/types/global-p/playertoolbasedskillhelper#m-deregisterskill), [`PlayerToolBasedSkillHelper.RegisterSkill`](/game-api/types/global-p/playertoolbasedskillhelper#m-registerskill), [`PowerStrike.IStrikeSuccessionModifier.TargetSkill`](/game-api/types/global-p/powerstrike#m-istrikesuccessionmodifier-targetskill), [`StrikeSuccessionInput.skill`](/game-api/types/global-s/strikesuccessioninput#m-skill).
