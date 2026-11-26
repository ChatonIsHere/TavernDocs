---
title: "SkillOrbDestroyEffect"
description: "Pooled skill orb effect that starts its dissolve animation as soon as it is taken from the pool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillOrbDestroyEffect

A **class** in `Root.Township`, no namespace.

Pooled skill orb effect that starts its dissolve animation as soon as it is taken from the pool. Client visuals.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`SkillOrbEffect`](/game-api/types/global-s/skillorbeffect)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkillOrbDestroyEffect()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Hooks `Requested` so the destroy animation starts on request. |
