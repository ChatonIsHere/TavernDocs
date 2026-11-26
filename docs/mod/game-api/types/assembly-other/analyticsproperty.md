---
title: "AnalyticsProperty"
description: "One name and value pair in an analytics event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnalyticsProperty

A **struct** in `Alta.Analytics.Runtime`, `Alta.Analytics`.

One name and value pair in an analytics event.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IAnalyticsProperty`](/mod/game-api/types/assembly-other/ianalyticsproperty)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnalyticsProperty(string name, object value)"}</code> | Creates an `AnalyticsProperty` from `name` and `value`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | The property name. |
| <Link id="m-value" /><code>{"object Value { get; }"}</code> | The property value, any object. |
