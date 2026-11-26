---
title: "AutoCompleteStep"
description: "Micro tutorial step that completes as soon as it runs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AutoCompleteStep

A **class** in `Root.Township`, `ATT.MicroTutorial.Steps`.

Micro tutorial step that completes as soon as it runs.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`MicroTutorialStep`](/game-api/types/game-other-namespaces/microtutorialstep)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AutoCompleteStep()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-runforinstance" /><code>{"override async Task RunForInstance("}<Link to="/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{" stepInstance)"}</code> | Completes the step at once. |
