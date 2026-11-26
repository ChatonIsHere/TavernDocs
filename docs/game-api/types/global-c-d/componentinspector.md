---
title: "ComponentInspector"
description: "In-game bubble inspector node for one component."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ComponentInspector

A **class** in `Root.Township`, no namespace.

In-game bubble inspector node for one component. Interacting with it spreads bubbles for the component's exposed methods and values around it, and interacting again removes them.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`InspectorBase`](/game-api/types/global-i-l/inspectorbase)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ComponentInspector(MonoBehaviour component)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-availablemethods" /><code>{"List<"}<Link to="/game-api/types/global-m-o/methodmember">{"MethodMember"}</Link>{"> availableMethods"}</code> | Methods shown as bubbles when expanded. |
| <Link id="m-availablevalues" /><code>{"List<"}<Link to="/game-api/types/global-t-x/valuemember">{"ValueMember"}</Link>{"> availableValues"}</code> | Fields or properties shown as bubbles when expanded. |

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-component" /><code>{"private Component component"}</code> | The component being inspected. |
| <Link id="m-isexpanded" /><code>{"private bool isExpanded"}</code> | Whether the member bubbles are showing. |
| <Link id="m-spawned" /><code>{"private List<"}<Link to="/game-api/types/global-i-l/interactableinspector">{"InteractableInspector"}</Link>{"> spawned"}</code> | Member bubbles currently spawned. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-inspectortype" /><code>{"override "}<Link to="/game-api/types/global-i-l/inspectortype">{"InspectorType"}</Link>{" "}<Link to="/game-api/types/global-i-l/inspectortype">{"InspectorType"}</Link>{" { get; }"}</code> | Always `InspectorType.Component`. |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | The component's type name. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clean" /><code>{"override void Clean()"}</code> | Removes every member bubble this node spawned. |
| <Link id="m-interact" /><code>{"override void Interact(Component target, "}<Link to="/game-api/types/global-i-l/interactableinspector">{"InteractableInspector"}</Link>{" interactable)"}</code> | Toggles the member bubbles, laying them out in a ring around the component. |

## Used in

Members of other types that take, return or hold a `ComponentInspector`:

[`BubbleInspector.inspectors`](/game-api/types/global-a-b/bubbleinspector#m-inspectors), [`BubbleInspector.toSpawn`](/game-api/types/global-a-b/bubbleinspector#m-tospawn).
