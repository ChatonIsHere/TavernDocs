---
title: "DayTimeManager"
description: "Client: the atmosphere plugin for the day and night cycle."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DayTimeManager

A **class** in `Root.Township`, `Alta.Environmental.Atmosphere`.

Client: the atmosphere plugin for the day and night cycle. Turns the sun and moon and sets sky, ambient light, fog and ambience audio from game time. Follows the server's fixed daytime setting when set.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`AtmospherePlugin`](/game-api/types/alta-world/atmosphereplugin)
- **Nested types** [`ChangedState`](/game-api/types/alta-world/daytimemanager-changedstate)
- **Attributes** `ExecuteInEditMode`
- **Documented in** [Time and environment](/game-api/world/time-and-environment)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DayTimeManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fullcycle" /><code>{"float fullCycle"}</code> | Editor readout: position in the full day cycle. |
| <Link id="m-halfcycle" /><code>{"float halfCycle"}</code> | Editor readout: position in the sun's half cycle. |
| <Link id="m-quartercycle" /><code>{"float quarterCycle"}</code> | Editor readout: how high the moon is. |
| <Link id="m-androidmoondistance" /><code>{"private float androidMoonDistance"}</code> |  |
| <Link id="m-androidmoonmaterial" /><code>{"private Material androidMoonMaterial"}</code> |  |
| <Link id="m-androidmoonsize" /><code>{"private float androidMoonSize"}</code> |  |
| <Link id="m-audiosplittowardsday" /><code>{"private AnimationCurve audioSplitTowardsDay"}</code> |  |
| <Link id="m-btnconvert" /><code>{"private bool btnConvert"}</code> |  |
| <Link id="m-btnstopupdating" /><code>{"private bool btnStopUpdating"}</code> |  |
| <Link id="m-cloudscoloroverday" /><code>{"private Gradient cloudsColorOverDay"}</code> |  |
| <Link id="m-currentambience" /><code>{"private Color currentAmbience"}</code> |  |
| <Link id="m-currentvolumesplit" /><code>{"private float currentVolumeSplit"}</code> |  |
| <Link id="m-debugdayprogress" /><code>{"private float debugDayProgress"}</code> |  |
| <Link id="m-debugmonthprogress" /><code>{"private float debugMonthProgress"}</code> |  |
| <Link id="m-dotmoonup" /><code>{"private float dotMoonUp"}</code> |  |
| <Link id="m-fogandroidmultiplier" /><code>{"private float fogAndroidMultiplier"}</code> |  |
| <Link id="m-fogcolorduringday" /><code>{"private Gradient fogColorDuringDay"}</code> |  |
| <Link id="m-fogdensityduringday" /><code>{"private AnimationCurve fogDensityDuringDay"}</code> |  |
| <Link id="m-gametimemanager" /><code>{"private "}<Link to="/game-api/types/global-e-h/gametimemanager">{"GameTimeManager"}</Link>{" gameTimeManager"}</code> |  |
| <Link id="m-haloinversesizeoverday" /><code>{"private AnimationCurve haloInverseSizeOverDay"}</code> |  |
| <Link id="m-instantiatedandroidmoonmaterial" /><code>{"private Material instantiatedAndroidMoonMaterial"}</code> |  |
| <Link id="m-instantiatedskyboxmaterial" /><code>{"private Material instantiatedSkyboxMaterial"}</code> |  |
| <Link id="m-isrenderinggizmos" /><code>{"private bool isRenderingGizmos"}</code> |  |
| <Link id="m-isupdatingdaytime" /><code>{"private bool isUpdatingDaytime"}</code> |  |
| <Link id="m-lastdayprogress" /><code>{"private float lastDayProgress"}</code> |  |
| <Link id="m-lastfixeddaytime" /><code>{"private float lastFixedDaytime"}</code> |  |
| <Link id="m-lightintensitymodifier" /><code>{"private "}<Link to="/game-api/types/alta-utilities/lerpingfloatvalue">{"LerpingFloatValue"}</Link>{" LightIntensityModifier"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-moonambience" /><code>{"private Gradient moonAmbience"}</code> |  |
| <Link id="m-moonfadeintime" /><code>{"private float moonFadeInTime"}</code> |  |
| <Link id="m-moonlerpinmodifier" /><code>{"private "}<Link to="/game-api/types/alta-utilities/lerpingfloatgetvalue">{"LerpingFloatGetValue"}</Link>{" MoonLerpInModifier"}</code> |  |
| <Link id="m-moonlight" /><code>{"private Light moonLight"}</code> |  |
| <Link id="m-moonlightintensitycurve" /><code>{"private AnimationCurve moonLightIntensityCurve"}</code> |  |
| <Link id="m-moonmesh" /><code>{"private static Mesh moonMesh"}</code> |  |
| <Link id="m-moonrotator" /><code>{"private Transform moonRotator"}</code> |  |
| <Link id="m-moonspiningaxis" /><code>{"private Vector3 moonSpiningAxis"}</code> |  |
| <Link id="m-moontosundotshift" /><code>{"private float moonToSunDotShift"}</code> |  |
| <Link id="m-moonvector" /><code>{"private Vector3 moonVector"}</code> |  |
| <Link id="m-nightsource" /><code>{"private "}<Link to="/game-api/types/global-a-b/ambienceaudio">{"AmbienceAudio"}</Link>{" nightSource"}</code> |  |
| <Link id="m-nighttimeshift" /><code>{"private float nightTimeShift"}</code> |  |
| <Link id="m-skybotcolor" /><code>{"private Gradient skyBotcolor"}</code> |  |
| <Link id="m-skyboxmaterial" /><code>{"private Material skyBoxMaterial"}</code> |  |
| <Link id="m-skycolorbotbending" /><code>{"private AnimationCurve skyColorBotBending"}</code> |  |
| <Link id="m-skycolorfade" /><code>{"private "}<Link to="/game-api/types/alta-utilities/lerpingfloatvalue">{"LerpingFloatValue"}</Link>{" skyColorFade"}</code> |  |
| <Link id="m-skycolormidpointposition" /><code>{"private AnimationCurve skyColorMidPointPosition"}</code> |  |
| <Link id="m-skycolorrelatedtosun" /><code>{"private Gradient skyColorRelatedToSun"}</code> |  |
| <Link id="m-skycolortopbending" /><code>{"private AnimationCurve skyColorTopBending"}</code> |  |
| <Link id="m-skymidcolor" /><code>{"private Gradient skyMidcolor"}</code> |  |
| <Link id="m-skytopcolor" /><code>{"private Gradient skyTopcolor"}</code> |  |
| <Link id="m-sunambience" /><code>{"private Gradient sunAmbience"}</code> |  |
| <Link id="m-suncolor" /><code>{"private Gradient sunColor"}</code> |  |
| <Link id="m-suninversesizeoverday" /><code>{"private AnimationCurve sunInverseSizeOverDay"}</code> |  |
| <Link id="m-sunlight" /><code>{"private Light sunLight"}</code> |  |
| <Link id="m-sunlightduringday" /><code>{"private Gradient sunlightDuringDay"}</code> |  |
| <Link id="m-sunlightintensitycurve" /><code>{"private AnimationCurve sunLightIntensityCurve"}</code> |  |
| <Link id="m-sunprogress" /><code>{"private float sunProgress"}</code> |  |
| <Link id="m-sunrotator" /><code>{"private Transform sunRotator"}</code> |  |
| <Link id="m-sunspiningaxis" /><code>{"private Vector3 sunSpiningAxis"}</code> |  |
| <Link id="m-sunupskew" /><code>{"private float sunUpSkew"}</code> |  |
| <Link id="m-syncfixeddaytime" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFixedDaytime"}</code> |  |
| <Link id="m-usedebugvalueatruntime" /><code>{"private bool useDebugValueAtRuntime"}</code> |  |
| <Link id="m-wasenabled" /><code>{"private bool wasEnabled"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ambiencevolume" /><code>{"override float AmbienceVolume { get; set; }"}</code> | Total ambience volume, split between day and night sources by time of day. 0 on a headless server. |
| <Link id="m-currentambience-2" /><code>{"override Color CurrentAmbience { get; }"}</code> | The ambient light colour for the current time. |
| <Link id="m-currentfog" /><code>{"override Color CurrentFog { get; }"}</code> | The fog colour for the current time. |
| <Link id="m-currentfogdensity" /><code>{"override float CurrentFogDensity { get; }"}</code> | The fog density for the current time, scaled on Android. |
| <Link id="m-androidmoonmaterial-2" /><code>{"private Material AndroidMoonMaterial { get; }"}</code> |  |
| <Link id="m-skyboxmaterial-2" /><code>{"private Material SkyboxMaterial { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | Fades the lights and sky colour out when another atmosphere takes over. |
| <Link id="m-evaluatefogcolor" /><code>{"Color EvaluateFogColor()"}</code> | Fog colour for the last worked out time of day. |
| <Link id="m-evaluatefogdensity" /><code>{"float EvaluateFogDensity()"}</code> | Fog density for the last worked out time of day. |
| <Link id="m-initialize" /><code>{"override void Initialize("}<Link to="/game-api/types/alta-world/atmospheremanager">{"AtmosphereManager"}</Link>{" manager)"}</code> | Reads the server's fixed daytime (below 0 means the normal cycle) and sets the starting sun and moon. |
| <Link id="m-mute" /><code>{"override void Mute(bool isMuted)"}</code> | Mutes or unmutes the night source as well. |
| <Link id="m-onconnect" /><code>{"override void OnConnect("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the fixed daytime state to a joining player. |
| <Link id="m-startaudio" /><code>{"override void StartAudio()"}</code> | Starts the night source as well. |
| <Link id="m-stopaudio" /><code>{"override void StopAudio()"}</code> | Stops the night source as well. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-createmoonmeshifneeded" /><code>{"private void CreateMoonMeshIfNeeded()"}</code> |  |
| <Link id="m-disableskycolor" /><code>{"private void DisableSkyColor()"}</code> |  |
| <Link id="m-enabled" /><code>{"protected override void Enabled()"}</code> | Fades the lights and sky back in when this atmosphere becomes active. |
| <Link id="m-getdotproductbetweensunandmoonvectors" /><code>{"private float GetDotProductBetweenSunAndMoonVectors(Vector3 sunVector)"}</code> |  |
| <Link id="m-getsunrotation" /><code>{"private float GetSunRotation(float dayProgress)"}</code> |  |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-rendermoon" /><code>{"private void RenderMoon(Vector3 position, float scaleMultiplier)"}</code> |  |
| <Link id="m-rendermoononandroid" /><code>{"private void RenderMoonOnAndroid()"}</code> |  |
| <Link id="m-setlightintensity" /><code>{"private void SetLightIntensity(Light light, float intensity)"}</code> |  |
| <Link id="m-setshadersunvector" /><code>{"private void SetShaderSunVector(Vector3 sunVector, float sunUp)"}</code> |  |
| <Link id="m-setupsceneskyboxinbuilds" /><code>{"private void SetupSceneSkyboxInBuilds()"}</code> |  |
| <Link id="m-setupskybox" /><code>{"private void SetupSkybox(Scene currentScene, Scene activatingScene)"}</code> |  |
| <Link id="m-setupskybox-2" /><code>{"private void SetupSkybox()"}</code> |  |
| <Link id="m-setupvariablelerpers" /><code>{"private void SetupVariableLerpers()"}</code> |  |
| <Link id="m-syncfixeddaytime-2" /><code>{"private void SyncFixedDaytime("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-updateambience" /><code>{"private void UpdateAmbience()"}</code> |  |
| <Link id="m-updatelightintensity" /><code>{"private void UpdateLightIntensity(float intensityModifier)"}</code> |  |
| <Link id="m-updaterotation" /><code>{"private void UpdateRotation(float dayProgress, float monthProgress)"}</code> |  |
| <Link id="m-updatesettings" /><code>{"private void UpdateSettings("}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" settings)"}</code> |  |
| <Link id="m-updateskycolorfade" /><code>{"private void UpdateSkyColorFade(float fadeValue)"}</code> |  |

## Used in

Members of other types that take, return or hold a `DayTimeManager`:

[`IndoorAmbienceBoost.dayTimeManager`](/game-api/types/alta-intelligence/indoorambienceboost#m-daytimemanager), [`ForestAmbience.dayTimeManager`](/game-api/types/alta-world/forestambience#m-daytimemanager).
