---
title: "DownwardSwingInput"
description: "Skill input that turns on after the player raises the held tool above their head and then brings it down quickly."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DownwardSwingInput

A **class** in `Root.Township`, no namespace.

Skill input that turns on after the player raises the held tool above their head and then brings it down quickly. Made by `DownwardSwingInputStructure`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`ISkillInputMethod`](/game-api/types/global-i-l/iskillinputmethod)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DownwardSwingInput()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lasttimeup" /><code>{"private float lastTimeUp"}</code> | Real time when the hands were last above the head, or when the input activated. |
| <Link id="m-structure" /><code>{"private "}<Link to="/game-api/types/global-c-d/downwardswinginputstructure">{"DownwardSwingInputStructure"}</Link>{" structure"}</code> | Settings asset with the heights and timings. |
| <Link id="m-wascharged" /><code>{"private bool wasCharged"}</code> | Whether the hands have been raised since the last swing. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code><Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" Handler { get; private set; }"}</code> | The held pickup handler this input watches. |
| <Link id="m-isactive" /><code>{"bool IsActive { get; private set; }"}</code> | True after a completed downward swing, until the active time runs out or it is reset. |

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iskillinputmethod-needsupdate" /><code>{"private bool ISkillInputMethod.NeedsUpdate { get; }"}</code> | Always true, so `Update` runs every frame. |
| <Link id="m-iskillinputmethod-receiveshits" /><code>{"private bool ISkillInputMethod.ReceivesHits { get; }"}</code> | Always false; this input ignores hits. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changedactive" /><code>{"event Action<bool, "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> ChangedActive"}</code> | Raised when the input turns on or off. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reset" /><code>{"void Reset(bool isCallingEvent)"}</code> | Clears the charge and turns the input off, optionally raising `ChangedActive`. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void ISkillInputMethod.Clear()"}</code> | Resets the input and raises `ChangedActive` if it was active. |
| <Link id="m-receivehit" /><code>{"private bool ISkillInputMethod.ReceiveHit("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | Does nothing and returns false. |
| <Link id="m-registerhandler" /><code>{"private void ISkillInputMethod.RegisterHandler("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler, "}<Link to="/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" structure, "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | Stores the handler and the `DownwardSwingInputStructure` settings. |
| <Link id="m-update" /><code>{"private void ISkillInputMethod.Update()"}</code> | Compares the average hand height to the head: above `HeightUp` charges, then below `HeightDown` within `TimeToLowerHand` activates. |

</details>
