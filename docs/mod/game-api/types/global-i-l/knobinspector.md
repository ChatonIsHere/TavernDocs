---
title: "KnobInspector"
description: "Interactor inspector that edits a numeric member by turning, like a knob."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KnobInspector

A **class** in `Root.Township`, the global namespace.

Interactor inspector that edits a numeric member by turning, like a knob.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`InteractorInspector`](/mod/game-api/types/global-i-l/interactorinspector)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"KnobInspector("}<Link to="/mod/game-api/types/global-t-x/valuemember">{"ValueMember"}</Link>{" targetMember)"}</code> | <span className="api-desc">Creates a `KnobInspector` from `targetMember`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canmove" /><code>{"override bool CanMove { get; }"}</code> | <span className="api-desc">Always false.</span> |
| <Link id="m-canrotate" /><code>{"override bool CanRotate { get; }"}</code> | <span className="api-desc">Always true.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-rotate" /><code>{"override void Rotate(float angle, Component target)"}</code> | <span className="api-desc">Adds the turn angle to the target member's float value and writes it back.</span> |
