---
title: "FireLogic"
description: "Lets a logic signal light or put out a Fire, and reports the fire's on/off state as a bool event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FireLogic

A **class** in `Root.Township`, no namespace.

Lets a logic signal light or put out a `Fire`, and reports the fire's on/off state as a bool event. Saved with the object.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<FireLogicSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<FireLogicSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`FireLogicSaveData`](/game-api/types/global-e-h/firelogicsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FireLogic()"}</code> | Creates a `FireLogic` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activatedbylogic" /><code>{"private bool activatedByLogic"}</code> | When false, logic input is ignored. Saved. |
| <Link id="m-fire" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/fire">{"Fire"}</Link>{" fire"}</code> | The fire this controls. |
| <Link id="m-onvalueupdated" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onValueUpdated"}</code> | Event fired with the fire's new state whenever it toggles. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatefire" /><code>{"void UpdateFire(bool value)"}</code> | If `activatedByLogic` is set, lights the fire on true and puts it out instantly on false. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the fire's toggle event to `onValueUpdated`. |

</details>
