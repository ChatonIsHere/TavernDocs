---
title: "Trigger"
description: "Base of on/off inputs like Lever and TwoStepLever."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Trigger

An **abstract class** in `Root.Township`, no namespace.

Base of on/off inputs like `Lever` and `TwoStepLever`. Fires turned on and turned off events and can act as a toggle. Saves its toggle settings.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<TriggerSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<TriggerSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`Lever`](/game-api/types/global-i-l/lever), [`TriggerSaveData`](/game-api/types/global-t-x/triggersavedata), [`TwoStepLever`](/game-api/types/global-t-x/twosteplever)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected Trigger()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-syncwithsender" /><code>{"private bool syncWithSender"}</code> |
| <Link id="m-toggle" /><code>{"private bool toggle"}</code> |
| <Link id="m-togglestate" /><code>{"private bool toggleState"}</code> |
| <Link id="m-turnedoff" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" turnedOff"}</code> |
| <Link id="m-turnedon" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" turnedOn"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ison" /><code>{"bool IsOn { get; protected set; }"}</code> | Current raw state. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-turnedoff-2" /><code>{"event Action TurnedOff"}</code> | Fired when the output turns off. |
| <Link id="m-turnedon-2" /><code>{"event Action TurnedOn"}</code> | Fired when the output turns on. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-set" /><code>{"protected void Set(bool isOn)"}</code> | Sets the state. In toggle mode each switch-on flips the output instead, optionally kept in step with a `LogicBoolSender`. |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-checksendermatch" /><code>{"private bool CheckSenderMatch(bool value)"}</code> |

</details>
