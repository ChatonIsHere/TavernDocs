---
title: "SkillOrbDestroyEffect"
description: "Pooled skill orb effect that starts its dissolve animation as soon as it is taken from the pool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillOrbDestroyEffect

A **class** in `Root.Township`, the global namespace.

Pooled skill orb effect that starts its dissolve animation as soon as it is taken from the pool. Client visuals.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`SkillOrbEffect`](/mod/game-api/types/global-s/skillorbeffect)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkillOrbDestroyEffect()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Hooks `Requested` so the destroy animation starts on request.</span> |
