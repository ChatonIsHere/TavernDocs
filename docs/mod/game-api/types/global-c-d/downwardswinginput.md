---
title: "DownwardSwingInput"
description: "Skill input that turns on after the player raises the held tool above their head and then brings it down quickly."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DownwardSwingInput

A **class** in `Root.Township`, the global namespace.

Skill input that turns on after the player raises the held tool above their head and then brings it down quickly. Made by `DownwardSwingInputStructure`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`ISkillInputMethod`](/mod/game-api/types/global-i-l/iskillinputmethod)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DownwardSwingInput()"}</code> | <span className="api-desc">Creates a `DownwardSwingInput` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lasttimeup" /><code>{"private float lastTimeUp"}</code> | <span className="api-desc">Real time when the hands were last above the head, or when the input activated.</span> |
| <Link id="m-structure" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/downwardswinginputstructure">{"DownwardSwingInputStructure"}</Link>{" structure"}</code> | <span className="api-desc">Settings asset with the heights and timings.</span> |
| <Link id="m-wascharged" /><code>{"private bool wasCharged"}</code> | <span className="api-desc">Whether the hands have been raised since the last swing.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code><Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" Handler { get; private set; }"}</code> | <span className="api-desc">The held pickup handler this input watches.</span> |
| <Link id="m-isactive" /><code>{"bool IsActive { get; private set; }"}</code> | <span className="api-desc">True after a completed downward swing, until the active time runs out or it is reset.</span> |

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iskillinputmethod-needsupdate" /><code>{"private bool ISkillInputMethod.NeedsUpdate { get; }"}</code> | <span className="api-desc">Always true, so `Update` runs every frame.</span> |
| <Link id="m-iskillinputmethod-receiveshits" /><code>{"private bool ISkillInputMethod.ReceivesHits { get; }"}</code> | <span className="api-desc">Always false; this input ignores hits.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changedactive" /><code>{"event Action<bool, "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> ChangedActive"}</code> | <span className="api-desc">Raised when the input turns on or off.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reset" /><code>{"void Reset(bool isCallingEvent)"}</code> | <span className="api-desc">Clears the charge and turns the input off, optionally raising `ChangedActive`.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void ISkillInputMethod.Clear()"}</code> | <span className="api-desc">Resets the input and raises `ChangedActive` if it was active.</span> |
| <Link id="m-receivehit" /><code>{"private bool ISkillInputMethod.ReceiveHit("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | <span className="api-desc">Does nothing and returns false.</span> |
| <Link id="m-registerhandler" /><code>{"private void ISkillInputMethod.RegisterHandler("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler, "}<Link to="/mod/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" structure, "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | <span className="api-desc">Stores the handler and the `DownwardSwingInputStructure` settings.</span> |
| <Link id="m-update" /><code>{"private void ISkillInputMethod.Update()"}</code> | <span className="api-desc">Compares the average hand height to the head: above `HeightUp` charges, then below `HeightDown` within `TimeToLowerHand` activates.</span> |

</details>
