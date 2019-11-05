# Reproduction Steps

1. Run the App as usual
2. Observe the console logs as the App is opening from a cold start (or refresh the App when you have it open if you miss it.)
3. When the plugin is initialising, a resume event is fired after.

# Problem Description

When opening the App from cold we are seeing a ready event (as expected) and then the plugin is initialised and a resume event is firing. 

Console log should show:

Plugin configured.. running start function now.
Resumed app
