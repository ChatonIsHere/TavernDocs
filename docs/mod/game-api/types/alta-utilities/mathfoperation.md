---
title: "MathfOperation"
description: "Static float operations picked by an OperationType, for code that combines a current value with a new one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MathfOperation

A **static class** in `Root.Township`, `Alta`.

Static float operations picked by an `OperationType`, for code that combines a current value with a new one.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"static float Add(float a, float b)"}</code> | <span className="api-desc">Returns a plus b.</span> |
| <Link id="m-getoperation" /><code>{"static "}<Link to="/mod/game-api/types/alta-utilities/operation">{"Operation"}</Link>{" GetOperation("}<Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" type)"}</code> | <span className="api-desc">Returns the function for an `OperationType` (Set, Max, Min, Add, Subtract, Multiply, Multiply1Minus), or null for any other value.</span> |
| <Link id="m-multiply" /><code>{"static float Multiply(float a, float b)"}</code> | <span className="api-desc">Returns a times b.</span> |
| <Link id="m-multiply1minus" /><code>{"static float Multiply1Minus(float a, float b)"}</code> | <span className="api-desc">Returns a times (1 minus b), so b works as a fraction to take away.</span> |
| <Link id="m-set" /><code>{"static float Set(float a, float b)"}</code> | <span className="api-desc">Ignores a and returns b.</span> |
| <Link id="m-subtract" /><code>{"static float Subtract(float a, float b)"}</code> | <span className="api-desc">Returns a minus b.</span> |
