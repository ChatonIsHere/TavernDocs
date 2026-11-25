---
title: "ActiveJumpAt"
description: "class ActiveJumpAt in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveJumpAt

A **class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Agent, AgentJumpAtSettings>`](/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveJumpAt()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-gravity" /><code>{"private float gravity"}</code> |  |
| <Link id="m-jumpattacker" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/ijumpattacker">{"IJumpAttacker"}</Link>{" jumpAttacker"}</code> |  |
| <Link id="m-targetrotation" /><code>{"private Quaternion targetRotation"}</code> |  |
| <Link id="m-wasjumping" /><code>{"private bool wasJumping"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> |  |
| <Link id="m-handlefinished" /><code>{"private void HandleFinished("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> |  |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> |  |
