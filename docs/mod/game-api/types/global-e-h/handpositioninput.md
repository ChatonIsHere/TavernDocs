---
title: "HandPositionInput"
description: "Skill input method made by a HandPositionStructure: turns active after the held item stays in position long enough, and off again after ActiveTime out of..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandPositionInput

A **class** in `Root.Township`, the global namespace.

Skill input method made by a `HandPositionStructure`: turns active after the held item stays in position long enough, and off again after `ActiveTime` out of position.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`ISkillInputMethod`](/mod/game-api/types/global-i-l/iskillinputmethod)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandPositionInput()"}</code> | <span className="api-desc">Creates a `HandPositionInput` with default values.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activationcountdown" /><code>{"private float activationCountdown"}</code> | <span className="api-desc">Time left before an active input turns off while out of position.</span> |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | <span className="api-desc">Whether the input is active.</span> |
| <Link id="m-runningtime" /><code>{"private float runningTime"}</code> | <span className="api-desc">Time spent in position towards activation.</span> |
| <Link id="m-structure" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handpositionstructure">{"HandPositionStructure"}</Link>{" structure"}</code> | <span className="api-desc">The structure asset that defines the position and timings.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code><Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" Handler { get; private set; }"}</code> | <span className="api-desc">The held pickup handler this input watches.</span> |

<details className="api-private">
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iskillinputmethod-isactive" /><code>{"private bool ISkillInputMethod.IsActive { get; }"}</code> | <span className="api-desc">True while the input is active.</span> |
| <Link id="m-iskillinputmethod-needsupdate" /><code>{"private bool ISkillInputMethod.NeedsUpdate { get; }"}</code> | <span className="api-desc">Always true; the input is polled every frame.</span> |
| <Link id="m-iskillinputmethod-receiveshits" /><code>{"private bool ISkillInputMethod.ReceivesHits { get; }"}</code> | <span className="api-desc">Always false; hits are ignored.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changedactive" /><code>{"event Action<bool, "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> ChangedActive"}</code> | <span className="api-desc">Raised when the input turns active or inactive.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reset" /><code>{"void Reset(bool isCallingEvent)"}</code> | <span className="api-desc">Zeros the timers and turns the input off, optionally raising `ChangedActive`.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void ISkillInputMethod.Clear()"}</code> | <span className="api-desc">Resets the input and raises `ChangedActive` if it was active.</span> |
| <Link id="m-receivehit" /><code>{"private bool ISkillInputMethod.ReceiveHit("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | <span className="api-desc">Ignores the hit and returns false.</span> |
| <Link id="m-registerhandler" /><code>{"private void ISkillInputMethod.RegisterHandler("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler, "}<Link to="/mod/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" structure, "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | <span className="api-desc">Stores the pickup handler and the hand position structure to check against.</span> |
| <Link id="m-update" /><code>{"private void ISkillInputMethod.Update()"}</code> | <span className="api-desc">Counts time in position until activation, then counts down the active time while out of position.</span> |

</details>
