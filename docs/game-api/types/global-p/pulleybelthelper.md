---
title: "PulleyBeltHelper"
description: "Static maths helper that works out the path of a belt or rope wrapped around a loop of pulleys (circles), used by Belt and BeltVisual."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PulleyBeltHelper

A **static class** in `Root.Township`, no namespace.

Static maths helper that works out the path of a belt or rope wrapped around a loop of pulleys (circles), used by `Belt` and `BeltVisual`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested types** [`BeltOutput`](/game-api/types/global-p/pulleybelthelper-beltoutput), [`Circle`](/game-api/types/global-p/pulleybelthelper-circle)

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-circles" /><code>{"private static List<"}<Link to="/game-api/types/global-p/pulleybelthelper-circle">{"PulleyBeltHelper.Circle"}</Link>{"> circles"}</code> | Working copies of the input circles with the offset added. |
| <Link id="m-exterior" /><code>{"private static List<"}<Link to="/game-api/types/global-i-l/icircle">{"ICircle"}</Link>{"> exterior"}</code> | Circles found to be wrapped on the outside during the last `GetRope`. |
| <Link id="m-firstdirection" /><code>{"private static Vector3 firstDirection"}</code> | Start direction on the first circle, used to close the loop. |
| <Link id="m-firstposition" /><code>{"private static Vector3 firstPosition"}</code> | Start point on the first circle, used to close the loop. |
| <Link id="m-firstside" /><code>{"private static bool firstSide"}</code> | Whether the belt starts on the outside of the first circle. |
| <Link id="m-maximumsegmentlength" /><code>{"private static float maximumSegmentLength"}</code> | Longest straight segment allowed before `Cut` splits it. |
| <Link id="m-nextdirection" /><code>{"private static Vector3 nextDirection"}</code> | Direction carried between recursive steps to draw each pulley's arc. |
| <Link id="m-outputs" /><code>{"private static Dictionary<int, List<"}<Link to="/game-api/types/global-p/pulleybelthelper-beltoutput">{"PulleyBeltHelper.BeltOutput"}</Link>{">> outputs"}</code> | Valid tangent options per circle index, filled by `EvaluateOptions`. |
| <Link id="m-segmentsperdegree" /><code>{"private static float segmentsPerDegree"}</code> | Arc points per degree of wrap around a pulley. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getexterior" /><code>{"static IEnumerable<"}<Link to="/game-api/types/global-i-l/icircle">{"ICircle"}</Link>{"> GetExterior(IList<"}<Link to="/game-api/types/global-i-l/icircle">{"ICircle"}</Link>{"> input, float offset)"}</code> | Returns the input circles the belt wraps around on their outside. |
| <Link id="m-getrope" /><code>{"static IEnumerable<Vector3> GetRope(IList<"}<Link to="/game-api/types/global-i-l/icircle">{"ICircle"}</Link>{"> input, float segmentsPerDegree, float maximumSegmentLength, float offset) (iterator)"}</code> | Yields the points of a closed belt around the given circles, with radii grown by `offset` and long segments split. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attemptcircle" /><code>{"private static IEnumerable<Vector3> AttemptCircle(int current, bool side, bool nextSide) (iterator)"}</code> | Recursive step that tries each tangent option on a circle and yields the belt points if the loop closes back to the first circle. |
| <Link id="m-cut" /><code>{"private static IEnumerable<Vector3> Cut(Vector3 from, Vector3 to) (iterator)"}</code> | Yields extra points between two points so no segment is longer than `maximumSegmentLength`. |
| <Link id="m-drawcurve" /><code>{"private static IEnumerable<Vector3> DrawCurve(Vector3 lastDirection, Vector3 direction, Vector3 center, float radius) (iterator)"}</code> | Yields the points of the arc the belt follows around one pulley. |
| <Link id="m-evaluateoptions" /><code>{"private static void EvaluateOptions(int index, "}<Link to="/game-api/types/global-i-l/icircle">{"ICircle"}</Link>{" a, "}<Link to="/game-api/types/global-i-l/icircle">{"ICircle"}</Link>{" b, "}<Link to="/game-api/types/global-i-l/icircle">{"ICircle"}</Link>{" c)"}</code> | Works out which inner and outer tangent lines from one circle to the next are valid, given the circle after it, and stores them in `outputs`. |
| <Link id="m-evaluateoptions-2" /><code>{"private static void EvaluateOptions(int index, "}<Link to="/game-api/types/global-i-l/icircle">{"ICircle"}</Link>{" a, "}<Link to="/game-api/types/global-i-l/icircle">{"ICircle"}</Link>{" b, "}<Link to="/game-api/types/global-i-l/icircle">{"ICircle"}</Link>{" c, Vector3 forward, bool isSameSide, bool isExternal, out bool isValid1, out bool isValid2)"}</code> | Works out which inner and outer tangent lines from one circle to the next are valid, given the circle after it, and stores them in `outputs`. |
| <Link id="m-gettangent" /><code>{"private static bool GetTangent(Vector3 pointA, Vector3 pointB, Vector3 face, float radius, out Vector3 tangentLine1)"}</code> | Finds a tangent line between two circle centres for a given working radius. Returns false if the circles overlap too much. |
| <Link id="m-getuncutresults" /><code>{"private static IEnumerable<Vector3> GetUncutResults() (iterator)"}</code> | Yields the belt points before long segments are split, starting from circle 0. |
| <Link id="m-getworkingradius" /><code>{"private static float GetWorkingRadius("}<Link to="/game-api/types/global-i-l/icircle">{"ICircle"}</Link>{" a, "}<Link to="/game-api/types/global-i-l/icircle">{"ICircle"}</Link>{" b, bool isNonCrossing)"}</code> | Difference of two radii for a non-crossing tangent, or their sum for a crossing one. |

</details>
