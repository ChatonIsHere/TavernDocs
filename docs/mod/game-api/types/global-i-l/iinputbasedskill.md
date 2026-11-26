---
title: "IInputBasedSkill"
description: "A profession skill driven by an input method (such as a swing or a held button) instead of firing on its own."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IInputBasedSkill

An **interface** in `Root.Township`, the global namespace.

A profession skill driven by an input method (such as a swing or a held button) instead of firing on its own.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`PickupBasedSkill`](/mod/game-api/types/global-p/pickupbasedskill), [`PickupBasedSkillModifier`](/mod/game-api/types/global-p/pickupbasedskillmodifier)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-inputstructure" /><code><Link to="/mod/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" InputStructure { get; }"}</code> | <span className="api-desc">Describes which inputs the skill needs.</span> |
| <Link id="m-skill" /><code><Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" Skill { get; }"}</code> | <span className="api-desc">The profession skill this belongs to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"void Deregister("}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | <span className="api-desc">Stops listening to the given skill input method.</span> |
| <Link id="m-executewithhit" /><code>{"void ExecuteWithHit("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, bool hasHit = true)"}</code> | <span className="api-desc">Runs the skill for a held item, using the impact hit that triggered it.</span> |
| <Link id="m-inputchangedstate" /><code>{"void InputChangedState(bool isEnabled, "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | <span className="api-desc">Called when an input method is enabled or disabled.</span> |
| <Link id="m-register" /><code>{"void Register("}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | <span className="api-desc">Starts listening to the given skill input method.</span> |
| <Link id="m-validateexecutionhit" /><code>{"bool ValidateExecutionHit("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | <span className="api-desc">Checks whether an impact hit on a progression path should trigger the skill.</span> |
| <Link id="m-validatepickup" /><code>{"bool ValidatePickup("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> | <span className="api-desc">Checks whether the held item can use this skill.</span> |

## Used in

Members of other types that take, return or hold a `IInputBasedSkill`:

<div className="api-used-in">

[`HeldPickupHandler.DeregisterSkill`](/mod/game-api/types/global-e-h/heldpickuphandler#m-deregisterskill), [`HeldPickupHandler.RegisterToInput`](/mod/game-api/types/global-e-h/heldpickuphandler#m-registertoinput), [`HeldPickupHandler.SkillsToInputs`](/mod/game-api/types/global-e-h/heldpickuphandler#m-skillstoinputs), [`PlayerToolBasedSkillHelper.ActivateInput`](/mod/game-api/types/global-p/playertoolbasedskillhelper#m-activateinput).

</div>
