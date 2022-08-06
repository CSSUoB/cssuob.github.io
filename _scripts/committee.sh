#!/bin/bash

###
# Converts all full size committee images in committee/full/ into smaller
# portraits in committee/mini/.
#
# For full compatibility, we still serve the full images if they're ever
# needed.
#

committee=$1
mkdir -p $committee/mini/
for picture in $committee/full/*; do
	convert $picture -resize 150x150^ -gravity center -crop 150x150+0+0 $committee/mini/`basename $picture`
done

