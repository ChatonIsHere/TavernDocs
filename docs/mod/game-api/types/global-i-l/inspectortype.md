---
title: "InspectorType"
description: "What an in-game bubble inspector entry represents: a component, a method, a value or an interactor."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InspectorType

An **enum** in `Root.Township`, the global namespace.

What an in-game bubble inspector entry represents: a component, a method, a value or an interactor. Returned by `InspectorBase.InspectorType`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)

## Values

| Member |
| --- |
| <Link id="m-component" /><code>{"Component = 0"}</code> |
| <Link id="m-interactor" /><code>{"Interactor = 3"}</code> |
| <Link id="m-method" /><code>{"Method = 1"}</code> |
| <Link id="m-value" /><code>{"Value = 2"}</code> |

## Used in

Members of other types that take, return or hold a `InspectorType`:

<div className="api-used-in">

[`ComponentInspector.InspectorType`](/mod/game-api/types/global-c-d/componentinspector#m-inspectortype), [`InspectorBase.InspectorType`](/mod/game-api/types/global-i-l/inspectorbase#m-inspectortype), [`InteractorInspector.InspectorType`](/mod/game-api/types/global-i-l/interactorinspector#m-inspectortype), [`MethodMember.InspectorType`](/mod/game-api/types/global-m-o/methodmember#m-inspectortype), [`ValueMember.InspectorType`](/mod/game-api/types/global-t-x/valuemember#m-inspectortype).

</div>
