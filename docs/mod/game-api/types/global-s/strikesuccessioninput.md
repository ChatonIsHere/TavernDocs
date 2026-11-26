---
title: "StrikeSuccessionInput"
description: "Skill input that counts a run of good tool hits on a matching channel; reaching the target count activates the skill (a power strike) for a short time, and..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StrikeSuccessionInput

A **class** in `Root.Township`, the global namespace.

Skill input that counts a run of good tool hits on a matching channel; reaching the target count activates the skill (a power strike) for a short time, and the next hit uses it. Made by `StrikeSuccessionInputStructure`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`ISkillInputMethod`](/mod/game-api/types/global-i-l/iskillinputmethod)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StrikeSuccessionInput()"}</code> | <span className="api-desc">Creates a `StrikeSuccessionInput` with default values.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-coroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" coroutine"}</code> | <span className="api-desc">The running timer coroutine.</span> |
| <Link id="m-currentcount" /><code>{"private int currentCount"}</code> | <span className="api-desc">Hits counted so far in this run.</span> |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | <span className="api-desc">Whether the power strike is ready.</span> |
| <Link id="m-iscalledthisframe" /><code>{"private bool isCalledThisFrame"}</code> | <span className="api-desc">Stops more than one hit counting in the same frame.</span> |
| <Link id="m-lastactivetime" /><code>{"private float lastActiveTime"}</code> | <span className="api-desc">Real time the skill was last used, for the cool down.</span> |
| <Link id="m-skill" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupbasedskill">{"PickupBasedSkill"}</Link>{" skill"}</code> | <span className="api-desc">The skill to execute on the finishing hit.</span> |
| <Link id="m-structure" /><code>{"private "}<Link to="/mod/game-api/types/global-s/strikesuccessioninputstructure">{"StrikeSuccessionInputStructure"}</Link>{" structure"}</code> | <span className="api-desc">Settings asset with the timings, channel and counts.</span> |
| <Link id="m-targetcount" /><code>{"private int targetCount"}</code> | <span className="api-desc">Hits needed to activate, from the player's skill level.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code><Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" Handler { get; private set; }"}</code> | <span className="api-desc">The held pickup handler this input belongs to.</span> |

<details className="api-private">
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iskillinputmethod-isactive" /><code>{"private bool ISkillInputMethod.IsActive { get; }"}</code> | <span className="api-desc">True while the power strike is ready.</span> |
| <Link id="m-iskillinputmethod-needsupdate" /><code>{"private bool ISkillInputMethod.NeedsUpdate { get; }"}</code> | <span className="api-desc">False: the input is driven by hits, not per-frame updates.</span> |
| <Link id="m-iskillinputmethod-receiveshits" /><code>{"private bool ISkillInputMethod.ReceivesHits { get; }"}</code> | <span className="api-desc">True: this input listens for hits.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changedactive" /><code>{"event Action<bool, "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> ChangedActive"}</code> | <span className="api-desc">Raised when the power strike becomes ready or runs out.</span> |
| <Link id="m-strikecountupdate" /><code>{"static event "}<Link to="/mod/game-api/types/global-s/successionstrikedelegate">{"SuccessionStrikeDelegate"}</Link>{" StrikeCountUpdate"}</code> | <span className="api-desc">Static event raised with the player, skill and new count every time the count changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-increasecount" /><code>{"bool IncreaseCount()"}</code> | <span className="api-desc">Adds one to the count without a hit (used by `BlockingCharge`); returns true when it reaches the target and activates.</span> |
| <Link id="m-reset" /><code>{"void Reset(bool isCallingEvent)"}</code> | <span className="api-desc">Sets the count to zero, deactivates and stops the timer.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void ISkillInputMethod.Clear()"}</code> | <span className="api-desc">Resets the count and deactivates.</span> |
| <Link id="m-receivehit" /><code>{"private bool ISkillInputMethod.ReceiveHit("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | <span className="api-desc">Counts a hit if effective enough and on the target channel, starts timers, activates at the target count and runs the skill on the hit after that.</span> |
| <Link id="m-registerhandler" /><code>{"private void ISkillInputMethod.RegisterHandler("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler, "}<Link to="/mod/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" structure, "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | <span className="api-desc">Stores the handler, skill and structure, and works out the strike count for the player's level.</span> |
| <Link id="m-runtime" /><code>{"private IEnumerator RunTime(float time, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup) (iterator)"}</code> | <span className="api-desc">Coroutine that waits the combo or power strike window, then deactivates and resets the count.</span> |
| <Link id="m-stopcoroutine" /><code>{"private void StopCoroutine()"}</code> | <span className="api-desc">Stops the running timer coroutine.</span> |
| <Link id="m-update" /><code>{"private void ISkillInputMethod.Update()"}</code> | <span className="api-desc">Does nothing.</span> |

</details>
