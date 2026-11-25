---
title: "PipAvailablePointManager"
description: "class PipAvailablePointManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PipAvailablePointManager

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`AvailablePointVisualizerManager`](/game-api/types/global-a-b/availablepointvisualizermanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PipAvailablePointManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-anglegap" /><code>{"private float angleGap"}</code> |  |
| <Link id="m-instantiated" /><code>{"private "}<Link to="/game-api/types/global-a-b/availablepointbar">{"AvailablePointBar"}</Link>{"[] instantiated"}</code> |  |
| <Link id="m-pipprefab" /><code>{"private "}<Link to="/game-api/types/global-a-b/availablepointbar">{"AvailablePointBar"}</Link>{" pipPrefab"}</code> |  |
| <Link id="m-startpipangle" /><code>{"private float startPipAngle"}</code> |  |
| <Link id="m-temporarypips" /><code>{"private Queue<int> temporaryPips"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cleantemporary" /><code>{"override void CleanTemporary()"}</code> |  |
| <Link id="m-opentemporary" /><code>{"override void OpenTemporary(int index)"}</code> |  |
| <Link id="m-openvisual" /><code>{"override void OpenVisual(int index)"}</code> |  |
| <Link id="m-updateavailablepointsvisual" /><code>{"override void UpdateAvailablePointsVisual(int freePoints)"}</code> |  |
| <Link id="m-ensuresetup" /><code>{"private void EnsureSetup()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-placepips" /><code>{"private void PlacePips(Action<int, Quaternion> positionMethod)"}</code> |  |
