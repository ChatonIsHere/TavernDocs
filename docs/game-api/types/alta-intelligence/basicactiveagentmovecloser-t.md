---
title: "BasicActiveAgentMoveCloser<T>"
description: "abstract class BasicActiveAgentMoveCloser<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicActiveAgentMoveCloser&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Agent, T>`](/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)
- **Derived types** [`ActiveAgentMoveCloser`](/game-api/types/alta-intelligence/activeagentmovecloser), [`ActiveAgentRotateClose`](/game-api/types/alta-intelligence/activeagentrotateclose)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected BasicActiveAgentMoveCloser()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-getspeedmultiplier" /><code>{"protected Func<float> getSpeedMultiplier"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> |  |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> |  |
| <Link id="m-update-2" /><code>{"protected abstract void Update(Vector3 position, Vector3 targetPosition, Vector3 toTargetXZ, Vector3 toEdge, float flatDistance)"}</code> |  |
