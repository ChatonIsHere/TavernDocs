---
title: "DebugWidget.ActivationType"
description: "When a DebugWidget is shown: always, only when turned on from the quick action menu, or only if a \"DebugWidgets\" file is in the storage folder."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DebugWidget.ActivationType

An **private enum** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

When a `DebugWidget` is shown: always, only when turned on from the quick action menu, or only if a "DebugWidgets" file is in the storage folder.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Nested in** [`DebugWidget`](/game-api/types/global-c-d/debugwidget)

## Values

| Member |
| --- |
| <Link id="m-alwaysactive" /><code>{"AlwaysActive = 0"}</code> |
| <Link id="m-enabledbydebugfile" /><code>{"EnabledByDebugFile = 2"}</code> |
| <Link id="m-enabledbyqam" /><code>{"EnabledByQAM = 1"}</code> |

## Used in

Members of other types that take, return or hold a `ActivationType`:

[`DebugWidget.activationType`](/game-api/types/global-c-d/debugwidget#m-activationtype).
