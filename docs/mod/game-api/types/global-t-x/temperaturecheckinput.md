---
title: "TemperatureCheckInput"
description: "Skill input that turns on while a held item touches heat: it copies the item's colliders onto the HeatPoint layer and adds a HeatPointTriggerCollector,..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TemperatureCheckInput

A **class** in `Root.Township`, the global namespace.

Skill input that turns on while a held item touches heat: it copies the item's colliders onto the HeatPoint layer and adds a `HeatPointTriggerCollector`, which calls `SetActive`.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`ISkillInputMethod`](/mod/game-api/types/global-i-l/iskillinputmethod)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TemperatureCheckInput()"}</code> | <span className="api-desc">Creates a `TemperatureCheckInput` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-collector" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/heatpointtriggercollector">{"HeatPointTriggerCollector"}</Link>{" collector"}</code> | <span className="api-desc">Trigger collector added to the pickup that detects heat points.</span> |
| <Link id="m-createdcolliders" /><code>{"private List<Collider> createdColliders"}</code> | <span className="api-desc">Colliders this input created, destroyed by `Clear`.</span> |
| <Link id="m-structure" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/temperaturecheckinputstructure">{"TemperatureCheckInputStructure"}</Link>{" structure"}</code> | <span className="api-desc">Input settings for this skill.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code><Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" Handler { get; private set; }"}</code> | <span className="api-desc">Held pickup handler this input belongs to.</span> |
| <Link id="m-isactive" /><code>{"bool IsActive { get; private set; }"}</code> | <span className="api-desc">Whether the held item is currently counted as touching heat.</span> |

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iskillinputmethod-needsupdate" /><code>{"private bool ISkillInputMethod.NeedsUpdate { get; }"}</code> | <span className="api-desc">Always false; this input doesn't need a per-frame update.</span> |
| <Link id="m-iskillinputmethod-receiveshits" /><code>{"private bool ISkillInputMethod.ReceivesHits { get; }"}</code> | <span className="api-desc">Always false; this input ignores tool hits.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changedactive" /><code>{"event Action<bool, "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> ChangedActive"}</code> | <span className="api-desc">Raised with the new state when the input turns on or off.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setactive" /><code>{"void SetActive(bool isActive)"}</code> | <span className="api-desc">Sets `IsActive` and raises `ChangedActive`.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void ISkillInputMethod.Clear()"}</code> | <span className="api-desc">Destroys the copied colliders and the trigger collector.</span> |
| <Link id="m-duplicatecollider" /><code>{"private void DuplicateCollider(Collider collider, int heatPointLayer)"}</code> | <span className="api-desc">Copies a box, capsule or sphere collider onto a child object on the HeatPoint layer.</span> |
| <Link id="m-getinstanced" /><code>{"private T GetInstanced<T>(Collider collider)"}</code> | <span className="api-desc">Makes a child object under the collider's transform and adds a new collider of the given type.</span> |
| <Link id="m-receivehit" /><code>{"private bool ISkillInputMethod.ReceiveHit("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | <span className="api-desc">Ignores hits and returns false.</span> |
| <Link id="m-registerhandler" /><code>{"private void ISkillInputMethod.RegisterHandler("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler, "}<Link to="/mod/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" structure, "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | <span className="api-desc">Copies the held item's solid default-layer colliders (only tool colliders the structure accepts, if it's a tool) and adds the heat trigger collector.</span> |
| <Link id="m-reset" /><code>{"private void ISkillInputMethod.Reset(bool isCallingEvent)"}</code> | <span className="api-desc">Resets the collector's timer and turns the input off, raising `ChangedActive` if asked.</span> |
| <Link id="m-update" /><code>{"private void ISkillInputMethod.Update()"}</code> | <span className="api-desc">Does nothing.</span> |

</details>

## Used in

Members of other types that take, return or hold a `TemperatureCheckInput`:

<div className="api-used-in">

[`HeatPointTriggerCollector.InitializeValues`](/mod/game-api/types/global-e-h/heatpointtriggercollector#m-initializevalues), [`HeatPointTriggerCollector.inputMethod`](/mod/game-api/types/global-e-h/heatpointtriggercollector#m-inputmethod).

</div>
