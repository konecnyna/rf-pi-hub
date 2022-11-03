#!/bin/bash
if [ -f /boot/config.txt ]; then
  echo "Running on a raspberry-pi, installing dependencies..."
  apt-get install python3-pip
  pip3 install rpi-rf
  exit 0
fi

echo "You're not running on a pi so skipping the RF setup."
echo "Visit: https://github.com/milaq/rpi-rf"
echo "---------------"
echo "On the pi run:"
echo "# apt-get install python3-pip"
echo "# pip3 install rpi-rf"