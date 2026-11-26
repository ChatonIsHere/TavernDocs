---
title: "DebugWidget"
description: "Base for debug UI widgets that hide themselves unless enabled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DebugWidget

An **abstract class** in `Root.Township`, no namespace.

Base for debug UI widgets that hide themselves unless enabled. Each picks an activation type: always on, toggled through `SetActive` (the QAM), or on when a `DebugWidgets` file is in the storage folder.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`NumericalWidget`](/game-api/types/global-m-o/numericalwidget)
- **Nested types** [`ActivationType`](/game-api/types/global-c-d/debugwidget-activationtype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected DebugWidget()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activationtype" /><code>{"private "}<Link to="/game-api/types/global-c-d/debugwidget-activationtype">{"DebugWidget.ActivationType"}</Link>{" activationType"}</code> | How this widget is turned on: always, by the QAM, or by the debug file. |
| <Link id="m-awokenwidgets" /><code>{"private static HashSet<"}<Link to="/game-api/types/global-c-d/debugwidget">{"DebugWidget"}</Link>{"> awokenWidgets"}</code> | All widgets that have woken, for `SetActive`. |
| <Link id="m-haswidgetfile" /><code>{"private static bool? hasWidgetFile"}</code> | Cached result for `HasWidgetFile`. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-haswidgetfile-2" /><code>{"private static bool HasWidgetFile { get; }"}</code> | Whether a `DebugWidgets` file exists in the storage folder; checked once. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setactive" /><code>{"static void SetActive(bool isActive)"}</code> | Shows or hides every widget set to QAM activation. Called by `SceneWidgetsAction`. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Registers the widget and hides it if it is QAM-only, or file-only with no `DebugWidgets` file. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Removes the widget from the registered set. |

</details>
