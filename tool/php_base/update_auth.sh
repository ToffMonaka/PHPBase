#!/bin/sh

PUBLIC_HTML_DIR_PATH="../../public_html"
PUBLIC_LIB_DIR_PATH="../../public_lib"
PUBLIC_DAT_DIR_PATH="../../public_dat"

cd `echo "$0" | sed -e s/"$(basename $0)"//`

CMD_DIR_PATH=`pwd`
CMD_NAME=`basename "$0"`

if [ "${#CMD_DIR_PATH}" -gt 1 ];then
	echo "${CMD_DIR_PATH}/${CMD_NAME}"
else
	echo "/${CMD_NAME}"
fi

find "${PUBLIC_HTML_DIR_PATH}/tm_ready" -type d -print | xargs chmod 705
find "${PUBLIC_HTML_DIR_PATH}/tm_ready" -type f -print | xargs chmod 604

find "${PUBLIC_DAT_DIR_PATH}/tm_ready" -type d -print | xargs chmod 705
find "${PUBLIC_DAT_DIR_PATH}/tm_ready" -type f -print | xargs chmod 604

exit 0
