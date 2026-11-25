---
title: "DownwardSwingInput"
description: "class DownwardSwingInput in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DownwardSwingInput

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`ISkillInputMethod`](/game-api/types/global-i-l/iskillinputmethod)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DownwardSwingInput()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-lasttimeup" /><code>{"private float lastTimeUp"}</code> |
| <Link id="m-structure" /><code>{"private "}<Link to="/game-api/types/global-c-d/downwardswinginputstructure">{"DownwardSwingInputStructure"}</Link>{" structure"}</code> |
| <Link id="m-wascharged" /><code>{"private bool wasCharged"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-handler" /><code><Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" Handler { get; private set; }"}</code> |
| <Link id="m-isactive" /><code>{"bool IsActive { get; private set; }"}</code> |

<details>
<summary>2 private and internal properties</summary>

| Member |
| --- |
| <Link id="m-iskillinputmethod-needsupdate" /><code>{"private bool ISkillInputMethod.NeedsUpdate { get; }"}</code> |
| <Link id="m-iskillinputmethod-receiveshits" /><code>{"private bool ISkillInputMethod.ReceivesHits { get; }"}</code> |

</details>

## Events

| Member |
| --- |
| <Link id="m-changedactive" /><code>{"event Action<bool, "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> ChangedActive"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-reset" /><code>{"void Reset(bool isCallingEvent)"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-clear" /><code>{"private void ISkillInputMethod.Clear()"}</code> |
| <Link id="m-receivehit" /><code>{"private bool ISkillInputMethod.ReceiveHit("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> |
| <Link id="m-registerhandler" /><code>{"private void ISkillInputMethod.RegisterHandler("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler, "}<Link to="/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" structure, "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> |
| <Link id="m-update" /><code>{"private void ISkillInputMethod.Update()"}</code> |

</details>
