# Custom Video Player

A custom UI wrapper around the native **HTML5 `<video>`** element: play/pause, seek, volume, playback speed, and skip controls.

## Highlights

- **Play / pause** button with icon switching
- **Timeline seek** (drag to jump to any time)
- **Current time display** (auto-updates while playing)
- **Volume slider** + **mute toggle** (click the volume icon)
- **Skip controls**: ±10 seconds
- **Playback speed selector** (`playbackRate`)
- **No frameworks**: plain HTML/CSS/JS

## Project structure

```
09-custom-video-player/
  index.html
  style.css
  script.js
  images/
    *.png *.jpg *.webp
  *.mp4
```

## Live demo

`https://alnvoloha.github.io/web-design/09-custom-video-player/`

## Run locally

1. Open `index.html` in a browser

## Implementation notes

- The timeline input controls `video.currentTime`.
- UI updates are driven by the `timeupdate` event.
- Speed is set via `video.playbackRate`.
