---
title: "Trigger"
description: "abstract class Trigger in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Trigger

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<TriggerSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<TriggerSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`Lever`](/game-api/types/global-i-l/lever), [`TriggerSaveData`](/game-api/types/global-t-x/triggersavedata), [`TwoStepLever`](/game-api/types/global-t-x/twosteplever)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Trigger()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-syncwithsender" /><code>{"private bool syncWithSender"}</code> |  |
| <Link id="m-toggle" /><code>{"private bool toggle"}</code> |  |
| <Link id="m-togglestate" /><code>{"private bool toggleState"}</code> |  |
| <Link id="m-turnedoff" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" turnedOff"}</code> |  |
| <Link id="m-turnedon" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" turnedOn"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ison" /><code>{"bool IsOn { get; protected set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-turnedoff-2" /><code>{"event Action TurnedOff"}</code> |  |
| <Link id="m-turnedon-2" /><code>{"event Action TurnedOn"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checksendermatch" /><code>{"private bool CheckSenderMatch(bool value)"}</code> |  |
| <Link id="m-set" /><code>{"protected void Set(bool isOn)"}</code> |  |
