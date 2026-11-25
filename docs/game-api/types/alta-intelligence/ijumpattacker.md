---
title: "IJumpAttacker"
description: "ActiveJumpAt calls it at the start and end of a jump."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IJumpAttacker

An **interface** in `Root.Township`, `Alta.Intelligence`.

`ActiveJumpAt` calls it at the start and end of a jump. `Spriggull` charges its beak with it.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Derived types** [`Spriggull`](/game-api/types/alta-intelligence/spriggull)
- **Documented in** [Combat, damage and death](/game-api/creatures/combat-and-damage)

## Methods

| Member |
| --- |
| <Link id="m-setjumping" /><code>{"void SetJumping(bool isJumping)"}</code> |

## Used in

Members of other types that take, return or hold a `IJumpAttacker`:

[`ActiveJumpAt.jumpAttacker`](/game-api/types/alta-intelligence/activejumpat#m-jumpattacker).
