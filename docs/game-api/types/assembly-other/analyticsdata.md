---
title: "AnalyticsData"
description: "class AnalyticsData in Alta.Analytics.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnalyticsData

A **class** in `Alta.Analytics.Runtime`, `Alta.Analytics`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IAnalyticsData`](/game-api/types/assembly-other/ianalyticsdata), [`IAnalyticsPropertyWriter`](/game-api/types/assembly-other/ianalyticspropertywriter), [`IReadonlyAnalyticsData`](/game-api/types/assembly-other/ireadonlyanalyticsdata), `IReadOnlyCollection<IAnalyticsProperty>`, `IEnumerable<IAnalyticsProperty>`, `IEnumerable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnalyticsData(string eventName, int? userId = null)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-properties" /><code>{"private readonly List<"}<Link to="/game-api/types/assembly-other/ianalyticsproperty">{"IAnalyticsProperty"}</Link>{"> properties"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> |  |
| <Link id="m-eventname" /><code>{"string EventName { get; }"}</code> |  |
| <Link id="m-userid" /><code>{"int? UserId { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addproperty" /><code>{"void AddProperty(string name, object value)"}</code> |  |
| <Link id="m-getenumerator" /><code>{"IEnumerator<"}<Link to="/game-api/types/assembly-other/ianalyticsproperty">{"IAnalyticsProperty"}</Link>{"> GetEnumerator()"}</code> |  |
| <Link id="m-setuserid" /><code>{"void SetUserId(int id)"}</code> |  |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> |  |
