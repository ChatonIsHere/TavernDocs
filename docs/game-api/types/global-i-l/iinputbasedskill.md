---
title: "IInputBasedSkill"
description: "A profession skill driven by an input method (such as a swing or a held button) instead of firing on its own."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IInputBasedSkill

An **interface** in `Root.Township`, no namespace.

A profession skill driven by an input method (such as a swing or a held button) instead of firing on its own.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`PickupBasedSkill`](/game-api/types/global-p/pickupbasedskill), [`PickupBasedSkillModifier`](/game-api/types/global-p/pickupbasedskillmodifier)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-inputstructure" /><code><Link to="/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" InputStructure { get; }"}</code> | Describes which inputs the skill needs. |
| <Link id="m-skill" /><code><Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" Skill { get; }"}</code> | The profession skill this belongs to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"void Deregister("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | Stops listening to the given skill input method. |
| <Link id="m-executewithhit" /><code>{"void ExecuteWithHit("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, bool hasHit = true)"}</code> | Runs the skill for a held item, using the impact hit that triggered it. |
| <Link id="m-inputchangedstate" /><code>{"void InputChangedState(bool isEnabled, "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | Called when an input method is enabled or disabled. |
| <Link id="m-register" /><code>{"void Register("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | Starts listening to the given skill input method. |
| <Link id="m-validateexecutionhit" /><code>{"bool ValidateExecutionHit("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | Checks whether an impact hit on a progression path should trigger the skill. |
| <Link id="m-validatepickup" /><code>{"bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> | Checks whether the held item can use this skill. |

## Used in

Members of other types that take, return or hold a `IInputBasedSkill`:

[`HeldPickupHandler.DeregisterSkill`](/game-api/types/global-e-h/heldpickuphandler#m-deregisterskill), [`HeldPickupHandler.RegisterToInput`](/game-api/types/global-e-h/heldpickuphandler#m-registertoinput), [`HeldPickupHandler.SkillsToInputs`](/game-api/types/global-e-h/heldpickuphandler#m-skillstoinputs), [`PlayerToolBasedSkillHelper.ActivateInput`](/game-api/types/global-p/playertoolbasedskillhelper#m-activateinput).
