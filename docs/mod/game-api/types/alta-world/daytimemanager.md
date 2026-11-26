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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`AtmospherePlugin`](/mod/game-api/types/alta-world/atmosphereplugin)
- **Nested types** [`ChangedState`](/mod/game-api/types/alta-world/daytimemanager-changedstate)
- **Attributes** `ExecuteInEditMode`
- **Documented in** [Time and environment](/mod/game-api/world/time-and-environment)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DayTimeManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fullcycle" /><code>{"float fullCycle"}</code> | Editor readout: position in the full day cycle. |
| <Link id="m-halfcycle" /><code>{"float halfCycle"}</code> | Editor readout: position in the sun's half cycle. |
| <Link id="m-quartercycle" /><code>{"float quarterCycle"}</code> | Editor readout: how high the moon is. |

<details>
<summary>59 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidmoondistance" /><code>{"private float androidMoonDistance"}</code> | Distance the Android moon is drawn from the player. |
| <Link id="m-androidmoonmaterial" /><code>{"private Material androidMoonMaterial"}</code> | Material for the Android moon quad. |
| <Link id="m-androidmoonsize" /><code>{"private float androidMoonSize"}</code> | Size of the Android moon quad. |
| <Link id="m-audiosplittowardsday" /><code>{"private AnimationCurve audioSplitTowardsDay"}</code> | Share of ambience volume given to day audio over sun progress; the rest goes to night audio. |
| <Link id="m-btnconvert" /><code>{"private bool btnConvert"}</code> | Editor button field, "Convert Sky Color". |
| <Link id="m-btnstopupdating" /><code>{"private bool btnStopUpdating"}</code> | Editor button field, "Stop Updating". |
| <Link id="m-cloudscoloroverday" /><code>{"private Gradient cloudsColorOverDay"}</code> | Cloud colour over sun progress. |
| <Link id="m-currentambience" /><code>{"private Color currentAmbience"}</code> | Backing field for `CurrentAmbience`. |
| <Link id="m-currentvolumesplit" /><code>{"private float currentVolumeSplit"}</code> | Private: current share of volume for day audio. |
| <Link id="m-debugdayprogress" /><code>{"private float debugDayProgress"}</code> | Editor: day progress used when `useDebugValueAtRuntime` is set. |
| <Link id="m-debugmonthprogress" /><code>{"private float debugMonthProgress"}</code> | Editor: month progress used when `useDebugValueAtRuntime` is set. |
| <Link id="m-dotmoonup" /><code>{"private float dotMoonUp"}</code> | Private: how high the moon is, used for the moon ambience and light curves. |
| <Link id="m-fogandroidmultiplier" /><code>{"private float fogAndroidMultiplier"}</code> | Fog density multiplier on Android. |
| <Link id="m-fogcolorduringday" /><code>{"private Gradient fogColorDuringDay"}</code> | Fog colour over the full day cycle. |
| <Link id="m-fogdensityduringday" /><code>{"private AnimationCurve fogDensityDuringDay"}</code> | Fog density over the full day cycle. |
| <Link id="m-gametimemanager" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/gametimemanager">{"GameTimeManager"}</Link>{" gameTimeManager"}</code> | Source of day progress, month progress and the day to night ratio. |
| <Link id="m-haloinversesizeoverday" /><code>{"private AnimationCurve haloInverseSizeOverDay"}</code> | Sun halo size value over the full cycle, sent to the skybox. |
| <Link id="m-instantiatedandroidmoonmaterial" /><code>{"private Material instantiatedAndroidMoonMaterial"}</code> | Private: editor copy of the Android moon material. |
| <Link id="m-instantiatedskyboxmaterial" /><code>{"private Material instantiatedSkyboxMaterial"}</code> | Private: editor copy of the skybox material. |
| <Link id="m-isrenderinggizmos" /><code>{"private bool isRenderingGizmos"}</code> | Serialized editor flag. Not read in the server build. |
| <Link id="m-isupdatingdaytime" /><code>{"private bool isUpdatingDaytime"}</code> | Private: false when the server's `FixedDaytime` setting is 0 or more, so the sun stays put. |
| <Link id="m-lastdayprogress" /><code>{"private float lastDayProgress"}</code> | Private: full cycle position from the last ambience update, used for fog. |
| <Link id="m-lastfixeddaytime" /><code>{"private float lastFixedDaytime"}</code> | Private: last fixed daytime seen. Starts at -1 and is not updated in this build. |
| <Link id="m-lightintensitymodifier" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/lerpingfloatvalue">{"LerpingFloatValue"}</Link>{" LightIntensityModifier"}</code> | Private: lerps the sun and moon light strength when the plugin is enabled or disabled. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | Private: logger. |
| <Link id="m-moonambience" /><code>{"private Gradient moonAmbience"}</code> | Ambient colour by moon height. |
| <Link id="m-moonfadeintime" /><code>{"private float moonFadeInTime"}</code> | Seconds the moonlight takes to fade in after the sun goes off. Defaults to 30. |
| <Link id="m-moonlerpinmodifier" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/lerpingfloatgetvalue">{"LerpingFloatGetValue"}</Link>{" MoonLerpInModifier"}</code> | Private: fades the moonlight in over `moonFadeInTime` once the sun sets. |
| <Link id="m-moonlight" /><code>{"private Light moonLight"}</code> | The moon's directional light. |
| <Link id="m-moonlightintensitycurve" /><code>{"private AnimationCurve moonLightIntensityCurve"}</code> | Moonlight strength by moon height. |
| <Link id="m-moonmesh" /><code>{"private static Mesh moonMesh"}</code> | Private static: the quad drawn as the Android moon. |
| <Link id="m-moonrotator" /><code>{"private Transform moonRotator"}</code> | Transform turned by month progress to move the moon. |
| <Link id="m-moonspiningaxis" /><code>{"private Vector3 moonSpiningAxis"}</code> | Axis the moon turns around. |
| <Link id="m-moontosundotshift" /><code>{"private float moonToSunDotShift"}</code> | Sun height (negative, below the horizon) where ambience starts blending from moon to sun. |
| <Link id="m-moonvector" /><code>{"private Vector3 moonVector"}</code> | Private: direction to the moon. |
| <Link id="m-nightsource" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/ambienceaudio">{"AmbienceAudio"}</Link>{" nightSource"}</code> | Night ambience audio, mixed against the main source. Destroyed on headless. |
| <Link id="m-nighttimeshift" /><code>{"private float nightTimeShift"}</code> | Serialized value, defaults to -0.004. Not read in this build. |
| <Link id="m-skybotcolor" /><code>{"private Gradient skyBotcolor"}</code> | Bottom sky colour over the full cycle. |
| <Link id="m-skyboxmaterial" /><code>{"private Material skyBoxMaterial"}</code> | The skybox material this manager drives. |
| <Link id="m-skycolorbotbending" /><code>{"private AnimationCurve skyColorBotBending"}</code> | Bottom sky gradient bend over the full cycle. |
| <Link id="m-skycolorfade" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/lerpingfloatvalue">{"LerpingFloatValue"}</Link>{" skyColorFade"}</code> | Private: lerps the sky in and out when the plugin is enabled or disabled. |
| <Link id="m-skycolormidpointposition" /><code>{"private AnimationCurve skyColorMidPointPosition"}</code> | Where the middle sky colour sits over the full cycle. |
| <Link id="m-skycolorrelatedtosun" /><code>{"private Gradient skyColorRelatedToSun"}</code> | Editor reference gradient only. |
| <Link id="m-skycolortopbending" /><code>{"private AnimationCurve skyColorTopBending"}</code> | Top sky gradient bend over the full cycle. |
| <Link id="m-skymidcolor" /><code>{"private Gradient skyMidcolor"}</code> | Middle sky colour over the full cycle. |
| <Link id="m-skytopcolor" /><code>{"private Gradient skyTopcolor"}</code> | Top sky colour over the full cycle. |
| <Link id="m-sunambience" /><code>{"private Gradient sunAmbience"}</code> | Ambient colour over sun progress. |
| <Link id="m-suncolor" /><code>{"private Gradient sunColor"}</code> | Sun disc colour over sun progress, sent to the skybox. |
| <Link id="m-suninversesizeoverday" /><code>{"private AnimationCurve sunInverseSizeOverDay"}</code> | Sun disc size value over sun progress, sent to the skybox. |
| <Link id="m-sunlight" /><code>{"private Light sunLight"}</code> | The sun's directional light. |
| <Link id="m-sunlightduringday" /><code>{"private Gradient sunlightDuringDay"}</code> | Sunlight colour over sun progress. |
| <Link id="m-sunlightintensitycurve" /><code>{"private AnimationCurve sunLightIntensityCurve"}</code> | Sunlight strength over sun progress. |
| <Link id="m-sunprogress" /><code>{"private float sunProgress"}</code> | Private: where the sun is in its half cycle, used by most day curves. |
| <Link id="m-sunrotator" /><code>{"private Transform sunRotator"}</code> | Transform turned by day progress to move the sun. |
| <Link id="m-sunspiningaxis" /><code>{"private Vector3 sunSpiningAxis"}</code> | Axis the sun turns around. |
| <Link id="m-sunupskew" /><code>{"private float sunUpSkew"}</code> | Degrees added so the sun spends longer above the horizon. |
| <Link id="m-syncfixeddaytime" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFixedDaytime"}</code> | Private: message for `SyncFixedDaytime`, sent on the atmosphere manager's entity. |
| <Link id="m-usedebugvalueatruntime" /><code>{"private bool useDebugValueAtRuntime"}</code> | Editor: use the debug day and month progress while playing. |
| <Link id="m-wasenabled" /><code>{"private bool wasEnabled"}</code> | Private: whether the moonlight is on, so its fade in runs once per night. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ambiencevolume" /><code>{"override float AmbienceVolume { get; set; }"}</code> | Total ambience volume, split between day and night sources by time of day. 0 on a headless server. |
| <Link id="m-currentambience-2" /><code>{"override Color CurrentAmbience { get; }"}</code> | The ambient light colour for the current time. |
| <Link id="m-currentfog" /><code>{"override Color CurrentFog { get; }"}</code> | The fog colour for the current time. |
| <Link id="m-currentfogdensity" /><code>{"override float CurrentFogDensity { get; }"}</code> | The fog density for the current time, scaled on Android. |

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidmoonmaterial-2" /><code>{"private Material AndroidMoonMaterial { get; }"}</code> | Private: the Android moon material (a copy in the editor). |
| <Link id="m-skyboxmaterial-2" /><code>{"private Material SkyboxMaterial { get; }"}</code> | Private: the skybox material (a copy in the editor). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | Fades the lights and sky colour out when another atmosphere takes over. |
| <Link id="m-evaluatefogcolor" /><code>{"Color EvaluateFogColor()"}</code> | Fog colour for the last worked out time of day. |
| <Link id="m-evaluatefogdensity" /><code>{"float EvaluateFogDensity()"}</code> | Fog density for the last worked out time of day. |
| <Link id="m-initialize" /><code>{"override void Initialize("}<Link to="/mod/game-api/types/alta-world/atmospheremanager">{"AtmosphereManager"}</Link>{" manager)"}</code> | Reads the server's fixed daytime (below 0 means the normal cycle) and sets the starting sun and moon. |
| <Link id="m-mute" /><code>{"override void Mute(bool isMuted)"}</code> | Mutes or unmutes the night source as well. |
| <Link id="m-onconnect" /><code>{"override void OnConnect("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the fixed daytime state to a joining player. |
| <Link id="m-startaudio" /><code>{"override void StartAudio()"}</code> | Starts the night source as well. |
| <Link id="m-stopaudio" /><code>{"override void StopAudio()"}</code> | Stops the night source as well. |
| <Link id="m-enabled" /><code>{"protected override void Enabled()"}</code> | Fades the lights and sky back in when this atmosphere becomes active. |

<details>
<summary>21 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Turns itself and both lights off on a headless server. Otherwise sets up fog, the skybox, the Android moon mesh and the lerpers. |
| <Link id="m-createmoonmeshifneeded" /><code>{"private void CreateMoonMeshIfNeeded()"}</code> | Private: builds the shared quad mesh used to draw the moon on Android. |
| <Link id="m-disableskycolor" /><code>{"private void DisableSkyColor()"}</code> | Private: once the sky has faded out, clears the skybox on Android or disables it elsewhere. |
| <Link id="m-getdotproductbetweensunandmoonvectors" /><code>{"private float GetDotProductBetweenSunAndMoonVectors(Vector3 sunVector)"}</code> | Private: how closely the sun and moon line up, sharpened for the skybox shader. |
| <Link id="m-getsunrotation" /><code>{"private float GetSunRotation(float dayProgress)"}</code> | Private: sun angle for a day progress, with the day half and night half split by the day to night ratio. |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Private: updates the lerpers, ambience audio split, sun and moon rotation (unless daytime is fixed) and ambience. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Private: unhooks the scene change handler. |
| <Link id="m-rendermoon" /><code>{"private void RenderMoon(Vector3 position, float scaleMultiplier)"}</code> | Private: draws the moon quad at a position and scale. |
| <Link id="m-rendermoononandroid" /><code>{"private void RenderMoonOnAndroid()"}</code> | Private: draws the moon around the player's head on Android, pulled inside the camera's far clip if needed. |
| <Link id="m-setlightintensity" /><code>{"private void SetLightIntensity(Light light, float intensity)"}</code> | Private: sets a light's intensity, or turns it off when 0.01 or less. |
| <Link id="m-setshadersunvector" /><code>{"private void SetShaderSunVector(Vector3 sunVector, float sunUp)"}</code> | Private: sends the sun direction and strength to the skybox shader. |
| <Link id="m-setupsceneskyboxinbuilds" /><code>{"private void SetupSceneSkyboxInBuilds()"}</code> | Private: sets the skybox now, or once this object's scene becomes active. |
| <Link id="m-setupskybox" /><code>{"private void SetupSkybox(Scene currentScene, Scene activatingScene)"}</code> | Private: sets `RenderSettings.skybox` to this manager's material. |
| <Link id="m-setupskybox-2" /><code>{"private void SetupSkybox()"}</code> | Private: sets `RenderSettings.skybox` to this manager's material. |
| <Link id="m-setupvariablelerpers" /><code>{"private void SetupVariableLerpers()"}</code> | Private: creates the light, moon and sky fade lerpers. |
| <Link id="m-syncfixeddaytime-2" /><code>{"private void SyncFixedDaytime("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Private: syncs whether daytime is fixed and its value from the server settings. Clients move the sun to match. |
| <Link id="m-updateambience" /><code>{"private void UpdateAmbience()"}</code> | Private: works out sun progress and moon height, then sets ambient, fog, sky colours and light strength from the curves. |
| <Link id="m-updatelightintensity" /><code>{"private void UpdateLightIntensity(float intensityModifier)"}</code> | Private: sets sun and moon light strength from their curves. The moon only shines when the sun is off. |
| <Link id="m-updaterotation" /><code>{"private void UpdateRotation(float dayProgress, float monthProgress)"}</code> | Private: turns the sun and moon for a day and month progress and updates the skybox vectors. |
| <Link id="m-updatesettings" /><code>{"private void UpdateSettings("}<Link to="/mod/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" settings)"}</code> | Private, server: when the server's `FixedDaytime` setting changes, switches fixed time on or off and syncs it. |
| <Link id="m-updateskycolorfade" /><code>{"private void UpdateSkyColorFade(float fadeValue)"}</code> | Private: sends the sky fade value to the skybox shader. |

</details>

## Used in

Members of other types that take, return or hold a `DayTimeManager`:

[`IndoorAmbienceBoost.dayTimeManager`](/mod/game-api/types/alta-intelligence/indoorambienceboost#m-daytimemanager), [`ForestAmbience.dayTimeManager`](/mod/game-api/types/alta-world/forestambience#m-daytimemanager).
