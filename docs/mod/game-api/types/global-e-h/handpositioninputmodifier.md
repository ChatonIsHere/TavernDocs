---
title: "HandPositionInputModifier"
description: "Asset that can change the result of a HandPositionStructure position check, for extra conditions on hand position skills."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandPositionInputModifier

An **abstract class** in `Root.Township`, the global namespace.

Asset that can change the result of a `HandPositionStructure` position check, for extra conditions on hand position skills.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`StandingStillPositionModifier`](/mod/game-api/types/global-s/standingstillpositionmodifier)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected HandPositionInputModifier()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modifyisinposition" /><code>{"abstract void ModifyIsInPosition("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, ref bool isInPosition)"}</code> | <span className="api-desc">Called after the base check with the held pickup handler; may change `isInPosition`.</span> |

## Used in

Members of other types that take, return or hold a `HandPositionInputModifier`:

<div className="api-used-in">

[`HandPositionStructure.modifiers`](/mod/game-api/types/global-e-h/handpositionstructure#m-modifiers).

</div>
