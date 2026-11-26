---
title: "PickupBasedSkillModifier"
description: "Base for a skill that changes how a held tool's skill works while active, for example a charged attack."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupBasedSkillModifier

An **abstract class** in `Root.Township`, no namespace.

Base for a skill that changes how a held tool's skill works while active, for example a charged attack. Registers with the player's `PlayerToolBasedSkillHelper` when learnt and syncs its status (charging, charged, consumed, cancelled) to other clients.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`ProfessionSkill`](/game-api/types/global-p/professionskill), [`IInputBasedSkill`](/game-api/types/global-i-l/iinputbasedskill), [`IChargeableProfessionSkill`](/game-api/types/global-i-l/ichargeableprofessionskill)
- **Derived types** [`BowMultiArrowShot`](/game-api/types/alta-player/bowmultiarrowshot), [`ForgingHeartCallModifier`](/game-api/types/global-e-h/forgingheartcallmodifier)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected PickupBasedSkillModifier()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-pickupidentifier" /><code>{"protected uint pickupIdentifier"}</code> | Entity identifier of the pickup in the last status message. |
| <Link id="m-status" /><code>{"protected "}<Link to="/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status"}</code> | The status in the last message. |

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-inputstructure" /><code>{"private "}<Link to="/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" inputStructure"}</code> | Input needed to trigger the modifier. |
| <Link id="m-isexclusive" /><code>{"private bool isExclusive"}</code> | When true, activating this modifier turns off the other modifiers on the held pickup. |
| <Link id="m-modifiedskill" /><code>{"private "}<Link to="/game-api/types/global-p/pickupbasedskill">{"PickupBasedSkill"}</Link>{" modifiedSkill"}</code> | The pickup based skill this modifier changes. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-modifiedskill-2" /><code><Link to="/game-api/types/global-p/pickupbasedskill">{"PickupBasedSkill"}</Link>{" ModifiedSkill { get; }"}</code> | The pickup skill this modifier changes. |

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iinputbasedskill-inputstructure" /><code>{"private "}<Link to="/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" IInputBasedSkill.InputStructure { get; }"}</code> | Returns `inputStructure`. |
| <Link id="m-iinputbasedskill-skill" /><code>{"private "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" IInputBasedSkill.Skill { get; }"}</code> | Returns this skill. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"virtual void Deregister("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | Hook for when the modifier is removed from a held pickup. Does nothing by default. |
| <Link id="m-executewithhit" /><code>{"virtual void ExecuteWithHit("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, bool hasHit)"}</code> | Hook for when the tool hits something while modified. Does nothing by default. |
| <Link id="m-inputchangedstate" /><code>{"virtual void InputChangedState(bool isActive, "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | When the input turns on: marks it charged, applies `Modify`, turns off other modifiers if exclusive, and syncs. |
| <Link id="m-lock" /><code>{"override void Lock("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" targetPlayer)"}</code> | Removes the skill and deregisters it from the tool skill helper when its level drops to 0. |
| <Link id="m-register" /><code>{"virtual void Register("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | Hook for when the modifier is added to a held pickup. Does nothing by default. |
| <Link id="m-requiredsetactive" /><code>{"void RequiredSetActive(bool isActive, "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | Turns the input on next frame, or cancels the skill, syncs and deregisters it. |
| <Link id="m-sendcancelled" /><code>{"void SendCancelled("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Marks the skill cancelled for a pickup and syncs it. |
| <Link id="m-sendchargingstarted" /><code>{"void SendChargingStarted("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Marks the skill as charging for a pickup and syncs it. |
| <Link id="m-sendconsumed" /><code>{"void SendConsumed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Marks the skill used up for a pickup, syncs it and executes the skill for the player. |
| <Link id="m-sendserializedmessage" /><code>{"override void SendSerializedMessage("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the pickup and status. Clients then play or release the tool effect. |
| <Link id="m-unlock" /><code>{"override void Unlock("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" targetPlayer)"}</code> | Adds the skill and registers it with the tool skill helper at level 1. |
| <Link id="m-validateexecutionhit" /><code>{"virtual bool ValidateExecutionHit("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | Whether a hit counts as executing this skill. False by default. |
| <Link id="m-validatepickup" /><code>{"virtual bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> | Whether the skill can apply to a held pickup. True by default. |
| <Link id="m-activatedonremote" /><code>{"protected virtual void ActivatedOnRemote()"}</code> | Hook run on other clients when the skill's status message arrives. |
| <Link id="m-getidentifier" /><code>{"protected virtual uint GetIdentifier("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | Entity identifier of the pickup the skill applies to; by default the held pickup. |
| <Link id="m-handleskillstatus" /><code>{"protected virtual void HandleSkillStatus("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status)"}</code> | Hook run on clients with the synced status and pickup entity. |
| <Link id="m-modify" /><code>{"protected abstract void Modify("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | Applies the change to the held pickup's skill. Implement in subclasses. |

## Used in

Members of other types that take, return or hold a `PickupBasedSkillModifier`:

[`PlayerToolBasedSkillHelper.activeSkills`](/game-api/types/global-p/playertoolbasedskillhelper#m-activeskills), [`PlayerToolBasedSkillHelper.DeactivateOtherModifiers`](/game-api/types/global-p/playertoolbasedskillhelper#m-deactivateothermodifiers), [`PlayerToolBasedSkillHelper.DeregisterSkillModifier`](/game-api/types/global-p/playertoolbasedskillhelper#m-deregisterskillmodifier), [`PlayerToolBasedSkillHelper.RegisterSkillModifier`](/game-api/types/global-p/playertoolbasedskillhelper#m-registerskillmodifier).
