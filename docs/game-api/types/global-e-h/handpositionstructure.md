---
title: "HandPositionStructure"
description: "abstract class HandPositionStructure in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandPositionStructure

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`SkillInputStructure`](/game-api/types/global-s/skillinputstructure)
- **Derived types** [`HandOnSideStructure`](/game-api/types/global-e-h/handonsidestructure), [`HandToHeartInputStructure`](/game-api/types/global-e-h/handtoheartinputstructure), [`RaiseHandStructure`](/game-api/types/global-q-r/raisehandstructure)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected HandPositionStructure()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activetime" /><code>{"private float activeTime"}</code> |  |
| <Link id="m-modifiers" /><code>{"private "}<Link to="/game-api/types/global-e-h/handpositioninputmodifier">{"HandPositionInputModifier"}</Link>{"[] modifiers"}</code> |  |
| <Link id="m-timeinpositiontoactivate" /><code>{"private float timeInPositionToActivate"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activetime-2" /><code>{"float ActiveTime { get; }"}</code> |  |
| <Link id="m-timeinpositiontoactivate-2" /><code>{"float TimeInPositionToActivate { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getnewinput" /><code>{"override "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" GetNewInput()"}</code> |  |
| <Link id="m-isinposition" /><code>{"bool IsInPosition("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> |  |
| <Link id="m-isinpositioninternal" /><code>{"protected abstract bool IsInPositionInternal("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> |  |

## Used in

Members of other types that take, return or hold a `HandPositionStructure`:

[`HandPositionInput.structure`](/game-api/types/global-e-h/handpositioninput#m-structure).
