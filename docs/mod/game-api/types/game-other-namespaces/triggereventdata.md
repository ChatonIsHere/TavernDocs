---
title: "TriggerEventData"
description: "ScriptableObject that names a trigger event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerEventData

A **class** in `Root.Township`, `ATT.Triggers`.

ScriptableObject that names a trigger event. The name is sent to analytics, so the asset says not to change it.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** `ScriptableObject`, [`ITriggerEventData`](/mod/game-api/types/game-other-namespaces/itriggereventdata)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TriggerEventData()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-eventname" /><code>{"private string eventName"}</code> | Backing field for `EventName`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-eventname-2" /><code>{"string EventName { get; }"}</code> | The event's name as sent to analytics. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setname" /><code>{"void SetName(string newName)"}</code> | Sets the event name. |

## Used in

Members of other types that take, return or hold a `TriggerEventData`:

[`TriggerZone.triggerEventData`](/mod/game-api/types/game-other-namespaces/triggerzone#m-triggereventdata).
