---
title: "TableParserExtensions"
description: "static class TableParserExtensions in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TableParserExtensions

A **static class** in `Root.Township`, `TableParser`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Attributes** `Extension`

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-stringbuilder" /><code>{"private static StringBuilder stringBuilder"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-tostringtable" /><code>{"static string ToStringTable(IEnumerable values)"}</code> |
| <Link id="m-tostringtable-2" /><code>{"static string ToStringTable<T>(IEnumerable<T> values, string[] columnHeaders, params Func<T, object>[] valueSelectors)"}</code> |
| <Link id="m-tostringtable-3" /><code>{"static string ToStringTable<T>(T[] values, string[] columnHeaders, params Func<T, object>[] valueSelectors)"}</code> |
| <Link id="m-tostringtable-4" /><code>{"static string ToStringTable(string[,] arrValues)"}</code> |
| <Link id="m-tostringtable-5" /><code>{"static string ToStringTable<T>(IEnumerable<T> values, params Expression<Func<T, object>>[] valueSelectors)"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-getmaxcolumnswidth" /><code>{"private static int[] GetMaxColumnsWidth(string[,] arrValues)"}</code> |
| <Link id="m-getproperty" /><code>{"private static PropertyInfo GetProperty<T>(Expression<Func<T, object>> expression)"}</code> |

</details>
