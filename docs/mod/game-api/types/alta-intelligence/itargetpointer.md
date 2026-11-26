---
title: "ITargetPointer"
description: "Anything that can name an AI target for itself."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ITargetPointer

An **interface** in `Root.Township`, `Alta.Intelligence`.

Anything that can name an AI target for itself. Every `ITarget` and agent is one, and so are things like `SeedSpray`; hit code uses it to find who to blame for a hit.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Derived types** [`Agent`](/mod/game-api/types/alta-intelligence/agent), [`Babu`](/mod/game-api/types/alta-intelligence/babu), [`GreaterGotera`](/mod/game-api/types/alta-intelligence/greatergotera), [`IAgent`](/mod/game-api/types/alta-intelligence/iagent), [`IInteractAgent`](/mod/game-api/types/alta-intelligence/iinteractagent), [`ITarget`](/mod/game-api/types/alta-intelligence/itarget), [`SeedSpray`](/mod/game-api/types/alta-intelligence/seedspray), [`Spriggull`](/mod/game-api/types/alta-intelligence/spriggull), [`Target`](/mod/game-api/types/alta-intelligence/target), [`TargetPointer`](/mod/game-api/types/alta-intelligence/targetpointer), [`Projectile`](/mod/game-api/types/global-p/projectile)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-target" /><code><Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" Target { get; }"}</code> | The target this object stands for (often itself). |
