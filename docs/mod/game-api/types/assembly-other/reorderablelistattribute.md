---
title: "ReorderableListAttribute"
description: "Inspector attribute that shows a list as a reorderable list, with options for dragging, header and add and remove buttons."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ReorderableListAttribute

A **class** in `Alta.Attributes`, the global namespace.

Inspector attribute that shows a list as a reorderable list, with options for dragging, header and add and remove buttons.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `PropertyAttribute`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ReorderableListAttribute(bool isDraggable = true, bool isDisplayingHeader = true, bool isDisplayingAddButton = true, bool isDisplayingRemoveButton = true)"}</code> | <span className="api-desc">Creates a `ReorderableListAttribute` from `isDraggable`, `isDisplayingHeader`, `isDisplayingAddButton` and `isDisplayingRemoveButton`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdisplayingaddbutton" /><code>{"bool IsDisplayingAddButton { get; private set; }"}</code> | <span className="api-desc">Show the add button.</span> |
| <Link id="m-isdisplayingheader" /><code>{"bool IsDisplayingHeader { get; private set; }"}</code> | <span className="api-desc">Show the list header.</span> |
| <Link id="m-isdisplayingremovebutton" /><code>{"bool IsDisplayingRemoveButton { get; private set; }"}</code> | <span className="api-desc">Show the remove button.</span> |
| <Link id="m-isdraggable" /><code>{"bool IsDraggable { get; private set; }"}</code> | <span className="api-desc">Allow reordering by drag.</span> |
