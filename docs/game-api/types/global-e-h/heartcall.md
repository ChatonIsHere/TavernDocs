---
title: "HeartCall"
description: "class HeartCall in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeartCall

A **class** in `Root.Township`, no namespace.

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

| Member |
| --- |
| <Link id="m-activemultiplier" /><code>{"private float activeMultiplier"}</code> |
| <Link id="m-modifiers" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{", HashSet<"}<Link to="/game-api/types/global-i-l/iheartcallmodifier">{"IHeartCallModifier"}</Link>{">> modifiers"}</code> |
| <Link id="m-modifiersoverridesmultiplier" /><code>{"private bool modifiersOverridesMultiplier"}</code> |
| <Link id="m-targetchannel" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" targetChannel"}</code> |
| <Link id="m-targetpath" /><code>{"private "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" targetPath"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-deregister" /><code>{"override void Deregister("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> |
| <Link id="m-modify" /><code>{"void Modify("}<Link to="/game-api/types/global-i-l/iheartcallmodifier">{"IHeartCallModifier"}</Link>{" modifier, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> |
| <Link id="m-register" /><code>{"override void Register("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> |
| <Link id="m-validateexecutionhit" /><code>{"override bool ValidateExecutionHit("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> |
