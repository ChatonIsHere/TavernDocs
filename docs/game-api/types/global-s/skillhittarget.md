---
title: "SkillHitTarget"
description: "class SkillHitTarget in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillHitTarget

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SkillHitTarget()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-baserotation" /><code>{"private Quaternion baseRotation"}</code> |
| <Link id="m-skill" /><code>{"private "}<Link to="/game-api/types/global-t-x/targetbasedskill">{"TargetBasedSkill"}</Link>{" skill"}</code> |
| <Link id="m-targettool" /><code>{"private "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" targetTool"}</code> |
| <Link id="m-toolidentifier" /><code>{"private uint toolIdentifier"}</code> |
| <Link id="m-trigger" /><code>{"private Collider trigger"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initializetarget" /><code>{"void InitializeTarget("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" target, "}<Link to="/game-api/types/global-t-x/targetbasedskill">{"TargetBasedSkill"}</Link>{" skill)"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |

</details>
