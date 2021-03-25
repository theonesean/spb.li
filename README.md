# spb.li

Sean Bailey's personal homepage. Built with Gatsby.

## TODO

* implement a dynamic text-flow component that takes the homepage text and allocates it into distinct sections in the grid
    * possibly use [react-detectable-overflow](https://github.com/h-kanazawa/react-detectable-overflow)
* mobile version of site
* write build script that autoupdates the video from Mux
    * video is hardcoded right now
    * if headshot has been updated, create new Mux asset from `cdn.spb.li/live-headshot.mp4`
    * get most recent Mux asset
    * get mp4 link
* use Mux's HLS streaming format instead of direct mp4 file