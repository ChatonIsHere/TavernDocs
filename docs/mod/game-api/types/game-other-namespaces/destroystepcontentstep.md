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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`MicroTutorialStep`](/mod/game-api/types/game-other-namespaces/microtutorialstep)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DestroyStepContentStep()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-stepstodestroy" /><code>{"private int[] stepsToDestroy"}</code> | <span className="api-desc">Indexes (from 0) of the steps whose content is removed.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isconfigurationvalid" /><code>{"override IResult IsConfigurationValid()"}</code> | <span className="api-desc">Errors if no step indexes are set.</span> |
| <Link id="m-runforinstance" /><code>{"override async Task RunForInstance("}<Link to="/mod/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{" stepInstance)"}</code> | <span className="api-desc">Despawns the content of each listed step, waits two seconds and completes. The range check misses an index equal to the step count.</span> |
