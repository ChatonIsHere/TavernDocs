---
title: "StepInstance"
description: "class StepInstance in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StepInstance

A **class** in `Root.Township`, `ATT.MicroTutorial`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IStepInstance`](/game-api/types/game-other-namespaces/istepinstance)
- **Derived types** [`ServerStepInstance`](/game-api/types/game-other-namespaces/serverstepinstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor-2" /><code>{"StepInstance("}<Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" step, Transform parent)"}</code> |  |
| <Link id="m-ctor" /><code>{"protected StepInstance("}<Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" step)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-dynamiccontenttransform" /><code>{"protected Transform dynamicContentTransform"}</code> |  |
| <Link id="m-isspawned" /><code>{"protected bool isSpawned"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly "}<Link to="/game-api/types/game-other-namespaces/microtutoriallogger">{"MicroTutorialLogger"}</Link>{" logger"}</code> |  |
| <Link id="m-staticcontent" /><code>{"private GameObject staticContent"}</code> |  |
| <Link id="m-staticcontenttransform" /><code>{"private Transform staticContentTransform"}</code> |  |
| <Link id="m-step" /><code>{"protected readonly "}<Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" step"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> |  |
| <Link id="m-settings" /><code><Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" Settings { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-despawnstaticcontent" /><code>{"void DespawnStaticContent()"}</code> |  |
| <Link id="m-spawnadditionalstaticcontent" /><code>{"async void SpawnAdditionalStaticContent()"}</code> |  |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> |  |
| <Link id="m-initializehierarchy" /><code>{"protected void InitializeHierarchy(Transform parent)"}</code> |  |
| <Link id="m-spawnstaticstepcontent" /><code>{"protected void SpawnStaticStepContent()"}</code> |  |
