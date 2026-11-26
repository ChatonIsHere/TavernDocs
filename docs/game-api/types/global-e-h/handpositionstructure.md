---
title: "HandPositionStructure"
description: "Base asset for skill inputs triggered by holding a hand in a set position (such as hand to heart) for a time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandPositionStructure

An **abstract class** in `Root.Township`, no namespace.

Base asset for skill inputs triggered by holding a hand in a set position (such as hand to heart) for a time. Subclasses decide what counts as in position.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`SkillInputStructure`](/game-api/types/global-s/skillinputstructure)
- **Derived types** [`HandOnSideStructure`](/game-api/types/global-e-h/handonsidestructure), [`HandToHeartInputStructure`](/game-api/types/global-e-h/handtoheartinputstructure), [`RaiseHandStructure`](/game-api/types/global-q-r/raisehandstructure)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected HandPositionStructure()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activetime" /><code>{"private float activeTime"}</code> | How long the skill stays active once triggered (default 2s). 0 means it does not time out. |
| <Link id="m-modifiers" /><code>{"private "}<Link to="/game-api/types/global-e-h/handpositioninputmodifier">{"HandPositionInputModifier"}</Link>{"[] modifiers"}</code> | Modifiers run in order over the position check result. |
| <Link id="m-timeinpositiontoactivate" /><code>{"private float timeInPositionToActivate"}</code> | How long the hand must stay in position before the skill activates (default 1s). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activetime-2" /><code>{"float ActiveTime { get; }"}</code> | Seconds the input stays active once triggered. 0 means it doesn't time out. |
| <Link id="m-timeinpositiontoactivate-2" /><code>{"float TimeInPositionToActivate { get; }"}</code> | Seconds the hand must stay in position before the input activates. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getnewinput" /><code>{"override "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" GetNewInput()"}</code> | Creates a new `HandPositionInput` that tracks this structure. |
| <Link id="m-isinposition" /><code>{"bool IsInPosition("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> | Whether the hand is in position, after the configured modifiers have had their say. |
| <Link id="m-isinpositioninternal" /><code>{"protected abstract bool IsInPositionInternal("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> | Subclass check for the raw hand position, before modifiers. |

## Used in

Members of other types that take, return or hold a `HandPositionStructure`:

[`HandPositionInput.structure`](/game-api/types/global-e-h/handpositioninput#m-structure).
