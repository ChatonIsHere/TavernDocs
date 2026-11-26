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
| <Link id="m-ctor" /><code>{"SkillHitTarget()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baserotation" /><code>{"private Quaternion baseRotation"}</code> | <span className="api-desc">Rotation from world up to this target's up, used to orient the hit direction.</span> |
| <Link id="m-skill" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/targetbasedskill">{"TargetBasedSkill"}</Link>{" skill"}</code> | <span className="api-desc">The skill that validates and runs the hit.</span> |
| <Link id="m-targettool" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" targetTool"}</code> | <span className="api-desc">Impact tool on the target entity. Only its rigidbody counts.</span> |
| <Link id="m-toolidentifier" /><code>{"private uint toolIdentifier"}</code> | <span className="api-desc">Network identifier of the tool entity, passed to the skill.</span> |
| <Link id="m-trigger" /><code>{"private Collider trigger"}</code> | <span className="api-desc">Trigger collider used for the contact.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializetarget" /><code>{"void InitializeTarget("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" target, "}<Link to="/mod/game-api/types/global-t-x/targetbasedskill">{"TargetBasedSkill"}</Link>{" skill)"}</code> | <span className="api-desc">Sets the tool entity and skill this target belongs to and stores its base rotation.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">If the target tool enters, builds a hit and, when the skill accepts it, calls the skill's `ExecuteOnClient`.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: finds the first trigger collider in children if `trigger` is empty.</span> |

</details>
