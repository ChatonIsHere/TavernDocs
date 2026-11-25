---
title: "SenseOperation"
description: "class SenseOperation in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SenseOperation

A **class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperationComponent`](/game-api/types/alta-intelligence/targetoperationcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SenseOperation()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-from" /><code>{"private float from"}</code> |  |
| <Link id="m-istarget" /><code>{"private bool isTarget"}</code> |  |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> |  |
| <Link id="m-sense" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/sense">{"Sense"}</Link>{" sense"}</code> |  |
| <Link id="m-to" /><code>{"private float to"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getoperation" /><code>{"override "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" GetOperation()"}</code> |  |
| <Link id="m-migrate" /><code>{"static void Migrate(Component old, "}<Link to="/game-api/types/alta-intelligence/sense">{"Sense"}</Link>{" sense, float from, float to, bool isTarget, float multiplier)"}</code> |  |
| <Link id="m-getname" /><code>{"protected override string GetName()"}</code> |  |
