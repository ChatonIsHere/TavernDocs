---
title: "TargetBasedSkill"
description: "Base for charged tool skills that show a target on the struck object and fire when the player hits it, such as PowerStinger and PowerCrossSlash."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TargetBasedSkill

An **abstract class** in `Root.Township`, the global namespace.

Base for charged tool skills that show a target on the struck object and fire when the player hits it, such as `PowerStinger` and `PowerCrossSlash`. The client reports the hit and the server runs the skill.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`PickupBasedSkill`](/mod/game-api/types/global-p/pickupbasedskill)
- **Derived types** [`PowerCrossSlash`](/mod/game-api/types/global-p/powercrossslash), [`PowerStinger`](/mod/game-api/types/global-p/powerstinger)
- **Nested types** [`ClientHitInput`](/mod/game-api/types/global-t-x/targetbasedskill-clienthitinput)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected TargetBasedSkill()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-clienthitinput" /><code>{"protected "}<Link to="/mod/game-api/types/global-t-x/targetbasedskill-clienthitinput">{"TargetBasedSkill.ClientHitInput"}</Link>{" clientHitInput"}</code> | <span className="api-desc">The last hit the client reported: position, direction, up, damage and impact type.</span> |

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activehandlermap" /><code>{"private Dictionary<uint, "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> activeHandlerMap"}</code> | <span className="api-desc">Active skill inputs by tool entity ID, so a client-reported hit can be matched to its input on the server.</span> |
| <Link id="m-activetargets" /><code>{"private Dictionary<uint, "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> activeTargets"}</code> | <span className="api-desc">Pooled target markers shown on the local player's charged tools, by tool entity ID.</span> |
| <Link id="m-impacttypefilter" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impacttypefilter">{"ImpactTypeFilter"}</Link>{" impactTypeFilter"}</code> | <span className="api-desc">Which tools and impact types this skill accepts.</span> |
| <Link id="m-isexecutingonclient" /><code>{"private bool isExecutingOnClient"}</code> | <span className="api-desc">Set while sending a client hit report, so the next message carries the hit instead of the base skill data.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-executeonclient" /><code>{"virtual void ExecuteOnClient(uint toolIdentifier, Vector3 position, Vector3 direction, Vector3 up, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit)"}</code> | <span className="api-desc">Client: stores the hit position, direction and damage, removes the target and sends the skill message to the server. Called by `SkillHitTarget`.</span> |
| <Link id="m-inputchangedstate" /><code>{"override void InputChangedState(bool isEnabled, "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | <span className="api-desc">Remembers or forgets the input method for the tool, so the server can find it when the client's hit arrives.</span> |
| <Link id="m-sendserializedmessage" /><code>{"override void SendSerializedMessage("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Carries the client's hit input and tool ID. On the server it runs the skill for the matching input and resets that input.</span> |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> | <span className="api-desc">True if the base check passes, the held item is a tool, and its impact types pass the skill's filter.</span> |
| <Link id="m-validatetargethit" /><code>{"virtual bool ValidateTargetHit("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit)"}</code> | <span className="api-desc">True if the hit's impact type passes the skill's filter.</span> |
| <Link id="m-effectsrequested" /><code>{"protected override void EffectsRequested("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" targetEntity, "}<Link to="/mod/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status, bool isLocalPlayer)"}</code> | <span className="api-desc">Clears any old target on the entity and, when the skill is charged for the local player, places a new hit target on it.</span> |
| <Link id="m-placetarget" /><code>{"protected abstract "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" PlaceTarget()"}</code> | <span className="api-desc">Spawns the pooled hit target object for this skill.</span> |

## Used in

Members of other types that take, return or hold a `TargetBasedSkill`:

<div className="api-used-in">

[`SkillHitTarget.InitializeTarget`](/mod/game-api/types/global-s/skillhittarget#m-initializetarget), [`SkillHitTarget.skill`](/mod/game-api/types/global-s/skillhittarget#m-skill).

</div>
