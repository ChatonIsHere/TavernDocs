---
title: "IHistoryAction"
description: "One undoable action stored in a HistoryManager<T>."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IHistoryAction

An **interface** in `Root.Township`, no namespace.

One undoable action stored in a `HistoryManager<T>`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`CustomizationHistoryAction`](/game-api/types/alta-customization/customizationhistoryaction)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-redo" /><code>{"void Redo()"}</code> | Applies the action again. |
| <Link id="m-release" /><code>{"void Release()"}</code> | Frees the action when it drops out of the history or the history is cleared. |
| <Link id="m-undo" /><code>{"void Undo()"}</code> | Reverses the action. |
