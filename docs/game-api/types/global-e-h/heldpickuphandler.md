---
title: "HeldPickupHandler"
description: "Tracks one pickup a player is holding and the skill inputs registered for it, and passes tool hits to those skills."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeldPickupHandler

A **class** in `Root.Township`, no namespace.

Tracks one pickup a player is holding and the skill inputs registered for it, and passes tool hits to those skills. Created by `PlayerToolBasedSkillHelper` when an interaction starts.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HeldPickupHandler("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/global-p/playertoolbasedskillhelper">{"PlayerToolBasedSkillHelper"}</Link>{" playerHelper)"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-inputstoreset" /><code>{"private static HashSet<"}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> inputstoReset"}</code> | Shared scratch set of skill inputs to reset after `ReceiveHit` has run every skill. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hastool" /><code>{"bool HasTool { get; }"}</code> | True if the pickup has an `ImpactTool`. |
| <Link id="m-inputs" /><code>{"Dictionary<"}<Link to="/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{", "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> Inputs { get; }"}</code> | Input methods by input structure, shared by skills that use the same structure. |
| <Link id="m-isupdating" /><code>{"bool IsUpdating { get; private set; }"}</code> | True while the handler is registered for per-frame updates. |
| <Link id="m-pickup" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | The held pickup. |
| <Link id="m-playerhelper" /><code><Link to="/game-api/types/global-p/playertoolbasedskillhelper">{"PlayerToolBasedSkillHelper"}</Link>{" PlayerHelper { get; }"}</code> | The player's tool skill helper that owns this handler. |
| <Link id="m-skillstoinputs" /><code>{"Dictionary<"}<Link to="/game-api/types/global-i-l/iinputbasedskill">{"IInputBasedSkill"}</Link>{", "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> SkillsToInputs { get; }"}</code> | Which input each registered skill listens to. |
| <Link id="m-tool" /><code><Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" Tool { get; }"}</code> | The pickup's `ImpactTool`, or null. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Clears every input and deregisters every skill from it. |
| <Link id="m-deregisterskill" /><code>{"void DeregisterSkill("}<Link to="/game-api/types/global-i-l/iinputbasedskill">{"IInputBasedSkill"}</Link>{" skill)"}</code> | Removes one skill. The input is dropped once no skill uses it, and updates stop when no input needs them. |
| <Link id="m-receivehit" /><code>{"void ReceiveHit("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | Passes a tool hit to each skill. Active inputs whose skill accepts the hit execute it, then reset. |
| <Link id="m-registertoinput" /><code><Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" RegisterToInput("}<Link to="/game-api/types/global-i-l/iinputbasedskill">{"IInputBasedSkill"}</Link>{" skill)"}</code> | Gets or creates the input for a skill's input structure and links the skill to it. |
| <Link id="m-update" /><code>{"void Update()"}</code> | Updates every input that needs per-frame updates. |

## Used in

Members of other types that take, return or hold a `HeldPickupHandler`:

