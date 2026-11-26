---
title: "PickupBasedSkill"
description: "Base for skills that work through a held tool, such as charged strikes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupBasedSkill

An **abstract class** in `Root.Township`, the global namespace.

Base for skills that work through a held tool, such as charged strikes. A per-player helper registers them when unlocked; their charge, cancel and execute states are sent as skill messages so every client can play the effects.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`ProfessionSkill`](/mod/game-api/types/global-p/professionskill), [`IInputBasedSkill`](/mod/game-api/types/global-i-l/iinputbasedskill), [`IChargeableProfessionSkill`](/mod/game-api/types/global-i-l/ichargeableprofessionskill)
- **Derived types** [`SpecificPickupBasedSkill`](/mod/game-api/types/alta-player/specificpickupbasedskill), [`AreaAttackSkill`](/mod/game-api/types/global-a-b/areaattackskill), [`EmberComposer`](/mod/game-api/types/global-e-h/embercomposer), [`Gatherer`](/mod/game-api/types/global-e-h/gatherer), [`HeartCall`](/mod/game-api/types/global-e-h/heartcall), [`HebiosEnchant`](/mod/game-api/types/global-e-h/hebiosenchant), [`MiningEcho`](/mod/game-api/types/global-m-o/miningecho), [`PowerHit`](/mod/game-api/types/global-p/powerhit), [`PowerStrike`](/mod/game-api/types/global-p/powerstrike), [`SteelSong`](/mod/game-api/types/global-s/steelsong), [`TargetBasedSkill`](/mod/game-api/types/global-t-x/targetbasedskill)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PickupBasedSkill()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"protected "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> | <span className="api-desc">Chunk of the hit position in the last message.</span> |
| <Link id="m-hashitinformation" /><code>{"protected bool hasHitInformation"}</code> | <span className="api-desc">Whether the current message carries a hit position and rotation.</span> |
| <Link id="m-hitposition" /><code>{"protected Vector3 hitPosition"}</code> | <span className="api-desc">Hit position for the current message.</span> |
| <Link id="m-hitrotation" /><code>{"protected Quaternion hitRotation"}</code> | <span className="api-desc">Rotation facing back along the hit direction, used for blade-aligned effects.</span> |
| <Link id="m-pickupidentifier" /><code>{"protected uint pickupIdentifier"}</code> | <span className="api-desc">Entity id of the tool the current message is about.</span> |
| <Link id="m-status" /><code>{"protected "}<Link to="/mod/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status"}</code> | <span className="api-desc">State being sent or received: charging started, charged, consumed or cancelled.</span> |

