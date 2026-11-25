---
title: "TargetBasedSkill"
description: "abstract class TargetBasedSkill in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TargetBasedSkill

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`PickupBasedSkill`](/game-api/types/global-p/pickupbasedskill)
- **Derived types** [`PowerCrossSlash`](/game-api/types/global-p/powercrossslash), [`PowerStinger`](/game-api/types/global-p/powerstinger)
- **Nested types** [`ClientHitInput`](/game-api/types/global-t-x/targetbasedskill-clienthitinput)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected TargetBasedSkill()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activehandlermap" /><code>{"private Dictionary<uint, "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> activeHandlerMap"}</code> |  |
| <Link id="m-activetargets" /><code>{"private Dictionary<uint, "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> activeTargets"}</code> |  |
| <Link id="m-clienthitinput" /><code>{"protected "}<Link to="/game-api/types/global-t-x/targetbasedskill-clienthitinput">{"TargetBasedSkill.ClientHitInput"}</Link>{" clientHitInput"}</code> |  |
| <Link id="m-impacttypefilter" /><code>{"private "}<Link to="/game-api/types/alta-items/impacttypefilter">{"ImpactTypeFilter"}</Link>{" impactTypeFilter"}</code> |  |
| <Link id="m-isexecutingonclient" /><code>{"private bool isExecutingOnClient"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-executeonclient" /><code>{"virtual void ExecuteOnClient(uint toolIdentifier, Vector3 position, Vector3 direction, Vector3 up, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit)"}</code> |  |
| <Link id="m-inputchangedstate" /><code>{"override void InputChangedState(bool isEnabled, "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> |  |
| <Link id="m-sendserializedmessage" /><code>{"override void SendSerializedMessage("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> |  |
| <Link id="m-validatetargethit" /><code>{"virtual bool ValidateTargetHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit)"}</code> |  |
| <Link id="m-effectsrequested" /><code>{"protected override void EffectsRequested("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" targetEntity, "}<Link to="/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status, bool isLocalPlayer)"}</code> |  |
| <Link id="m-placetarget" /><code>{"protected abstract "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" PlaceTarget()"}</code> |  |

## Used in

Members of other types that take, return or hold a `TargetBasedSkill`:

[`SkillHitTarget.InitializeTarget`](/game-api/types/global-s/skillhittarget#m-initializetarget), [`SkillHitTarget.skill`](/game-api/types/global-s/skillhittarget#m-skill).
