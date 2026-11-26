---
title: "ThresholdListener"
description: "Small holder for a threshold value and an event raised when it's crossed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ThresholdListener

A **class** in `Root.Township`, `Alta.Intelligence`.

Small holder for a threshold value and an event raised when it's crossed. Nothing else in the code uses it.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ThresholdListener()"}</code> | Creates a `ThresholdListener` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-threshold" /><code>{"float Threshold { get; set; }"}</code> | The threshold value. Nothing here compares against it. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-passed" /><code>{"event Action<bool> Passed"}</code> | Raised by `OnPassed`, with true when going above. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onpassed" /><code>{"void OnPassed(bool isAbove)"}</code> | Raises `Passed` with whether the value is now above the threshold. |
