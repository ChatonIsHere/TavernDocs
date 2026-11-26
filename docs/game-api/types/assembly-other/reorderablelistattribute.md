---
title: "ReorderableListAttribute"
description: "Inspector attribute that shows a list as a reorderable list, with options for dragging, header and add and remove buttons."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ReorderableListAttribute

A **class** in `Alta.Attributes`, no namespace.

Inspector attribute that shows a list as a reorderable list, with options for dragging, header and add and remove buttons.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `PropertyAttribute`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ReorderableListAttribute(bool isDraggable = true, bool isDisplayingHeader = true, bool isDisplayingAddButton = true, bool isDisplayingRemoveButton = true)"}</code> | Creates a `ReorderableListAttribute` from `isDraggable`, `isDisplayingHeader`, `isDisplayingAddButton` and `isDisplayingRemoveButton`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdisplayingaddbutton" /><code>{"bool IsDisplayingAddButton { get; private set; }"}</code> | Show the add button. |
| <Link id="m-isdisplayingheader" /><code>{"bool IsDisplayingHeader { get; private set; }"}</code> | Show the list header. |
| <Link id="m-isdisplayingremovebutton" /><code>{"bool IsDisplayingRemoveButton { get; private set; }"}</code> | Show the remove button. |
| <Link id="m-isdraggable" /><code>{"bool IsDraggable { get; private set; }"}</code> | Allow reordering by drag. |
