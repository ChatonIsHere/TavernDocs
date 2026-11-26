---
title: "DestroyStepContentStep"
description: "Micro tutorial step that despawns the content of chosen earlier steps, then completes after two seconds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DestroyStepContentStep

A **class** in `Root.Township`, `ATT.MicroTutorial.Steps`.

Micro tutorial step that despawns the content of chosen earlier steps, then completes after two seconds.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`MicroTutorialStep`](/game-api/types/game-other-namespaces/microtutorialstep)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DestroyStepContentStep()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-stepstodestroy" /><code>{"private int[] stepsToDestroy"}</code> | Indexes (from 0) of the steps whose content is removed. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isconfigurationvalid" /><code>{"override IResult IsConfigurationValid()"}</code> | Errors if no step indexes are set. |
| <Link id="m-runforinstance" /><code>{"override async Task RunForInstance("}<Link to="/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{" stepInstance)"}</code> | Despawns the content of each listed step, waits two seconds and completes. The range check misses an index equal to the step count. |
