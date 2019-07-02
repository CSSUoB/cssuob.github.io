#!/bin/bash

###
# Converts all full size committee images in committee/full/ into smaller
# portraits in committee/mini/.
#
# For full compatibility, we still serve the full images if they're ever
# needed.
#

mkdir -p assets/committee/mini/
for picture in assets/committee/full/*; do
	convert $picture -resize 120x120 assets/committee/mini/`basename $picture`
done