[`SpecificPickupBasedSkill.ValidatePickup`](/game-api/types/alta-player/specificpickupbasedskill#m-validatepickup), [`AreaAttackSkill.ExecuteWithHit`](/game-api/types/global-a-b/areaattackskill#m-executewithhit), [`AreaAttackSkill.ValidatePickup`](/game-api/types/global-a-b/areaattackskill#m-validatepickup), [`BowStringPullbackInputMethod.handler`](/game-api/types/global-a-b/bowstringpullbackinputmethod#m-handler), [`BowStringPullbackInputMethod.ISkillInputMethod.Handler`](/game-api/types/global-a-b/bowstringpullbackinputmethod#m-iskillinputmethod-handler), [`BowStringPullbackInputMethod.ReceiveHit`](/game-api/types/global-a-b/bowstringpullbackinputmethod#m-receivehit), [`BowStringPullbackInputMethod.RegisterHandler`](/game-api/types/global-a-b/bowstringpullbackinputmethod#m-registerhandler), [`DownwardSwingInput.Handler`](/game-api/types/global-c-d/downwardswinginput#m-handler), [`DownwardSwingInput.ReceiveHit`](/game-api/types/global-c-d/downwardswinginput#m-receivehit), [`DownwardSwingInput.RegisterHandler`](/game-api/types/global-c-d/downwardswinginput#m-registerhandler), [`EmberComposer.ValidatePickup`](/game-api/types/global-e-h/embercomposer#m-validatepickup), [`Gatherer.Dock`](/game-api/types/global-e-h/gatherer#m-dock), [`Gatherer.DockDelay`](/game-api/types/global-e-h/gatherer#m-dockdelay-2), [`Gatherer.ValidatePickup`](/game-api/types/global-e-h/gatherer#m-validatepickup), [`HandOnSideStructure.IsInPositionInternal`](/game-api/types/global-e-h/handonsidestructure#m-isinpositioninternal), [`HandPositionInput.Handler`](/game-api/types/global-e-h/handpositioninput#m-handler), [`HandPositionInput.ReceiveHit`](/game-api/types/global-e-h/handpositioninput#m-receivehit), [`HandPositionInput.RegisterHandler`](/game-api/types/global-e-h/handpositioninput#m-registerhandler), [`HandPositionInputModifier.ModifyIsInPosition`](/game-api/types/global-e-h/handpositioninputmodifier#m-modifyisinposition), [`HandPositionStructure.IsInPosition`](/game-api/types/global-e-h/handpositionstructure#m-isinposition), [`HandPositionStructure.IsInPositionInternal`](/game-api/types/global-e-h/handpositionstructure#m-isinpositioninternal), [`HandToHeartInputStructure.IsInPositionInternal`](/game-api/types/global-e-h/handtoheartinputstructure#m-isinpositioninternal), [`HeartCall.Register`](/game-api/types/global-e-h/heartcall#m-register), [`HeartCall.ValidatePickup`](/game-api/types/global-e-h/heartcall#m-validatepickup), [`HebiosEnchant.ExecuteWithHit`](/game-api/types/global-e-h/hebiosenchant#m-executewithhit), [`HebiosEnchant.ValidatePickup`](/game-api/types/global-e-h/hebiosenchant#m-validatepickup), [`IInputBasedSkill.ExecuteWithHit`](/game-api/types/global-i-l/iinputbasedskill#m-executewithhit), [`IInputBasedSkill.ValidatePickup`](/game-api/types/global-i-l/iinputbasedskill#m-validatepickup), [`ISkillInputMethod.Handler`](/game-api/types/global-i-l/iskillinputmethod#m-handler), [`ISkillInputMethod.ReceiveHit`](/game-api/types/global-i-l/iskillinputmethod#m-receivehit), [`ISkillInputMethod.RegisterHandler`](/game-api/types/global-i-l/iskillinputmethod#m-registerhandler), [`MiningEcho.ExecuteWithHit`](/game-api/types/global-m-o/miningecho#m-executewithhit), [`MiningEcho.ValidatePickup`](/game-api/types/global-m-o/miningecho#m-validatepickup), [`PickupBasedSkill.ExecuteWithHit`](/game-api/types/global-p/pickupbasedskill#m-executewithhit), [`PickupBasedSkill.Register`](/game-api/types/global-p/pickupbasedskill#m-register), [`PickupBasedSkill.ValidatePickup`](/game-api/types/global-p/pickupbasedskill#m-validatepickup), [`PickupBasedSkillModifier.ExecuteWithHit`](/game-api/types/global-p/pickupbasedskillmodifier#m-executewithhit), [`PickupBasedSkillModifier.ValidatePickup`](/game-api/types/global-p/pickupbasedskillmodifier#m-validatepickup), [`PickupGrabInputMethod.handler`](/game-api/types/global-p/pickupgrabinputmethod#m-handler), [`PickupGrabInputMethod.ISkillInputMethod.Handler`](/game-api/types/global-p/pickupgrabinputmethod#m-iskillinputmethod-handler), [`PickupGrabInputMethod.ReceiveHit`](/game-api/types/global-p/pickupgrabinputmethod#m-receivehit), [`PickupGrabInputMethod.RegisterHandler`](/game-api/types/global-p/pickupgrabinputmethod#m-registerhandler), [`PlayerToolBasedSkillHelper.ActivateInput`](/game-api/types/global-p/playertoolbasedskillhelper#m-activateinput), [`PlayerToolBasedSkillHelper.DeactivateOtherModifiers`](/game-api/types/global-p/playertoolbasedskillhelper#m-deactivateothermodifiers), [`PlayerToolBasedSkillHelper.DeregisterUpdate`](/game-api/types/global-p/playertoolbasedskillhelper#m-deregisterupdate), [`PlayerToolBasedSkillHelper.HeldInteractables`](/game-api/types/global-p/playertoolbasedskillhelper#m-heldinteractables), [`PlayerToolBasedSkillHelper.RegisterUpdate`](/game-api/types/global-p/playertoolbasedskillhelper#m-registerupdate), [`PlayerToolBasedSkillHelper.ValidatePickupHandler`](/game-api/types/global-p/playertoolbasedskillhelper#m-validatepickuphandler), [`PowerCrossSlash.ExecuteWithHit`](/game-api/types/global-p/powercrossslash#m-executewithhit), [`PowerCrossSlash.ValidatePickup`](/game-api/types/global-p/powercrossslash#m-validatepickup), [`PowerHit.ExecuteWithHit`](/game-api/types/global-p/powerhit#m-executewithhit), [`PowerHit.ValidatePickup`](/game-api/types/global-p/powerhit#m-validatepickup), [`PowerStinger.ExecuteWithHit`](/game-api/types/global-p/powerstinger#m-executewithhit), [`PowerStinger.ValidatePickup`](/game-api/types/global-p/powerstinger#m-validatepickup), [`PowerStrike.ExecuteWithHit`](/game-api/types/global-p/powerstrike#m-executewithhit), [`PowerStrike.ValidatePickup`](/game-api/types/global-p/powerstrike#m-validatepickup), [`RaiseHandStructure.IsInPositionInternal`](/game-api/types/global-q-r/raisehandstructure#m-isinpositioninternal), [`ShakeInput.Handler`](/game-api/types/global-s/shakeinput#m-handler), [`ShakeInput.ReceiveHit`](/game-api/types/global-s/shakeinput#m-receivehit), [`ShakeInput.RegisterHandler`](/game-api/types/global-s/shakeinput#m-registerhandler) and 12 more.
