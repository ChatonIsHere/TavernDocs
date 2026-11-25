---
title: "TemperatureCheckInput"
description: "class TemperatureCheckInput in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TemperatureCheckInput

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`ISkillInputMethod`](/game-api/types/global-i-l/iskillinputmethod)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TemperatureCheckInput()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-collector" /><code>{"private "}<Link to="/game-api/types/global-e-h/heatpointtriggercollector">{"HeatPointTriggerCollector"}</Link>{" collector"}</code> |  |
| <Link id="m-createdcolliders" /><code>{"private List<Collider> createdColliders"}</code> |  |
| <Link id="m-structure" /><code>{"private "}<Link to="/game-api/types/global-t-x/temperaturecheckinputstructure">{"TemperatureCheckInputStructure"}</Link>{" structure"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code><Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" Handler { get; private set; }"}</code> |  |
| <Link id="m-isactive" /><code>{"bool IsActive { get; private set; }"}</code> |  |
| <Link id="m-iskillinputmethod-needsupdate" /><code>{"private bool ISkillInputMethod.NeedsUpdate { get; }"}</code> |  |
| <Link id="m-iskillinputmethod-receiveshits" /><code>{"private bool ISkillInputMethod.ReceivesHits { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changedactive" /><code>{"event Action<bool, "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> ChangedActive"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setactive" /><code>{"void SetActive(bool isActive)"}</code> |  |
| <Link id="m-clear" /><code>{"private void ISkillInputMethod.Clear()"}</code> |  |
| <Link id="m-duplicatecollider" /><code>{"private void DuplicateCollider(Collider collider, int heatPointLayer)"}</code> |  |
| <Link id="m-getinstanced" /><code>{"private T GetInstanced<T>(Collider collider)"}</code> |  |
| <Link id="m-receivehit" /><code>{"private bool ISkillInputMethod.ReceiveHit("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> |  |
| <Link id="m-registerhandler" /><code>{"private void ISkillInputMethod.RegisterHandler("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler, "}<Link to="/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" structure, "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> |  |
| <Link id="m-reset" /><code>{"private void ISkillInputMethod.Reset(bool isCallingEvent)"}</code> |  |
| <Link id="m-update" /><code>{"private void ISkillInputMethod.Update()"}</code> |  |

## Used in

Members of other types that take, return or hold a `TemperatureCheckInput`:

[`HeatPointTriggerCollector.InitializeValues`](/game-api/types/global-e-h/heatpointtriggercollector#m-initializevalues), [`HeatPointTriggerCollector.inputMethod`](/game-api/types/global-e-h/heatpointtriggercollector#m-inputmethod).
