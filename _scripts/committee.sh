#!/bin/bash

###
# Converts all full size committee images in committee/full/ into smaller
# portraits in committee/mini/.
#
# For full compatibility, we still serve the full images if they're ever
# needed.
#

committee=$1

if [[ -z "$committee" ]]; then
	echo "Missing argument"
	echo "Usage: $0 [BASE CMT IMAGES DIR]"
	exit 1
fi

resolution="250x250"

mkdir -p $committee/mini/
for picture in $committee/full/*; do
	convert $picture -resize $resolution^ -gravity center -crop $resolution+0+0 $committee/mini/`basename $picture`
done

