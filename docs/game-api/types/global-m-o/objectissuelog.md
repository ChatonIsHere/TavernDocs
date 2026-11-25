---
title: "ObjectIssueLog"
description: "class ObjectIssueLog in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ObjectIssueLog

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`GlobalSettings<ObjectIssueLog>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`ObjectIssueLog`](/game-api/types/global-m-o/objectissuelog)
- **Nested types** [`Issue`](/game-api/types/global-m-o/objectissuelog-issue)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ObjectIssueLog()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-issues" /><code>{"private List<"}<Link to="/game-api/types/global-m-o/objectissuelog-issue">{"ObjectIssueLog.Issue"}</Link>{"> issues"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-map" /><code>{"private Dictionary<Object, "}<Link to="/game-api/types/global-m-o/objectissuelog-issue">{"ObjectIssueLog.Issue"}</Link>{"> map"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(Object topic, string message)"}</code> |  |
| <Link id="m-assert" /><code>{"void Assert(Object topic, bool condition, string message)"}</code> |  |
| <Link id="m-assertexists" /><code>{"void AssertExists(Object topic, Object value, string message)"}</code> |  |
| <Link id="m-assertexists-2" /><code>{"void AssertExists(Object topic, IEnumerable<Object> value, string message)"}</code> |  |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ObjectIssueLog`:

[`NetworkEntityObjectIssueLog.AssertEntity`](/game-api/types/global-m-o/networkentityobjectissuelog#m-assertentity), [`NetworkEntityObjectIssueLog.AssertExistsEntity`](/game-api/types/global-m-o/networkentityobjectissuelog#m-assertexistsentity), [`NetworkEntityObjectIssueLog.AssertExistsFind`](/game-api/types/global-m-o/networkentityobjectissuelog#m-assertexistsfind), [`NetworkEntityObjectIssueLog.AssertFind`](/game-api/types/global-m-o/networkentityobjectissuelog#m-assertfind).
