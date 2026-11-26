---
title: "SkillHitTarget"
description: "Client-side pooled trigger target for a TargetBasedSkill: when the player's tool touches it, the skill hit is checked and run."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillHitTarget

A **class** in `Root.Township`, the global namespace.

Client-side pooled trigger target for a `TargetBasedSkill`: when the player's tool touches it, the skill hit is checked and run.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkillHitTarget()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baserotation" /><code>{"private Quaternion baseRotation"}</code> | Rotation from world up to this target's up, used to orient the hit direction. |
| <Link id="m-skill" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/targetbasedskill">{"TargetBasedSkill"}</Link>{" skill"}</code> | The skill that validates and runs the hit. |
| <Link id="m-targettool" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" targetTool"}</code> | Impact tool on the target entity. Only its rigidbody counts. |
| <Link id="m-toolidentifier" /><code>{"private uint toolIdentifier"}</code> | Network identifier of the tool entity, passed to the skill. |
| <Link id="m-trigger" /><code>{"private Collider trigger"}</code> | Trigger collider used for the contact. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializetarget" /><code>{"void InitializeTarget("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" target, "}<Link to="/mod/game-api/types/global-t-x/targetbasedskill">{"TargetBasedSkill"}</Link>{" skill)"}</code> | Sets the tool entity and skill this target belongs to and stores its base rotation. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | If the target tool enters, builds a hit and, when the skill accepts it, calls the skill's `ExecuteOnClient`. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: finds the first trigger collider in children if `trigger` is empty. |

</details>
