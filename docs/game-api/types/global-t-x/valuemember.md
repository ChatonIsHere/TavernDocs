---
title: "ValueMember"
description: "class ValueMember in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ValueMember

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`InspectorBase`](/game-api/types/global-i-l/inspectorbase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ValueMember(FieldInfo field)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"ValueMember(PropertyInfo property)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentinteractor" /><code>{"private static "}<Link to="/game-api/types/global-i-l/interactableinspector">{"InteractableInspector"}</Link>{" currentInteractor"}</code> |  |
| <Link id="m-currentinteractorinternal" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactableinspector">{"InteractableInspector"}</Link>{" currentInteractorInternal"}</code> |  |
| <Link id="m-valuegetter" /><code>{"private Func<object, object> valueGetter"}</code> |  |
| <Link id="m-valuename" /><code>{"private string valueName"}</code> |  |
| <Link id="m-valuesetter" /><code>{"private Action<object, object> valueSetter"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-inspectortype" /><code>{"override "}<Link to="/game-api/types/global-i-l/inspectortype">{"InspectorType"}</Link>{" "}<Link to="/game-api/types/global-i-l/inspectortype">{"InspectorType"}</Link>{" { get; }"}</code> |  |
| <Link id="m-interactiontype" /><code><Link to="/game-api/types/global-i-l/interactiontype">{"InteractionType"}</Link>{" "}<Link to="/game-api/types/global-i-l/interactiontype">{"InteractionType"}</Link>{" { get; }"}</code> |  |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clean" /><code>{"override void Clean()"}</code> |  |
| <Link id="m-getvalue" /><code>{"object GetValue(object target)"}</code> |  |
| <Link id="m-interact" /><code>{"override void Interact(Component target, "}<Link to="/game-api/types/global-i-l/interactableinspector">{"InteractableInspector"}</Link>{" interactable)"}</code> |  |
| <Link id="m-setnumericvalue" /><code>{"void SetNumericValue(float value, object target)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ValueMember`:

[`ComponentInspector.availableValues`](/game-api/types/global-c-d/componentinspector#m-availablevalues), [`InteractorInspector.InteractorInspector`](/game-api/types/global-i-l/interactorinspector#m-ctor), [`InteractorInspector.targetMember`](/game-api/types/global-i-l/interactorinspector#m-targetmember), [`KnobInspector.KnobInspector`](/game-api/types/global-i-l/knobinspector#m-ctor), [`OrbitalInspector.OrbitalInspector`](/game-api/types/global-m-o/orbitalinspector#m-ctor).
