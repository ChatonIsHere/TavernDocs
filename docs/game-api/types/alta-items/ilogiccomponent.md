---
title: "ILogicComponent"
description: "A logic component that the GlobalLogicManager prepares in the editor before the scene is saved."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ILogicComponent

An **interface** in `Root.Township`, `Alta.Logic`.

A logic component that the `GlobalLogicManager` prepares in the editor before the scene is saved.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Derived types** [`LogicValueReceiver<TSenderInput>`](/game-api/types/alta-items/logicvaluereceiver-tsenderinput), [`LogicValueReceiverArray<TSenderInput>`](/game-api/types/alta-items/logicvaluereceiverarray-tsenderinput), [`LogicValueSender`](/game-api/types/alta-items/logicvaluesender)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-editorpresave" /><code>{"void EditorPreSave("}<Link to="/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" manager)"}</code> | Editor: called by the logic manager before saving, to set up the component. |
