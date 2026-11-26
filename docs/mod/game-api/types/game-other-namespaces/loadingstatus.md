---
title: "LoadingStatus"
description: "Whether a micro tutorial is still waiting for the client to finish loading it (InProgress) or not (Completed)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoadingStatus

An **enum** in `Root.Township`, `ATT.MicroTutorial`.

Whether a micro tutorial is still waiting for the client to finish loading it (`InProgress`) or not (`Completed`).

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)

## Values

| Member |
| --- |
| <Link id="m-completed" /><code>{"Completed = 1"}</code> |
| <Link id="m-inprogress" /><code>{"InProgress = 0"}</code> |

## Used in

Members of other types that take, return or hold a `LoadingStatus`:

<div className="api-used-in">

[`MicroTutorial.clientLoadStatus`](/mod/game-api/types/game-other-namespaces/microtutorial#m-clientloadstatus).

</div>
