---
title: "BlinkingController"
description: "class BlinkingController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BlinkingController

A **class** in `Root.Township`, `Alta.Character`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`EyeBlinker`](/game-api/types/alta-player/blinkingcontroller-eyeblinker)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BlinkingController()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> |  |
| <Link id="m-blinkduration" /><code>{"private float blinkDuration"}</code> |  |
| <Link id="m-doubleblinkpercentage" /><code>{"private float doubleBlinkPercentage"}</code> |  |
| <Link id="m-leftblinker" /><code>{"private "}<Link to="/game-api/types/alta-player/blinkingcontroller-eyeblinker">{"BlinkingController.EyeBlinker"}</Link>{" leftBlinker"}</code> |  |
| <Link id="m-maxtime" /><code>{"private float maxTime"}</code> |  |
| <Link id="m-mintime" /><code>{"private float minTime"}</code> |  |
| <Link id="m-rightblinker" /><code>{"private "}<Link to="/game-api/types/alta-player/blinkingcontroller-eyeblinker">{"BlinkingController.EyeBlinker"}</Link>{" rightBlinker"}</code> |  |
| <Link id="m-timebetweendoubleblink" /><code>{"private float timeBetweenDoubleBlink"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-blink" /><code>{"void Blink()"}</code> |  |
| <Link id="m-startblinking" /><code>{"void StartBlinking()"}</code> |  |
| <Link id="m-stopblinking" /><code>{"void StopBlinking()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-blinkinseconds" /><code>{"private IEnumerator BlinkInSeconds() (iterator)"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
