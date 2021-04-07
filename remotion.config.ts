import { Config } from 'remotion';

Config.Output.setImageSequence(false);
Config.Rendering.setImageFormat('png');
Config.Output.setPixelFormat('yuva420p');
Config.Output.setCodec('vp8');
