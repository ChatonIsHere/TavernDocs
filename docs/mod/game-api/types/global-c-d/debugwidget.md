---
title: "DebugWidget"
description: "Base for debug UI widgets that hide themselves unless enabled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DebugWidget

An **abstract class** in `Root.Township`, the global namespace.

Base for debug UI widgets that hide themselves unless enabled. Each picks an activation type: always on, toggled through `SetActive` (the QAM), or on when a `DebugWidgets` file is in the storage folder.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`NumericalWidget`](/mod/game-api/types/global-m-o/numericalwidget)
- **Nested types** [`ActivationType`](/mod/game-api/types/global-c-d/debugwidget-activationtype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected DebugWidget()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activationtype" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/debugwidget-activationtype">{"DebugWidget.ActivationType"}</Link>{" activationType"}</code> | <span className="api-desc">How this widget is turned on: always, by the QAM, or by the debug file.</span> |
| <Link id="m-awokenwidgets" /><code>{"private static HashSet<"}<Link to="/mod/game-api/types/global-c-d/debugwidget">{"DebugWidget"}</Link>{"> awokenWidgets"}</code> | <span className="api-desc">All widgets that have woken, for `SetActive`.</span> |
| <Link id="m-haswidgetfile" /><code>{"private static bool? hasWidgetFile"}</code> | <span className="api-desc">Cached result for `HasWidgetFile`.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-haswidgetfile-2" /><code>{"private static bool HasWidgetFile { get; }"}</code> | <span className="api-desc">Whether a `DebugWidgets` file exists in the storage folder; checked once.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setactive" /><code>{"static void SetActive(bool isActive)"}</code> | <span className="api-desc">Shows or hides every widget set to QAM activation. Called by `SceneWidgetsAction`.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Registers the widget and hides it if it is QAM-only, or file-only with no `DebugWidgets` file.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Removes the widget from the registered set.</span> |

</details>
