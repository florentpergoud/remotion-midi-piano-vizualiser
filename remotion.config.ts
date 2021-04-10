import { Config } from 'remotion';

Config.Output.setImageSequence(false);
Config.Output.setOverwriteOutput(true);
Config.Rendering.setConcurrency(4);
/* transparent video
Config.Rendering.setImageFormat('png');
Config.Output.setPixelFormat('yuva420p');
Config.Output.setCodec('vp8');
*/

Config.Output.setCodec('h264');
Config.Output.setCrf(1);
Config.Rendering.setImageFormat('jpeg');
