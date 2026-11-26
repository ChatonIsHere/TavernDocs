---
title: "AutoCompleteAfterDelayStep"
description: "Micro tutorial step that completes itself after a set delay."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AutoCompleteAfterDelayStep

A **class** in `Root.Township`, `ATT.MicroTutorial.Steps`.

Micro tutorial step that completes itself after a set delay.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`MicroTutorialStep`](/mod/game-api/types/game-other-namespaces/microtutorialstep)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AutoCompleteAfterDelayStep()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delayinseconds" /><code>{"private float delayInSeconds"}</code> | <span className="api-desc">Seconds to wait before completing. Defaults to 1.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-runforinstance" /><code>{"override async Task RunForInstance("}<Link to="/mod/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{" stepInstance)"}</code> | <span className="api-desc">Waits `delayInSeconds`, then completes the step.</span> |
