---
title: "ShakeInput"
description: "Skill input method that turns on when the player shakes the held item."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShakeInput

A **class** in `Root.Township`, the global namespace.

Skill input method that turns on when the player shakes the held item. Created by `ShakeInputStructure.GetNewInput` and driven by the held pickup's skill handling.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`ISkillInputMethod`](/mod/game-api/types/global-i-l/iskillinputmethod)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShakeInput()"}</code> | <span className="api-desc">Creates a `ShakeInput` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-shakehelper" /><code>{"private "}<Link to="/mod/game-api/types/global-s/shakedetectorhelper">{"ShakeDetectorHelper"}</Link>{" shakeHelper"}</code> | <span className="api-desc">Detector that measures shaking of the pickup's rigidbody.</span> |
| <Link id="m-shakentime" /><code>{"private float shakenTime"}</code> | <span className="api-desc">Real time of the last detected shake.</span> |
| <Link id="m-shakestructure" /><code>{"private "}<Link to="/mod/game-api/types/global-s/shakeinputstructure">{"ShakeInputStructure"}</Link>{" shakeStructure"}</code> | <span className="api-desc">The `ShakeInputStructure` settings this input was registered with.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code><Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" Handler { get; private set; }"}</code> | <span className="api-desc">The held pickup handler this input was registered with.</span> |
| <Link id="m-isactive" /><code>{"bool IsActive { get; private set; }"}</code> | <span className="api-desc">True from a detected shake until `HeldDeactivation` seconds have passed.</span> |

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iskillinputmethod-needsupdate" /><code>{"private bool ISkillInputMethod.NeedsUpdate { get; }"}</code> | <span className="api-desc">Always true, so `Update` is called every frame.</span> |
| <Link id="m-iskillinputmethod-receiveshits" /><code>{"private bool ISkillInputMethod.ReceivesHits { get; }"}</code> | <span className="api-desc">Always false. Shake input ignores impacts.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changedactive" /><code>{"event Action<bool, "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> ChangedActive"}</code> | <span className="api-desc">Raised with true when a shake is detected and false when it times out or is reset.</span> |

## Methods

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void ISkillInputMethod.Clear()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-onshaken" /><code>{"private void OnShaken()"}</code> | <span className="api-desc">Called by the shake detector. Activates the input, records the time and raises `ChangedActive`.</span> |
| <Link id="m-receivehit" /><code>{"private bool ISkillInputMethod.ReceiveHit("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | <span className="api-desc">Ignores the hit and returns false.</span> |
| <Link id="m-registerhandler" /><code>{"private void ISkillInputMethod.RegisterHandler("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler, "}<Link to="/mod/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" structure, "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | <span className="api-desc">Stores the handler and builds a `ShakeDetectorHelper` on the pickup's rigidbody using the structure's thresholds.</span> |
| <Link id="m-reset" /><code>{"private void ISkillInputMethod.Reset(bool isCallingEvent)"}</code> | <span className="api-desc">Deactivates the input, raising `ChangedActive` only if asked to.</span> |
| <Link id="m-update" /><code>{"private void ISkillInputMethod.Update()"}</code> | <span className="api-desc">While active, deactivates after the hold time runs out; while inactive, checks the rigidbody for a new shake.</span> |

</details>
