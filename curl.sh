#!/bin/bash

curl --form sampleFile=@ftp/download/demi.png --form press=OK http://127.0.0.1:4000/upload
