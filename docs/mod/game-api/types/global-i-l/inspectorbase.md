---
title: "InspectorBase"
description: "Base for the debug bubble inspector's entries (component, method, value and interactor inspectors)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InspectorBase

An **abstract class** in `Root.Township`, the global namespace.

Base for the debug bubble inspector's entries (component, method, value and interactor inspectors). Each is shown as a floating bubble you can grab, move and twist.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`ComponentInspector`](/mod/game-api/types/global-c-d/componentinspector), [`InteractorInspector`](/mod/game-api/types/global-i-l/interactorinspector), [`MethodMember`](/mod/game-api/types/global-m-o/methodmember), [`ValueMember`](/mod/game-api/types/global-t-x/valuemember)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected InspectorBase()"}</code> | Creates an `InspectorBase` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canmove" /><code>{"virtual bool CanMove { get; }"}</code> | Whether the bubble can be moved. True by default, but the bubble does not check it. |
| <Link id="m-canrotate" /><code>{"virtual bool CanRotate { get; }"}</code> | Whether twisting the bubble calls `Rotate`. False by default. |
| <Link id="m-currenttransform" /><code>{"Transform CurrentTransform { get; set; }"}</code> | The bubble's transform, set when the inspector is registered with it. |
| <Link id="m-inspectortype" /><code>{"abstract "}<Link to="/mod/game-api/types/global-i-l/inspectortype">{"InspectorType"}</Link>{" "}<Link to="/mod/game-api/types/global-i-l/inspectortype">{"InspectorType"}</Link>{" { get; }"}</code> | Which kind of inspector this is. Picks the bubble's material. |
| <Link id="m-name" /><code>{"abstract string Name { get; }"}</code> | The text shown on the bubble. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-updatename" /><code>{"event Action<string> UpdateName"}</code> | Raised to change the extra text after the bubble's name. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clean" /><code>{"virtual void Clean()"}</code> | Cleanup hook. Does nothing in the base class. |
| <Link id="m-getinteractable" /><code>{"static "}<Link to="/mod/game-api/types/global-i-l/interactableinspector">{"InteractableInspector"}</Link>{" GetInteractable<T>(Transform baseTransform, Component baseComponent, T inspector, Vector3 offset)"}</code> | Spawns a debug inspector bubble at a transform, offsets it and registers the inspector on it. |
| <Link id="m-interact" /><code>{"abstract void Interact(Component target, "}<Link to="/mod/game-api/types/global-i-l/interactableinspector">{"InteractableInspector"}</Link>{" interactable)"}</code> | Called when the bubble is tapped without moving it. |
| <Link id="m-move" /><code>{"virtual void Move(Vector3 from, Vector3 to)"}</code> | Called while the bubble is dragged, with the old and new positions. |
| <Link id="m-rotate" /><code>{"virtual void Rotate(float angle, Component target)"}</code> | Called while the bubble is twisted, with the angle. Only if `CanRotate`. |
| <Link id="m-onupdatename" /><code>{"protected void OnUpdateName(string name)"}</code> | Raises `UpdateName` so the bubble appends the given text to its label. |

## Used in

Members of other types that take, return or hold a `InspectorBase`:

[`InteractableInspector.inspector`](/mod/game-api/types/global-i-l/interactableinspector#m-inspector), [`InteractableInspector.RegisterInspector`](/mod/game-api/types/global-i-l/interactableinspector#m-registerinspector).
