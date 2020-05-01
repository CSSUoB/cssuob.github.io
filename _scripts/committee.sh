#!/bin/bash

###
# Converts all full size committee images in committee/full/ into smaller
# portraits in committee/mini/.
#
# For full compatibility, we still serve the full images if they're ever
# needed.
#

for committee in assets/committee/*; do
	mkdir -p $committee/mini/
	for picture in $committee/full/*; do
		convert $picture -resize 150x150 $committee/mini/`basename $picture`
	done
done