<details className="api-private">
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hitpositionandbladealignedeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionrotationevent">{"PositionRotationEvent"}</Link>{" hitPositionAndBladeAlignedEffect"}</code> | <span className="api-desc">Event invoked with the hit point and a rotation facing back along the hit, aligned to the blade, when the skill executes with a hit.</span> |
| <Link id="m-hitpositioneffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" hitPositionEffect"}</code> | <span className="api-desc">Event invoked at the hit point when the skill executes with a hit.</span> |
| <Link id="m-inputstructure" /><code>{"private "}<Link to="/mod/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" inputStructure"}</code> | <span className="api-desc">Backing field for `InputStructure`. Also plays the sound for each status change.</span> |
| <Link id="m-localplayercanceledtransform" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" localPlayerCanceledTransform"}</code> | <span className="api-desc">Like `SkillCanceledTransform`, but only for the player who used the skill.</span> |
| <Link id="m-localplayerchargedtransform" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" localPlayerChargedTransform"}</code> | <span className="api-desc">Like `SkillChargedTransform`, but only for the player who used the skill.</span> |
| <Link id="m-localplayerexecutedtransform" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" localPlayerExecutedTransform"}</code> | <span className="api-desc">Like `SkillExecutedTransform`, but only for the player who used the skill.</span> |
| <Link id="m-localplayerhitpositionandbladealignedeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionrotationevent">{"PositionRotationEvent"}</Link>{" localPlayerHitPositionAndBladeAlignedEffect"}</code> | <span className="api-desc">Like `hitPositionAndBladeAlignedEffect`, but only for the player who used the skill.</span> |
| <Link id="m-localplayerhitpositioneffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" localPlayerHitPositionEffect"}</code> | <span className="api-desc">Like `hitPositionEffect`, but only for the player who used the skill.</span> |
| <Link id="m-requireshitinformation" /><code>{"private bool requiresHitInformation"}</code> | <span className="api-desc">Whether executing sends the hit point and rotation, so the hit effects can play. Defaults to true.</span> |
| <Link id="m-requireslocalplayeronlyeffect" /><code>{"private bool requiresLocalPlayerOnlyEffect"}</code> | <span className="api-desc">Whether the local-player-only events are used.</span> |
| <Link id="m-skillcanceledtransform" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" SkillCanceledTransform"}</code> | <span className="api-desc">Event invoked at the tool's transform on every client when the skill is cancelled.</span> |
| <Link id="m-skillchargedtransform" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" SkillChargedTransform"}</code> | <span className="api-desc">Event invoked at the tool's transform on every client when the skill becomes charged.</span> |
| <Link id="m-skillchargingstartedtransform" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" SkillChargingStartedTransform"}</code> | <span className="api-desc">Event invoked at the tool's transform on every client when charging starts.</span> |
| <Link id="m-skillexecutedtransform" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" SkillExecutedTransform"}</code> | <span className="api-desc">Event invoked at the tool's transform on every client when the skill is used up.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-inputstructure-2" /><code><Link to="/mod/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" InputStructure { get; }"}</code> | <span className="api-desc">The input pattern (`SkillInputStructure`) that charges and fires this skill.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iinputbasedskill-skill" /><code>{"private "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" IInputBasedSkill.Skill { get; }"}</code> | <span className="api-desc">Explicit `IInputBasedSkill` property: returns this skill.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"virtual void Deregister("}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | <span className="api-desc">Called when an input method for this skill is removed. Empty in the base.</span> |
| <Link id="m-executewithhit" /><code>{"virtual void ExecuteWithHit("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, bool hasHit = true)"}</code> | <span className="api-desc">Executes the skill from a tool hit, storing the hit point and blade rotation when hit information is needed, then sends `Consumed`.</span> |
| <Link id="m-inputchangedstate" /><code>{"virtual void InputChangedState(bool isEnabled, "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | <span className="api-desc">Called when the skill's input turns on or off. Sends charged or cancelled for the held pickup.</span> |
| <Link id="m-lock" /><code>{"override void Lock("}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" targetPlayer)"}</code> | <span className="api-desc">Also deregisters the skill from the player's tool skill helper once its level reaches 0.</span> |
| <Link id="m-register" /><code>{"virtual void Register("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Called when a held pickup or input method is set up for this skill. Empty in the base.</span> |
| <Link id="m-register-2" /><code>{"virtual void Register("}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | <span className="api-desc">Called when a held pickup or input method is set up for this skill. Empty in the base.</span> |
| <Link id="m-sendcancelled" /><code>{"void SendCancelled("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends a cancelled state for the tool entity to the player's chunks.</span> |
| <Link id="m-sendchargingstarted" /><code>{"void SendChargingStarted("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" effectParentEntity, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends a charging started state for the tool entity.</span> |
| <Link id="m-sendconsumed" /><code>{"void SendConsumed("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the executed (consumed) state, fires the skill executed event, then resets the status to cancelled.</span> |
| <Link id="m-sendserializedmessage" /><code>{"override void SendSerializedMessage("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes the skill message. On clients it waits for the tool entity to spawn, then plays the events, sounds and tool effect for the state.</span> |
| <Link id="m-seteffectactive" /><code>{"virtual void SetEffectActive("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isEffectActive)"}</code> | <span className="api-desc">Sends a charged or cancelled state for the pickup to the player's chunks.</span> |
| <Link id="m-unlock" /><code>{"override void Unlock("}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" targetPlayer)"}</code> | <span className="api-desc">Also registers the skill with the player's tool skill helper the first time it is unlocked.</span> |
| <Link id="m-validateexecutionhit" /><code>{"virtual bool ValidateExecutionHit("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | <span className="api-desc">Whether a path hit should execute the skill. The base returns false, so subclasses must override it.</span> |
| <Link id="m-validatepickup" /><code>{"virtual bool ValidatePickup("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> | <span className="api-desc">Whether a held pickup can use this skill. The base allows any.</span> |
| <Link id="m-effectsrequested" /><code>{"protected virtual void EffectsRequested("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" targetEntity, "}<Link to="/mod/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status, bool isReadingForCastingPlayer)"}</code> | <span className="api-desc">Hook for subclasses, called on clients after the state's effects play for the tool entity.</span> |
| <Link id="m-gettransformtocallat" /><code>{"protected virtual Transform GetTransformToCallAt("}<Link to="/mod/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Where the effect events play. The base uses the tool entity's transform.</span> |
| <Link id="m-serializeinternal" /><code>{"protected virtual void SerializeInternal("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Hook for subclasses to add their own data to the skill message.</span> |

## Used in

Members of other types that take, return or hold a `PickupBasedSkill`:

<div className="api-used-in">

[`BlockingCharge.IStrikeSuccessionModifier.TargetSkill`](/mod/game-api/types/global-a-b/blockingcharge#m-istrikesuccessionmodifier-targetskill), [`BlockingCharge.modifiedSkill`](/mod/game-api/types/global-a-b/blockingcharge#m-modifiedskill), [`IStrikeSuccessionModifier.TargetSkill`](/mod/game-api/types/global-i-l/istrikesuccessionmodifier#m-targetskill), [`PickupBasedSkillModifier.modifiedSkill`](/mod/game-api/types/global-p/pickupbasedskillmodifier#m-modifiedskill), [`PickupBasedSkillModifier.ModifiedSkill`](/mod/game-api/types/global-p/pickupbasedskillmodifier#m-modifiedskill-2), [`PlayerToolBasedSkillHelper.activeSkills`](/mod/game-api/types/global-p/playertoolbasedskillhelper#m-activeskills), [`PlayerToolBasedSkillHelper.DeregisterSkill`](/mod/game-api/types/global-p/playertoolbasedskillhelper#m-deregisterskill), [`PlayerToolBasedSkillHelper.RegisterSkill`](/mod/game-api/types/global-p/playertoolbasedskillhelper#m-registerskill), [`PowerStrike.IStrikeSuccessionModifier.TargetSkill`](/mod/game-api/types/global-p/powerstrike#m-istrikesuccessionmodifier-targetskill), [`StrikeSuccessionInput.skill`](/mod/game-api/types/global-s/strikesuccessioninput#m-skill).

</div>
