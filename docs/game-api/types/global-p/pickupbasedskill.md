---
title: "PickupBasedSkill"
description: "Base for skills that work through a held tool, such as charged strikes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupBasedSkill

An **abstract class** in `Root.Township`, no namespace.

Base for skills that work through a held tool, such as charged strikes. A per-player helper registers them when unlocked; their charge, cancel and execute states are sent as skill messages so every client can play the effects.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`ProfessionSkill`](/game-api/types/global-p/professionskill), [`IInputBasedSkill`](/game-api/types/global-i-l/iinputbasedskill), [`IChargeableProfessionSkill`](/game-api/types/global-i-l/ichargeableprofessionskill)
- **Derived types** [`SpecificPickupBasedSkill`](/game-api/types/alta-player/specificpickupbasedskill), [`AreaAttackSkill`](/game-api/types/global-a-b/areaattackskill), [`EmberComposer`](/game-api/types/global-e-h/embercomposer), [`Gatherer`](/game-api/types/global-e-h/gatherer), [`HeartCall`](/game-api/types/global-e-h/heartcall), [`HebiosEnchant`](/game-api/types/global-e-h/hebiosenchant), [`MiningEcho`](/game-api/types/global-m-o/miningecho), [`PowerHit`](/game-api/types/global-p/powerhit), [`PowerStrike`](/game-api/types/global-p/powerstrike), [`SteelSong`](/game-api/types/global-s/steelsong), [`TargetBasedSkill`](/game-api/types/global-t-x/targetbasedskill)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PickupBasedSkill()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"protected "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> | Chunk of the hit position in the last message. |
| <Link id="m-hashitinformation" /><code>{"protected bool hasHitInformation"}</code> | Whether the current message carries a hit position and rotation. |
| <Link id="m-hitposition" /><code>{"protected Vector3 hitPosition"}</code> | Hit position for the current message. |
| <Link id="m-hitrotation" /><code>{"protected Quaternion hitRotation"}</code> | Rotation facing back along the hit direction, used for blade-aligned effects. |
| <Link id="m-pickupidentifier" /><code>{"protected uint pickupIdentifier"}</code> | Entity id of the tool the current message is about. |
| <Link id="m-status" /><code>{"protected "}<Link to="/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status"}</code> | State being sent or received: charging started, charged, consumed or cancelled. |

