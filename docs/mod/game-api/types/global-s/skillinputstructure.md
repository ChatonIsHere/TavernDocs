---
title: "SkillInputStructure"
description: "Asset describing how a tool-based skill is triggered (the input gesture), with default effects for charging, using and cancelling."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillInputStructure

An **abstract class** in `Root.Township`, the global namespace.

Asset describing how a tool-based skill is triggered (the input gesture), with default effects for charging, using and cancelling.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`BowStringPullbackStructure`](/mod/game-api/types/global-a-b/bowstringpullbackstructure), [`DownwardSwingInputStructure`](/mod/game-api/types/global-c-d/downwardswinginputstructure), [`HandPositionStructure`](/mod/game-api/types/global-e-h/handpositionstructure), [`PickupGrabInputStructure`](/mod/game-api/types/global-p/pickupgrabinputstructure), [`ShakeInputStructure`](/mod/game-api/types/global-s/shakeinputstructure), [`StrikeSuccessionInputStructure`](/mod/game-api/types/global-s/strikesuccessioninputstructure), [`TemperatureCheckInputStructure`](/mod/game-api/types/global-t-x/temperaturecheckinputstructure)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected SkillInputStructure()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canceleddefaulteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" canceledDefaultEffect"}</code> | <span className="api-desc">Effect played by `PlaySoundAt` when the skill is cancelled.</span> |
| <Link id="m-chargeddefaulteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" chargedDefaultEffect"}</code> | <span className="api-desc">Effect played by `PlaySoundAt` when the skill is charged.</span> |
| <Link id="m-executeddefaulteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" executedDefaultEffect"}</code> | <span className="api-desc">Effect played by `PlaySoundAt` when the skill is used (consumed).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getnewinput" /><code>{"abstract "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" GetNewInput()"}</code> | <span className="api-desc">Creates a fresh input tracker for one use of the skill.</span> |
| <Link id="m-playsoundat" /><code>{"void PlaySoundAt(Transform target, "}<Link to="/mod/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status)"}</code> | <span className="api-desc">Plays the default charged, used or cancelled effect at a transform. Nothing for charging started.</span> |
| <Link id="m-validatepickup" /><code>{"virtual bool ValidatePickup("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Whether the held item allows this input. True by default.</span> |

## Used in

Members of other types that take, return or hold a `SkillInputStructure`:

<div className="api-used-in">

[`BowStringPullbackInputMethod.RegisterHandler`](/mod/game-api/types/global-a-b/bowstringpullbackinputmethod#m-registerhandler), [`DownwardSwingInput.RegisterHandler`](/mod/game-api/types/global-c-d/downwardswinginput#m-registerhandler), [`HandPositionInput.RegisterHandler`](/mod/game-api/types/global-e-h/handpositioninput#m-registerhandler), [`HeldPickupHandler.Inputs`](/mod/game-api/types/global-e-h/heldpickuphandler#m-inputs), [`IInputBasedSkill.InputStructure`](/mod/game-api/types/global-i-l/iinputbasedskill#m-inputstructure), [`ISkillInputMethod.RegisterHandler`](/mod/game-api/types/global-i-l/iskillinputmethod#m-registerhandler), [`PickupBasedSkill.inputStructure`](/mod/game-api/types/global-p/pickupbasedskill#m-inputstructure), [`PickupBasedSkill.InputStructure`](/mod/game-api/types/global-p/pickupbasedskill#m-inputstructure-2), [`PickupBasedSkillModifier.IInputBasedSkill.InputStructure`](/mod/game-api/types/global-p/pickupbasedskillmodifier#m-iinputbasedskill-inputstructure), [`PickupBasedSkillModifier.inputStructure`](/mod/game-api/types/global-p/pickupbasedskillmodifier#m-inputstructure), [`PickupGrabInputMethod.RegisterHandler`](/mod/game-api/types/global-p/pickupgrabinputmethod#m-registerhandler), [`ShakeInput.RegisterHandler`](/mod/game-api/types/global-s/shakeinput#m-registerhandler), [`StrikeSuccessionInput.RegisterHandler`](/mod/game-api/types/global-s/strikesuccessioninput#m-registerhandler), [`TemperatureCheckInput.RegisterHandler`](/mod/game-api/types/global-t-x/temperaturecheckinput#m-registerhandler).

</div>
