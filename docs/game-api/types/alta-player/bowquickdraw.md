---
title: "BowQuickdraw"
description: "Bow draw skill asset for quickdraw."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BowQuickdraw

A **class** in `Root.Township`, `Alta.Progression.Skills`.

Bow draw skill asset for quickdraw. Same as `BowDrawSkill` but requests no tool effect.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`BowDrawSkill`](/game-api/types/alta-player/bowdrawskill)
- **Derived types** [`BowQuickdraw.Create`](/game-api/types/alta-player/bowquickdraw-create)
- **Nested types** [`Create`](/game-api/types/alta-player/bowquickdraw-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BowQuickdraw()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-requesttooleffect" /><code>{"protected override void RequestToolEffect("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Does nothing, so this skill shows no tool effect. |
