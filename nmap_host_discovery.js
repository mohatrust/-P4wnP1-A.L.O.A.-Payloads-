#This option scans all reserved TCP ports on the machine scanme.nmap.org . The -v option enables verbose mode.
#This scripts works on windows 10, windows 11 and later versions too.
Saving scan results in a grepable format
Nmap supports different file formats when saving the results of a scan. Depending on your needs, you may choose between the normal, grepable, and XML format. The grepable format was included to help users extract information from logs without having to write a parser, as this format is meant to be read/parsed with standard Unix tools. Although this feature is deprecated, some people still find it useful for doing quick jobs.

layout(us); 
press("GUI r");
delay(500)
type("cmd");
press("ENTER");
delay(500)
type("nmap -F -oG scanme.grep scanme.nmap.org");
delay(500)
press("ENTER")
delay(2000)         # this depends on how large your network is you can alter the values to suite your network Infrastracture
press("GUI");
delay(500)
type("scanme.grep");
delay(500)
press("ENTER")


