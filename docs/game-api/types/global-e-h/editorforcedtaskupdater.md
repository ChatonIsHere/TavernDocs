---
title: "EditorForcedTaskUpdater"
description: "Editor helper meant to keep the editor updating while a task runs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EditorForcedTaskUpdater

A **static class** in `Root.Township`, no namespace.

Editor helper meant to keep the editor updating while a task runs. Mostly stubbed out in this build.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-waitingtask" /><code>{"private static Task waitingTask"}</code> | The task being waited on. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forceupdatewhile" /><code>{"static void ForceUpdateWhile(Task task)"}</code> | Stores the task to wait for. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-forceupdate" /><code>{"private static void ForceUpdate()"}</code> | Calls `StopUpdating` once the waiting task has finished. |
| <Link id="m-stopupdating" /><code>{"private static void StopUpdating()"}</code> | Empty in this build. |

</details>
