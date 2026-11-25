---
title: "EffectVolumeTrigger"
description: "class EffectVolumeTrigger in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EffectVolumeTrigger

A **class** in `Root.Township`, `Alta.Alchemy`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`VolumeTrigger`](/game-api/types/global-t-x/volumetrigger)
- **Nested types** [`Effect`](/game-api/types/alta-stats-effects/effectvolumetrigger-effect)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EffectVolumeTrigger()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-effects" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/effectvolumetrigger-effect">{"EffectVolumeTrigger.Effect"}</Link>{"[] effects"}</code> |  |
| <Link id="m-isserver" /><code>{"private bool isServer"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ischeckingforeffecthandler" /><code>{"override bool IsCheckingForEffectHandler { get; }"}</code> |  |
| <Link id="m-ischeckingforrigidbody" /><code>{"override bool IsCheckingForRigidbody { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-effecthandlerentered" /><code>{"protected override void EffectHandlerEntered("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" handler)"}</code> |  |
| <Link id="m-effecthandlerleft" /><code>{"protected override void EffectHandlerLeft("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" handler)"}</code> |  |
