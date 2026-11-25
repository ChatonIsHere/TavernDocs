---
title: "InspectorBase"
description: "abstract class InspectorBase in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InspectorBase

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`ComponentInspector`](/game-api/types/global-c-d/componentinspector), [`InteractorInspector`](/game-api/types/global-i-l/interactorinspector), [`MethodMember`](/game-api/types/global-m-o/methodmember), [`ValueMember`](/game-api/types/global-t-x/valuemember)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected InspectorBase()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canmove" /><code>{"virtual bool CanMove { get; }"}</code> |  |
| <Link id="m-canrotate" /><code>{"virtual bool CanRotate { get; }"}</code> |  |
| <Link id="m-currenttransform" /><code>{"Transform CurrentTransform { get; set; }"}</code> |  |
| <Link id="m-inspectortype" /><code>{"abstract "}<Link to="/game-api/types/global-i-l/inspectortype">{"InspectorType"}</Link>{" "}<Link to="/game-api/types/global-i-l/inspectortype">{"InspectorType"}</Link>{" { get; }"}</code> |  |
| <Link id="m-name" /><code>{"abstract string Name { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-updatename" /><code>{"event Action<string> UpdateName"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clean" /><code>{"virtual void Clean()"}</code> |  |
| <Link id="m-getinteractable" /><code>{"static "}<Link to="/game-api/types/global-i-l/interactableinspector">{"InteractableInspector"}</Link>{" GetInteractable<T>(Transform baseTransform, Component baseComponent, T inspector, Vector3 offset)"}</code> |  |
| <Link id="m-interact" /><code>{"abstract void Interact(Component target, "}<Link to="/game-api/types/global-i-l/interactableinspector">{"InteractableInspector"}</Link>{" interactable)"}</code> |  |
| <Link id="m-move" /><code>{"virtual void Move(Vector3 from, Vector3 to)"}</code> |  |
| <Link id="m-rotate" /><code>{"virtual void Rotate(float angle, Component target)"}</code> |  |
| <Link id="m-onupdatename" /><code>{"protected void OnUpdateName(string name)"}</code> |  |

## Used in

Members of other types that take, return or hold a `InspectorBase`:

[`InteractableInspector.inspector`](/game-api/types/global-i-l/interactableinspector#m-inspector), [`InteractableInspector.RegisterInspector`](/game-api/types/global-i-l/interactableinspector#m-registerinspector).
