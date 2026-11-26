---
title: "EditorForcedTaskUpdater"
description: "Editor helper meant to keep the editor updating while a task runs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EditorForcedTaskUpdater

A **static class** in `Root.Township`, the global namespace.

Editor helper meant to keep the editor updating while a task runs. Mostly stubbed out in this build.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-waitingtask" /><code>{"private static Task waitingTask"}</code> | <span className="api-desc">The task being waited on.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forceupdatewhile" /><code>{"static void ForceUpdateWhile(Task task)"}</code> | <span className="api-desc">Stores the task to wait for.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-forceupdate" /><code>{"private static void ForceUpdate()"}</code> | <span className="api-desc">Calls `StopUpdating` once the waiting task has finished.</span> |
| <Link id="m-stopupdating" /><code>{"private static void StopUpdating()"}</code> | <span className="api-desc">Empty in this build.</span> |

</details>
