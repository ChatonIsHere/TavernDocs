---
title: "PickupGrabInputMethod"
description: "Skill input method for skills triggered just by holding a pickup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupGrabInputMethod

A **class** in `Root.Township`, the global namespace.

Skill input method for skills triggered just by holding a pickup. It only stores the handler and is always active; created by `PickupGrabInputStructure`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`ISkillInputMethod`](/mod/game-api/types/global-i-l/iskillinputmethod)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupGrabInputMethod()"}</code> | Creates a `PickupGrabInputMethod` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler"}</code> | The held pickup handler. |

</details>

## Properties

<details>
<summary>4 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iskillinputmethod-handler" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" ISkillInputMethod.Handler { get; }"}</code> | The held pickup handler passed to `RegisterHandler`. |
| <Link id="m-iskillinputmethod-isactive" /><code>{"private bool ISkillInputMethod.IsActive { get; }"}</code> | Always true. |
| <Link id="m-iskillinputmethod-needsupdate" /><code>{"private bool ISkillInputMethod.NeedsUpdate { get; }"}</code> | Always false, so `Update` isn't called. |
| <Link id="m-iskillinputmethod-receiveshits" /><code>{"private bool ISkillInputMethod.ReceivesHits { get; }"}</code> | Always false. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changedactive" /><code>{"event Action<bool, "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> ChangedActive"}</code> | Event from `ISkillInputMethod`. Never raised here. |

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void ISkillInputMethod.Clear()"}</code> | Empty. |
| <Link id="m-receivehit" /><code>{"private bool ISkillInputMethod.ReceiveHit("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | Ignores hits and returns false. |
| <Link id="m-registerhandler" /><code>{"private void ISkillInputMethod.RegisterHandler("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler, "}<Link to="/mod/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" structure, "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | Stores the held pickup handler. |
| <Link id="m-reset" /><code>{"private void ISkillInputMethod.Reset(bool isCallingEvent)"}</code> | Empty. |
| <Link id="m-update" /><code>{"private void ISkillInputMethod.Update()"}</code> | Empty. |

</details>
