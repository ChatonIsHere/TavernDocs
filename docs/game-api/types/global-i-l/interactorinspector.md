---
title: "InteractorInspector"
description: "Base for inspectors of the Interactor type that edit a member of a target."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InteractorInspector

An **abstract class** in `Root.Township`, no namespace.

Base for inspectors of the Interactor type that edit a member of a target. Subclasses build on `targetMember`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`InspectorBase`](/game-api/types/global-i-l/inspectorbase)
- **Derived types** [`KnobInspector`](/game-api/types/global-i-l/knobinspector), [`OrbitalInspector`](/game-api/types/global-m-o/orbitalinspector)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InteractorInspector("}<Link to="/game-api/types/global-t-x/valuemember">{"ValueMember"}</Link>{" targetMember)"}</code> | Creates an `InteractorInspector` from `targetMember`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-targetmember" /><code>{"protected "}<Link to="/game-api/types/global-t-x/valuemember">{"ValueMember"}</Link>{" targetMember"}</code> | The value member this inspector edits. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-inspectortype" /><code>{"override "}<Link to="/game-api/types/global-i-l/inspectortype">{"InspectorType"}</Link>{" "}<Link to="/game-api/types/global-i-l/inspectortype">{"InspectorType"}</Link>{" { get; }"}</code> | Always `InspectorType.Interactor`. |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | Empty here. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-interact" /><code>{"override void Interact(Component target, "}<Link to="/game-api/types/global-i-l/interactableinspector">{"InteractableInspector"}</Link>{" interactable)"}</code> | Does nothing here. |
