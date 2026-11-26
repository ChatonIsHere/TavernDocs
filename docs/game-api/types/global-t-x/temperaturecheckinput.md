---
title: "TemperatureCheckInput"
description: "Skill input that turns on while a held item touches heat: it copies the item's colliders onto the HeatPoint layer and adds a HeatPointTriggerCollector,..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TemperatureCheckInput

A **class** in `Root.Township`, no namespace.

Skill input that turns on while a held item touches heat: it copies the item's colliders onto the HeatPoint layer and adds a `HeatPointTriggerCollector`, which calls `SetActive`.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`ISkillInputMethod`](/game-api/types/global-i-l/iskillinputmethod)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TemperatureCheckInput()"}</code> | Creates a `TemperatureCheckInput` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-collector" /><code>{"private "}<Link to="/game-api/types/global-e-h/heatpointtriggercollector">{"HeatPointTriggerCollector"}</Link>{" collector"}</code> | Trigger collector added to the pickup that detects heat points. |
| <Link id="m-createdcolliders" /><code>{"private List<Collider> createdColliders"}</code> | Colliders this input created, destroyed by `Clear`. |
| <Link id="m-structure" /><code>{"private "}<Link to="/game-api/types/global-t-x/temperaturecheckinputstructure">{"TemperatureCheckInputStructure"}</Link>{" structure"}</code> | Input settings for this skill. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code><Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" Handler { get; private set; }"}</code> | Held pickup handler this input belongs to. |
| <Link id="m-isactive" /><code>{"bool IsActive { get; private set; }"}</code> | Whether the held item is currently counted as touching heat. |

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iskillinputmethod-needsupdate" /><code>{"private bool ISkillInputMethod.NeedsUpdate { get; }"}</code> | Always false; this input doesn't need a per-frame update. |
| <Link id="m-iskillinputmethod-receiveshits" /><code>{"private bool ISkillInputMethod.ReceivesHits { get; }"}</code> | Always false; this input ignores tool hits. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changedactive" /><code>{"event Action<bool, "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> ChangedActive"}</code> | Raised with the new state when the input turns on or off. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setactive" /><code>{"void SetActive(bool isActive)"}</code> | Sets `IsActive` and raises `ChangedActive`. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void ISkillInputMethod.Clear()"}</code> | Destroys the copied colliders and the trigger collector. |
| <Link id="m-duplicatecollider" /><code>{"private void DuplicateCollider(Collider collider, int heatPointLayer)"}</code> | Copies a box, capsule or sphere collider onto a child object on the HeatPoint layer. |
| <Link id="m-getinstanced" /><code>{"private T GetInstanced<T>(Collider collider)"}</code> | Makes a child object under the collider's transform and adds a new collider of the given type. |
| <Link id="m-receivehit" /><code>{"private bool ISkillInputMethod.ReceiveHit("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | Ignores hits and returns false. |
| <Link id="m-registerhandler" /><code>{"private void ISkillInputMethod.RegisterHandler("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler, "}<Link to="/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" structure, "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | Copies the held item's solid default-layer colliders (only tool colliders the structure accepts, if it's a tool) and adds the heat trigger collector. |
| <Link id="m-reset" /><code>{"private void ISkillInputMethod.Reset(bool isCallingEvent)"}</code> | Resets the collector's timer and turns the input off, raising `ChangedActive` if asked. |
| <Link id="m-update" /><code>{"private void ISkillInputMethod.Update()"}</code> | Does nothing. |

</details>

## Used in

Members of other types that take, return or hold a `TemperatureCheckInput`:

[`HeatPointTriggerCollector.InitializeValues`](/game-api/types/global-e-h/heatpointtriggercollector#m-initializevalues), [`HeatPointTriggerCollector.inputMethod`](/game-api/types/global-e-h/heatpointtriggercollector#m-inputmethod).
