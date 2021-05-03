# Welcome to my Piano Midi Visualizer project!

## Commands

**Start Preview** (as for every Remotion project)

```console
npm start
```

**Render video**
To render a video you must :

-   Put a midi file named `input.mid` at project root
-   ` node src/api/getInfo.js` to get the tracks data if you need them
-   Fill `src/api/input.json` file with the song data to be shown in the video intro
-   Modify your package.json `build` command if you are not on macOS to replace VLC install link
-   `yarn run build`

**Output example**
With this midi file `./example.mid` you will get this video :
[![Youtube thumbnail](https://img.youtube.com/vi/stO7DYwkjE4/0.jpg)](https://www.youtube.com/watch?v=stO7DYwkjE4)

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
