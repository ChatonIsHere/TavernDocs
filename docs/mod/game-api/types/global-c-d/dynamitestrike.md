---
title: "DynamiteStrike"
description: "Area attack skill that fires when an active tool collides with something on the target layers, using the best contact hit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DynamiteStrike

A **class** in `Root.Township`, the global namespace.

Area attack skill that fires when an active tool collides with something on the target layers, using the best contact hit.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`AreaAttackSkill`](/mod/game-api/types/global-a-b/areaattackskill)
- **Derived types** [`DynamiteStrike.Create`](/mod/game-api/types/global-c-d/dynamitestrike-create)
- **Nested types** [`Create`](/mod/game-api/types/global-c-d/dynamitestrike-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DynamiteStrike()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-acceptrigidbodies" /><code>{"private bool acceptRigidbodies"}</code> | Whether hitting a rigidbody can trigger it. |
| <Link id="m-targetlayer" /><code>{"private LayerMask targetLayer"}</code> | Layers a collision must hit to count. |
| <Link id="m-toolinputs" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{", "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> toolInputs"}</code> | Skill input for each registered pickup. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"override void Deregister("}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | Unhooks the tool's collision event and forgets the input. |
| <Link id="m-register" /><code>{"override void Register("}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | Remembers the input under its pickup. |
| <Link id="m-seteffectactive" /><code>{"override void SetEffectActive("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isEffectActive)"}</code> | Hooks the tool's collision event while the effect is active and unhooks it otherwise. |
| <Link id="m-validateexecutionhit" /><code>{"override bool ValidateExecutionHit("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | Always false, so normal hits never trigger this skill. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-collided" /><code>{"private void Collided(Collision collision, bool isHitting, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | On a collision with an active input, finds the most effective contact hit, runs the attack if it meets the minimum, then resets the input next frame. |

</details>
