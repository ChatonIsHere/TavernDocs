---
title: "ValueMember"
description: "Inspector entry for one field or property marked with BubbleInspectorFieldAttribute, shown in an InteractableInspector bubble."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ValueMember

A **class** in `Root.Township`, the global namespace.

Inspector entry for one field or property marked with `BubbleInspectorFieldAttribute`, shown in an `InteractableInspector` bubble.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`InspectorBase`](/mod/game-api/types/global-i-l/inspectorbase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ValueMember(FieldInfo field)"}</code> | Creates a `ValueMember` from `property`. |
| <Link id="m-ctor-2" /><code>{"ValueMember(PropertyInfo property)"}</code> | Creates a `ValueMember` from `property`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentinteractor" /><code>{"private static "}<Link to="/mod/game-api/types/global-i-l/interactableinspector">{"InteractableInspector"}</Link>{" currentInteractor"}</code> | The knob or other control currently spawned by any value entry; shared, so opening one releases the last. |
| <Link id="m-currentinteractorinternal" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactableinspector">{"InteractableInspector"}</Link>{" currentInteractorInternal"}</code> | Control spawned by this entry, cleaned up in `Clean` if it is still the current one. |
| <Link id="m-valuegetter" /><code>{"private Func<object, object> valueGetter"}</code> | Reads the field or property from a target object. |
| <Link id="m-valuename" /><code>{"private string valueName"}</code> | The field or property name shown in the bubble. |
| <Link id="m-valuesetter" /><code>{"private Action<object, object> valueSetter"}</code> | Writes the field or property on a target object. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-inspectortype" /><code>{"override "}<Link to="/mod/game-api/types/global-i-l/inspectortype">{"InspectorType"}</Link>{" "}<Link to="/mod/game-api/types/global-i-l/inspectortype">{"InspectorType"}</Link>{" { get; }"}</code> | Always `InspectorType.Value`. |
| <Link id="m-interactiontype" /><code><Link to="/mod/game-api/types/global-i-l/interactiontype">{"InteractionType"}</Link>{" "}<Link to="/mod/game-api/types/global-i-l/interactiontype">{"InteractionType"}</Link>{" { get; }"}</code> | How the value can be edited, from the attribute. |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | The member name followed by a colon. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clean" /><code>{"override void Clean()"}</code> | Cleans up its knob bubble if it is the one open. |
| <Link id="m-getvalue" /><code>{"object GetValue(object target)"}</code> | Reads the value from the target. |
| <Link id="m-interact" /><code>{"override void Interact(Component target, "}<Link to="/mod/game-api/types/global-i-l/interactableinspector">{"InteractableInspector"}</Link>{" interactable)"}</code> | Shows the current value, and for knob fields opens a knob bubble to change it. |
| <Link id="m-setnumericvalue" /><code>{"void SetNumericValue(float value, object target)"}</code> | Writes a float to the target and updates the label. |

## Used in

Members of other types that take, return or hold a `ValueMember`:

[`ComponentInspector.availableValues`](/mod/game-api/types/global-c-d/componentinspector#m-availablevalues), [`InteractorInspector.InteractorInspector`](/mod/game-api/types/global-i-l/interactorinspector#m-ctor), [`InteractorInspector.targetMember`](/mod/game-api/types/global-i-l/interactorinspector#m-targetmember), [`KnobInspector.KnobInspector`](/mod/game-api/types/global-i-l/knobinspector#m-ctor), [`OrbitalInspector.OrbitalInspector`](/mod/game-api/types/global-m-o/orbitalinspector#m-ctor).
