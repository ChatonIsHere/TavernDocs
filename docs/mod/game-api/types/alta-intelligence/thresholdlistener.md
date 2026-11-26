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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ThresholdListener()"}</code> | <span className="api-desc">Creates a `ThresholdListener` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-threshold" /><code>{"float Threshold { get; set; }"}</code> | <span className="api-desc">The threshold value. Nothing here compares against it.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-passed" /><code>{"event Action<bool> Passed"}</code> | <span className="api-desc">Raised by `OnPassed`, with true when going above.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onpassed" /><code>{"void OnPassed(bool isAbove)"}</code> | <span className="api-desc">Raises `Passed` with whether the value is now above the threshold.</span> |
