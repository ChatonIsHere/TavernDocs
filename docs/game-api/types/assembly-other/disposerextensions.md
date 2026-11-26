---
title: "DisposerExtensions"
description: "Extension methods for adding things to an IDisposer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DisposerExtensions

A **static class** in `Alta.LifecycleManagement.Runtime`, `Alta.LifecycleManagement`.

Extension methods for adding things to an `IDisposer`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Attributes** `Extension`, `Preserve`, `UsedImplicitly`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addtodisposer" /><code>{"static T AddToDisposer<T>(T disposable, "}<Link to="/game-api/types/assembly-other/idisposer">{"IDisposer"}</Link>{" disposer)"}</code> | Adds the disposable to a disposer and returns the disposable. |
| <Link id="m-ondisposal" /><code>{"static "}<Link to="/game-api/types/assembly-other/idisposer">{"IDisposer"}</Link>{" OnDisposal("}<Link to="/game-api/types/assembly-other/idisposer">{"IDisposer"}</Link>{" disposer, Action action)"}</code> | Runs an action when the disposer is disposed. Returns the disposer for chaining. |
