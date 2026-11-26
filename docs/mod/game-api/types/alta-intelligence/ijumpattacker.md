---
title: "IJumpAttacker"
description: "Implemented by agents that attack by jumping, such as the Spriggull."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IJumpAttacker

An **interface** in `Root.Township`, `Alta.Intelligence`.

Implemented by agents that attack by jumping, such as the `Spriggull`. The `ActiveJumpAt` action calls it at the start and end of a jump.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Derived types** [`Spriggull`](/mod/game-api/types/alta-intelligence/spriggull)
- **Documented in** [Combat, damage and death](/mod/game-api/creatures/combat-and-damage)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setjumping" /><code>{"void SetJumping(bool isJumping)"}</code> | Called with true when the jump attack starts and false when it ends. |

## Used in

Members of other types that take, return or hold a `IJumpAttacker`:

[`ActiveJumpAt.jumpAttacker`](/mod/game-api/types/alta-intelligence/activejumpat#m-jumpattacker).
