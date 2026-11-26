---
title: "MethodMember"
description: "An in-game inspector entry for a method on a component."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MethodMember

A **class** in `Root.Township`, the global namespace.

An in-game inspector entry for a method on a component. Interacting with it calls the method with no arguments.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`InspectorBase`](/mod/game-api/types/global-i-l/inspectorbase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MethodMember(MethodInfo method)"}</code> | <span className="api-desc">Creates a `MethodMember` from `method`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-method" /><code>{"private MethodInfo method"}</code> | <span className="api-desc">The reflected method this entry calls.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-inspectortype" /><code>{"override "}<Link to="/mod/game-api/types/global-i-l/inspectortype">{"InspectorType"}</Link>{" "}<Link to="/mod/game-api/types/global-i-l/inspectortype">{"InspectorType"}</Link>{" { get; }"}</code> | <span className="api-desc">Always `InspectorType.Method`.</span> |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | <span className="api-desc">The method's name.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-interact" /><code>{"override void Interact(Component target, "}<Link to="/mod/game-api/types/global-i-l/interactableinspector">{"InteractableInspector"}</Link>{" interactable)"}</code> | <span className="api-desc">Invokes the method on the target component, with no arguments.</span> |

## Used in

Members of other types that take, return or hold a `MethodMember`:

<div className="api-used-in">

[`ComponentInspector.availableMethods`](/mod/game-api/types/global-c-d/componentinspector#m-availablemethods).

</div>
