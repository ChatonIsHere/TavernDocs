---
title: "CustomArgumentGameAction<T>"
description: "Base for a game task action that only checks one kind of task argument."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomArgumentGameAction&lt;T&gt;

An **abstract class** in `Root.Township`, the global namespace.

Base for a game task action that only checks one kind of task argument.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`GameAction`](/mod/game-api/types/global-e-h/gameaction)
- **Derived types** [`DestroyHealthObjectTask`](/mod/game-api/types/global-c-d/destroyhealthobjecttask), [`FinishSpawnProjectTask`](/mod/game-api/types/global-e-h/finishspawnprojecttask), [`HandTouchTask`](/mod/game-api/types/global-e-h/handtouchtask), [`HashSetAction<T>`](/mod/game-api/types/global-e-h/hashsetaction-t), [`MaxValueTask`](/mod/game-api/types/global-m-o/maxvaluetask), [`TransferAmountTask`](/mod/game-api/types/global-t-x/transferamounttask)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected CustomArgumentGameAction()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"override bool IsValid("}<Link to="/mod/game-api/types/global-e-h/gametaskactionargument">{"GameTaskActionArgument"}</Link>{" argument)"}</code> | Casts the argument to the expected type (null if it's another type) and checks it. |
| <Link id="m-isvalid-2" /><code>{"protected abstract bool IsValid(T argument)"}</code> | Casts the argument to the expected type (null if it's another type) and checks it. |
