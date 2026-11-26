---
title: "TableParserExtensions"
description: "Extension methods that format lists of objects as plain text tables with padded columns, for console and log output."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TableParserExtensions

A **static class** in `Root.Township`, `TableParser`.

Extension methods that format lists of objects as plain text tables with padded columns, for console and log output.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Attributes** `Extension`

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-stringbuilder" /><code>{"private static StringBuilder stringBuilder"}</code> | <span className="api-desc">Shared builder reused by every call, so this isn't thread safe.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostringtable" /><code>{"static string ToStringTable(IEnumerable values)"}</code> | <span className="api-desc">Builds a text table from values, using public properties (skipping `JsonIgnore`, ordered by `TableOrder`), selectors or a string grid. Prints "Empty Table" for no rows.</span> |
| <Link id="m-tostringtable-2" /><code>{"static string ToStringTable<T>(IEnumerable<T> values, string[] columnHeaders, params Func<T, object>[] valueSelectors)"}</code> | <span className="api-desc">Builds a text table from values, using public properties (skipping `JsonIgnore`, ordered by `TableOrder`), selectors or a string grid. Prints "Empty Table" for no rows.</span> |
| <Link id="m-tostringtable-3" /><code>{"static string ToStringTable<T>(T[] values, string[] columnHeaders, params Func<T, object>[] valueSelectors)"}</code> | <span className="api-desc">Builds a text table from values, using public properties (skipping `JsonIgnore`, ordered by `TableOrder`), selectors or a string grid. Prints "Empty Table" for no rows.</span> |
| <Link id="m-tostringtable-4" /><code>{"static string ToStringTable(string[,] arrValues)"}</code> | <span className="api-desc">Builds a text table from values, using public properties (skipping `JsonIgnore`, ordered by `TableOrder`), selectors or a string grid. Prints "Empty Table" for no rows.</span> |
| <Link id="m-tostringtable-5" /><code>{"static string ToStringTable<T>(IEnumerable<T> values, params Expression<Func<T, object>>[] valueSelectors)"}</code> | <span className="api-desc">Builds a text table from values, using public properties (skipping `JsonIgnore`, ordered by `TableOrder`), selectors or a string grid. Prints "Empty Table" for no rows.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getmaxcolumnswidth" /><code>{"private static int[] GetMaxColumnsWidth(string[,] arrValues)"}</code> | <span className="api-desc">Returns the widest cell length in each column.</span> |
| <Link id="m-getproperty" /><code>{"private static PropertyInfo GetProperty<T>(Expression<Func<T, object>> expression)"}</code> | <span className="api-desc">Gets the property a selector expression points at, used for column headers.</span> |

</details>
