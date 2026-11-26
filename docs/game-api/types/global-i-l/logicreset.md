---
title: "LogicReset"
description: "Saved list of logic bool senders and the values to put them back to."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicReset

A **class** in `Root.Township`, no namespace.

Saved list of logic bool senders and the values to put them back to. `ResetLogic` restores them all, for example to reset a puzzle.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<LogicResetSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LogicResetSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LogicResetSaveData`](/game-api/types/global-i-l/logicresetsavedata)
- **Nested types** [`BoolSenders`](/game-api/types/global-i-l/logicreset-boolsenders)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicReset()"}</code> | Creates a `LogicReset` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-senders" /><code>{"private List<"}<Link to="/game-api/types/global-i-l/logicreset-boolsenders">{"LogicReset.BoolSenders"}</Link>{"> senders"}</code> | Senders and their reset values. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resetlogic" /><code>{"void ResetLogic()"}</code> | Sets each sender back to its reset value and tells its save data it changed. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Draws each sender in the editor, green for a true reset value and red for false. |

</details>
