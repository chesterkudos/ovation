#!/usr/bin/env bash

RED="\033[1;31m"
GREEN='\033[0;32m'

log() {
  NC='\033[0m'
  LOG_VALUE=$1

  if [[ -z "${2}" ]]; then
    PADDING=false
  else
    PADDING=$2
  fi

  if [[ "$PADDING" = true ]]; then
    printf "${GREEN} ${LOG_VALUE} ${NC}\n\n"
  else
    printf "${GREEN} ${LOG_VALUE} ${NC}\n"
  fi
}

warning() {
  NC='\033[0m'
  LOG_VALUE=$1

  printf "${RED} ${LOG_VALUE} ${NC}\n"
}
