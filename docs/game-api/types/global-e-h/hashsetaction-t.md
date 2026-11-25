---
title: "HashSetAction<T>"
description: "abstract class HashSetAction<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HashSetAction&lt;T&gt;

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`CustomArgumentGameAction<T>`](/game-api/types/global-c-d/customargumentgameaction-t)
- **Derived types** [`DockPageTask`](/game-api/types/alta-items/dockpagetask), [`DockObjectTask`](/game-api/types/global-c-d/dockobjecttask), [`SpecificCraftTask`](/game-api/types/global-s/specificcrafttask), [`SpecificSpawnItemTask`](/game-api/types/global-s/specificspawnitemtask)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected HashSetAction()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isinitialized" /><code>{"private bool isInitialized"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"override bool IsValid("}<Link to="/game-api/types/global-e-h/gametaskactionargument">{"GameTaskActionArgument"}</Link>{" argument)"}</code> |  |
| <Link id="m-initialize" /><code>{"protected abstract void Initialize()"}</code> |  |
| <Link id="m-isskippingout" /><code>{"protected bool IsSkippingOut<TSet>(TSet value, HashSet<TSet> set)"}</code> |  |
