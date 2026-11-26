---
title: "HeartCall"
description: "Progression skill: hits on a given path from a held tool on the target channel get a damage multiplier, or are changed by registered modifiers instead."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeartCall

A **class** in `Root.Township`, the global namespace.

Progression skill: hits on a given path from a held tool on the target channel get a damage multiplier, or are changed by registered modifiers instead.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`PickupBasedSkill`](/mod/game-api/types/global-p/pickupbasedskill)
- **Derived types** [`ForgingHeartCall`](/mod/game-api/types/global-e-h/forgingheartcall), [`HeartCall.Create`](/mod/game-api/types/global-e-h/heartcall-create)
- **Nested types** [`Create`](/mod/game-api/types/global-e-h/heartcall-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HeartCall()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activemultiplier" /><code>{"private float activeMultiplier"}</code> | <span className="api-desc">Damage multiplier applied to matching hits.</span> |
| <Link id="m-modifiers" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{", HashSet<"}<Link to="/mod/game-api/types/global-i-l/iheartcallmodifier">{"IHeartCallModifier"}</Link>{">> modifiers"}</code> | <span className="api-desc">Modifiers registered per tool.</span> |
| <Link id="m-modifiersoverridesmultiplier" /><code>{"private bool modifiersOverridesMultiplier"}</code> | <span className="api-desc">If true, the multiplier is skipped when the tool has modifiers.</span> |
| <Link id="m-targetchannel" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" targetChannel"}</code> | <span className="api-desc">Impact channel the held tool needs.</span> |
| <Link id="m-targetpath" /><code>{"private "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" targetPath"}</code> | <span className="api-desc">Progression path whose hits are affected.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"override void Deregister("}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | <span className="api-desc">Removes the modifiers stored for the input's tool.</span> |
| <Link id="m-modify" /><code>{"void Modify("}<Link to="/mod/game-api/types/global-i-l/iheartcallmodifier">{"IHeartCallModifier"}</Link>{" modifier, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | <span className="api-desc">Adds a modifier for a registered tool; it is applied to that tool's hits.</span> |
| <Link id="m-register" /><code>{"override void Register("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Registers the handler and starts an empty modifier set for its tool.</span> |
| <Link id="m-validateexecutionhit" /><code>{"override bool ValidateExecutionHit("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | <span className="api-desc">For hits on `targetPath`, applies modifiers and/or the multiplier and runs the skill; always returns false.</span> |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> | <span className="api-desc">True if the held item is a tool with `targetChannel`.</span> |
