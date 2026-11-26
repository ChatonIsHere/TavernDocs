---
title: "IHistoryAction"
description: "One undoable action stored in a HistoryManager<T>."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IHistoryAction

An **interface** in `Root.Township`, the global namespace.

One undoable action stored in a `HistoryManager<T>`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`CustomizationHistoryAction`](/mod/game-api/types/alta-customization/customizationhistoryaction)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-redo" /><code>{"void Redo()"}</code> | <span className="api-desc">Applies the action again.</span> |
| <Link id="m-release" /><code>{"void Release()"}</code> | <span className="api-desc">Frees the action when it drops out of the history or the history is cleared.</span> |
| <Link id="m-undo" /><code>{"void Undo()"}</code> | <span className="api-desc">Reverses the action.</span> |
