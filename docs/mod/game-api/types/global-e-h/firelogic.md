---
title: "FireLogic"
description: "Lets a logic signal light or put out a Fire, and reports the fire's on/off state as a bool event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FireLogic

A **class** in `Root.Township`, the global namespace.

Lets a logic signal light or put out a `Fire`, and reports the fire's on/off state as a bool event. Saved with the object.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<FireLogicSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<FireLogicSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`FireLogicSaveData`](/mod/game-api/types/global-e-h/firelogicsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FireLogic()"}</code> | <span className="api-desc">Creates a `FireLogic` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activatedbylogic" /><code>{"private bool activatedByLogic"}</code> | <span className="api-desc">When false, logic input is ignored. Saved.</span> |
| <Link id="m-fire" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/fire">{"Fire"}</Link>{" fire"}</code> | <span className="api-desc">The fire this controls.</span> |
| <Link id="m-onvalueupdated" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onValueUpdated"}</code> | <span className="api-desc">Event fired with the fire's new state whenever it toggles.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatefire" /><code>{"void UpdateFire(bool value)"}</code> | <span className="api-desc">If `activatedByLogic` is set, lights the fire on true and puts it out instantly on false.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the fire's toggle event to `onValueUpdated`.</span> |

</details>
