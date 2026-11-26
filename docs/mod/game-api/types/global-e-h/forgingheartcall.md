---
title: "ForgingHeartCall"
description: "Heart Call skill variant that also swaps the tool's forged hit effect while the skill is active."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForgingHeartCall

A **class** in `Root.Township`, the global namespace.

Heart Call skill variant that also swaps the tool's forged hit effect while the skill is active.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`HeartCall`](/mod/game-api/types/global-e-h/heartcall)
- **Derived types** [`ForgingHeartCall.Create`](/mod/game-api/types/global-e-h/forgingheartcall-create)
- **Nested types** [`Create`](/mod/game-api/types/global-e-h/forgingheartcall-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForgingHeartCall()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hitoverride" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/forgedhiteffectoverride">{"ForgedHitEffectOverride"}</Link>{" hitOverride"}</code> | Forged hit effect used while the skill is active. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inputchangedstate" /><code>{"override void InputChangedState(bool isEnabled, "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | Registers or removes the hit override on the tool when the skill input turns on or off. |
| <Link id="m-effectsrequested" /><code>{"protected override void EffectsRequested("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" targetEntity, "}<Link to="/mod/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status, bool isLocalPlayer)"}</code> | Client: registers the hit override when charged and removes it when cancelled. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-registeroverrides" /><code>{"private void RegisterOverrides("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" toolEntity, bool isEnabled)"}</code> | Registers or deregisters `hitOverride` for a tool entity with `ForgedHitEffectOverride`. |

</details>
