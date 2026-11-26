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
| <Link id="m-ctor" /><code>{"ValueMember(FieldInfo field)"}</code> | <span className="api-desc">Creates a `ValueMember` from `property`.</span> |
| <Link id="m-ctor-2" /><code>{"ValueMember(PropertyInfo property)"}</code> | <span className="api-desc">Creates a `ValueMember` from `property`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentinteractor" /><code>{"private static "}<Link to="/mod/game-api/types/global-i-l/interactableinspector">{"InteractableInspector"}</Link>{" currentInteractor"}</code> | <span className="api-desc">The knob or other control currently spawned by any value entry; shared, so opening one releases the last.</span> |
| <Link id="m-currentinteractorinternal" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactableinspector">{"InteractableInspector"}</Link>{" currentInteractorInternal"}</code> | <span className="api-desc">Control spawned by this entry, cleaned up in `Clean` if it is still the current one.</span> |
| <Link id="m-valuegetter" /><code>{"private Func<object, object> valueGetter"}</code> | <span className="api-desc">Reads the field or property from a target object.</span> |
| <Link id="m-valuename" /><code>{"private string valueName"}</code> | <span className="api-desc">The field or property name shown in the bubble.</span> |
| <Link id="m-valuesetter" /><code>{"private Action<object, object> valueSetter"}</code> | <span className="api-desc">Writes the field or property on a target object.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-inspectortype" /><code>{"override "}<Link to="/mod/game-api/types/global-i-l/inspectortype">{"InspectorType"}</Link>{" "}<Link to="/mod/game-api/types/global-i-l/inspectortype">{"InspectorType"}</Link>{" { get; }"}</code> | <span className="api-desc">Always `InspectorType.Value`.</span> |
| <Link id="m-interactiontype" /><code><Link to="/mod/game-api/types/global-i-l/interactiontype">{"InteractionType"}</Link>{" "}<Link to="/mod/game-api/types/global-i-l/interactiontype">{"InteractionType"}</Link>{" { get; }"}</code> | <span className="api-desc">How the value can be edited, from the attribute.</span> |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | <span className="api-desc">The member name followed by a colon.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clean" /><code>{"override void Clean()"}</code> | <span className="api-desc">Cleans up its knob bubble if it is the one open.</span> |
| <Link id="m-getvalue" /><code>{"object GetValue(object target)"}</code> | <span className="api-desc">Reads the value from the target.</span> |
| <Link id="m-interact" /><code>{"override void Interact(Component target, "}<Link to="/mod/game-api/types/global-i-l/interactableinspector">{"InteractableInspector"}</Link>{" interactable)"}</code> | <span className="api-desc">Shows the current value, and for knob fields opens a knob bubble to change it.</span> |
| <Link id="m-setnumericvalue" /><code>{"void SetNumericValue(float value, object target)"}</code> | <span className="api-desc">Writes a float to the target and updates the label.</span> |

## Used in

Members of other types that take, return or hold a `ValueMember`:

<div className="api-used-in">

[`ComponentInspector.availableValues`](/mod/game-api/types/global-c-d/componentinspector#m-availablevalues), [`InteractorInspector.InteractorInspector`](/mod/game-api/types/global-i-l/interactorinspector#m-ctor), [`InteractorInspector.targetMember`](/mod/game-api/types/global-i-l/interactorinspector#m-targetmember), [`KnobInspector.KnobInspector`](/mod/game-api/types/global-i-l/knobinspector#m-ctor), [`OrbitalInspector.OrbitalInspector`](/mod/game-api/types/global-m-o/orbitalinspector#m-ctor).

</div>
