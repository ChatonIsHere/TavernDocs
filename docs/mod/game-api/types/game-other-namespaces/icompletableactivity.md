---
title: "ICompletableActivity"
description: "An activity that builds up progress until it completes, and can be cancelled or restarted."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ICompletableActivity

An **interface** in `Root.Township`, `ATT.Utilities`.

An activity that builds up progress until it completes, and can be cancelled or restarted.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Derived types** [`ReviveCompletableActivity`](/mod/game-api/types/game-other-namespaces/revivecompletableactivity)

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-completed" /><code>{"event Action Completed"}</code> | <span className="api-desc">Raised when the activity completes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addprogress" /><code>{"void AddProgress(float progress)"}</code> | <span className="api-desc">Adds an amount of progress.</span> |
| <Link id="m-cancel" /><code>{"void Cancel()"}</code> | <span className="api-desc">Cancels the activity.</span> |
| <Link id="m-restart" /><code>{"void Restart()"}</code> | <span className="api-desc">Starts the activity over.</span> |
