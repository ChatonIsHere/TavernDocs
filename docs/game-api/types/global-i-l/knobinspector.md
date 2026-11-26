---
title: "KnobInspector"
description: "Interactor inspector that edits a numeric member by turning, like a knob."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KnobInspector

A **class** in `Root.Township`, no namespace.

Interactor inspector that edits a numeric member by turning, like a knob.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`InteractorInspector`](/game-api/types/global-i-l/interactorinspector)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"KnobInspector("}<Link to="/game-api/types/global-t-x/valuemember">{"ValueMember"}</Link>{" targetMember)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canmove" /><code>{"override bool CanMove { get; }"}</code> | Always false. |
| <Link id="m-canrotate" /><code>{"override bool CanRotate { get; }"}</code> | Always true. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-rotate" /><code>{"override void Rotate(float angle, Component target)"}</code> | Adds the turn angle to the target member's float value and writes it back. |
