---
title: "HeartCall"
description: "Progression skill: hits on a given path from a held tool on the target channel get a damage multiplier, or are changed by registered modifiers instead."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeartCall

A **class** in `Root.Township`, no namespace.

Progression skill: hits on a given path from a held tool on the target channel get a damage multiplier, or are changed by registered modifiers instead.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`PickupBasedSkill`](/game-api/types/global-p/pickupbasedskill)
- **Derived types** [`ForgingHeartCall`](/game-api/types/global-e-h/forgingheartcall), [`HeartCall.Create`](/game-api/types/global-e-h/heartcall-create)
- **Nested types** [`Create`](/game-api/types/global-e-h/heartcall-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HeartCall()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activemultiplier" /><code>{"private float activeMultiplier"}</code> | Damage multiplier applied to matching hits. |
| <Link id="m-modifiers" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{", HashSet<"}<Link to="/game-api/types/global-i-l/iheartcallmodifier">{"IHeartCallModifier"}</Link>{">> modifiers"}</code> | Modifiers registered per tool. |
| <Link id="m-modifiersoverridesmultiplier" /><code>{"private bool modifiersOverridesMultiplier"}</code> | If true, the multiplier is skipped when the tool has modifiers. |
| <Link id="m-targetchannel" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" targetChannel"}</code> | Impact channel the held tool needs. |
| <Link id="m-targetpath" /><code>{"private "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" targetPath"}</code> | Progression path whose hits are affected. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"override void Deregister("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | Removes the modifiers stored for the input's tool. |
| <Link id="m-modify" /><code>{"void Modify("}<Link to="/game-api/types/global-i-l/iheartcallmodifier">{"IHeartCallModifier"}</Link>{" modifier, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | Adds a modifier for a registered tool; it is applied to that tool's hits. |
| <Link id="m-register" /><code>{"override void Register("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> | Registers the handler and starts an empty modifier set for its tool. |
| <Link id="m-validateexecutionhit" /><code>{"override bool ValidateExecutionHit("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | For hits on `targetPath`, applies modifiers and/or the multiplier and runs the skill; always returns false. |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> | True if the held item is a tool with `targetChannel`. |
