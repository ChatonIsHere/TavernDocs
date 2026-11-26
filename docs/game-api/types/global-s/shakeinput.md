---
title: "ShakeInput"
description: "Skill input method that turns on when the player shakes the held item."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShakeInput

A **class** in `Root.Township`, no namespace.

Skill input method that turns on when the player shakes the held item. Created by `ShakeInputStructure.GetNewInput` and driven by the held pickup's skill handling.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`ISkillInputMethod`](/game-api/types/global-i-l/iskillinputmethod)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShakeInput()"}</code> | Creates a `ShakeInput` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-shakehelper" /><code>{"private "}<Link to="/game-api/types/global-s/shakedetectorhelper">{"ShakeDetectorHelper"}</Link>{" shakeHelper"}</code> | Detector that measures shaking of the pickup's rigidbody. |
| <Link id="m-shakentime" /><code>{"private float shakenTime"}</code> | Real time of the last detected shake. |
| <Link id="m-shakestructure" /><code>{"private "}<Link to="/game-api/types/global-s/shakeinputstructure">{"ShakeInputStructure"}</Link>{" shakeStructure"}</code> | The `ShakeInputStructure` settings this input was registered with. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code><Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" Handler { get; private set; }"}</code> | The held pickup handler this input was registered with. |
| <Link id="m-isactive" /><code>{"bool IsActive { get; private set; }"}</code> | True from a detected shake until `HeldDeactivation` seconds have passed. |

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iskillinputmethod-needsupdate" /><code>{"private bool ISkillInputMethod.NeedsUpdate { get; }"}</code> | Always true, so `Update` is called every frame. |
| <Link id="m-iskillinputmethod-receiveshits" /><code>{"private bool ISkillInputMethod.ReceivesHits { get; }"}</code> | Always false. Shake input ignores impacts. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changedactive" /><code>{"event Action<bool, "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> ChangedActive"}</code> | Raised with true when a shake is detected and false when it times out or is reset. |

## Methods

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void ISkillInputMethod.Clear()"}</code> | Does nothing. |
| <Link id="m-onshaken" /><code>{"private void OnShaken()"}</code> | Called by the shake detector. Activates the input, records the time and raises `ChangedActive`. |
| <Link id="m-receivehit" /><code>{"private bool ISkillInputMethod.ReceiveHit("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | Ignores the hit and returns false. |
| <Link id="m-registerhandler" /><code>{"private void ISkillInputMethod.RegisterHandler("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler, "}<Link to="/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" structure, "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | Stores the handler and builds a `ShakeDetectorHelper` on the pickup's rigidbody using the structure's thresholds. |
| <Link id="m-reset" /><code>{"private void ISkillInputMethod.Reset(bool isCallingEvent)"}</code> | Deactivates the input, raising `ChangedActive` only if asked to. |
| <Link id="m-update" /><code>{"private void ISkillInputMethod.Update()"}</code> | While active, deactivates after the hold time runs out; while inactive, checks the rigidbody for a new shake. |

</details>
