---
title: "IBlockDisassembly"
description: "Lets a component on a crafting part stop the assembly station from taking it apart (for example CraftedDocks)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IBlockDisassembly

An **interface** in `Root.Township`, `Alta.Crafting`.

Lets a component on a crafting part stop the assembly station from taking it apart (for example `CraftedDocks`).

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Derived types** [`CraftedDocks`](/game-api/types/alta-items/crafteddocks)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-candisassemble" /><code>{"bool CanDisassemble { get; }"}</code> | False to block disassembly of the part. |
