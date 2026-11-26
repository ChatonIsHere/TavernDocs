---
title: "ForgingHeartCallModifier"
description: "Skill modifier that adds a forging hit effect and damage multiplier to Heart Call hits."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForgingHeartCallModifier

A **class** in `Root.Township`, the global namespace.

Skill modifier that adds a forging hit effect and damage multiplier to Heart Call hits.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`PickupBasedSkillModifier`](/mod/game-api/types/global-p/pickupbasedskillmodifier), [`IHeartCallModifier`](/mod/game-api/types/global-i-l/iheartcallmodifier)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForgingHeartCallModifier()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activemultiplier" /><code>{"private float activeMultiplier"}</code> | Multiplier applied to modified hits. |
| <Link id="m-hitoverride" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/forgedhiteffectoverride">{"ForgedHitEffectOverride"}</Link>{" hitOverride"}</code> | Forged hit effect used for modified hits. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"protected override void Modify("}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | Registers the hit override on the tool and attaches this modifier to the Heart Call skill. |
| <Link id="m-requesttooleffect" /><code>{"protected override void RequestToolEffect("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Client: registers the hit override on the tool entity. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-modifyhit" /><code>{"private void IHeartCallModifier.ModifyHit("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | Multiplies the hit's multipliers by `activeMultiplier` and runs the skill for the hitting player. |

</details>
