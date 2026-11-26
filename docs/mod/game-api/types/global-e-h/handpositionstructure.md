---
title: "HandPositionStructure"
description: "Base asset for skill inputs triggered by holding a hand in a set position (such as hand to heart) for a time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandPositionStructure

An **abstract class** in `Root.Township`, the global namespace.

Base asset for skill inputs triggered by holding a hand in a set position (such as hand to heart) for a time. Subclasses decide what counts as in position.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`SkillInputStructure`](/mod/game-api/types/global-s/skillinputstructure)
- **Derived types** [`HandOnSideStructure`](/mod/game-api/types/global-e-h/handonsidestructure), [`HandToHeartInputStructure`](/mod/game-api/types/global-e-h/handtoheartinputstructure), [`RaiseHandStructure`](/mod/game-api/types/global-q-r/raisehandstructure)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected HandPositionStructure()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activetime" /><code>{"private float activeTime"}</code> | <span className="api-desc">How long the skill stays active once triggered (default 2s). 0 means it does not time out.</span> |
| <Link id="m-modifiers" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handpositioninputmodifier">{"HandPositionInputModifier"}</Link>{"[] modifiers"}</code> | <span className="api-desc">Modifiers run in order over the position check result.</span> |
| <Link id="m-timeinpositiontoactivate" /><code>{"private float timeInPositionToActivate"}</code> | <span className="api-desc">How long the hand must stay in position before the skill activates (default 1s).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activetime-2" /><code>{"float ActiveTime { get; }"}</code> | <span className="api-desc">Seconds the input stays active once triggered. 0 means it doesn't time out.</span> |
| <Link id="m-timeinpositiontoactivate-2" /><code>{"float TimeInPositionToActivate { get; }"}</code> | <span className="api-desc">Seconds the hand must stay in position before the input activates.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getnewinput" /><code>{"override "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" GetNewInput()"}</code> | <span className="api-desc">Creates a new `HandPositionInput` that tracks this structure.</span> |
| <Link id="m-isinposition" /><code>{"bool IsInPosition("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Whether the hand is in position, after the configured modifiers have had their say.</span> |
| <Link id="m-isinpositioninternal" /><code>{"protected abstract bool IsInPositionInternal("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Subclass check for the raw hand position, before modifiers.</span> |

## Used in

Members of other types that take, return or hold a `HandPositionStructure`:

<div className="api-used-in">

[`HandPositionInput.structure`](/mod/game-api/types/global-e-h/handpositioninput#m-structure).

</div>