<details>
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hitpositionandbladealignedeffect" /><code>{"private "}<Link to="/game-api/types/global-p/positionrotationevent">{"PositionRotationEvent"}</Link>{" hitPositionAndBladeAlignedEffect"}</code> | Event invoked with the hit point and a rotation facing back along the hit, aligned to the blade, when the skill executes with a hit. |
| <Link id="m-hitpositioneffect" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" hitPositionEffect"}</code> | Event invoked at the hit point when the skill executes with a hit. |
| <Link id="m-inputstructure" /><code>{"private "}<Link to="/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" inputStructure"}</code> | Backing field for `InputStructure`. Also plays the sound for each status change. |
| <Link id="m-localplayercanceledtransform" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" localPlayerCanceledTransform"}</code> | Like `SkillCanceledTransform`, but only for the player who used the skill. |
| <Link id="m-localplayerchargedtransform" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" localPlayerChargedTransform"}</code> | Like `SkillChargedTransform`, but only for the player who used the skill. |
| <Link id="m-localplayerexecutedtransform" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" localPlayerExecutedTransform"}</code> | Like `SkillExecutedTransform`, but only for the player who used the skill. |
| <Link id="m-localplayerhitpositionandbladealignedeffect" /><code>{"private "}<Link to="/game-api/types/global-p/positionrotationevent">{"PositionRotationEvent"}</Link>{" localPlayerHitPositionAndBladeAlignedEffect"}</code> | Like `hitPositionAndBladeAlignedEffect`, but only for the player who used the skill. |
| <Link id="m-localplayerhitpositioneffect" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" localPlayerHitPositionEffect"}</code> | Like `hitPositionEffect`, but only for the player who used the skill. |
| <Link id="m-requireshitinformation" /><code>{"private bool requiresHitInformation"}</code> | Whether executing sends the hit point and rotation, so the hit effects can play. Defaults to true. |
| <Link id="m-requireslocalplayeronlyeffect" /><code>{"private bool requiresLocalPlayerOnlyEffect"}</code> | Whether the local-player-only events are used. |
| <Link id="m-skillcanceledtransform" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" SkillCanceledTransform"}</code> | Event invoked at the tool's transform on every client when the skill is cancelled. |
| <Link id="m-skillchargedtransform" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" SkillChargedTransform"}</code> | Event invoked at the tool's transform on every client when the skill becomes charged. |
| <Link id="m-skillchargingstartedtransform" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" SkillChargingStartedTransform"}</code> | Event invoked at the tool's transform on every client when charging starts. |
| <Link id="m-skillexecutedtransform" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" SkillExecutedTransform"}</code> | Event invoked at the tool's transform on every client when the skill is used up. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-inputstructure-2" /><code><Link to="/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" InputStructure { get; }"}</code> | The input pattern (`SkillInputStructure`) that charges and fires this skill. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iinputbasedskill-skill" /><code>{"private "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" IInputBasedSkill.Skill { get; }"}</code> | Explicit `IInputBasedSkill` property: returns this skill. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"virtual void Deregister("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | Called when an input method for this skill is removed. Empty in the base. |
| <Link id="m-executewithhit" /><code>{"virtual void ExecuteWithHit("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, bool hasHit = true)"}</code> | Executes the skill from a tool hit, storing the hit point and blade rotation when hit information is needed, then sends `Consumed`. |
| <Link id="m-inputchangedstate" /><code>{"virtual void InputChangedState(bool isEnabled, "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | Called when the skill's input turns on or off. Sends charged or cancelled for the held pickup. |
| <Link id="m-lock" /><code>{"override void Lock("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" targetPlayer)"}</code> | Also deregisters the skill from the player's tool skill helper once its level reaches 0. |
| <Link id="m-register" /><code>{"virtual void Register("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> | Called when a held pickup or input method is set up for this skill. Empty in the base. |
| <Link id="m-register-2" /><code>{"virtual void Register("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | Called when a held pickup or input method is set up for this skill. Empty in the base. |
| <Link id="m-sendcancelled" /><code>{"void SendCancelled("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends a cancelled state for the tool entity to the player's chunks. |
| <Link id="m-sendchargingstarted" /><code>{"void SendChargingStarted("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" effectParentEntity, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends a charging started state for the tool entity. |
| <Link id="m-sendconsumed" /><code>{"void SendConsumed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the executed (consumed) state, fires the skill executed event, then resets the status to cancelled. |
| <Link id="m-sendserializedmessage" /><code>{"override void SendSerializedMessage("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the skill message. On clients it waits for the tool entity to spawn, then plays the events, sounds and tool effect for the state. |
| <Link id="m-seteffectactive" /><code>{"virtual void SetEffectActive("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isEffectActive)"}</code> | Sends a charged or cancelled state for the pickup to the player's chunks. |
| <Link id="m-unlock" /><code>{"override void Unlock("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" targetPlayer)"}</code> | Also registers the skill with the player's tool skill helper the first time it is unlocked. |
| <Link id="m-validateexecutionhit" /><code>{"virtual bool ValidateExecutionHit("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | Whether a path hit should execute the skill. The base returns false, so subclasses must override it. |
| <Link id="m-validatepickup" /><code>{"virtual bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> | Whether a held pickup can use this skill. The base allows any. |
| <Link id="m-effectsrequested" /><code>{"protected virtual void EffectsRequested("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" targetEntity, "}<Link to="/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status, bool isReadingForCastingPlayer)"}</code> | Hook for subclasses, called on clients after the state's effects play for the tool entity. |
| <Link id="m-gettransformtocallat" /><code>{"protected virtual Transform GetTransformToCallAt("}<Link to="/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Where the effect events play. The base uses the tool entity's transform. |
| <Link id="m-serializeinternal" /><code>{"protected virtual void SerializeInternal("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Hook for subclasses to add their own data to the skill message. |

## Used in

Members of other types that take, return or hold a `PickupBasedSkill`:

[`BlockingCharge.IStrikeSuccessionModifier.TargetSkill`](/game-api/types/global-a-b/blockingcharge#m-istrikesuccessionmodifier-targetskill), [`BlockingCharge.modifiedSkill`](/game-api/types/global-a-b/blockingcharge#m-modifiedskill), [`IStrikeSuccessionModifier.TargetSkill`](/game-api/types/global-i-l/istrikesuccessionmodifier#m-targetskill), [`PickupBasedSkillModifier.modifiedSkill`](/game-api/types/global-p/pickupbasedskillmodifier#m-modifiedskill), [`PickupBasedSkillModifier.ModifiedSkill`](/game-api/types/global-p/pickupbasedskillmodifier#m-modifiedskill-2), [`PlayerToolBasedSkillHelper.activeSkills`](/game-api/types/global-p/playertoolbasedskillhelper#m-activeskills), [`PlayerToolBasedSkillHelper.DeregisterSkill`](/game-api/types/global-p/playertoolbasedskillhelper#m-deregisterskill), [`PlayerToolBasedSkillHelper.RegisterSkill`](/game-api/types/global-p/playertoolbasedskillhelper#m-registerskill), [`PowerStrike.IStrikeSuccessionModifier.TargetSkill`](/game-api/types/global-p/powerstrike#m-istrikesuccessionmodifier-targetskill), [`StrikeSuccessionInput.skill`](/game-api/types/global-s/strikesuccessioninput#m-skill).
