---
title: "InteractorInspector"
description: "Base for inspectors of the Interactor type that edit a member of a target."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InteractorInspector

An **abstract class** in `Root.Township`, the global namespace.

Base for inspectors of the Interactor type that edit a member of a target. Subclasses build on `targetMember`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`InspectorBase`](/mod/game-api/types/global-i-l/inspectorbase)
- **Derived types** [`KnobInspector`](/mod/game-api/types/global-i-l/knobinspector), [`OrbitalInspector`](/mod/game-api/types/global-m-o/orbitalinspector)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InteractorInspector("}<Link to="/mod/game-api/types/global-t-x/valuemember">{"ValueMember"}</Link>{" targetMember)"}</code> | <span className="api-desc">Creates an `InteractorInspector` from `targetMember`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-targetmember" /><code>{"protected "}<Link to="/mod/game-api/types/global-t-x/valuemember">{"ValueMember"}</Link>{" targetMember"}</code> | <span className="api-desc">The value member this inspector edits.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-inspectortype" /><code>{"override "}<Link to="/mod/game-api/types/global-i-l/inspectortype">{"InspectorType"}</Link>{" "}<Link to="/mod/game-api/types/global-i-l/inspectortype">{"InspectorType"}</Link>{" { get; }"}</code> | <span className="api-desc">Always `InspectorType.Interactor`.</span> |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | <span className="api-desc">Empty here.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-interact" /><code>{"override void Interact(Component target, "}<Link to="/mod/game-api/types/global-i-l/interactableinspector">{"InteractableInspector"}</Link>{" interactable)"}</code> | <span className="api-desc">Does nothing here.</span> |
