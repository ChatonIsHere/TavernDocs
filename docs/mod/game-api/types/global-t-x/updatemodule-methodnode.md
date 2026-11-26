---
title: "UpdateModule.MethodNode"
description: "One registered update method in an UpdateModule's linked list."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UpdateModule.MethodNode

A **protected class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One registered update method in an `UpdateModule`'s linked list. `RegisterMethod` hands it back as an `IUnityUpdateMethod` handle.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`UpdateModule`](/mod/game-api/types/global-t-x/updatemodule)
- **Inherits or implements** [`IUnityUpdateMethod`](/mod/game-api/types/global-i-l/iunityupdatemethod)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MethodNode()"}</code> | Creates an `UpdateModule.MethodNode` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-method" /><code>{"Action Method"}</code> | The method called each update. |
| <Link id="m-module" /><code><Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" Module"}</code> | The update module this node is registered with. |
| <Link id="m-next" /><code><Link to="/mod/game-api/types/global-t-x/updatemodule-methodnode">{"UpdateModule.MethodNode"}</Link>{" Next"}</code> | Next node in the module's list. |
| <Link id="m-previous" /><code><Link to="/mod/game-api/types/global-t-x/updatemodule-methodnode">{"UpdateModule.MethodNode"}</Link>{" Previous"}</code> | Previous node in the module's list. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isrunning" /><code>{"bool IsRunning { get; private set; }"}</code> | True until the node is deregistered. `DeregisterMethod` only unlinks running nodes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | Clears the links and method and marks the node as not running. Called on deregister. |

## Used in

Members of other types that take, return or hold a `MethodNode`:

[`BudgetedUpdateModule.DeregisterMethod`](/mod/game-api/types/global-a-b/budgetedupdatemodule#m-deregistermethod), [`BudgetedUpdateModule.ProcessNode`](/mod/game-api/types/global-a-b/budgetedupdatemodule#m-processnode), [`UpdateModule.AddMethodToProfiling`](/mod/game-api/types/global-t-x/updatemodule#m-addmethodtoprofiling), [`UpdateModule.CheckedIterateOverLinkedList`](/mod/game-api/types/global-t-x/updatemodule#m-checkediterateoverlinkedlist), [`UpdateModule.CheckedIterateOverLinkedListWithProfiling`](/mod/game-api/types/global-t-x/updatemodule#m-checkediterateoverlinkedlistwithprofiling), [`UpdateModule.checkedIterationMethod`](/mod/game-api/types/global-t-x/updatemodule#m-checkediterationmethod), [`UpdateModule.DeregisterMethod`](/mod/game-api/types/global-t-x/updatemodule#m-deregistermethod-2), [`UpdateModule.first`](/mod/game-api/types/global-t-x/updatemodule#m-first), [`UpdateModule.IterateOverLinkedList`](/mod/game-api/types/global-t-x/updatemodule#m-iterateoverlinkedlist), [`UpdateModule.IterateOverLinkedListWithProfiling`](/mod/game-api/types/global-t-x/updatemodule#m-iterateoverlinkedlistwithprofiling), [`UpdateModule.iterationMethod`](/mod/game-api/types/global-t-x/updatemodule#m-iterationmethod), [`UpdateModule.methodsPerNode`](/mod/game-api/types/global-t-x/updatemodule#m-methodspernode), [`UpdateModule.RemoveMethodFromProfiling`](/mod/game-api/types/global-t-x/updatemodule#m-removemethodfromprofiling), [`UpdateModule.StartProfilingForNode`](/mod/game-api/types/global-t-x/updatemodule#m-startprofilingfornode).
