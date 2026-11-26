---
title: "IBasicActiveAction<TAgent>"
description: "A running action that can be started on an agent of type TAgent."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IBasicActiveAction&lt;TAgent&gt;

An **interface** in `Root.Township`, `Alta.Intelligence`.

A running action that can be started on an agent of type `TAgent`. `BasicActiveAction` implements it and `BasicAction` calls `Start` on a pooled instance.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`IActiveAction`](/game-api/types/alta-intelligence/iactiveaction)
- **Derived types** [`BasicActiveAction<TAgent>`](/game-api/types/alta-intelligence/basicactiveaction-tagent)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"void Start("}<Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" action, TAgent agent)"}</code> | Starts this running instance for the given action and agent, which calls its `OnStart`. |
