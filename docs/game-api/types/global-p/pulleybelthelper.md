---
title: "PulleyBeltHelper"
description: "static class PulleyBeltHelper in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PulleyBeltHelper

A **static class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested types** [`BeltOutput`](/game-api/types/global-p/pulleybelthelper-beltoutput), [`Circle`](/game-api/types/global-p/pulleybelthelper-circle)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-circles" /><code>{"private static List<"}<Link to="/game-api/types/global-p/pulleybelthelper-circle">{"PulleyBeltHelper.Circle"}</Link>{"> circles"}</code> |  |
| <Link id="m-exterior" /><code>{"private static List<"}<Link to="/game-api/types/global-i-l/icircle">{"ICircle"}</Link>{"> exterior"}</code> |  |
| <Link id="m-firstdirection" /><code>{"private static Vector3 firstDirection"}</code> |  |
| <Link id="m-firstposition" /><code>{"private static Vector3 firstPosition"}</code> |  |
| <Link id="m-firstside" /><code>{"private static bool firstSide"}</code> |  |
| <Link id="m-maximumsegmentlength" /><code>{"private static float maximumSegmentLength"}</code> |  |
| <Link id="m-nextdirection" /><code>{"private static Vector3 nextDirection"}</code> |  |
| <Link id="m-outputs" /><code>{"private static Dictionary<int, List<"}<Link to="/game-api/types/global-p/pulleybelthelper-beltoutput">{"PulleyBeltHelper.BeltOutput"}</Link>{">> outputs"}</code> |  |
| <Link id="m-segmentsperdegree" /><code>{"private static float segmentsPerDegree"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getexterior" /><code>{"static IEnumerable<"}<Link to="/game-api/types/global-i-l/icircle">{"ICircle"}</Link>{"> GetExterior(IList<"}<Link to="/game-api/types/global-i-l/icircle">{"ICircle"}</Link>{"> input, float offset)"}</code> |  |
| <Link id="m-getrope" /><code>{"static IEnumerable<Vector3> GetRope(IList<"}<Link to="/game-api/types/global-i-l/icircle">{"ICircle"}</Link>{"> input, float segmentsPerDegree, float maximumSegmentLength, float offset) (iterator)"}</code> |  |
| <Link id="m-attemptcircle" /><code>{"private static IEnumerable<Vector3> AttemptCircle(int current, bool side, bool nextSide) (iterator)"}</code> |  |
| <Link id="m-cut" /><code>{"private static IEnumerable<Vector3> Cut(Vector3 from, Vector3 to) (iterator)"}</code> |  |
| <Link id="m-drawcurve" /><code>{"private static IEnumerable<Vector3> DrawCurve(Vector3 lastDirection, Vector3 direction, Vector3 center, float radius) (iterator)"}</code> |  |
| <Link id="m-evaluateoptions" /><code>{"private static void EvaluateOptions(int index, "}<Link to="/game-api/types/global-i-l/icircle">{"ICircle"}</Link>{" a, "}<Link to="/game-api/types/global-i-l/icircle">{"ICircle"}</Link>{" b, "}<Link to="/game-api/types/global-i-l/icircle">{"ICircle"}</Link>{" c)"}</code> |  |
| <Link id="m-evaluateoptions-2" /><code>{"private static void EvaluateOptions(int index, "}<Link to="/game-api/types/global-i-l/icircle">{"ICircle"}</Link>{" a, "}<Link to="/game-api/types/global-i-l/icircle">{"ICircle"}</Link>{" b, "}<Link to="/game-api/types/global-i-l/icircle">{"ICircle"}</Link>{" c, Vector3 forward, bool isSameSide, bool isExternal, out bool isValid1, out bool isValid2)"}</code> |  |
| <Link id="m-gettangent" /><code>{"private static bool GetTangent(Vector3 pointA, Vector3 pointB, Vector3 face, float radius, out Vector3 tangentLine1)"}</code> |  |
| <Link id="m-getuncutresults" /><code>{"private static IEnumerable<Vector3> GetUncutResults() (iterator)"}</code> |  |
| <Link id="m-getworkingradius" /><code>{"private static float GetWorkingRadius("}<Link to="/game-api/types/global-i-l/icircle">{"ICircle"}</Link>{" a, "}<Link to="/game-api/types/global-i-l/icircle">{"ICircle"}</Link>{" b, bool isNonCrossing)"}</code> |  |
