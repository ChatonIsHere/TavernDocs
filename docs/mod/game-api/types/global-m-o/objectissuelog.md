---
title: "ObjectIssueLog"
description: "Editor-only list of problems found on assets."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ObjectIssueLog

A **class** in `Root.Township`, the global namespace.

Editor-only list of problems found on assets. Its `Add` and assert methods are marked editor-only, so calls to them are compiled out of game builds.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`GlobalSettings<ObjectIssueLog>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`ObjectIssueLog`](/mod/game-api/types/global-m-o/objectissuelog)
- **Nested types** [`Issue`](/mod/game-api/types/global-m-o/objectissuelog-issue)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ObjectIssueLog()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-issues" /><code>{"private List<"}<Link to="/mod/game-api/types/global-m-o/objectissuelog-issue">{"ObjectIssueLog.Issue"}</Link>{"> issues"}</code> | <span className="api-desc">Saved list of objects with their logged issue messages.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-map" /><code>{"private Dictionary<Object, "}<Link to="/mod/game-api/types/global-m-o/objectissuelog-issue">{"ObjectIssueLog.Issue"}</Link>{"> map"}</code> | <span className="api-desc">Lookup from object to its issue entry, built on first `Add`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(Object topic, string message)"}</code> | <span className="api-desc">Editor only: records a message against an object, skipping duplicates.</span> |
| <Link id="m-assert" /><code>{"void Assert(Object topic, bool condition, string message)"}</code> | <span className="api-desc">Editor only: throws if the condition is false.</span> |
| <Link id="m-assertexists" /><code>{"void AssertExists(Object topic, Object value, string message)"}</code> | <span className="api-desc">Editor only: throws if the object is null, or if any object in the list is.</span> |
| <Link id="m-assertexists-2" /><code>{"void AssertExists(Object topic, IEnumerable<Object> value, string message)"}</code> | <span className="api-desc">Editor only: throws if the object is null, or if any object in the list is.</span> |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Empties the log. Throws if nothing was ever added, since the lookup isn't built yet.</span> |

## Used in

Members of other types that take, return or hold a `ObjectIssueLog`:

<div className="api-used-in">

[`NetworkEntityObjectIssueLog.AssertEntity`](/mod/game-api/types/global-m-o/networkentityobjectissuelog#m-assertentity), [`NetworkEntityObjectIssueLog.AssertExistsEntity`](/mod/game-api/types/global-m-o/networkentityobjectissuelog#m-assertexistsentity), [`NetworkEntityObjectIssueLog.AssertExistsFind`](/mod/game-api/types/global-m-o/networkentityobjectissuelog#m-assertexistsfind), [`NetworkEntityObjectIssueLog.AssertFind`](/mod/game-api/types/global-m-o/networkentityobjectissuelog#m-assertfind).

</div>
