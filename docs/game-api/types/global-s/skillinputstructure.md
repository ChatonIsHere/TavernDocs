---
title: "SkillInputStructure"
description: "abstract class SkillInputStructure in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillInputStructure

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`BowStringPullbackStructure`](/game-api/types/global-a-b/bowstringpullbackstructure), [`DownwardSwingInputStructure`](/game-api/types/global-c-d/downwardswinginputstructure), [`HandPositionStructure`](/game-api/types/global-e-h/handpositionstructure), [`PickupGrabInputStructure`](/game-api/types/global-p/pickupgrabinputstructure), [`ShakeInputStructure`](/game-api/types/global-s/shakeinputstructure), [`StrikeSuccessionInputStructure`](/game-api/types/global-s/strikesuccessioninputstructure), [`TemperatureCheckInputStructure`](/game-api/types/global-t-x/temperaturecheckinputstructure)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected SkillInputStructure()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-canceleddefaulteffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" canceledDefaultEffect"}</code> |  |
| <Link id="m-chargeddefaulteffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" chargedDefaultEffect"}</code> |  |
| <Link id="m-executeddefaulteffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" executedDefaultEffect"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getnewinput" /><code>{"abstract "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" GetNewInput()"}</code> |  |
| <Link id="m-playsoundat" /><code>{"void PlaySoundAt(Transform target, "}<Link to="/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status)"}</code> |  |
| <Link id="m-validatepickup" /><code>{"virtual bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> |  |

## Used in

Members of other types that take, return or hold a `SkillInputStructure`:

[`BowStringPullbackInputMethod.RegisterHandler`](/game-api/types/global-a-b/bowstringpullbackinputmethod#m-registerhandler), [`DownwardSwingInput.RegisterHandler`](/game-api/types/global-c-d/downwardswinginput#m-registerhandler), [`HandPositionInput.RegisterHandler`](/game-api/types/global-e-h/handpositioninput#m-registerhandler), [`HeldPickupHandler.Inputs`](/game-api/types/global-e-h/heldpickuphandler#m-inputs), [`IInputBasedSkill.InputStructure`](/game-api/types/global-i-l/iinputbasedskill#m-inputstructure), [`ISkillInputMethod.RegisterHandler`](/game-api/types/global-i-l/iskillinputmethod#m-registerhandler), [`PickupBasedSkill.inputStructure`](/game-api/types/global-p/pickupbasedskill#m-inputstructure), [`PickupBasedSkill.InputStructure`](/game-api/types/global-p/pickupbasedskill#m-inputstructure-2), [`PickupBasedSkillModifier.IInputBasedSkill.InputStructure`](/game-api/types/global-p/pickupbasedskillmodifier#m-iinputbasedskill-inputstructure), [`PickupBasedSkillModifier.inputStructure`](/game-api/types/global-p/pickupbasedskillmodifier#m-inputstructure), [`PickupGrabInputMethod.RegisterHandler`](/game-api/types/global-p/pickupgrabinputmethod#m-registerhandler), [`ShakeInput.RegisterHandler`](/game-api/types/global-s/shakeinput#m-registerhandler), [`StrikeSuccessionInput.RegisterHandler`](/game-api/types/global-s/strikesuccessioninput#m-registerhandler), [`TemperatureCheckInput.RegisterHandler`](/game-api/types/global-t-x/temperaturecheckinput#m-registerhandler).
