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
| <Link id="m-ctor" /><code>{"MethodNode()"}</code> | <span className="api-desc">Creates an `UpdateModule.MethodNode` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-method" /><code>{"Action Method"}</code> | <span className="api-desc">The method called each update.</span> |
| <Link id="m-module" /><code><Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" Module"}</code> | <span className="api-desc">The update module this node is registered with.</span> |
| <Link id="m-next" /><code><Link to="/mod/game-api/types/global-t-x/updatemodule-methodnode">{"UpdateModule.MethodNode"}</Link>{" Next"}</code> | <span className="api-desc">Next node in the module's list.</span> |
| <Link id="m-previous" /><code><Link to="/mod/game-api/types/global-t-x/updatemodule-methodnode">{"UpdateModule.MethodNode"}</Link>{" Previous"}</code> | <span className="api-desc">Previous node in the module's list.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isrunning" /><code>{"bool IsRunning { get; private set; }"}</code> | <span className="api-desc">True until the node is deregistered. `DeregisterMethod` only unlinks running nodes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | <span className="api-desc">Clears the links and method and marks the node as not running. Called on deregister.</span> |

## Used in

Members of other types that take, return or hold a `MethodNode`:

<div className="api-used-in">

[`BudgetedUpdateModule.DeregisterMethod`](/mod/game-api/types/global-a-b/budgetedupdatemodule#m-deregistermethod), [`BudgetedUpdateModule.ProcessNode`](/mod/game-api/types/global-a-b/budgetedupdatemodule#m-processnode), [`UpdateModule.AddMethodToProfiling`](/mod/game-api/types/global-t-x/updatemodule#m-addmethodtoprofiling), [`UpdateModule.CheckedIterateOverLinkedList`](/mod/game-api/types/global-t-x/updatemodule#m-checkediterateoverlinkedlist), [`UpdateModule.CheckedIterateOverLinkedListWithProfiling`](/mod/game-api/types/global-t-x/updatemodule#m-checkediterateoverlinkedlistwithprofiling), [`UpdateModule.checkedIterationMethod`](/mod/game-api/types/global-t-x/updatemodule#m-checkediterationmethod), [`UpdateModule.DeregisterMethod`](/mod/game-api/types/global-t-x/updatemodule#m-deregistermethod-2), [`UpdateModule.first`](/mod/game-api/types/global-t-x/updatemodule#m-first), [`UpdateModule.IterateOverLinkedList`](/mod/game-api/types/global-t-x/updatemodule#m-iterateoverlinkedlist), [`UpdateModule.IterateOverLinkedListWithProfiling`](/mod/game-api/types/global-t-x/updatemodule#m-iterateoverlinkedlistwithprofiling), [`UpdateModule.iterationMethod`](/mod/game-api/types/global-t-x/updatemodule#m-iterationmethod), [`UpdateModule.methodsPerNode`](/mod/game-api/types/global-t-x/updatemodule#m-methodspernode), [`UpdateModule.RemoveMethodFromProfiling`](/mod/game-api/types/global-t-x/updatemodule#m-removemethodfromprofiling), [`UpdateModule.StartProfilingForNode`](/mod/game-api/types/global-t-x/updatemodule#m-startprofilingfornode).

</div>
