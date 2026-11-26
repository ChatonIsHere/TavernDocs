---
title: "ComponentInspector"
description: "In-game bubble inspector node for one component."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ComponentInspector

A **class** in `Root.Township`, the global namespace.

In-game bubble inspector node for one component. Interacting with it spreads bubbles for the component's exposed methods and values around it, and interacting again removes them.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`InspectorBase`](/mod/game-api/types/global-i-l/inspectorbase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ComponentInspector(MonoBehaviour component)"}</code> | <span className="api-desc">Creates a `ComponentInspector` from `component`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-availablemethods" /><code>{"List<"}<Link to="/mod/game-api/types/global-m-o/methodmember">{"MethodMember"}</Link>{"> availableMethods"}</code> | <span className="api-desc">Methods shown as bubbles when expanded.</span> |
| <Link id="m-availablevalues" /><code>{"List<"}<Link to="/mod/game-api/types/global-t-x/valuemember">{"ValueMember"}</Link>{"> availableValues"}</code> | <span className="api-desc">Fields or properties shown as bubbles when expanded.</span> |

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-component" /><code>{"private Component component"}</code> | <span className="api-desc">The component being inspected.</span> |
| <Link id="m-isexpanded" /><code>{"private bool isExpanded"}</code> | <span className="api-desc">Whether the member bubbles are showing.</span> |
| <Link id="m-spawned" /><code>{"private List<"}<Link to="/mod/game-api/types/global-i-l/interactableinspector">{"InteractableInspector"}</Link>{"> spawned"}</code> | <span className="api-desc">Member bubbles currently spawned.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-inspectortype" /><code>{"override "}<Link to="/mod/game-api/types/global-i-l/inspectortype">{"InspectorType"}</Link>{" "}<Link to="/mod/game-api/types/global-i-l/inspectortype">{"InspectorType"}</Link>{" { get; }"}</code> | <span className="api-desc">Always `InspectorType.Component`.</span> |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | <span className="api-desc">The component's type name.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clean" /><code>{"override void Clean()"}</code> | <span className="api-desc">Removes every member bubble this node spawned.</span> |
| <Link id="m-interact" /><code>{"override void Interact(Component target, "}<Link to="/mod/game-api/types/global-i-l/interactableinspector">{"InteractableInspector"}</Link>{" interactable)"}</code> | <span className="api-desc">Toggles the member bubbles, laying them out in a ring around the component.</span> |

## Used in

Members of other types that take, return or hold a `ComponentInspector`:

<div className="api-used-in">

[`BubbleInspector.inspectors`](/mod/game-api/types/global-a-b/bubbleinspector#m-inspectors), [`BubbleInspector.toSpawn`](/mod/game-api/types/global-a-b/bubbleinspector#m-tospawn).

</div>
