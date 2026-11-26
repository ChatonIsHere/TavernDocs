---
title: "ObjectIssueLog"
description: "Editor-only list of problems found on assets."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ObjectIssueLog

A **class** in `Root.Township`, no namespace.

Editor-only list of problems found on assets. Its `Add` and assert methods are marked editor-only, so calls to them are compiled out of game builds.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`GlobalSettings<ObjectIssueLog>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`ObjectIssueLog`](/game-api/types/global-m-o/objectissuelog)
- **Nested types** [`Issue`](/game-api/types/global-m-o/objectissuelog-issue)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ObjectIssueLog()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-issues" /><code>{"private List<"}<Link to="/game-api/types/global-m-o/objectissuelog-issue">{"ObjectIssueLog.Issue"}</Link>{"> issues"}</code> | Saved list of objects with their logged issue messages. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |
| <Link id="m-map" /><code>{"private Dictionary<Object, "}<Link to="/game-api/types/global-m-o/objectissuelog-issue">{"ObjectIssueLog.Issue"}</Link>{"> map"}</code> | Lookup from object to its issue entry, built on first `Add`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(Object topic, string message)"}</code> | Editor only: records a message against an object, skipping duplicates. |
| <Link id="m-assert" /><code>{"void Assert(Object topic, bool condition, string message)"}</code> | Editor only: throws if the condition is false. |
| <Link id="m-assertexists" /><code>{"void AssertExists(Object topic, Object value, string message)"}</code> | Editor only: throws if the object is null, or if any object in the list is. |
| <Link id="m-assertexists-2" /><code>{"void AssertExists(Object topic, IEnumerable<Object> value, string message)"}</code> | Editor only: throws if the object is null, or if any object in the list is. |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Empties the log. Throws if nothing was ever added, since the lookup isn't built yet. |

## Used in

Members of other types that take, return or hold a `ObjectIssueLog`:

[`NetworkEntityObjectIssueLog.AssertEntity`](/game-api/types/global-m-o/networkentityobjectissuelog#m-assertentity), [`NetworkEntityObjectIssueLog.AssertExistsEntity`](/game-api/types/global-m-o/networkentityobjectissuelog#m-assertexistsentity), [`NetworkEntityObjectIssueLog.AssertExistsFind`](/game-api/types/global-m-o/networkentityobjectissuelog#m-assertexistsfind), [`NetworkEntityObjectIssueLog.AssertFind`](/game-api/types/global-m-o/networkentityobjectissuelog#m-assertfind).
