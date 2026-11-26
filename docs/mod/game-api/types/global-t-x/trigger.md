---
title: "Trigger"
description: "Base of on/off inputs like Lever and TwoStepLever."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Trigger

An **abstract class** in `Root.Township`, the global namespace.

Base of on/off inputs like `Lever` and `TwoStepLever`. Fires turned on and turned off events and can act as a toggle. Saves its toggle settings.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<TriggerSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<TriggerSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`Lever`](/mod/game-api/types/global-i-l/lever), [`TriggerSaveData`](/mod/game-api/types/global-t-x/triggersavedata), [`TwoStepLever`](/mod/game-api/types/global-t-x/twosteplever)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Trigger()"}</code> | <span className="api-desc">Creates a `Trigger` with default values.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-syncwithsender" /><code>{"private bool syncWithSender"}</code> | <span className="api-desc">In toggle mode, keeps the toggle state in line with this object's `LogicBoolSender` value. Saved.</span> |
| <Link id="m-toggle" /><code>{"private bool toggle"}</code> | <span className="api-desc">When true, each turn-on flips between firing `turnedOn` and `turnedOff`, like a push button. Saved.</span> |
| <Link id="m-togglestate" /><code>{"private bool toggleState"}</code> | <span className="api-desc">Current state in toggle mode.</span> |
| <Link id="m-turnedoff" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" turnedOff"}</code> | <span className="api-desc">Event fired when the trigger turns off (or toggles off).</span> |
| <Link id="m-turnedon" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" turnedOn"}</code> | <span className="api-desc">Event fired when the trigger turns on (or toggles on).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ison" /><code>{"bool IsOn { get; protected set; }"}</code> | <span className="api-desc">Current raw state.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-turnedoff-2" /><code>{"event Action TurnedOff"}</code> | <span className="api-desc">Fired when the output turns off.</span> |
| <Link id="m-turnedon-2" /><code>{"event Action TurnedOn"}</code> | <span className="api-desc">Fired when the output turns on.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-set" /><code>{"protected void Set(bool isOn)"}</code> | <span className="api-desc">Sets the state. In toggle mode each switch-on flips the output instead, optionally kept in step with a `LogicBoolSender`.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checksendermatch" /><code>{"private bool CheckSenderMatch(bool value)"}</code> | <span className="api-desc">Whether the given value matches the `LogicBoolSender` on this object.</span> |

</details>
