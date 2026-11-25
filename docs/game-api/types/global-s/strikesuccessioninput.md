---
title: "StrikeSuccessionInput"
description: "class StrikeSuccessionInput in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StrikeSuccessionInput

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`ISkillInputMethod`](/game-api/types/global-i-l/iskillinputmethod)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StrikeSuccessionInput()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-coroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" coroutine"}</code> |
| <Link id="m-currentcount" /><code>{"private int currentCount"}</code> |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> |
| <Link id="m-iscalledthisframe" /><code>{"private bool isCalledThisFrame"}</code> |
| <Link id="m-lastactivetime" /><code>{"private float lastActiveTime"}</code> |
| <Link id="m-skill" /><code>{"private "}<Link to="/game-api/types/global-p/pickupbasedskill">{"PickupBasedSkill"}</Link>{" skill"}</code> |
| <Link id="m-structure" /><code>{"private "}<Link to="/game-api/types/global-s/strikesuccessioninputstructure">{"StrikeSuccessionInputStructure"}</Link>{" structure"}</code> |
| <Link id="m-targetcount" /><code>{"private int targetCount"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-handler" /><code><Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" Handler { get; private set; }"}</code> |

<details>
<summary>3 private and internal properties</summary>

| Member |
| --- |
| <Link id="m-iskillinputmethod-isactive" /><code>{"private bool ISkillInputMethod.IsActive { get; }"}</code> |
| <Link id="m-iskillinputmethod-needsupdate" /><code>{"private bool ISkillInputMethod.NeedsUpdate { get; }"}</code> |
| <Link id="m-iskillinputmethod-receiveshits" /><code>{"private bool ISkillInputMethod.ReceivesHits { get; }"}</code> |

</details>

## Events

| Member |
| --- |
| <Link id="m-changedactive" /><code>{"event Action<bool, "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> ChangedActive"}</code> |
| <Link id="m-strikecountupdate" /><code>{"static event "}<Link to="/game-api/types/global-s/successionstrikedelegate">{"SuccessionStrikeDelegate"}</Link>{" StrikeCountUpdate"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-increasecount" /><code>{"bool IncreaseCount()"}</code> |
| <Link id="m-reset" /><code>{"void Reset(bool isCallingEvent)"}</code> |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-clear" /><code>{"private void ISkillInputMethod.Clear()"}</code> |
| <Link id="m-receivehit" /><code>{"private bool ISkillInputMethod.ReceiveHit("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> |
| <Link id="m-registerhandler" /><code>{"private void ISkillInputMethod.RegisterHandler("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler, "}<Link to="/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" structure, "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> |
| <Link id="m-runtime" /><code>{"private IEnumerator RunTime(float time, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup) (iterator)"}</code> |
| <Link id="m-stopcoroutine" /><code>{"private void StopCoroutine()"}</code> |
| <Link id="m-update" /><code>{"private void ISkillInputMethod.Update()"}</code> |

</details>
