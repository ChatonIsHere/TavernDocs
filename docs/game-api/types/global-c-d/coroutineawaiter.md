---
title: "CoroutineAwaiter"
description: "Extension methods that let async code await a coroutine run through AltaCoroutine."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CoroutineAwaiter

A **static class** in `Root.Township`, no namespace.

Extension methods that let async code await a coroutine run through `AltaCoroutine`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-waitforcoroutineasync" /><code>{"static async Task WaitForCoroutineAsync(IEnumerator coroutine, MonoBehaviour target = null)"}</code> | Starts the coroutine and finishes when it does. The generic overload then returns `getResult()`. |
| <Link id="m-waitforcoroutineasync-2" /><code>{"static async Task<T> WaitForCoroutineAsync<T>(IEnumerator coroutine, Func<T> getResult, MonoBehaviour target = null)"}</code> | Starts the coroutine and finishes when it does. The generic overload then returns `getResult()`. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-runcoroutine" /><code>{"private static IEnumerator RunCoroutine(IEnumerator coroutine, TaskCompletionSource<bool> completion) (iterator)"}</code> | Wrapper coroutine that runs the given one and completes the task. |

</details>
