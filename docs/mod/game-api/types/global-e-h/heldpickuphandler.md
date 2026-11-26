---
title: "HeldPickupHandler"
description: "Tracks one pickup a player is holding and the skill inputs registered for it, and passes tool hits to those skills."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeldPickupHandler

A **class** in `Root.Township`, the global namespace.

Tracks one pickup a player is holding and the skill inputs registered for it, and passes tool hits to those skills. Created by `PlayerToolBasedSkillHelper` when an interaction starts.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HeldPickupHandler("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-p/playertoolbasedskillhelper">{"PlayerToolBasedSkillHelper"}</Link>{" playerHelper)"}</code> | Creates a `HeldPickupHandler` from `pickup` and `playerHelper`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-inputstoreset" /><code>{"private static HashSet<"}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> inputstoReset"}</code> | Shared scratch set of skill inputs to reset after `ReceiveHit` has run every skill. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hastool" /><code>{"bool HasTool { get; }"}</code> | True if the pickup has an `ImpactTool`. |
| <Link id="m-inputs" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{", "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> Inputs { get; }"}</code> | Input methods by input structure, shared by skills that use the same structure. |
| <Link id="m-isupdating" /><code>{"bool IsUpdating { get; private set; }"}</code> | True while the handler is registered for per-frame updates. |
| <Link id="m-pickup" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | The held pickup. |
| <Link id="m-playerhelper" /><code><Link to="/mod/game-api/types/global-p/playertoolbasedskillhelper">{"PlayerToolBasedSkillHelper"}</Link>{" PlayerHelper { get; }"}</code> | The player's tool skill helper that owns this handler. |
| <Link id="m-skillstoinputs" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/global-i-l/iinputbasedskill">{"IInputBasedSkill"}</Link>{", "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> SkillsToInputs { get; }"}</code> | Which input each registered skill listens to. |
| <Link id="m-tool" /><code><Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" Tool { get; }"}</code> | The pickup's `ImpactTool`, or null. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Clears every input and deregisters every skill from it. |
| <Link id="m-deregisterskill" /><code>{"void DeregisterSkill("}<Link to="/mod/game-api/types/global-i-l/iinputbasedskill">{"IInputBasedSkill"}</Link>{" skill)"}</code> | Removes one skill. The input is dropped once no skill uses it, and updates stop when no input needs them. |
| <Link id="m-receivehit" /><code>{"void ReceiveHit("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | Passes a tool hit to each skill. Active inputs whose skill accepts the hit execute it, then reset. |
| <Link id="m-registertoinput" /><code><Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" RegisterToInput("}<Link to="/mod/game-api/types/global-i-l/iinputbasedskill">{"IInputBasedSkill"}</Link>{" skill)"}</code> | Gets or creates the input for a skill's input structure and links the skill to it. |
| <Link id="m-update" /><code>{"void Update()"}</code> | Updates every input that needs per-frame updates. |

## Used in

Members of other types that take, return or hold a `HeldPickupHandler`:

