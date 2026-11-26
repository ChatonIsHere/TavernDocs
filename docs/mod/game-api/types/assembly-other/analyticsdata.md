---
title: "AnalyticsData"
description: "The payload of one analytics event: its name, optional user ID and a list of name and value properties."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnalyticsData

A **class** in `Alta.Analytics.Runtime`, `Alta.Analytics`.

The payload of one analytics event: its name, optional user ID and a list of name and value properties. Built by `AnalyticsEvent`.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IAnalyticsData`](/mod/game-api/types/assembly-other/ianalyticsdata), [`IAnalyticsPropertyWriter`](/mod/game-api/types/assembly-other/ianalyticspropertywriter), [`IReadonlyAnalyticsData`](/mod/game-api/types/assembly-other/ireadonlyanalyticsdata), `IReadOnlyCollection<IAnalyticsProperty>`, `IEnumerable<IAnalyticsProperty>`, `IEnumerable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnalyticsData(string eventName, int? userId = null)"}</code> | Creates an `AnalyticsData` from `eventName` and `userId`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-properties" /><code>{"private readonly List<"}<Link to="/mod/game-api/types/assembly-other/ianalyticsproperty">{"IAnalyticsProperty"}</Link>{"> properties"}</code> | The property list. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | Number of properties added. |
| <Link id="m-eventname" /><code>{"string EventName { get; }"}</code> | The event's name. |
| <Link id="m-userid" /><code>{"int? UserId { get; private set; }"}</code> | The user ID, or null when not set. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addproperty" /><code>{"void AddProperty(string name, object value)"}</code> | Appends a name and value property. Duplicate names are not checked. |
| <Link id="m-getenumerator" /><code>{"IEnumerator<"}<Link to="/mod/game-api/types/assembly-other/ianalyticsproperty">{"IAnalyticsProperty"}</Link>{"> GetEnumerator()"}</code> | Enumerates the properties in the order they were added. |
| <Link id="m-setuserid" /><code>{"void SetUserId(int id)"}</code> | Sets the user ID the event is for. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | Enumerates the properties in the order they were added. |

</details>
