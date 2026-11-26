---
title: "SpawnStep"
description: "Micro tutorial step that only spawns its content and completes at once."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnStep

A **class** in `Root.Township`, `ATT.MicroTutorial.Steps`.

Micro tutorial step that only spawns its content and completes at once.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`MicroTutorialStep`](/game-api/types/game-other-namespaces/microtutorialstep)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SpawnStep()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-runforinstance" /><code>{"override async Task RunForInstance("}<Link to="/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{" stepInstance)"}</code> | Completes the step at once (the content is already spawned by then). |
