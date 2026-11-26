---
title: "RandomState"
description: "static class RandomState in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomState

A **static class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Nested types** [`Disposer`](/game-api/types/global-q-r/randomstate-disposer)

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-disposer" /><code>{"private static "}<Link to="/game-api/types/global-q-r/randomstate-disposer">{"RandomState.Disposer"}</Link>{" disposer"}</code> |
| <Link id="m-stack" /><code>{"private static Stack<Random.State> stack"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-height" /><code>{"static int Height { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-getstate" /><code>{"static Random.State GetState(int seed)"}</code> |
| <Link id="m-pop" /><code>{"static Random.State Pop()"}</code> |
| <Link id="m-push" /><code>{"static IDisposable Push(int seed)"}</code> |
| <Link id="m-push-2" /><code>{"static IDisposable Push(Random.State state)"}</code> |
| <Link id="m-pushrandom" /><code>{"static IDisposable PushRandom()"}</code> |
