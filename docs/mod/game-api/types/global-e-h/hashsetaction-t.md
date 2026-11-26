---
title: "HashSetAction<T>"
description: "Base for game task actions whose filters are sets built on first use."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HashSetAction&lt;T&gt;

An **abstract class** in `Root.Township`, the global namespace.

Base for game task actions whose filters are sets built on first use. An empty set matches anything.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`CustomArgumentGameAction<T>`](/mod/game-api/types/global-c-d/customargumentgameaction-t)
- **Derived types** [`DockPageTask`](/mod/game-api/types/alta-items/dockpagetask), [`DockObjectTask`](/mod/game-api/types/global-c-d/dockobjecttask), [`SpecificCraftTask`](/mod/game-api/types/global-s/specificcrafttask), [`SpecificSpawnItemTask`](/mod/game-api/types/global-s/specificspawnitemtask)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected HashSetAction()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isinitialized" /><code>{"private bool isInitialized"}</code> | Set once `Initialize` has run, on the first `IsValid` call. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"override bool IsValid("}<Link to="/mod/game-api/types/global-e-h/gametaskactionargument">{"GameTaskActionArgument"}</Link>{" argument)"}</code> | Runs `Initialize` the first time, then the normal argument check. |
| <Link id="m-initialize" /><code>{"protected abstract void Initialize()"}</code> | Builds the subclass's sets. Called once, the first time `IsValid` runs. |
| <Link id="m-isskippingout" /><code>{"protected bool IsSkippingOut<TSet>(TSet value, HashSet<TSet> set)"}</code> | True when the set has entries and the value isn't one of them. |
