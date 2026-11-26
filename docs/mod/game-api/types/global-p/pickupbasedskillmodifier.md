---
title: "PickupBasedSkillModifier"
description: "Base for a skill that changes how a held tool's skill works while active, for example a charged attack."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupBasedSkillModifier

An **abstract class** in `Root.Township`, the global namespace.

Base for a skill that changes how a held tool's skill works while active, for example a charged attack. Registers with the player's `PlayerToolBasedSkillHelper` when learnt and syncs its status (charging, charged, consumed, cancelled) to other clients.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`ProfessionSkill`](/mod/game-api/types/global-p/professionskill), [`IInputBasedSkill`](/mod/game-api/types/global-i-l/iinputbasedskill), [`IChargeableProfessionSkill`](/mod/game-api/types/global-i-l/ichargeableprofessionskill)
- **Derived types** [`BowMultiArrowShot`](/mod/game-api/types/alta-player/bowmultiarrowshot), [`ForgingHeartCallModifier`](/mod/game-api/types/global-e-h/forgingheartcallmodifier)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PickupBasedSkillModifier()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-pickupidentifier" /><code>{"protected uint pickupIdentifier"}</code> | <span className="api-desc">Entity identifier of the pickup in the last status message.</span> |
| <Link id="m-status" /><code>{"protected "}<Link to="/mod/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status"}</code> | <span className="api-desc">The status in the last message.</span> |

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-inputstructure" /><code>{"private "}<Link to="/mod/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" inputStructure"}</code> | <span className="api-desc">Input needed to trigger the modifier.</span> |
| <Link id="m-isexclusive" /><code>{"private bool isExclusive"}</code> | <span className="api-desc">When true, activating this modifier turns off the other modifiers on the held pickup.</span> |
| <Link id="m-modifiedskill" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupbasedskill">{"PickupBasedSkill"}</Link>{" modifiedSkill"}</code> | <span className="api-desc">The pickup based skill this modifier changes.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-modifiedskill-2" /><code><Link to="/mod/game-api/types/global-p/pickupbasedskill">{"PickupBasedSkill"}</Link>{" ModifiedSkill { get; }"}</code> | <span className="api-desc">The pickup skill this modifier changes.</span> |

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iinputbasedskill-inputstructure" /><code>{"private "}<Link to="/mod/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" IInputBasedSkill.InputStructure { get; }"}</code> | <span className="api-desc">Returns `inputStructure`.</span> |
| <Link id="m-iinputbasedskill-skill" /><code>{"private "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" IInputBasedSkill.Skill { get; }"}</code> | <span className="api-desc">Returns this skill.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"virtual void Deregister("}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | <span className="api-desc">Hook for when the modifier is removed from a held pickup. Does nothing by default.</span> |
| <Link id="m-executewithhit" /><code>{"virtual void ExecuteWithHit("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, bool hasHit)"}</code> | <span className="api-desc">Hook for when the tool hits something while modified. Does nothing by default.</span> |
| <Link id="m-inputchangedstate" /><code>{"virtual void InputChangedState(bool isActive, "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | <span className="api-desc">When the input turns on: marks it charged, applies `Modify`, turns off other modifiers if exclusive, and syncs.</span> |
| <Link id="m-lock" /><code>{"override void Lock("}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" targetPlayer)"}</code> | <span className="api-desc">Removes the skill and deregisters it from the tool skill helper when its level drops to 0.</span> |
| <Link id="m-register" /><code>{"virtual void Register("}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | <span className="api-desc">Hook for when the modifier is added to a held pickup. Does nothing by default.</span> |
| <Link id="m-requiredsetactive" /><code>{"void RequiredSetActive(bool isActive, "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | <span className="api-desc">Turns the input on next frame, or cancels the skill, syncs and deregisters it.</span> |
| <Link id="m-sendcancelled" /><code>{"void SendCancelled("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Marks the skill cancelled for a pickup and syncs it.</span> |
| <Link id="m-sendchargingstarted" /><code>{"void SendChargingStarted("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Marks the skill as charging for a pickup and syncs it.</span> |
| <Link id="m-sendconsumed" /><code>{"void SendConsumed("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Marks the skill used up for a pickup, syncs it and executes the skill for the player.</span> |
| <Link id="m-sendserializedmessage" /><code>{"override void SendSerializedMessage("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the pickup and status. Clients then play or release the tool effect.</span> |
| <Link id="m-unlock" /><code>{"override void Unlock("}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" targetPlayer)"}</code> | <span className="api-desc">Adds the skill and registers it with the tool skill helper at level 1.</span> |
| <Link id="m-validateexecutionhit" /><code>{"virtual bool ValidateExecutionHit("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | <span className="api-desc">Whether a hit counts as executing this skill. False by default.</span> |
| <Link id="m-validatepickup" /><code>{"virtual bool ValidatePickup("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> | <span className="api-desc">Whether the skill can apply to a held pickup. True by default.</span> |
| <Link id="m-activatedonremote" /><code>{"protected virtual void ActivatedOnRemote()"}</code> | <span className="api-desc">Hook run on other clients when the skill's status message arrives.</span> |
| <Link id="m-getidentifier" /><code>{"protected virtual uint GetIdentifier("}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | <span className="api-desc">Entity identifier of the pickup the skill applies to; by default the held pickup.</span> |
| <Link id="m-handleskillstatus" /><code>{"protected virtual void HandleSkillStatus("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status)"}</code> | <span className="api-desc">Hook run on clients with the synced status and pickup entity.</span> |
| <Link id="m-modify" /><code>{"protected abstract void Modify("}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | <span className="api-desc">Applies the change to the held pickup's skill. Implement in subclasses.</span> |

## Used in

Members of other types that take, return or hold a `PickupBasedSkillModifier`:

<div className="api-used-in">

[`PlayerToolBasedSkillHelper.activeSkills`](/mod/game-api/types/global-p/playertoolbasedskillhelper#m-activeskills), [`PlayerToolBasedSkillHelper.DeactivateOtherModifiers`](/mod/game-api/types/global-p/playertoolbasedskillhelper#m-deactivateothermodifiers), [`PlayerToolBasedSkillHelper.DeregisterSkillModifier`](/mod/game-api/types/global-p/playertoolbasedskillhelper#m-deregisterskillmodifier), [`PlayerToolBasedSkillHelper.RegisterSkillModifier`](/mod/game-api/types/global-p/playertoolbasedskillhelper#m-registerskillmodifier).

</div>
