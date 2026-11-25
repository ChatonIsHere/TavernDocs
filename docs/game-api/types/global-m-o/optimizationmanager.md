---
title: "OptimizationManager"
description: "class OptimizationManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OptimizationManager

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`Direction`](/game-api/types/global-m-o/optimizationmanager-direction), [`QualitySetting`](/game-api/types/global-m-o/optimizationmanager-qualitysetting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OptimizationManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/global-m-o/optimizationmanager">{"OptimizationManager"}</Link>{" instance"}</code> |  |
| <Link id="m-adjustmentdelay" /><code>{"private float adjustmentDelay"}</code> |  |
| <Link id="m-coroutine" /><code>{"private Coroutine coroutine"}</code> |  |
| <Link id="m-currentlevel" /><code>{"private int currentLevel"}</code> |  |
| <Link id="m-defaultlevel" /><code>{"private int defaultLevel"}</code> |  |
| <Link id="m-framecounttostep" /><code>{"private int frameCountToStep"}</code> |  |
| <Link id="m-maxlevel" /><code>{"private int maxLevel"}</code> |  |
| <Link id="m-qualitylevels" /><code>{"private "}<Link to="/game-api/types/global-m-o/optimizationmanager-qualitysetting">{"OptimizationManager.QualitySetting"}</Link>{"[] qualityLevels"}</code> |  |
| <Link id="m-stepdirection" /><code>{"private "}<Link to="/game-api/types/global-m-o/optimizationmanager-direction">{"OptimizationManager.Direction"}</Link>{" stepDirection"}</code> |  |
| <Link id="m-stepdownfps" /><code>{"private float stepDownFPS"}</code> |  |
| <Link id="m-stepupfps" /><code>{"private float stepUpFPS"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentlevel-2" /><code>{"int CurrentLevel { get; }"}</code> |  |
| <Link id="m-stepdownfps-2" /><code>{"private float StepDownFPS { get; set; }"}</code> |  |
| <Link id="m-stepupfps-2" /><code>{"private float StepUpFPS { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run-2" /><code>{"void Run()"}</code> |  |
| <Link id="m-stop" /><code>{"void Stop()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-performancemeasure" /><code>{"private IEnumerator PerformanceMeasure() (iterator)"}</code> |  |
| <Link id="m-performancemeasureonposition" /><code>{"private IEnumerator PerformanceMeasureOnPosition() (iterator)"}</code> |  |
| <Link id="m-run" /><code>{"private void Run("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-updatelocalplayer" /><code>{"private void UpdateLocalPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller)"}</code> |  |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller, Vector3 from, Vector3 to, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> |  |
