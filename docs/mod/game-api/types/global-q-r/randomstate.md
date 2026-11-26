---
title: "RandomState"
description: "Static stack for Unity's global random state, so code can seed UnityEngine.Random for a block and restore it after."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomState

A **static class** in `Root.Township`, the global namespace.

Static stack for Unity's global random state, so code can seed `UnityEngine.Random` for a block and restore it after. Use the returned `IDisposable` in a `using`.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Nested types** [`Disposer`](/mod/game-api/types/global-q-r/randomstate-disposer)

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disposer" /><code>{"private static "}<Link to="/mod/game-api/types/global-q-r/randomstate-disposer">{"RandomState.Disposer"}</Link>{" disposer"}</code> | <span className="api-desc">Shared disposable that calls `Pop`.</span> |
| <Link id="m-stack" /><code>{"private static Stack<Random.State> stack"}</code> | <span className="api-desc">Saved random states.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-height" /><code>{"static int Height { get; }"}</code> | <span className="api-desc">How many states are pushed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getstate" /><code>{"static Random.State GetState(int seed)"}</code> | <span className="api-desc">Returns the random state a seed produces without changing the current state.</span> |
| <Link id="m-pop" /><code>{"static Random.State Pop()"}</code> | <span className="api-desc">Restores the previous random state and returns the one being replaced.</span> |
| <Link id="m-push" /><code>{"static IDisposable Push(int seed)"}</code> | <span className="api-desc">Saves the current random state and switches to one from a seed or a given state. Disposing the result pops it.</span> |
| <Link id="m-push-2" /><code>{"static IDisposable Push(Random.State state)"}</code> | <span className="api-desc">Saves the current random state and switches to one from a seed or a given state. Disposing the result pops it.</span> |
| <Link id="m-pushrandom" /><code>{"static IDisposable PushRandom()"}</code> | <span className="api-desc">Pushes a state seeded from the current random sequence.</span> |
