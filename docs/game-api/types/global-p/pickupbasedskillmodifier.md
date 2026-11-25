---
title: "PickupBasedSkillModifier"
description: "abstract class PickupBasedSkillModifier in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupBasedSkillModifier

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`ProfessionSkill`](/game-api/types/global-p/professionskill), [`IInputBasedSkill`](/game-api/types/global-i-l/iinputbasedskill), [`IChargeableProfessionSkill`](/game-api/types/global-i-l/ichargeableprofessionskill)
- **Derived types** [`BowMultiArrowShot`](/game-api/types/alta-player/bowmultiarrowshot), [`ForgingHeartCallModifier`](/game-api/types/global-e-h/forgingheartcallmodifier)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PickupBasedSkillModifier()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-inputstructure" /><code>{"private "}<Link to="/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" inputStructure"}</code> |  |
| <Link id="m-isexclusive" /><code>{"private bool isExclusive"}</code> |  |
| <Link id="m-modifiedskill" /><code>{"private "}<Link to="/game-api/types/global-p/pickupbasedskill">{"PickupBasedSkill"}</Link>{" modifiedSkill"}</code> |  |
| <Link id="m-pickupidentifier" /><code>{"protected uint pickupIdentifier"}</code> |  |
| <Link id="m-status" /><code>{"protected "}<Link to="/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-modifiedskill-2" /><code><Link to="/game-api/types/global-p/pickupbasedskill">{"PickupBasedSkill"}</Link>{" ModifiedSkill { get; }"}</code> |  |
| <Link id="m-iinputbasedskill-inputstructure" /><code>{"private "}<Link to="/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" IInputBasedSkill.InputStructure { get; }"}</code> |  |
| <Link id="m-iinputbasedskill-skill" /><code>{"private "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" IInputBasedSkill.Skill { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"virtual void Deregister("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> |  |
| <Link id="m-executewithhit" /><code>{"virtual void ExecuteWithHit("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, bool hasHit)"}</code> |  |
| <Link id="m-inputchangedstate" /><code>{"virtual void InputChangedState(bool isActive, "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> |  |
| <Link id="m-lock" /><code>{"override void Lock("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" targetPlayer)"}</code> |  |
| <Link id="m-register" /><code>{"virtual void Register("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> |  |
| <Link id="m-requiredsetactive" /><code>{"void RequiredSetActive(bool isActive, "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> |  |
| <Link id="m-sendcancelled" /><code>{"void SendCancelled("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-sendchargingstarted" /><code>{"void SendChargingStarted("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-sendconsumed" /><code>{"void SendConsumed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-sendserializedmessage" /><code>{"override void SendSerializedMessage("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-unlock" /><code>{"override void Unlock("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" targetPlayer)"}</code> |  |
| <Link id="m-validateexecutionhit" /><code>{"virtual bool ValidateExecutionHit("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> |  |
| <Link id="m-validatepickup" /><code>{"virtual bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> |  |
| <Link id="m-activatedonremote" /><code>{"protected virtual void ActivatedOnRemote()"}</code> |  |
| <Link id="m-getidentifier" /><code>{"protected virtual uint GetIdentifier("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> |  |
| <Link id="m-handleskillstatus" /><code>{"protected virtual void HandleSkillStatus("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status)"}</code> |  |
| <Link id="m-modify" /><code>{"protected abstract void Modify("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PickupBasedSkillModifier`:

[`PlayerToolBasedSkillHelper.activeSkills`](/game-api/types/global-p/playertoolbasedskillhelper#m-activeskills), [`PlayerToolBasedSkillHelper.DeactivateOtherModifiers`](/game-api/types/global-p/playertoolbasedskillhelper#m-deactivateothermodifiers), [`PlayerToolBasedSkillHelper.DeregisterSkillModifier`](/game-api/types/global-p/playertoolbasedskillhelper#m-deregisterskillmodifier), [`PlayerToolBasedSkillHelper.RegisterSkillModifier`](/game-api/types/global-p/playertoolbasedskillhelper#m-registerskillmodifier).