[`SpecificPickupBasedSkill.ValidatePickup`](/mod/game-api/types/alta-player/specificpickupbasedskill#m-validatepickup), [`AreaAttackSkill.ExecuteWithHit`](/mod/game-api/types/global-a-b/areaattackskill#m-executewithhit), [`AreaAttackSkill.ValidatePickup`](/mod/game-api/types/global-a-b/areaattackskill#m-validatepickup), [`BowStringPullbackInputMethod.handler`](/mod/game-api/types/global-a-b/bowstringpullbackinputmethod#m-handler), [`BowStringPullbackInputMethod.ISkillInputMethod.Handler`](/mod/game-api/types/global-a-b/bowstringpullbackinputmethod#m-iskillinputmethod-handler), [`BowStringPullbackInputMethod.ReceiveHit`](/mod/game-api/types/global-a-b/bowstringpullbackinputmethod#m-receivehit), [`BowStringPullbackInputMethod.RegisterHandler`](/mod/game-api/types/global-a-b/bowstringpullbackinputmethod#m-registerhandler), [`DownwardSwingInput.Handler`](/mod/game-api/types/global-c-d/downwardswinginput#m-handler), [`DownwardSwingInput.ReceiveHit`](/mod/game-api/types/global-c-d/downwardswinginput#m-receivehit), [`DownwardSwingInput.RegisterHandler`](/mod/game-api/types/global-c-d/downwardswinginput#m-registerhandler), [`EmberComposer.ValidatePickup`](/mod/game-api/types/global-e-h/embercomposer#m-validatepickup), [`Gatherer.Dock`](/mod/game-api/types/global-e-h/gatherer#m-dock), [`Gatherer.DockDelay`](/mod/game-api/types/global-e-h/gatherer#m-dockdelay-2), [`Gatherer.ValidatePickup`](/mod/game-api/types/global-e-h/gatherer#m-validatepickup), [`HandOnSideStructure.IsInPositionInternal`](/mod/game-api/types/global-e-h/handonsidestructure#m-isinpositioninternal), [`HandPositionInput.Handler`](/mod/game-api/types/global-e-h/handpositioninput#m-handler), [`HandPositionInput.ReceiveHit`](/mod/game-api/types/global-e-h/handpositioninput#m-receivehit), [`HandPositionInput.RegisterHandler`](/mod/game-api/types/global-e-h/handpositioninput#m-registerhandler), [`HandPositionInputModifier.ModifyIsInPosition`](/mod/game-api/types/global-e-h/handpositioninputmodifier#m-modifyisinposition), [`HandPositionStructure.IsInPosition`](/mod/game-api/types/global-e-h/handpositionstructure#m-isinposition), [`HandPositionStructure.IsInPositionInternal`](/mod/game-api/types/global-e-h/handpositionstructure#m-isinpositioninternal), [`HandToHeartInputStructure.IsInPositionInternal`](/mod/game-api/types/global-e-h/handtoheartinputstructure#m-isinpositioninternal), [`HeartCall.Register`](/mod/game-api/types/global-e-h/heartcall#m-register), [`HeartCall.ValidatePickup`](/mod/game-api/types/global-e-h/heartcall#m-validatepickup), [`HebiosEnchant.ExecuteWithHit`](/mod/game-api/types/global-e-h/hebiosenchant#m-executewithhit), [`HebiosEnchant.ValidatePickup`](/mod/game-api/types/global-e-h/hebiosenchant#m-validatepickup), [`IInputBasedSkill.ExecuteWithHit`](/mod/game-api/types/global-i-l/iinputbasedskill#m-executewithhit), [`IInputBasedSkill.ValidatePickup`](/mod/game-api/types/global-i-l/iinputbasedskill#m-validatepickup), [`ISkillInputMethod.Handler`](/mod/game-api/types/global-i-l/iskillinputmethod#m-handler), [`ISkillInputMethod.ReceiveHit`](/mod/game-api/types/global-i-l/iskillinputmethod#m-receivehit), [`ISkillInputMethod.RegisterHandler`](/mod/game-api/types/global-i-l/iskillinputmethod#m-registerhandler), [`MiningEcho.ExecuteWithHit`](/mod/game-api/types/global-m-o/miningecho#m-executewithhit), [`MiningEcho.ValidatePickup`](/mod/game-api/types/global-m-o/miningecho#m-validatepickup), [`PickupBasedSkill.ExecuteWithHit`](/mod/game-api/types/global-p/pickupbasedskill#m-executewithhit), [`PickupBasedSkill.Register`](/mod/game-api/types/global-p/pickupbasedskill#m-register), [`PickupBasedSkill.ValidatePickup`](/mod/game-api/types/global-p/pickupbasedskill#m-validatepickup), [`PickupBasedSkillModifier.ExecuteWithHit`](/mod/game-api/types/global-p/pickupbasedskillmodifier#m-executewithhit), [`PickupBasedSkillModifier.ValidatePickup`](/mod/game-api/types/global-p/pickupbasedskillmodifier#m-validatepickup), [`PickupGrabInputMethod.handler`](/mod/game-api/types/global-p/pickupgrabinputmethod#m-handler), [`PickupGrabInputMethod.ISkillInputMethod.Handler`](/mod/game-api/types/global-p/pickupgrabinputmethod#m-iskillinputmethod-handler), [`PickupGrabInputMethod.ReceiveHit`](/mod/game-api/types/global-p/pickupgrabinputmethod#m-receivehit), [`PickupGrabInputMethod.RegisterHandler`](/mod/game-api/types/global-p/pickupgrabinputmethod#m-registerhandler), [`PlayerToolBasedSkillHelper.ActivateInput`](/mod/game-api/types/global-p/playertoolbasedskillhelper#m-activateinput), [`PlayerToolBasedSkillHelper.DeactivateOtherModifiers`](/mod/game-api/types/global-p/playertoolbasedskillhelper#m-deactivateothermodifiers), [`PlayerToolBasedSkillHelper.DeregisterUpdate`](/mod/game-api/types/global-p/playertoolbasedskillhelper#m-deregisterupdate), [`PlayerToolBasedSkillHelper.HeldInteractables`](/mod/game-api/types/global-p/playertoolbasedskillhelper#m-heldinteractables), [`PlayerToolBasedSkillHelper.RegisterUpdate`](/mod/game-api/types/global-p/playertoolbasedskillhelper#m-registerupdate), [`PlayerToolBasedSkillHelper.ValidatePickupHandler`](/mod/game-api/types/global-p/playertoolbasedskillhelper#m-validatepickuphandler), [`PowerCrossSlash.ExecuteWithHit`](/mod/game-api/types/global-p/powercrossslash#m-executewithhit), [`PowerCrossSlash.ValidatePickup`](/mod/game-api/types/global-p/powercrossslash#m-validatepickup), [`PowerHit.ExecuteWithHit`](/mod/game-api/types/global-p/powerhit#m-executewithhit), [`PowerHit.ValidatePickup`](/mod/game-api/types/global-p/powerhit#m-validatepickup), [`PowerStinger.ExecuteWithHit`](/mod/game-api/types/global-p/powerstinger#m-executewithhit), [`PowerStinger.ValidatePickup`](/mod/game-api/types/global-p/powerstinger#m-validatepickup), [`PowerStrike.ExecuteWithHit`](/mod/game-api/types/global-p/powerstrike#m-executewithhit), [`PowerStrike.ValidatePickup`](/mod/game-api/types/global-p/powerstrike#m-validatepickup), [`RaiseHandStructure.IsInPositionInternal`](/mod/game-api/types/global-q-r/raisehandstructure#m-isinpositioninternal), [`ShakeInput.Handler`](/mod/game-api/types/global-s/shakeinput#m-handler), [`ShakeInput.ReceiveHit`](/mod/game-api/types/global-s/shakeinput#m-receivehit), [`ShakeInput.RegisterHandler`](/mod/game-api/types/global-s/shakeinput#m-registerhandler) and 12 more.
